const mongoose = require("mongoose");
const BME280Schema = mongoose.Schema({
  tmp: {
    type: String,
    required: true,
  },
  hum: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    require: true,
  },
  pre: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("BME280", BME280Schema);
