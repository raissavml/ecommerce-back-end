import UserSchema from '../models/usersSchema.js'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const login = async (req,res) => {
    try{
        const emailBody =    req.body.email
        const passwordBody = req.body.password

          UserSchema.findOne({email: emailBody}, (err, user) => {
            if(!user) {
                return res.status(401).json({msg: "Email não encontrado"})
            }
             bcrypt.compare(passwordBody, user.password, (err, auth) => {
                if(!auth) {
                    return res.status(401).json({msg: "senha invalida!"})
                } else {
                    const token = jwt.sign({email: user.email}, process.env.SECRET, { expiresIn: '1h' });
                    res.json({msg: "Token gerado", token});
                }
            })
        })
    }catch(err){
        res.json({msg: err.message})
    }
}

const authRoute = async(req,res) => {
    res.status(200).json({msg: "Usuário Autenticado"})
}

export default  {
    login,
    authRoute
}
