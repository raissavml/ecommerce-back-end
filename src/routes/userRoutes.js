import controllerUser from '../controllers/usersControllers.js'
import auth from '../middleware/auth.js'
import  express  from 'express'

const router = express.Router()


router.get('/user/:id', controllerUser.getUserbyId)
router.get('/users',    controllerUser.getAllUsers)
router.get('/login',controllerUser.login)
router.get('/rotaAuth', auth, controllerUser.authRoute)
router.post('/create',  controllerUser.postUser)

export default router