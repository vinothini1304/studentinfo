const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require ('./models/Users')


const app= express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://vino:vino253545@atlascluster.ocqi4xn.mongodb.net/mern")

app.get('/getUsers', (req, res)  =>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log("server is runing")
})