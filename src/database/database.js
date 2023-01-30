import mongoose from "mongoose";

async function dbConnect() {
    try{
        const dbMongo = await mongoose.connect(process.env.MONGODB_URI)
        mongoose.set('strictQuery',true)
        console.log('banco de dados conectado')
        return dbMongo
    }catch(e) {
        console.log(e)
    }
}

export default dbConnect