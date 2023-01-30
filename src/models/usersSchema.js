import mongoose from 'mongoose';

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
    streetAddress: {
        type: String,
        required: true,
    },
    numberAddress: {
        type: String,
        required: true,
    },
    neighborhoodAddress: {
        type: String,
        required: true,
    },
    cityAddress: {
        type: String,
        required: true,
    },
    stateAddress: {
        type: String,
        required: true,
    },
    cepAddrees: {
        type: String,
        required: true,
    }
},
{ timestamps: true }
);

export default mongoose.model('user', userSchema)