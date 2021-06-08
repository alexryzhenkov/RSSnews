const express = require('express')
const router = express.Router();

const mongoose = require('mongoose')
const Feed = require('../models/feed')
const NewsPost = require('../models/newspost')



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
    console.log("First posts")
    res.status(200).json({
        status: "success",
    })
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