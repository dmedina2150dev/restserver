const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // TODO Middlewares
        this.middlewares();

        // TODO Rutas de mi aplicación 
        this.routes();
    }

    middlewares() {
        // Cors
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.usersPath, require('../routes/user') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo.. ' + this.port );
        });
    }

}

module.exports = Server;