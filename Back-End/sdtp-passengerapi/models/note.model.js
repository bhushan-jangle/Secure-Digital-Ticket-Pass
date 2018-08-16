var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    fullName: String,
    source: String,
    destination: String,
    dateOfJourney: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
