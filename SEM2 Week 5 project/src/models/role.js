// models/role.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Role = sequelize.define('Role', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = Role;
