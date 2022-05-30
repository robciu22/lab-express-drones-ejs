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
    const newDrone = await DroneModel.create(req.body)
    res.redirect('/drones')
    console.log('DRone was created')
        // const { name, propellers, maxSpeed } = req.body
        // drone.create({ name, propellers, maxSpeed })
        //     .then(() => res.redirect(`/drones`))
        //     .catch(error => next(error))
})


router.get('/drones/:id/edit', async(req, res, next) => {
    // Iteration #4: Update the drone
    // ... your code here
    const drone = await DroneModel.findById(req.params.droneId)
    res.render('drones/update-form')
});

router.post('/drones/:id/edit', async(req, res, next) => {
    // Iteration #4: Update the drone
    // ... your code here
    const { movieId } = req.params
    await DroneModel.findByIdAndUpdate(movieId, req.body)
    res.redirect(`/movies/${movieId}`)
});

router.post('/drones/:id/delete', async(req, res, next) => {
    // Iteration #5: Delete the drone
    // ... your code here
    await DroneModel.findByIdAndDelete(req.params.droneId)
    res.redirect('/drones')
});

module.exports = router;