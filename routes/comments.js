const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /books/:id/comments
router.post('/books/:id/comments', ensureLoggedIn, commentsCtrl.create);

//DELETE /comments/:id
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);

//GET /comments/:id/edit
router.get('/comments/:id/edit', ensureLoggedIn, commentsCtrl.edit);

//PUT /book/:id
router.put('/book/:id', ensureLoggedIn, commentsCtrl.update);

module.exports = router;