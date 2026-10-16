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


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});