const { Sequelize, DataTypes } = require(sequelize);
const sequelize = require ('');

// Define the User model
const User = sequelize.define('User', {
//Ensure username is unique 
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
//Ensure password is required 
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


//Export the User model 
module.exports = User;