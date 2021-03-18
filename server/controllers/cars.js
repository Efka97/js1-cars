

const getCars = (req, res) => {
  res.status(200).json('Ateityje grąžinsiu automobilius')
}

const postCar = (req, res) => {
  res.status(200).json('Ateityje įdėsiu vieną automobilį')
}

const updateCar = (req, res) => {
  res.status(200).json('Ateityje atnaujinsiu vieną automobilį')
}

const deleteCar = (req, res) => {
  res.status(200).json('Ateityje ištrinsiu vieną automobilį')
}

module.exports = {
  getCars,
  postCar,
  updateCar,
  deleteCar
}