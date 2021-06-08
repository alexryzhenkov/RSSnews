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


app.use('/',require('./routes/index'));

app.get("/refreshAnalysis",require('./routes/index'));

app.post("/addFeed",require('./routes/index'));



app.listen(PORT, () => console.log("App is running"))