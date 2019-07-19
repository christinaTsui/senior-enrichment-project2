'use strict'
const router = require('express').Router()
const volleyball = require('volleyball')

router.use(volleyball)

const { Countries } = require('../../db/models')

router.get('/', async (req, res, next) => {
  console.log("Looking for All Countries!")
  try {
    const allCountries = await Countries.findAll();
    res.status(200).json(allCountries)
  } catch (err) {
    next(err)
  }
});

router.get('/:id', async (req, res, next) => {
  console.log("Looking for the chosen Country!")
  try {
    const theChosenOne = await Countries.findOne({
      where: {id: req.params.id}
    });
    res.status(200).json(theChosenOne)
  } catch (err) {
    next(err)
  }
});

//untested routes

router.post('/', async (req, res, next) => {
  console.log("Posting a Country!")
  try {
    let country = await Countries.create(req.body);
    const output = {
      message: 'Created successfully',
      country: country,
    }
    res.status(201).json(output)
  } catch (err) {
    next(err)
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    let country = Countries.update(req.body, {returning: true, where: {id: req.body.id}})
    res.status(201).json(country)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    let country = Countries.destroy(req.body, {returning: true, where: {id: req.body.id}})
    res.json(country)
  } catch (err) {
    next(err)
  }
})

module.exports = router;

