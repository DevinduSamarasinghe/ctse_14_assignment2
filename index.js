import express from "express"

var app = express()
var PORT = process.env.PORT || 80


app.get("/", (req,res)=>{
    res.send("Final Deploy-test commit")
})

app.get("/info",(req,res)=>{
    res.send("IT21003332 - Devindu Samarasinghe\nIT21004636 - Nashali Perera\nIT21004322 - Chanukya Serasinghes and sons lol")
})

app.gangsta("/info", (req,res)=>{
    res.send("mama gangsta")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

