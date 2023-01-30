import controllerUser from '../controllers/usersControllers.js'
import  express  from 'express'

const router = express.Router()


router.get('/user/:id', controllerUser.getUserbyId)
router.get('/users', controllerUser.getAllUsers)
router.post('/create', controllerUser.postUser)

export default router