const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/julia');
const Schema = mongoose.Schema; 

const tdSchm = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    body: String,
    state: Boolean
});


const Notes = mongoose.model('Notes', tdSchm);

module.exports = Notes;