const mongoose = require("mongoose")

const marvelSchem = mongoose.Schema(
    {
        name:String,
        alias:String,
        power_level:Number,
        role:String
    },{
        versionKey:false
    }
)

const MarvelModel = mongoose.model("marvelhero" , marvelSchem)

module.exports = {
    MarvelModel
}