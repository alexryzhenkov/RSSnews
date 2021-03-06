const mongoose = require("mongoose")

const newspostSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    source: String,
    summary: String,
    title: String,
    link: String,
    date: String
},
{ collection : 'firstPosts' })

module.exports = mongoose.model('Newspost', newspostSchema)