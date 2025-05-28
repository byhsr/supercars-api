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





const getCarByName = async (req, res) => {
  const name = req.params.name;

  try {
    const car = await Car.findOne({ name: { $regex: name, $options: "i" } });

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const searchCars = async (req, res) => {
  const query = req.query.q;

  try {
    const matches = await Car.find({
      name: { $regex: query, $options: "i" },
    });

    if (matches.length === 0) {
      return res.status(404).json({ message: "No cars found" });
    }

    res.json(matches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { getAllCars, getCarByName , searchCars }