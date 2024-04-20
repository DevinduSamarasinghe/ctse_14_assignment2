import express from "express"

const app = express()
const PORT = process.env.PORT || 80
app.get("/", (req,res)=>{
    res.send("First commit API test for CI/CD")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})