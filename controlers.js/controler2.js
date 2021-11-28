const token = require("jsonwebtoken");
const Product = require("../models.js/model2");
const bcrypt= require ("bcrypt")

const products = [
  {
    id: 1,
    nom: "matériel",
    catégorie: "médical",
    prix: "1200DA",
    etat: "neuf",
    wilaya:"alger",
    description:"matériel médical"
  },
  
];


const createProducts = async (req, res) => {
  const product = req.body;
  console.log("data =", product);
  product.id = products.length + 1;
 products.push(product);
  const newProduct = new Product({
    ...req.body  
  });
  await newProduct.save();

  res.status(200).send({
    message: "Product created successfully",
    data: product,
  });
};

const getProduct = async (req, res) => {
  const products = await Product.find({})  
  res.status(200).send({
    message: "Found successfully",
    data: products
  });
};

const getProductById = (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id == id);
  if (!product) {
    return res.status(404).send({
      message: "Product not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Found successfully",
    data: product,
  });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  const productsIndex = products.findIndex((product) => product.id == id);

  if (productsIndex < 0) {
    return res.status(404).send({
      message: "Product not found",
      data: {},
    });
  }
  products.splice(productsIndex, 1);
  res.status(200).send({
    message: "Deleted successfully",
    data: {},
  });
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const product= req.body;
  const index = products.findIndex((product) => product.id == id);
  if (index < 0) {
    return res.status(404).send({
      message: "Product not found",
      data: {},
    });
  }
  products[index] = {
    id: id,
    ...product,
  };
  res.status(200).send({
    message: "Product updated successfully",
    data: products[index],
  });
};

module.exports = {
  getProduct,
  getProductById,
  createProducts,
  updateProduct,
  deleteProduct,
};