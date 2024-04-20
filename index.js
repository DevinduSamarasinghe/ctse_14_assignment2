import express from "express"

const app = express()
const PORT = process.env.PORT || 80
app.get("/", res=>{
    res.send("First commit API test for CI/CD")
})

app.get("/info",res=>{
    res.send("IT21003332 - Devindu Samarasinghe\nIT21004636 - Nashali Perera\nIT21004322 - Chanukya Serasinghe")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

