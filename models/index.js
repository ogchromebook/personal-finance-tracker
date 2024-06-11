const sequelize = require('../config/config');
const User = require('./User');
const Transaction = require('./Transaction');

User.hasMany(Transaction, { foreignKey: 'user_id' });
Transaction.belongsTo(User, { foreignKey: 'user_id' });

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});

module.exports = { User, Transaction };
