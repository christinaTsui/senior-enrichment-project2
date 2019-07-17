const Sequelize = require('sequelize');
const db = require('../_db')


const Aircrafts = db.define('aircrafts', {
  make: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  model: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  year: {
    type: Sequelize.INTEGER,
    validate:{
      max: 2019,
      min: 1903,
    }
  },
  type: {
    type: Sequelize.ENUM('Attacker', 'Bomber', 'Versatile', 'Transport','Reconoissance', 'Rescue'),
    // validate: {
    //   isIn: [['Attacker', 'Bomber', 'Versatile', 'Transport','Reconoissance', 'Rescue']],
    // }
  },
  cost: {
    type: Sequelize.DECIMAL, //do i have to do more so that it takes $1million and stores it at 1 in the database
  },
  imageUrl: {
    type: Sequelize.STRING, //should this be virtual?
    defaultValue: 'https://image.flaticon.com/icons/svg/1068/1068015.svg'
  },
  description: {
    type: Sequelize.TEXT, //this should be in extremely large text
  },
  succeeded: {
    type: Sequelize.STRING //this should track the aircraft it succeeds via a reference called 'succeeded'
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
});

Aircrafts.getAircraftByType = function (type) {
  // * must have a method `getAircraftByType`, that gets aircrafts by inputted type
    Aircrafts.findAll({
      where: {type: type}
    }).then((aircrafts) => {
      res.send(aircrafts)
    }).catch(next)
}

Aircrafts.change1to1000000 = function (aircraftId) {
  //this needs to be changed so that it finds the airplane, then it takes the cost of that plane and returns that value multiplied by 10000000.
  //must have a method to change the `cost` of 1 to $1,000,000 when retrieving records
  //not tested //is this a hook for beforeCreate or something?
  Aircrafts.findAll({
    where: {id: aircraftId}
  }).then((aircraft) => {
    let cost = aircraft.cost;
    let costTimesMil = cost * 1000000;
    res.send(costTimesMil)
  }).catch(next)
}

module.exports = Aircrafts
