import controllerUser from '../controllers/usersControllers.js'
import AuthController from '../controllers/AuthController.js'
import auth from '../middleware/auth.js'
import  express  from 'express'

const router = express.Router()

router.get('/users',controllerUser.getAllUsers)
router.get('/user/:id',controllerUser.getUserbyId)
router.post('/user',controllerUser.postUser)
router.put('/user/:id',controllerUser.updateUserByID)
router.delete('/user/:id',controllerUser.deleteUserById)


router.post('/login',AuthController.login)
router.get('/login', auth, AuthController.authRoute)

export default router