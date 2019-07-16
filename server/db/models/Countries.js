const Sequelize = require('sequelize');
const db = require('../_db')

const Countries = db.define('countries', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },

  GFI: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
      max: 10.0,
      min: 0.0,
    }
  },

  flagUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://image.flaticon.com/icons/svg/252/252025.svg',

  },

  });

  Countries.getTopFive = function () {
    let allCountries = Countries.findAll();
    //figure out how to get top five countries
    //* must have a method `getTopFive` which finds the top 5 strongest nations sorted by GFI (0 is the strongest, 10 is the weakest)
  }


  module.exports = Countries
