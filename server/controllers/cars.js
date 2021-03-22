const CarModel = require('../models/CarModel');

const getCars = async (req, res) => {
  const cars = await CarModel.find();
  res.status(200).json('Ateityje grąžinsiu automobilius')
}

const postCar = async (req, res) => {
  res.status(200).json('Ateityje įdėsiu vieną automobilį')
}

const updateCar = async (req, res) => {
  res.status(200).json('Ateityje atnaujinsiu vieną automobilį')
}

const deleteCar = async (req, res) => {
  res.status(200).json('Ateityje ištrinsiu vieną automobilį')
}

module.exports = {
  getCars,
  postCar,
  updateCar,
  deleteCar
}