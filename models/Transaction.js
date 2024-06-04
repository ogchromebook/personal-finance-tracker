const { Sequelize,  DataTypes } = require('sequelize');
const sequelize = require('../config/database');

//Defines Transaction model
const Transaction =  sequelize.define('Transaction', {
   //Ensures amount is required
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    //Ensures category is required
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //Ensure type is either 'income' or 'expense'
    type: {
        type: DataTypes.ENUM('income', 'expense'),
        allowNull: false
    }
    });

    //Export the Transaction model
    module.exports = Transaction;