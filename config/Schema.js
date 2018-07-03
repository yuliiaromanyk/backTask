const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/julia');

const tdSchm = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    body: String,
    state: Boolean
});


const Notes = mongoose.model('notes', tdSchm);

module.exports = Notes;