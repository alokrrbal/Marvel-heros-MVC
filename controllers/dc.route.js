const express = require("express")
const {DcModel} = require("../models/dc.model")

const dcRouter = express.Router()


// Getting All DC Members
dcRouter.get("/" , async(req ,res) => {
    try{
      const data = await DcModel.find()
      res.status(200).send(data)

    }catch (err){
        res.status(400).send(err)
    }
    
})

//Adding New DC Member
//http://localhost:4242/dcmembers/add <- this is the url for post request like this it will work for patch and delete
dcRouter.post("/add" , async(req , res) => {
    try{
        const newMember = new DcModel(req.body)
        await newMember.save()
        res.status(200).send("New Member Added To DC Family")
    }catch (err){
        console.log(err)
        res.status(400).send("Unable To Add This New Member")
    }
})


//Edite DC Heros

dcRouter.patch("/editedc/:id" , async(req,res) => {
    const {id} = req.params

    try{

        await DcModel.findByIdAndUpdate({_id:id} , req.body)
        res.status(200).send("Hero Edited Successfully")

    }catch (err){
        res.status(400).send("Unable to Edite THe Hero Some Error Occureds")
        console.log(err)
    }
})

//Delete The Hero

dcRouter.delete("/deletedc/:id" , async(req,res) => {
    const {id} = req.params

    try{
        await DcModel.findByIdAndDelete({_id:id})
        res.status(200).send("Hero Removed From The Family")
    }catch (err){
        console.log(err)
        res.status(400).send("Some Error Occurds Unable to delete the User")
    }
})

module.exports={
    dcRouter
}