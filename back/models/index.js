const User = require('./user');
const Favourite = require('./favourite')

Favourite.belongsTo(User, { as: 'user' });

module.exports = {User, Favourite}