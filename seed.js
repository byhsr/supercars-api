require('dotenv').config()

const mongoose = require('mongoose')
const Car = require('./model/supercarModels.js')

const mongooseConnection = process.env.MONGODB_URI
const superCarsAll = require('./supercarsData.js')

async function seedDB() {
    try{
        await mongoose.connect(mongooseConnection)
        console.log('connection done');

        await Car.insertMany(superCarsAll)
        console.log('cars added')
    } catch (err){
        console.error('got some issues' , err)
    }
    finally{
        mongoose.disconnect();
    }

}


seedDB()