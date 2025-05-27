
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  _id: String, 
  name: String,
  price: String,
  description: String,
  coolFact: String,
  origin: String,
  firstVersion: [String],
  models3D: [String],
  videos: [String]
});


carSchema.pre('save', function (next) {
  const brand = this.name.split(' ')[0].toLowerCase();
  const model = this.name.split(' ').slice(1).join('').toLowerCase();
  const priceDigits = this.price.match(/\d/g)?.slice(0, 2).join('') || '00';

  const timestamp = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 4);

  this._id = `${brand}-${model}-${priceDigits}-${timestamp}${rand}`;
  next();
});

carSchema.pre('insertMany', function (next, docs) {
  for (let doc of docs) {
    const brand = doc.name.split(' ')[0].toLowerCase();
    const model = doc.name.split(' ').slice(1).join('').toLowerCase();
    const priceDigits = doc.price.match(/\d/g)?.slice(0, 2).join('') || '00';

    const timestamp = Date.now().toString(36);
    const rand = Math.random().toString(36).slice(2, 4);

    doc._id = `${brand}-${model}-${priceDigits}-${timestamp}${rand}`;
  }
  next();
});



const car = mongoose.model('Car' , carSchema);
module.exports =car;