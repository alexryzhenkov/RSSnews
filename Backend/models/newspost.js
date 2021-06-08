const mongoose = require("mongoose")

const newspostSchema= mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    source: String,
    content: String,
    date: mongoose.Types.date

},
{ collection : 'firstPposts' })

module.exports = mongoose.model('Newspost', newspostSchema)