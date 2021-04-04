import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc Fetch all the products
// @route GET /api/products
// @access Public
export const getProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find({});
    res.status(200).json(products)
})


// @desc Fetch a single product
// @route GET /api/products/:id
// @access Public
export const getProductById = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product)
})