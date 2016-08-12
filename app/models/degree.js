var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var degreeSchema   = new Schema({
    temperature: String,
    humidity: String,
    stateFridge: String,
    date: Date
});

module.exports = mongoose.model('Degree', degreeSchema);