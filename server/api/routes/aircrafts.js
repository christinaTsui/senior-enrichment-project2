'use strict'
const router = require('express').Router()
const volleyball = require('volleyball')
const Sequelize = require('sequelize')

router.use(volleyball)

const { Aircrafts } = require('../db/models/index')

router.get('/', async (req, res, next) => {
  console.log("Looking for All Aircrafts!")
  try {
    const allAircrafts = await Aircrafts.findAll();
    res.status(200).json(allAircrafts)
  } catch (err) {
    next(err)
  }
})


module.exports = router;
