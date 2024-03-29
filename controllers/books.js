const Book = require('../models/book')

module.exports = {
    index,
    new: newBook,
    create,
    show,
    edit,
    update,
    delete: deleteBook,
    save
}

async function save(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    req.body.dateAdded = new Date().toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"})
    req.body.pageCount = parseInt(req.body.pageCount)

    try {
        await Book.create(req.body)
    
        res.redirect('/books')
    } catch (err) {
        console.log(err);
        res.render('books/new', ( {title: '', errorMsg: ''}))
    }
}

async function index(req, res) {
    const books = await Book.find({});

    function customSort(a, b) {
        const order = { 'high': 3, 'med': 2, 'low': 1 };
        return order[b.priority] - order[a.priority];
    }
    books.sort(customSort);

    res.render('books/index', { title: 'Your Bookshelf', books })
}

function newBook(req, res) {
    res.render('books/new', { title: 'Go Ahead...', errorMsg: '' })
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    req.body.dateAdded = new Date().toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"})
    req.body.pageCount = parseInt(req.body.pageCount)
    
    try {
        await Book.create(req.body)
        res.redirect('/books')
    } catch (err) {
        console.log(err);
        res.render('books/new', { errorMsg: err.message, title: ' ' })
    }
}

async function show(req, res) {
    const book = await Book.findById(req.params.id);
    
    res.render('books/show', { title: 'Book Details', book })
}

async function edit(req, res) {
    const book = await Book.findById(req.params.id)
    res.render('books/edit', { title: 'Change it up...', book })
}

async function update(req, res) {
    await Book.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/books');
}

async function deleteBook(req, res) {
    await Book.findByIdAndDelete(req.params.id)
    res.redirect('/books')
}