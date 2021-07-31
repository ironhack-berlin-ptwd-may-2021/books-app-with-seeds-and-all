const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    author: String,
    rating: Number
  }
);

module.exports = model('Book', bookSchema);