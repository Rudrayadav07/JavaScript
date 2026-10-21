const express = require("express")
const ConnectToDb = require("./src/db/db")
const app = express()
// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "1.1.1.1"]);
const noteModel = require("./src/models/note.model")
ConnectToDb()

app.use(express.json())

let notes = []
app.post("/notes",(req,res)=>{
    const {title,content} = req.body
 noteModel.create({
    title,content
 })
    res.json({
        message:"Notes created successfully",
      })
})
app.get("/notes",async(req,res)=>{
    
   await noteModel.find()
        res.json({
            message:"notes feteched successfully",
            notes:notes
        })
})
app.delete("/notes/:id",async(req,res)=>{
    const id = req.params.id
    delete notes[id]

  await  noteModel.findOneAndDelete({
        _id:id,
 })
    res.json({
        message:"note deleted successfully"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id
    const {title} = req.body

    notes[id].title = title 
     await noteModel.findByIdAndDelete({
        _id :id

    },{
        title:title
    })
    res.json({
        message:"note title updated successfully"
    })
})

app.listen(3000,()=>{
    console.log("server is listining on port 3000");
    
})