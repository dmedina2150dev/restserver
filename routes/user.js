
const { Router } = require('express');
const { check } = require('express-validator');

const { getInfoUser, updateUser, createUser, deleteUser, updateCreateUser } = require('../controllers/user');
const { validateItems } = require('../middlewares/validate-items');
const Role = require('../models/role');


const router = Router();

router.get( '/', getInfoUser );

router.put( '/:id', updateUser );

router.post( '/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatorio y debe tener mínimo 6 caracteres').isLength({ min: 6 }).not().isEmpty(),
    check('email', 'El correo no es valido! Ingrese uno valido').isEmail(),
    // check('role', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( async (role = '') => {
        const existeRole = await Role.findOne({ role });

        if( !existeRole ){
            throw new Error(`El role ${ role } no está registrad en la DB`);
        }
    }),
    validateItems
] ,createUser );

router.delete( '/', deleteUser );

router.patch('/', updateCreateUser );


module.exports = router;