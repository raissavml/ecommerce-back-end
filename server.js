import app from './src/app.js'
import * as dotenv from 'dotenv'
dotenv.config()
import dbConnect from './src/database/database.js'
dbConnect()



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Servidor escutando a porta " + PORT)
})



