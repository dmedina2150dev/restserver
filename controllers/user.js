const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { validationResult } = require('express-validator');

const getInfoUser = ( req = request, res = response ) => {

    const { q, nombre, apikey, limit, page = 1 } = req.query;
    
    res.json({
        "msg": 'get API -- Controller',
        q,
        nombre,
        apikey,
        limit,
        page
    });
}

const updateUser = ( req, res = response ) => {
    const id = req.params.id;
    
    res.status(400).json({
        "msg": 'update API -- Controller',
        params: id
    });
}

const createUser = async ( req, res = response ) => {

    const errors = validationResult(req);

    if( !errors.isEmpty() ){ 
        return res.status(400).json(errors)
    }

    const { name, email, password, role } = req.body;

    const user = new User( { name, email, password, role } );

    // TODO Verificar que el email existe
    const existEmail = User.findOne({ email });

    if( existEmail ) {
        return res.status(400).json({
            msg: 'El correo ya esta registrado!'
        });
    }

    // TODO encrypta la contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt );

    // TODO Guardar la base de dato
    await user.save();

    res.status(201).json({
        "msg": 'post API -- Controller',
        user 
    });
}

const deleteUser = ( req, res = response ) => {
    res.json({
        "msg": 'delete API -- Controller'
    });
}

const updateCreateUser = ( req, res = response ) => {
    res.status(400).json({
        "msg": 'patch API -- Controller'
    });
}

module.exports =  {
    getInfoUser,
    updateUser,
    createUser,
    deleteUser,
    updateCreateUser
}