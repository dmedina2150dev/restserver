const { response, request } = require('express');
const User = require('../models/user');

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
    const body = req.body;

    const user = new User( body );

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