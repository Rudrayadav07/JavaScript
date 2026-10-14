const { log } = require("console");
const express = require("express")

const app = express();

app.use(express.json())

let notes = []

app.post("/notes",(req,res)=>{
        notes.push(req.body)
    res.json({
        message:"notes added successfully",
        notes:notes
    })
})

app.get("/notes",(req,res)=>{
        res.json({
            notes:notes
        })
       
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})