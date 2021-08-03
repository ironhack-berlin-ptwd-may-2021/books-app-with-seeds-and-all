const express = require('express');
const router = express.Router();

const Book = require('../models/book')


// GET /books
router.get('/', (req, res) => {
  Book.find()
    .then(allTheBooksFromDB => {
      console.log('Retrieved books from DB:', allTheBooksFromDB)
      res.render('my-books', { allBooks: allTheBooksFromDB })
    })
});

// GET /books/create
router.get('/createform', (req, res) => {
  res.render('create-form')
})

// POST /books/create
router.post('/addbook', (req, res) => {
  console.log(req.body)
  Book.create({ title: req.body.booktitle, description: req.body.description, author: req.body.author, rating: req.body.rating }).then(() => {
    res.redirect('/books')
  })

})


// GET /books/create
router.get('/:theID/editform', (req, res) => {

  Book.findById(req.params.theID)
    .then(oneBook => {
      res.render('edit-form', { oneBook: oneBook })
    })

})

// POST /books/editbook
router.post('/:theID/editbook', (req, res) => {
  console.log(req.body)
  Book.findByIdAndUpdate(req.params.theID, { title: req.body.booktitle, description: req.body.description, author: req.body.author, rating: req.body.rating }).then(() => {
    res.redirect('/books')
  })

})

// GET /books/:theID
router.get('/:theID', (req, res) => {

  // req.params.theID // ==> 61052265119dbf8593258766

  Book.findById(req.params.theID)
    .then(oneBook => {
      console.log('Retrieved book from DB:', oneBook)
      res.render('book-detail', { oneBook: oneBook })
    })
});



module.exports = router;
