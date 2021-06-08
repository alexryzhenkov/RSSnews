const mongoose = require("mongoose")

const feedSchema= mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    link: String

},
{ collection : 'feeds' })

module.exports = mongoose.model('Feed', feedSchema)