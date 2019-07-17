const db = require('./server/db/_db')
const {green, red} = require('chalk')
const { Aircrafts, Countries } = require('./server/db/models')
const Sequelize = require('sequelize')

async function seed () {
  await db.sync({force: true})

  // await AircraftsCountries.create({
  //   type: 'TRY AGAIN',
  // })

  await Aircrafts.create({
    make: 'Model 9 Orion',
    model: 'Model 9B Orion No.HB-LAH',
    year: 1931,
    type: 'Transport',
    cost: .025,
    imageUrl: 'https://www.fantasyofflight.com/collection/wp-content/uploads/sstbB26Gallery271850.jpg',
    description: 'The Lockheed Model 9 Orion is a single-engined passenger aircraft built in 1931 for commercial airlines. It was the first airliner to have retractable landing gear and was faster than any military aircraft of that time. Designed by Richard A. von Hake, it was the last wooden monoplane design produced by the Lockheed Aircraft Corporation.',
    succeeded: 'Altair',
    country: 'USA',
  })

  await Aircrafts.create({
    make: 'Marton',
    model: 'Model B-26 Marauder',
    year: 1940,
    type: 'Transport',
    cost: .025,
    imageUrl: 'https://www.fantasyofflight.com/collection/wp-content/uploads/sstbB26Gallery271850.jpg',
    description: 'The B-26 Marauder was designed to meet the U.S. Army Air Corps demand for a high-speed medium bomber. Martin’s proposal was considered to be so far in advance of other proposals that the company was awarded an “off the drawing board” contract for 201 aircraft in 1939, and the first production B-26 flew by year’s end.',
    succeeded: 'Original',
    country: 'USA',
  })

  await Countries.create({
    name: 'USA',
    GFI: 1.5,
    flagUrl: 'https://image.flaticon.com/icons/svg/252/252025.svg',
  })

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh no! Something went wrong!'))
    console.error(err)
    db.close()
  })
