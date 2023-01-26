import controllerUser from '../controllers/usersControllers.js'
import  express  from 'express'

const router = express.Router()


router.get('user/:id', controllerUser.getUserbyId)