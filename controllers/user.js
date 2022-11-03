const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');


const getInfoUsers = async ( req = request, res = response ) => {
    
    const { limit = 5, page = 0 } = req.query;
    const users = await User.find()
        .skip( page )
        .limit( limit );

    res.json({ users });
}

const updateUser = async ( req, res = response ) => {
    const id = req.params.id;
    const { _id, password, google, ...resto } = req.body;

    // TODO Validar contra base de datos
    if( password ) {
        // TODO encrypta la contraseña
        const salt = bcrypt.genSaltSync();
        resto.password = bcrypt.hashSync( password, salt );
    }

    const user = await User.findByIdAndUpdate(id, resto)

    res.status(400).json( user );
}

const createUser = async ( req, res = response ) => {

    const { name, email, password, role } = req.body;

    const user = new User( { name, email, password, role } );

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
    getInfoUsers,
    updateUser,
    createUser,
    deleteUser,
    updateCreateUser
}