const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const artistaSchema = new Schema(
  {
    nombre: String,
    cancion: String,
    ranking: Number,
  },
  { versionKey: false }
);
module.exports = mongoose.model("artistas", artistaSchema);
