const Product = require("../models/Product");

// Create Product

const createProduct = async (req, res) => {

    try {

        const product = await Product.create(req.body);

        res.status(201).json(product);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }

};

// Get All Products

const getProducts = async (req, res) => {

    const products = await Product.find();

    res.json(products);

};

// Get Product By ID

const getProductById = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Product Not Found"
            });

        }

        res.json(product);

    } catch {

        res.status(400).json({
            message: "Invalid Product ID"
        });

    }

};

// Update Product

const updateProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        if (!product) {

            return res.status(404).json({
                message: "Product Not Found"
            });

        }

        res.json(product);

    } catch {

        res.status(400).json({
            message: "Invalid Product ID"
        });

    }

};

// Delete Product

const deleteProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Product Not Found"
            });

        }

        res.json({
            message: "Product Deleted Successfully"
        });

    } catch {

        res.status(400).json({
            message: "Invalid Product ID"
        });

    }

};

module.exports = {

    createProduct,

    getProducts,

    getProductById,

    updateProduct,

    deleteProduct

};