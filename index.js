const express = require("express")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRouter = require("./Routes/User")


const app = express()
dotenv.config()



app.use(express.json())
app.use(helmet())
app.use(morgan())

app.use("/api", userRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`server is listening on ${process.env.PORT}`)
})