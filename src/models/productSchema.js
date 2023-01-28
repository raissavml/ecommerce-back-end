const { default: mongoose } = require('mongoose');

const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    product:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    imageAdress: {
        type: String,
        required: true,
    }
},
{ timestamps: true }
);

module.exports = mongoose.model('product', productSchema);