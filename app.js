require('dotenv').config();

const Server = require('./models/server');


// Instanciamos nuestro servidor
const server = new Server();

server.listen();
