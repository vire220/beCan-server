var mongoose = require("mongoose");

var QuestionSchema = new Schema({
    answers: [],
    question: String,
    answer: String
});

module.exports = mongoose.model('Question', QuestionSchema);