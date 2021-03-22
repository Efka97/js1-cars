const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    brand: String,
    mode: String,
    year: Number,
    engineVolume: Number,
  },
  { timestamps: true }
);

export default mongoose.Model('Car', schema);