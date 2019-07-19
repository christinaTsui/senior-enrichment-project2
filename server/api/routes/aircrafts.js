'use strict'
const router = require('express').Router()
const volleyball = require('volleyball')

router.use(volleyball)

const { Aircrafts } = require('../../db/models')

router.get('/', async (req, res, next) => {
  console.log("Looking for All Aircrafts!")
  try {
    const allAircrafts = await Aircrafts.findAll({ include: { all: true } });
    res.status(200).json(allAircrafts)
  } catch (err) {
    next(err)
  }
});

router.get('/:id', async (req, res, next) => {
  console.log("Looking for the chosen Aircraft!")
  try {
    const theChosenOne = await Aircrafts.findOne({
      where: {id: req.params.id}
    });
    res.status(200).json(theChosenOne)
  } catch (err) {
    next(err)
  }
});



module.exports = router;
