const mongoose = require('mongoose');

const VotanteSchema = mongoose.Schema({
  dni: {
    type: String,
    required: true,
  },
  nombres: {
    type: String,
    required: true,
  },
  apellidoPaterno: {
    type: String,
    required: true,
  },
  apellidoMaterno: {
    type: String,
    required: true,
  },
  candidato: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  }
})
const Votante = mongoose.model('Votante', VotanteSchema);
module.exports = Votante

