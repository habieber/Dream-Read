const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    datePublished: {
        type: String,
        max: new Date().getFullYear()
    },
    pageCount: Number,
    dateAdded: { 
        type: Date, 
        default: new Date().toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"}) 
    },
    priority: { 
        type: String, 
        default: 'low',
        enum: ['low', 'med', 'high'],
        required: true
    },
    comments: [commentSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String,
    coverPhoto: {
        type: String,
        default: 'https://books.google.com/books/content?id=pXNEMQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);