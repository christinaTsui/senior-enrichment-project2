
// const Router = require('express').Router();
// const db = require('../db/_db')

// // If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// 	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// 	// Ideally you would have something to handle this, so if you have time try that out!
// Router.get('/hello', (req, res) => res.send({hello: 'world'}))

// // You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

// module.exports = Router;

// const router = require('express').Router()


// router.use((req, res, next) => {
//   const err = new Error('API route not found!')
//   err.status = 404
//   next(err)
// })

// module.exports = router


'use strict'
const aircraftsRouter = require('./routes/aircrafts')
const countriesRouter = require('./routes/countries')
const router = require('express').Router()

router.use('/aircrafts', aircraftsRouter)
router.use('/countries', countriesRouter)

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
