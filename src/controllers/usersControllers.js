import UserSchema from '../models/usersSchema.js'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const postUser = async (req,res) => {
    try{
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
        res.status(400).json({msg: e.message})
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
        const updateUser = await UserSchema.findByIdAndUpdate (req.params.id)
        return res.status (200).json({
            updateUser,
        })
    }catch(e) {
       return res.status(400).json({msg: e.message})
    }
}

const deleteUserById = async (req,res) => {
    try{
        await UserSchema.findByIdAndDelete(req.params.id)

        res.status(200).json({msg: `User deleted`})
    }catch(e) {
       return res.status(400).json({msg: e.message})
    }
}

const login = async (req,res) => {
   const { email, password, id } = req.body

    const emailUser = UserSchema.find({email})
    const passwordUser = UserSchema.find({password})

   if(!emailUser) {
        return res.status(400).send({
            message: 'Email or password is invidalid'
        })
   }

   const passwordIsValid = bcrypt.compare(password, passwordUser)

   if(!passwordIsValid){
    return res.status(400).send({
        message: "email or password is invalid"
    })
   }
   const token = jwt.sign({_id: id}, process.env.SECRET, {
    expiresIn: 54443332
   })
   res.send({token})
}

const authRoute = async(req,res) => {
    res.json({msg: "Rota autenticada"})
}

export default {
    postUser,
    getUserbyId,
    getAllUsers,
    updateUserByID,
    deleteUserById,
    login,
    authRoute
}