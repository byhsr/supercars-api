const express = require('express')
const {getAllCars , getCarByName , searchCars} =require("../connections/getResponses.js") 


const router = express.Router()

router.get('/' ,  getAllCars)
router.get("/search", searchCars);
router.get('/:name' , getCarByName)

module.exports = router;