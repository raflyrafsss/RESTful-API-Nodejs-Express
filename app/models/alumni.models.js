const mongoose = require('mongoose');

// Create Schema Alumni
const AlumniSchema = mongoose.Schema({
    name: String,
    majors: String,
});

module.exports = mongoose.model('Alumni', AlumniSchema);