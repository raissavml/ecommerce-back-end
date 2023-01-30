import UserSchema from '../models/usersSchema.js'


const postUser = async (req,res) => {
    try{
        const newUser = new UserSchema(req.body)
        const saveUser = await newUser.save()
        res.status(201).json({msg: saveUser})
    }catch(e) {
        res.status(400).json({msg: e.message})
    }
}

const getUserbyId = (req,res) => {

}

const getAllUsers = async (req,res) => {
    const users = await UserSchema.find()
    return res.status(200).json(users)
}


const updateUserByID = (req,res) => {

}

const deleteUserById = (req,res) => {

}

export default {
    postUser,
    getUserbyId,
    getAllUsers,
    updateUserByID,
    deleteUserById
}