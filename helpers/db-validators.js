const Role = require('../models/role');
const User = require('../models/user');

const isRoleValid = async ( role = '' ) => {
    const existeRole = await Role.findOne({ role });

    if( !existeRole ){
        throw new Error(`El role ${ role } no está registrad en la DB`);
    }
}

const existEmailDB = async ( email = '' ) => {
     // TODO Verificar que el email existe
     const existEmail = await User.findOne({ email });

     if( existEmail ) {
        throw new Error('El correo ya esta registrado!');
     }
}

const existUserById = async ( id  ) => {
    // TODO Verificar que el email existe
    const existUser = await User.findById(id);

    if( !existUser ) {
       throw new Error('El usuario no existe en la base de datos!');
    }
}

module.exports = {
    isRoleValid,
    existEmailDB,
    existUserById
}