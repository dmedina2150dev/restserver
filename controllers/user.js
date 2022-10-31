const { response, request } = require('express');

const getInfoUser = ( req = request, res = response ) => {

    const { q, nombre, apikey, limit, page = 1 } = req.query;
    // TODO url: http://localhost:8080/api/users?q=hola&nombre=Fernando&apikey=1029394&limit=10
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
    // TODO url: http://localhost:8080/api/users/10
    res.status(400).json({
        "msg": 'update API -- Controller',
        params: id
    });
}

const createUser = ( req, res = response ) => {
    const body = req.body;

    res.status(201).json({
        "msg": 'post API -- Controller',
        body    
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