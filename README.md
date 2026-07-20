# Product Inventory API

## Overview

This project is a RESTful Product Inventory API built using Node.js, Express.js, MongoDB, and Mongoose. It allows users to perform CRUD (Create, Read, Update, Delete) operations on products stored in a MongoDB database.

The project demonstrates how to connect a Node.js application to MongoDB using Mongoose and how to manage data through REST APIs.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- MongoDB Compass
- Mongoose
- Postman

---

## Project Structure

```
product-api
│
├── config
│   └── db.js
│
├── controllers
│   └── productController.js
│
├── models
│   └── Product.js
│
├── routes
│   └── ProductRoutes.js
│
├── app.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## Features

- Connects Node.js with MongoDB using Mongoose
- Creates a Product Schema and Model
- Add a new product
- Retrieve all products
- Retrieve a product by its ID
- Update product details
- Delete a product
- Input validation using Mongoose
- Error handling for invalid product IDs
- Error handling for missing required fields
- Data persists even after restarting the server

---

## Product Schema

Each product contains the following fields:

| Field | Type |
|--------|------|
| name | String |
| category | String |
| price | Number |
| stock | Number |
| brand | String |

All fields are required.

---

## Installation

### Clone the repository

```bash
git clone https://github.com/Avishaaaaa/mongodb-crud-day27.git
```

### Open the project

```bash
cd mongodb-crud-day27
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
npm run dev
```

or

```bash
node app.js
```

---

## MongoDB Connection

This project connects to a local MongoDB server using Mongoose.

Database Name:

```
product_inventory
```

Connection URL:

```
mongodb://127.0.0.1:27017/product_inventory
```

---

## API Endpoints

### Create Product

**POST**

```
/products
```

Example Request

```json
{
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 799,
    "stock": 50,
    "brand": "Logitech"
}
```

---

### Get All Products

**GET**

```
/products
```

---

### Get Product By ID

**GET**

```
/products/:id
```

---

### Update Product

**PUT**

```
/products/:id
```

Example Request

```json
{
    "price": 999,
    "stock": 70
}
```

---

### Delete Product

**DELETE**

```
/products/:id
```

---

## Testing

The API was tested using Postman.

Test cases include:

- Create Product
- Get All Products
- Get Product by ID
- Update Product
- Delete Product
- Invalid Product ID
- Missing Required Fields

---

## Database Verification

MongoDB Compass was used to verify that:

- Products are stored inside the `product_inventory` database.
- Documents are created in the `products` collection.
- Data remains available after restarting the server.

---

## Learning Outcomes

Through this project, I learned:

- How MongoDB stores data as documents.
- How to connect Node.js with MongoDB using Mongoose.
- How to create Schemas and Models.
- How to perform CRUD operations using Mongoose.
- How to test REST APIs using Postman.
- How to verify stored data using MongoDB Compass.
- The difference between temporary JavaScript arrays and permanent MongoDB storage.

---

## Author

**Avisha Aswal**
