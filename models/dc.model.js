const mongoose = require("mongoose")


const dcSchema = mongoose.Schema({
    name:String,
    alias:String,
    power_level:Number,
    role:String
},{
    versionKey:false
})

const DcModel = mongoose.model("dcmember" , dcSchema)

module.exports={
    DcModel
}