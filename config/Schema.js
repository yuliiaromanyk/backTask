const mongoose = require('mongoose');
const db       = require('./config/database');
mongoose.connect('mongodb://localhost/julia');


const tdSchm = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    body: String,
    state: Boolean
});


const Notes = mongoose.model('notes', tdSchm);



module.exports = Notes;