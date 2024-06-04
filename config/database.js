//Import Sequelize 
const Sequelize = require('sequelize');
//Load var from a .env to process.env
require('dotenv').config();

let sequelize;
//Checks if the DB_URL environment var is set
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres'
    }
  );
}
//Export the intialize Sequeliza instance 
module.exports = sequelize;