var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BookSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    },

    imageLink: {
        type: String,
        required: true
    }
    
});
var Book = mongoose.model("Book", BookSchema);
module.exports = Book;