const express = require('express') 
//const cors = require('cors') 
const dbConnection = require('../database/config') 
const router = require('../routes/usuarios')

class server{
    constructor() {
        this.app = express()
        this.port = process.env.port

        this.usuariosPath = '/api/usuarios'

        this.routes()
        this.dbConectar()
    }

    async dbConectar() {
        await dbConnection()
    }


    routes() {

       this.app.use(express.json())
        this.app.use(this.usuariosPath, router )
        
    }

    listen() {
        this.app.listen(this.port, (req, res) => {
        console.log(`Servidor iniciado en http://localhost:${this.port}`)
        })
    }

}

module.exports = server

