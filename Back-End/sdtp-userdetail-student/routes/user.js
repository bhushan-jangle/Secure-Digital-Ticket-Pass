var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  fullName: {
        type: String,
        trim: true,
        default: '',
        required: true
    },
  collegeName: {
        type: String,
        trim: true,
        default: '',
        required:true
    },
  email: {
        type: String,
        trim: true,
        default: '',

        required: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
  dateOfBirth: {
        type: String,
        required: true
    },

  gender: {
           type: String,
           required: true
    },
  mobileNo: {
        type: Number,
        trim: true,
        default: '',

        required: true

    },
    passType: {
          type: String,
          trim: true,
          default: '',
          required: true
      },

    address: {
          type: String,
          trim: true,
          default: '',
          required: true
      },
    startDate: {
          type: String,
          required: true
      },
    dueDate: {
          type: String,
          required: true
      }


});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
