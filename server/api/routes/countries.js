'use strict'
const router = require('express').Router()
const volleyball = require('volleyball')
const Sequelize = require('sequelize')

router.use(volleyball)

const { Countries } = require('../db/models/index')

router.get('/', async (req, res, next) => {
  console.log("Looking for All Countries!")
  try {
    const allCountries = await Countries.findAll();
    res.status(200).json(allCountries)
  } catch (err) {
    next(err)
  }
})


module.exports = router;
