const express = require("express")

const app = express()

app.use(express.json())

let notes = []
app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.json({
        message:"Notes created",
        notes:notes
    })
})
app.get("/notes",(req,res)=>{
        res.json({
            notes:notes
        })
})
app.delete("/notes/:id",(req,res)=>{
    const id = req.params.id
    delete notes[id]
    res.json({
        message:"note deleted successfully"
    })
})

app.patch("/notes/:id",(req,res)=>{
    const id = req.params.id
    const {title} = req.body

    notes[id].title = title 

    res.json({
        message:"note title updated successfully"
    })
})

app.listen(3000,()=>{
    console.log("server is listining on port 3000");
    
})