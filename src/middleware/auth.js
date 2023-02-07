import jwt from 'jsonwebtoken'

const JwtMiddleware = (req,res,next) => {
   try{
    const SECRET = process.env.SECRET

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token,SECRET);
    req.userData = decoded;
    next();

   } catch(err) {
    return res.status(401).json({
        msg: 'Erro na Autenticação'
    })
   }
}


export default JwtMiddleware
