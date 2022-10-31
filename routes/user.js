
const { Router } = require('express');
const { getInfoUser, updateUser, createUser, deleteUser, updateCreateUser } = require('../controllers/user');

const router = Router();

router.get( '/', getInfoUser );

router.put( '/:id', updateUser );

router.post( '/', createUser );

router.delete( '/', deleteUser );

router.patch('/', updateCreateUser );


module.exports = router;