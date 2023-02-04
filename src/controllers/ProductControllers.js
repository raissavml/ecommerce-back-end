import UserSchema from '../models/productSchema.js'

const postProduct = async (req,res) => {
    try{
        const newProduct = new UserSchema(req.body)
        const saveProduct = await newProduct.save()
        res.status(201).json({msg: saveProduct})
    }catch(e) {
       return res.status(400).json({msg: e.message})
    }
}

const getProductbyId = async (req,res) => {
    try {
        const { id } = req.params
        const productById = await UserSchema.findById({_id: id})
        res.status(200)
        return res.json(productById)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

const getProductbySize = async (req,res) => {
    try{
        const {size} = req.query.size
        const products = await UserSchema.find({size})
        return res.status(200).json(products)
   }catch(e) {
        return res.status(400).json({msg: e.message})
   }
}

const getProductbyColor = async (req,res) => {
    try{
        const {color} = req.query.color
        const products = await UserSchema.find({color})
        return res.status(200).json(products)
   }catch(e) {
        return res.status(404).json({msg: e.message})
   }
}

const getProductbyPrice = async (req,res) => {
    try{
        const {price} = req.query.price
        const products = await UserSchema.find({price})
        return res.status(200).json(products)
   }catch(e) {
        return res.status(404).json({msg: e.message})
   }
}

const getAllProducts = async (req,res) => {
   try{
        const products = await UserSchema.find()
        return res.status(200).json(products)
   }catch(e) {
        return res.status(404).json({msg: e.message})
   }
}


const updateProductByID = async (req,res) => {
    try{
        const { id } = req.params
        const updateProduct = await UserSchema.findByIdAndUpdate({_id: id}, req.body)
        return res.status(200).json({msg: `Product updated`, data: {
            updateProduct
        }})
    }catch(e) {
       return res.status(400).json({msg: e.message})
    }
}


const deleteProductById = async (req,res) => {
    try{
        await UserSchema.findByIdAndDelete(req.params.id)

        res.status(200).json({msg: `Product deleted`})
    }catch(e) {
       return res.status(400).json({msg: e.message})
    }
}

export default {
    postProduct,
    getProductbyId,
    getProductbySize,
    getProductbyColor,
    getProductbyPrice,
    getAllProducts,
    updateProductByID,
    deleteProductById,
}