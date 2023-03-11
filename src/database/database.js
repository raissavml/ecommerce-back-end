import mongoose from "mongoose";

async function dbConnect() {
    try{
        mongoose.set('strictQuery',true)
        const dbMongo = await mongoose.connect(process.env.MONGODB_URI)
        console.log('banco de dados conectado')
        return dbMongo
    }catch(e) {
        console.log(e)
    }
}

export default dbConnect