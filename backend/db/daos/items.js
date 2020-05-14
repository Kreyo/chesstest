const Sequelize = require('sequelize');
const models = require('../models');

async function getAllItems() {
    return models.items.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

module.exports = {
    getAllItems
};
