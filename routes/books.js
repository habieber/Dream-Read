const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books')
const ensureLoggedIn = require('../config/ensureLoggedIn');

//everything starts with /books

// Get /books
router.get('/', ensureLoggedIn, booksCtrl.index);

//GET /books/new
router.get('/new', ensureLoggedIn, booksCtrl.new);

//GET /books/:id
router.get('/:id', ensureLoggedIn, booksCtrl.show);

//POST /books
router.post('/', ensureLoggedIn, booksCtrl.create);


module.exports = router;
