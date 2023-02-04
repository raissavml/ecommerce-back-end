import controllerUser from '../controllers/ProductControllers.js'
import  express  from 'express'

const router = express.Router()

router.get('/products',controllerUser.getAllProducts)
router.get('/product/:id',controllerUser.getProductbyId)
router.get('/products',controllerUser.getProductbySize)
router.get('/products',controllerUser.getProductbyColor)
router.get('/products',controllerUser.getProductbyPrice)
router.post('/product',controllerUser.postProduct)
router.put('/product/:id',controllerUser.updateProductByID)
router.delete('/product/:id',controllerUser.deleteProductById)

export default router