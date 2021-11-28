const mongoose = require("mongoose");
const {
  ObjectId
} = mongoose.Schema;
const productSchema = new Schema({
  nom: {
    type: String,
  },
  catégorie: {
    type: String,
  },
  prix: {
    type: String,
  },
  etat: {
    type: String,
  },
  wilaya: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Product= mongoose.model("Product", productSchema);

module.exports = Product;