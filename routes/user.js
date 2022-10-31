
const { Router } = require('express');
const { check } = require('express-validator');
const { getInfoUser, updateUser, createUser, deleteUser, updateCreateUser } = require('../controllers/user');

const router = Router();

router.get( '/', getInfoUser );

router.put( '/:id', updateUser );

router.post( '/', [
    check('email', 'El correo no es valido! Ingrese uno valido').isEmail()
] ,createUser );

router.delete( '/', deleteUser );

router.patch('/', updateCreateUser );


module.exports = router;