const S = require('sequelize')
const db = require('../config/db')

class Favourite extends S.Model {}
Favourite.init({
    title: {
        type: S.STRING,
        allowNull: false
    },
    plot: {
        type: S.TEXT,
        allowNull: false
    },
    poster: {
        type: S.STRING,
        allowNull: false
    }
}, { sequelize: db, modelName: 'favourite' });

module.exports = Favourite