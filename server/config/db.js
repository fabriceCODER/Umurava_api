const pgp = require('pg-promise')();

const connectionString = 'postgres://your_username:your_password@your_host:your_port/your_database_name'; // Replace with your actual connection string

const db = pgp(connectionString);

module.exports = db;