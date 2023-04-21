const express = require("express")
const {connection } = require("./db")
const {dcRouter} = require("./controllers/dc.route")
const {marvelRoutes} = require("./controllers/marvel.route")
const app = express()


app.use(express.json())
app.use("/dcmembers" , dcRouter)
app.use("/marvelheros" , marvelRoutes)


// Intial HomePage

app.get("/" , (req , res) => {
    res.status(200).send("Welcome To Homepage")
})

// Server Listining Part

app.listen(4242 , async()=> {
    try{

        await connection
        console.log("Mongo Server Runned Successfully")

    }catch (err){
        console.log("Some Errors Occureds ON Mongoose")
        console.log(err)
    }
    console.log("Server Is Running On Port Number 4242")
})