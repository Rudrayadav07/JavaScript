const express = require("express")
const router = require("./routes/index.route")

const app = express()


app.use((req,res,next)=>{
    console.log("middleware");
    next()
})


app.use("/",router)

module.exports = app