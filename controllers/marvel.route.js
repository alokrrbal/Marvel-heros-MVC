const {MarvelModel} = require("../models/marvel.model")
const express = require("express")

const marvelRoutes = express.Router()

//Getting All Marvel Heros
marvelRoutes.get("/" , async(req,res) => {
    try{
        const data = await MarvelModel.find()
        res.status(200).send(data)
    }catch(err){
        console.log(err)
        res.status(400).send("Unabel To Get Marvel Data Some Error Occured There")
    }
})


//Adding New Hero to Marvel Family

marvelRoutes.post("/add" , async(req,res) => {
    try{
        const newHero = new MarvelModel(req.body)
        await newHero.save()
        res.status(200).send("New Hero Added To Marvel Family")
    }catch (err){
        console.log(err);
        res.status(400).send("Unable To Add New Marvel Hero")
    }
})



//Edite Marvel Heros

marvelRoutes.patch("/edite/:id" , async(req,res) => {
    const {id} = req.params
    try{
        await MarvelModel.findByIdAndUpdate({_id:id},req.body)
        res.send("Edited Successfully")
    }catch(err){
        console.log(err)
        res.status(400).send("Unable To Edite The  Hero")
    }
})

//Remove Hero From MArvel Family (Delete)

marvelRoutes.delete("/delete/:id" , async(req,res) => {
    const {id} = req.params
    try{
        await MarvelModel.findByIdAndDelete({_id:id})
        res.send("Successfully Removed From FAmily")
    }catch (err){
        console.log(err)
        res.status(400).send("Unable To delete")
    }
})


module.exports={
    marvelRoutes
}

