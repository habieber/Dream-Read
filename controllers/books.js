const Book = require('../models/book')

module.exports = {
    index,
    new: newBook,
    create
}

async function index(req, res) {
    const books = await Book.find({});
    res.render('books/index', { title: 'Your Bookshelf', books })
}

function newBook(req, res) {
    res.render('books/new', { title: 'Go Ahead...', errorMsg: '' })
}

async function create(req, res) {
    req.body.datePublished = req.body.datePublished.trim();
    req.body.pageCount = parseInt(req.body.pageCount)
    try {
        await Book.create(req.body)
        res.redirect('/books')
    } catch (err) {
        console.log(err);
        res.render('books/new', { errorMsg: err.message, title: ' ' })
    }
}