import UserSchema from '../models/usersSchema.js'
import bcrypt from "bcrypt"

const postUser = async (req,res) => {
    try{
        const user = req.body
        const hash = bcrypt.hashSync(user.password, 10)
        user.password = hash
        const newUser = new UserSchema(req.body)
        const saveUser = await newUser.save()
        res.status(201).json({msg: saveUser})
    }catch(e) {
       return res.status(400).json({msg: e.message})
    }
}

const getUserbyId = async (req,res) => {
    try {
        const { id } = req.params
        const userById = await UserSchema.findById({_id: id})
        res.status(200)
        return res.json(userById)
    } catch(e) {
        res.status(404).json({msg: e.message})
    }
}

const getAllUsers = async (req,res) => {
   try{
        const users = await UserSchema.find()
        return res.status(200).json(users)
   }catch(e) {
        return res.status(404).json({msg: e.message})
   }
}

const updateUserByID = async (req,res) => {
    try{
        const { id } = req.params
        await UserSchema.findByIdAndUpdate({_id: id}, req.body)
        const users = await UserSchema.find()
        return res.status(200).json({msg: "usuário atualizado com sucesso!", data: {
            users
        }})
    }catch(e) {
       return res.status(404).json({msg: e.message})
    }
}

const deleteUserById = async (req,res) => {
    try{
        await UserSchema.findByIdAndDelete(req.params.id)

        res.status(200).json({msg: `Usuário Deletado!`})
    }catch(e) {
       return res.status(404).json({msg: e.message})
    }
}



export default {
    postUser,
    getUserbyId,
    getAllUsers,
    updateUserByID,
    deleteUserById,
}
