require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV ? false : true, // indica en que entorno estamos trabajando.
  port: process.env.PORT || 9000,
  host: process.env.HOST || 'http://localhost'
}

module.exports = { config };
