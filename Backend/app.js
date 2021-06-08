const express = require('express')
const mongoose = require('mongoose')
const morgan = require("morgan")

const app = express()

const db = require('./config/keys').MongoURI

const feed = require('./models/feed')

PORT=5000


app.use(express.urlencoded({extended: true}));
app.use(express.json())

async function startdb(){
    try{
        await mongoose.connect(db,{useNewUrlParser: true})
        app.listen(PORT, () => console.log("App is running"))
        console.log('DB running')
    }catch (e){
        console.log('Server error ', e.message)
    }
}


app.use('/',require('./routes/index'));

app.get("/refreshAnalysis",require('./routes/index'));

app.post("/addFeed",require('./routes/index'));



startdb()