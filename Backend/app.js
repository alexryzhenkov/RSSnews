const express = require('express')
const mongoose = require('mongoose')
const morgan = require("morgan")

const app = express()

const db = require('./config/keys').MongoURI

PORT=5000


app.use(express.urlencoded({extended: true}));
app.use(express.json())

async function startdb(){
    try{
        await mongoose.connect(db,{useNewUrlParser: true})
    }catch (e){
        console.log('Server error ', e.message)
    }
}


app.get("/getFirstPosts", (req, res) =>{
    console.log("First posts")
    res.status(200).json({
        status: "success",
        data: [{
                feed: "Name of feed",
                date: "Post date",
                content: "news message"
            },
            {
                feed: "Name of feed",
                date: "Post date",
                content: "news message"
            }]
    })
})

app.get("/refreshAnalysis", (req, res) =>{
    console.log("First posts")
    res.status(200).json({
        status: "success",
    })
})

app.post("/addFeed", (req, res) =>{
    console.log(req.body)
    res.status(200).json({
        status: "success"
    })
})



app.listen(PORT, () => console.log("App is running"))