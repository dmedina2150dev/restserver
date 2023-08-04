const { Router } = require('express');
const { getUser, putUser, postUser, deleteUser, patchUser } = require('../controllers/user.controller');

const router = Router();

router.get('/', getUser );// Se manda a llamar la funcion como referencia

router.put('/', putUser );

router.post('/', postUser );

router.delete('/', deleteUser );

router.patch('/', patchUser );

module.exports = router;