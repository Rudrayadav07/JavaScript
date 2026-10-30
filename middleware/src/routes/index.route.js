const express = require("express")

const router = express.Router();

router.use((req,res,next)=>{
    console.log("middleware route and app");
    next()
})

router.get("/",(req,res)=>{
    res.json({
        message:"Welcome to Middleware"
    })
})

module.exports = router