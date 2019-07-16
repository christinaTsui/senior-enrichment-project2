// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/_db.js`)
	// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations


'use strict'
const Aircrafts = require('./Aircrafts')
const Countries = require('./Countries')
const _db = require('../_db');

Aircrafts.belongsTo(Countries);
Countries.hasMany(Aircrafts);//i think it should be belongsToMany here

//* can have many aircrafts assigned (may have none)

module.exports = {
  Aircrafts,
  Countries,
  _db
}
