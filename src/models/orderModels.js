const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    id: Number,
    createDate: String,
    status: String,
    client: String,
    shippingAddress: String,
    shippingPromise: String,
    items: [
      {
        id: Number,
        title: String,
        description: String,
        url: String,
        price: String,
        quantity: Number
      }
    ]
  });

  module.exports = mongoose.model('Order', orderSchema);