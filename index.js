// setting up Express 
//CRUD- Create,Update and Delete from the Database
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const app = express()


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{

    console.log(`Server has started running! ${PORT}`)
})

mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("mongodb connected"))




app.get("/", handleGetRequest)

app.get("/user", handleUserRequest)

app.post("/add-student", handlePostRequest)

app.put("/edit-user", handleEditUserReq)