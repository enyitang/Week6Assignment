// setting up Express 
//CRUD- Create,Update and Delete from the Database
const express = require("express")
const mongoose = require("mongoose")
const {handleGetRequest, handleUserRequest, handlePostRequest, handleEditUserReq} = require("./inventory")
const dotenv = require("dotenv")
dotenv.config()

const app = express()

app.use(express.json())
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{

    console.log(`Server has started running! ${PORT}`)
})

mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("mongodb connected"))




app.get("/", handleGetRequest)

app.get("/user", handleUserRequest)

app.post("/add-product", handlePostRequest)

app.put("/edit-item", handleEditUserReq)
