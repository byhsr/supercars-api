const express = require('express')
const {getAllCars} =require("../connections/getResponses.js") 


const router = express.Router()

router.get('/' ,  getAllCars)

module.exports = router;