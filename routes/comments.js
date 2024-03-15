const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /books/:id/comments
router.post('/books/:id/comments', ensureLoggedIn, commentsCtrl.create);

module.exports = router;