const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        // Cuando se instancie el servidor se creara la aplicación de express
        this.app = express();

        // Instanciamos el puerto de las variables de entorno
        this.port = process.env.PORT || 3000;

        // Dejamos visible en una variable el path de las rutas de usuarios
        this.userRouterPath = '/api/users';

        // * Aqui iran los Middlewares
        this.middlewares();

        // Llamamos al metodo para crear las rutas
        this.routes();
    }


    middlewares() {
        // Cors
        this.app.use( cors() );

        this.app.use( express.static('public') );// Directory publico

    }

    routes() {
        this.app.use(this.userRouterPath, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        });
    }

}

module.exports = Server;