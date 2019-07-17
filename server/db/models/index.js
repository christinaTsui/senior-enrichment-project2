'use strict'
const Aircrafts = require('./Aircrafts')
const Countries = require('./Countries')
const db = require('../_db');
// const Sequelize = require('sequelize')

// Try3
Aircrafts.belongsTo(Countries, {as: 'Aircrafts', foreignKey: { name: 'aircrafts_fk' }});
Countries.hasMany(Aircrafts);

module.exports = {
  Aircrafts,
  Countries,
  db
}

// Require all the models
  // Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
  // This works if we all use the same Sequelize instance (instantiated in and exported from `/db/_db.js`)
  // Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations

// Try1
// const AircraftsCountries = db.define('aircrafts_countries', {
//   type: Sequelize.STRING,
// })
// Aircrafts.hasMany(Countries);
// Countries.belongsToMany(Aircrafts, { through: AircraftsCountries});

// Try2
// Aircrafts.belongsTo(Countries);
// Countries.hasMany(Aircrafts);
