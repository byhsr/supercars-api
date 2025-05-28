require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const carRoutes = require('./routes/routes.js')

const app = express();
const mongoConncet = process.env.MONGODB_URI
const port = process.env.PORT


//middleware
app.use(express.json());
app.use(cors());


//routing middlwarre
app.use("/api/supercars" , carRoutes);



//connection
mongoose.connect(mongoConncet)
.then(()=> {
  console.log('connected to MongoDb');
  app.listen(port , ()=>{
  console.log("server is up and running like Usain bolt lil bro")
})
} )
.catch((error)=> console.error("this is connection error" , error));


