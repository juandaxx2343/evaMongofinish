const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    documento: {
        type: Number
    },
    nombre: {
        type: String
    },
    apellidos: {
        type: String
    },
    nacimiento: {
        type: Number

    },
    nacionalidad: {
        type: String
    },
    goles:{
        type: Number
    },
    estado: {
        type: Boolean,
        default: true
    },
    
})

module.exports = model('Usuario', UsuarioSchema)