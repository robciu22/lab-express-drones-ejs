const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here
// const Drone = require('../models/Drone.model')

router.get('/drones', async(req, res, next) => {
    // Iteration #2: List the drones
    // ... your code here
    try {
        const drone = await DroneModel.find()
        console.log('My drones')
        res.render('drones/list', { drone })
    } catch (error) {
        console.log('Error in your drone list', error)
    }
})


// Iteration #3: Add a new drone
// ... your code here
router.get('/drones/create', async(req, res, next) => {
    res.render('drones/create-form')

})

router.post('/drones/create-form', async(req, res, next) => {
    try {
        // const newDrone = await DroneModel.create(req.body)
        res.redirect('/drones')
        console.log('Drone was created')
    } catch (error) {
        console.log('Error occured while creating drone')
    }
})


// Iteration #4: Update the drone
// ... your code here
router.get('/drones/:id/edit', async(req, res, next) => {
    // const drone = await DroneModel.findById(req.params.droneId)
    res.render('drones/update-form')
});

router.post('/drones/:id/edit', async(req, res, next) => {
    try {
        const { droneId } = req.params
        await DroneModel.findByIdAndUpdate(droneId, req.body)
        res.redirect('/drones')
    } catch (error) {
        console.log('Error occured while updating drone')
    }
});


// Iteration #5: Delete the drone
// ... your code here
router.post('/drones/:id/delete', async(req, res, next) => {
    await DroneModel.findByIdAndDelete(req.params.droneId)
    res.redirect('/drones')
});

module.exports = router;