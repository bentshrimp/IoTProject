const mongoose = require("mongoose");
const PMS7003mSchema = mongoose.Schema({
  den: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("PMS7003m", PMS7003mSchema);
