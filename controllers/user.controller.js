const { response, request } = require('express');

const getUser = (req = request, res = response) => {
    res.status(403).json({
        msg: 'get API - Controller'
    });
}

const putUser = (req = request, res = response) => {
    res.status(400).json({
        msg: 'put API - Controller'
    });
} 

const postUser = (req = request, res = response) => {
    res.status(201).json({
        msg: 'post API - Controller'
    });
}

const deleteUser = (req = request, res = response) => {
    res.status(403).json({
        msg: 'delete API - Controller'
    });
}

const patchUser = (req = request, res = response) => {
    res.status(403).json({
        msg: 'patch API - Controller'
    });
}


module.exports = { 
    getUser,
    putUser,
    postUser,
    deleteUser,
    patchUser
};