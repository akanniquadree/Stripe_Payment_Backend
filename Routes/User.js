const express = require("express")
require("dotenv").config()

const stripe = require("stripe")(process.env.SECRET_KEY)

const userRouter = express.Router()

const storeItems = new Map([
    ["Basic",{name: "Basic", amount: 9990 }],
    ["Standard",{name: "Standard", amount:1549 }],
    ["Premuim",{ name: "Premuim", amount: 2030 }]
    // ["mysQuXqVUG6yJ7qekAax",{name: "Basic", amount: 9990 }],
    // ["dL5e0aZAN2y9q0TLQq4b",{name: "Standard", amount:1549 }],
    // ["Vz0ZWl6GjahY7eQwwgY4",{ name: "Premuim", amount: 2030 }]
])

//Update User
userRouter.post("/payment-checkout-session", async(req, res)=>{
    try {
        const storeItem = storeItems.get(req.body.id)
       const session =  await stripe.checkout.sessions.create({
            payment_method_types : ['card'],
            line_items:[{
                price_data : {
                        currency: 'usd',
                        product_data:{
                            name: storeItem.name,
                        },
                        unit_amount: storeItem.amount
                },
                quantity: 1
            }],
            // line_items:req.body.map(item=>{
            //     const storeItem = storeItems.get(item.id)
            //     return{
            //         price_data : {
            //             currency: 'usd',
            //             product_data:{
            //                 name: storeItem.name,
            //             },
            //             unit_amount: storeItem.amount
            //         },
            //             quantity: 1
            //     }
            // }),
            mode: 'payment',
            success_url:"https://httpneflixclone2://neflixclone2.com/success",
            cancel_url:"https://neflixclone2://neflixclone2.com/failure"
        })
       return res.status(200).json({url:session.url})
    } catch (error) {
      return res.status(500).json({error: error.message})  
    }
})


module.exports = userRouter