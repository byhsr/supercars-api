const Car =  require('../model/supercarModels.js')

async function getAllCars (req, res) {
  try{
   const superCars = await Car.find()
    res.status(200).json(superCars)
  }
    catch(err){
      res.status(500).json({ error : 'failed to fetch cars'} )
    }
}


module.exports = { getAllCars }
