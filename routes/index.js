const express = require('express');
const router = express.Router();
const passport = require('passport');

const ROOT_URL = 'https://www.googleapis.com/books/v1/volumes';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dream Read' });
});

// GET results of search
router.get('/books/list', async function(req, res, next) {
  const bookTitle = req.query.volume
  if (!bookTitle) return res.render('/', { title: 'Dream Read', bookData: null });
  
  const bookData = await fetch(`${ROOT_URL}?q=${bookTitle}`)
    .then(res => res.json())

    console.log(bookData)
  res.render('books/list', { bookData, title: `Results for "${bookTitle}"` })
})

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/books',
    failureRedirect: '/books'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/books');
  });
});

module.exports = router;
