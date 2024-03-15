const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books')
const ensureLoggedIn = require('../config/ensureLoggedIn');
const book = require('../models/book');

//everything starts with /books

// Get /books
router.get('/', ensureLoggedIn, booksCtrl.index);

//GET /books/new
router.get('/new', ensureLoggedIn, booksCtrl.new);

//GET /books/:id
router.get('/:id', ensureLoggedIn, booksCtrl.show);

//GET /books/:id/edit
router.get('/:id/edit', ensureLoggedIn, booksCtrl.edit);

//POST /books
router.post('/', ensureLoggedIn, booksCtrl.create);

//PUT /books
router.put('/', ensureLoggedIn, booksCtrl.update)

module.exports = router;