const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books')

//everything starts with /books

// Get /books
router.get('/', booksCtrl.index);

//GET /books/new
router.get('/new', booksCtrl.new);

//POST /books
router.post('/', booksCtrl.create)


module.exports = router;
