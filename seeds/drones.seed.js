// Iteration #1
const drones = [{
        name: 'Creeper XL 500',
        propellers: 3,
        maxSpeed: 12
    },
    {
        name: 'Racer 57',
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: 'Courier 3000i',
        propellers: 6,
        maxSpeed: 18
    },
]


const mongoose = require("mongoose")

require('../db')

const DroneModel = require('../models/Drone.model')

DroneModel.insertMany(drones)
    .then((allDronesDB) => {
        console.log('All drones are seeded(added) in your DB', allDronesDB)
            // return mongoose.connection.close()
    })
    // .then(() => {
    //     console.log('Your DB was closed')
    // })
    .catch((error) => {
        console.log('There is a problem with your seeding', error)

    })
    .finally(() => {
        console.log('Everything is okay and was closed')
        mongoose.connection.close()
    })