const express = require('express');
const router = express.Router();

const Book = require('../models/book')

router.get('/books', (req, res) => {
  Book.find()
    .then(allTheBooksFromDB => {
      console.log('Retrieved books from DB:', allTheBooksFromDB)
      res.render('my-books', { allBooks: allTheBooksFromDB })
    })
});


router.get('/books/:theID', (req, res) => {

  req.params.theID // ==> 61052265119dbf8593258766

  Book.findById(req.params.theID)
    .then(oneBook => {
      console.log('Retrieved book from DB:', oneBook)
      res.render('book-detail', { oneBook: oneBook })
    })
});

module.exports = router;
