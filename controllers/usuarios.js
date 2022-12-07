
const { response } = require('express')
const Usuario = require('../models/usuarios')

const getUsuario = async (req, res = response) => {
    const usuarios = await Usuario.find()  
    res.json({
        msg: "Estos son los Jugadores",
        usuarios
    })
}

const postUsuario = async (req, res ) => {
    const { documento, nombre, apellidos, nacimiento, nacionalidad, goles, estado  } = req.body
    

    const usuario = new Usuario ({ documento, nombre, apellidos, nacimiento, nacionalidad, goles, estado })
    await usuario.save()

    res.json({
        msg: "Jugador Ingresado Correctamente",
        usuario
    })
}

const deleteUsuario = async (req, res) => {
    const { documento } = req.body

     await Usuario.findOneAndDelete({documento: documento})
     const usuarios = await Usuario.find()

    res.json({
        msg: "Jugador Eliminado Correctamente",
        usuarios
    })
}

const putUsuario = async (req, res) => {

    const { documentoAnterior, documento, apellidos, nacimiento, nacionalidad, goles, estado } = req.body
    console.log(req.body)
    
    await  Usuario.findOneAndUpdate({documento: documentoAnterior}, {apellidos:apellidos, nacimiento: nacimiento, nacionalidad: nacionalidad, goles: goles, estado:estado}) 
    const usuario = await Usuario.find({documento: documento })
    res.json({  
        msg: "Jugador modificado Correctamente",
        usuario
        
    })

}

const patchUsuario = async (req,res) =>{
    const{nacionalidad, goles} = req.body
    const usuario = await Usuario.findOneAndUpdate({nacionalidad: nacionalidad },{goles : goles})

    res.json({
        msg:'Datos Corregidos correctamente',
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    patchUsuario,
    deleteUsuario
}
