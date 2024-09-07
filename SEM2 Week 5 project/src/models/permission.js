// models/permission.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Permission = sequelize.define('Permission', {
  action: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Permission;