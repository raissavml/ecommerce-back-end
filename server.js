import app from './src/app.js'
import * as dotenv from 'dotenv'
dotenv.config()
import dbConnect from './src/database/database.js'
import routes  from './src/routes/userRoutes.js'
dbConnect()

app.use(routes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Servidor escutando a porta " + PORT)
})



