
const Product = require('../models/Product');

exports.getAll = async (req, res) => {
  
    try {
        const products = await Product.find({}).sort("-createdAt").exec();
        res.status(200).json(products);
     
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


exports.getOne = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.find({_id:productId}).exec();
        res.status(200).json(product);
     
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}