const express = require("express");

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use(productRoutes);

app.listen(3000, () => {

    console.log("Server Running On Port 3000");

});