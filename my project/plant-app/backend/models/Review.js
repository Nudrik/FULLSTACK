const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    plantId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Plant'
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
    },
    reviewDate: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
