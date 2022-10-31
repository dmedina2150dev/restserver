
// {
//     name: 'asas',
//     email: 'gjvhbksna@na',
//     password: 'jhbsdd',
//     img: 'jahbjnk',
//     role: 'jhbkjnkalmñl',
//     status: false,
//     google: true / false si fue creado por google
// }

const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio'],
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']

    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = model( 'User', UserSchema );// TODO EL nombre del model Debe ir con mayuscula y en singular