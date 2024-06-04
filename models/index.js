const sequelize = require('');
const User = require('./User');
const Transaction = require('./Transaction');

// Define associations 
// User can have mamy transanctions
User.hasMany(Transaction, { onDelete: 'CASCADE'});
Transaction.belongsTo(User);

//Sync all models with the db
sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err=> console.log('Error syncing database', err));

//Exports the models
module.exports = { User, Transaction };