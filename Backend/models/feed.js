const mongoose = require("mongoose")

const feedSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    link: String

},
{ collection : 'feeds' })

module.exports = mongoose.model('Feed', feedSchema)