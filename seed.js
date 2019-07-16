const db = require('./server/db/_db')
const {green, red} = require('chalk')
const { Aircrafts, Countries } = require('./server/db/models')
const Sequelize = require('sequelize')

async function seed () {
  await db.sync({force: true})

  await Aircrafts.create({
    make: 'Model 9 Orion',
    model: 'Model 9B Orion No.HB-LAH',
    year: 1931,
    type: 'Airliner',
    cost: .025,
    imageUrl: 'https://image.flaticon.com/icons/svg/1068/1068015.svg',
    description: 'The Lockheed Model 9 Orion is a single-engined passenger aircraft built in 1931 for commercial airlines. It was the first airliner to have retractable landing gear and was faster than any military aircraft of that time. Designed by Richard A. von Hake, it was the last wooden monoplane design produced by the Lockheed Aircraft Corporation.',
    succeeded: 'Altair',
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
