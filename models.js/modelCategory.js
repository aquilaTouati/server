const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
},);

module.exports = User = mongoose.model('modelCategory', CategorySchema)