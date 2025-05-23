const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
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
            required: true,
            default: 1
        }
    }]
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
