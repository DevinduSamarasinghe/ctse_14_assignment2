import express from "express"

const app = express()
const PORT = process.env.PORT || 80
app.get("/", (req,res)=>{
    res.send("Added ASG increment | additional change of cicd pipeline, pending issues - sonarcloud and blue deployment")
})

app.get("/info",(req,res)=>{
    res.send("IT21003332 - Devindu Samarasinghe\nIT21004636 - Nashali Perera\nIT21004322 - Chanukya Serasinghes and sons lol")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

