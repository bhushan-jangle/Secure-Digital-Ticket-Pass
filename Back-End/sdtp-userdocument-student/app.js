    var express = require('express');
    var app = express();
    var logger = require('morgan');
    var bodyParser = require('body-parser');
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://documents:documents@ds213259.mlab.com:13259/studentpdetail');
    var conn = mongoose.connection;
    var multer = require('multer');
    var GridFsStorage = require('multer-gridfs-storage');
    var Grid = require('gridfs-stream');
    Grid.mongo = mongoose.mongo;
    var gfs = Grid(conn.db);

    /** Seting up server to accept cross-origin browser requests */
    app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
    });

    app.use(bodyParser.json());

    /** Setting up storage using multer-gridfs-storage */
    var storage = GridFsStorage({
        gfs : gfs,

        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        },
        /** With gridfs we can store aditional meta-data along with the file */
        metadata: function(req, file, cb) {
            cb(null, { originalname: file.originalname });
        },
        root: 'studentdocuments' //root name for collection to store files into
    });


    var upload = multer({ //multer settings for single upload
        storage: storage
    }).array('file',4);


    app.post('/file', function(req, res) {
      upload(req,res,function(err){
        if(err){
          res.json({error_code:1,err_desc:err});
          return;
        }
        const ws = gfs.createWriteStream({

          /*eslint camelcase: 0*/
          content_type: req.query.type,
          filename: req.files[0].filename,
          metadata: req.query.metadata
        })

        ws.on('close', file => res.status(200).json(file))
        ws.on('error', () => res.sendStatus(422))
        req.pipe(ws)
      });

    });



    app.get('/file/:filename', function(req, res){
        gfs.collection('studentdocuments'); //set collection name to lookup into

        /** First check if file exists */
       gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
            if(!files || files.length === 0){
                return res.status(404).json({
                    responseCode: 1,
                    responseMessage: "error"
                });
            }
            /** create read stream */
            var readstream = gfs.createReadStream({
                filename: files[0].filename,
                root: "studentdocuments"
            });
            /** set the proper content type */
            res.set('Content-Type', files[0].contentType)
            /** return response */
            return readstream.pipe(res);
        });
    });

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));



    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: err
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });

    module.exports = app;
