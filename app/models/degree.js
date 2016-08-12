var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var degreeSchema   = new Schema({
    temperature: String
});

module.exports = mongoose.model('Degree', degreeSchema);