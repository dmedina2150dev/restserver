const Role = require('../models/role');


const isRoleValid = async (role = '') => {
    const existeRole = await Role.findOne({ role });

    if( !existeRole ){
        throw new Error(`El role ${ role } no está registrad en la DB`);
    }
}

module.exports = {
    isRoleValid
}