const { default: mongoose } = require('mongoose');

const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    streetAdress: {
        type: String,
        required: true,
    },
    numberAdress: {
        type: String,
        required: true,
    },
    neighborhoodAdress: {
        type: String,
        required: true,
    },
    cityAdress: {
        type: String,
        required: true,
    },
    stateAdress: {
        type: String,
        required: true,
    },
    cepAdrees: {
        type: String,
        required: true,
    }
},
{ timestamps: true }
);

module.exports = mongoose.model('user', userSchema);