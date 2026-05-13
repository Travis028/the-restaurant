const User = require('./User');
const Restaurant = require('./Restaurant');
const Order = require('./Order');
const MenuItem = require('./MenuItem');
const Table = require('./Table');

User.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
Restaurant.hasMany(User, { foreignKey: 'restaurant_id' });

Order.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
Order.belongsTo(User, { foreignKey: 'waiter_id' });
Order.belongsTo(User, { foreignKey: 'cashier_id' });
Order.belongsTo(Table, { foreignKey: 'table_id' });

MenuItem.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
Restaurant.hasMany(MenuItem, { foreignKey: 'restaurant_id' });

Table.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
Restaurant.hasMany(Table, { foreignKey: 'restaurant_id' });

module.exports = {
    User,
    Restaurant,
    Order,
    MenuItem,
    Table
};
