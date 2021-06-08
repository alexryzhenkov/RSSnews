const mongoose = require("mongoose")

const newspostSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    source: String,
    content: String,
    date: String

},
{ collection : 'firstPposts' })

module.exports = mongoose.model('Newspost', newspostSchema)