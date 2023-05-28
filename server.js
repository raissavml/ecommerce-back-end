import app from './src/app.js'
import * as dotenv from 'dotenv'
import dbConnect from './src/database/database.js'
import routesUsers  from './src/routes/userRoutes.js'
import routesProducts  from './src/routes/productsRoutes.js'

dotenv.config()
dbConnect()

app.use(routesUsers)
app.use(routesProducts)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Servidor escutando a porta " + PORT)
})



