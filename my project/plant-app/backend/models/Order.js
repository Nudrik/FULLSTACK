const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    items: [{
        plantId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Plant'
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    orderDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'canceled'],
        default: 'pending'
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
