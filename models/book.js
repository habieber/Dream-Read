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
    datePublished: Date,
    pageCount: Number,
    dateAdded: { type: Date, default: new Date() },
    priority: { 
        type: String, 
        default: 'low',
        enum: ['low', 'med', 'high']
    },
    comments: [commentSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
},
{
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);