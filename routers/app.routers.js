const express = require("express")
const productsRoutes = require("./products/products.router")
const router = express.Router();



// Middlewares
router.use("/products", productsRoutes)

// Routes
    


module.exports = router;
