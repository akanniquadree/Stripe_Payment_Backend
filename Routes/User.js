const express = require("express")
require("dotenv").config()

const stripe = require("stripe")(process.env.SECRET_KEY)

const userRouter = express.Router()

const storeItems = new Map([
    ["mysQuXqVUG6yJ7qekAax", {id:"mysQuXqVUG6yJ7qekAax",name: "Basic", amount: 9.99 }],
    [1, {id:"dL5e0aZAN2y9q0TLQq4b",name: "Standard", amount:15.49 }],
    ["Vz0ZWl6GjahY7eQwwgY4", {name: "Premuim", amount: 20.3 }]
])

//Update User
userRouter.put("/payment-checkout-session", (req, res)=>{

})


module.exports = userRouter