const { Router } = require('express')
const router = Router() 

const {getUsuario, postUsuario, putUsuario, patchUsuario, deleteUsuario} = require('../controllers/usuarios')

router.get('/', getUsuario)
router.post('/', postUsuario)
router.put('/', putUsuario)
router.patch("/", patchUsuario)
router.delete('/', deleteUsuario)

module.exports = router