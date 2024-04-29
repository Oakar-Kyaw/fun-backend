const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")
const users = require("./user")
const app = express()
const port = 9090
const dburl = "mongodb+srv://alexjenson7090:WOaU42bUuvHFJuwR@projects.vxmfrg6.mongodb.net/Date"
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err.message))

app.use(bodyParser.json())
app.use(cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
      }))
app.post("/name", async function(req,res){
    let newUser = await users.create(req.body)
    res.status(200).send({
        success: true,
        data: newUser
    })
})
app.listen(port, function(){
    console.log("Server Listen at:",port)
})