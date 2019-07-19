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

//untested routes

router.post('/', async (req, res, next) => {
  console.log("Posting an Aircraft!")
  try {
    await Aircrafts.create(req.body);
    const output = {
      message: 'Created successfully',
      article: article
    }
    res.status(201).json(output)
  } catch (err) {
    next(err)
  }
});

// router.delete('/', async (req, res, next) => {
//   console.log("Posting an Aircraft!")
//   try {
//     await Aircrafts.create(req.body);
//     const output = {
//       message: 'Created successfully',
//       article: article
//     }
//     res.status(201).json(output)
//   } catch (err) {
//     next(err)
//   }
// });


module.exports = router;
