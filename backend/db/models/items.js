'use strict';
module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define('items', {
    title: DataTypes.STRING,
    text: DataTypes.STRING
  }, {});

  items.associate = function (models) {
  };

  return items;
};