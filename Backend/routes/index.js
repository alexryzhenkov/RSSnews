const express = require('express')
const router = express.Router();

router.get("/getFirstPosts", (req, res) =>{
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

router.get("/refreshAnalysis", (req, res) =>{
    console.log("First posts")
    res.status(200).json({
        status: "success",
    })
})

router.post("/addFeed", (req, res) =>{
    console.log(req.body)
    res.status(200).json({
        status: "success"
    })
})

module.exports = router;