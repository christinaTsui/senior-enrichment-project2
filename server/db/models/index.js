// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/_db.js`)
	// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations


'use strict'
const Aircrafts = require('./Aircrafts')
const Countries = require('./Countries')
const db = require('../_db');
const Sequelize = require('sequelize')

const AircraftsCountries = db.define('aircrafts_countries', {
  type: Sequelize.STRING,
})

Aircrafts.hasMany(Countries);
Countries.belongsToMany(Aircrafts, { through: AircraftsCountries});

module.exports = {
  Aircrafts,
  Countries,
  db
}
