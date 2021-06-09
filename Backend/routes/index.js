const express = require('express')
const {spawn} = require('child_process');
const mongoose = require('mongoose')
const Feed = require('../models/feed')
const NewsPost = require('../models/newspost')

const router = express.Router();



router.get("/getFirstPosts", (req, res) =>{
    console.log("First posts")
    NewsPost.find().exec()
        .then(doc =>{
            console.log(doc)
            res.status(200).json({
                status: "success",
                data: doc})
        })
        .catch(err => {
            console.log(err)
        })

})

router.get("/refreshAnalysis", (req, res) =>{
    console.log("Refresh")
    const python =spawn('python',['/home/alex/Documents/programming/Projects/RSSnews/RSSnews/Analytics/scripts/test.py'])

    var dataToSend="Fail" 

    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(dataToSend)
       });
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.status(200).json({
        status: "success"
    })
    });
    
})

router.post("/addFeed", (req, res) =>{
    console.log(req.body)
    const feed = new Feed({
        name: req.body.name,
        link: req.body.link,
        _id: new mongoose.Types.ObjectId()
    })
    feed.save()
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err))
    res.status(200).json({
        status: "success"
    })
})

module.exports = router;



/* 
Running python example

router.get("/refreshAnalysis", (req, res) =>{
    console.log("Refresh")
    const python =spawn('python',['/home/alex/Documents/programming/Projects/RSSnews/RSSnews/Analytics/scripts/testhello.py'])

    var dataToSend="Fail" 

    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(dataToSend)
       });
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.status(200).json({
        status: dataToSend
    })
    });
    
})

*/