const Book = require('../models/book');

module.exports = {
  create,
  delete: deleteComment
};

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    const book = await Book.findById(req.params.id);
    console.log(book)
    console.log(req.body)
    book.comments.push(req.body);
    try {
    await book.save();
    } catch (err) {
    console.log(err);
    }

    res.redirect(`/books/${book._id}`);
}

async function deleteComment(req, res) {
    const book = await Book.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id });
    if (!book) return res.redirect('/books');
    book.comments.remove(req.params.id);
    await book.save();
    res.redirect(`/books/${book._id}`);
}   