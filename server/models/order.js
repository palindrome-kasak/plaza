const mongoose = require("mongoose")
const Product = require("./product")
const User = require("./user")


const ProductCartSchema = new mongoose.Schema({
    product:{type:mongoose.Schema.Types.ObjectId,
    ref:'Product'
},
    name:String,
    count:Number,
    price:Number
})

const OrderSchema = new mongoose.Schema({
    products:[ProductCartSchema],
    transaction_id:String,
    amount:Number,
    address:String,
    status:{
        type:String,
        Default:"Recieved",
        enum:["Recieved", "Processing", "Shipped", "Delivered", "Cancelled"]
    },
    updated:Date,
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
}, { timestamps: true })


const ProductCart = mongoose.model("ProductCart", ProductCartSchema);
const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order, ProductCart}
