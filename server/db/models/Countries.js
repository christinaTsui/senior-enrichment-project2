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

  GFI: { //Gun Fire Index
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
    //custom sort the country objects by order of lowest GFI to highest GFI
    //* must have a method `getTopFive` which finds the top 5 strongest nations sorted by GFI (0 is the strongest, 10 is the weakest)
    let allCountries = Countries.findAll(); //returns an array of objects
    let firstHolder = null;
    let secondHolder = null;

    for (let i = 0; i < allCountries.length; i++) {
      if (allCountries[i].GFI > allCountries[i+1] ) {
        firstHolder = allCountries[i]
        secondHolder = allCountries[i+1];
        allCountries[0] = secondHolder;
        allCountries[1] = secondHolder;
      } else {
        continue;
      }
    }

    let orderMatters = allCountries.reverse();
    return orderMatters.slice(0,5); //returns the top 5 Countries by GFI nums

  }


  module.exports = Countries
