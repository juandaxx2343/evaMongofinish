const mongoose = require('mongoose')

const dbConnection = async => {
    try {
        mongoose.connect(process.env.MONGODB_CNN)
        console.log("Se ha establecido la conexión a la base de datos :)")
    } catch (error) {
        console.log("Lo sentimos, no pudimos establecer la conexión :(", error)
    }
}

module.exports = dbConnection