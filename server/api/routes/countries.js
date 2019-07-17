'use strict'
const router = require('express').Router()
const volleyball = require('volleyball')

router.use(volleyball)

const { Countries } = require('../../db/models')

router.get('/', async (req, res, next) => {
  console.log("Looking for All Countries!")
  try {
    const allAircrafts = await Countries.findAll();
    res.status(200).json(allAircrafts)
  } catch (err) {
    next(err)
  }
});


module.exports = router;

