const express = require('express');
const Workout = require('../models/workoutModle');
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, UpdateWorkout } = require('../controllers/workoutController');


const router = express.Router();


/*
* Route : /api/workouts
* Method : Get
* Description : Get all workouts
* Access : public
* Parameters : None
*/

router.get('/', getWorkouts)



/*
* Route : /api/workouts/:id
* Method : Get
* Description : Get a Single workout by its ID
* Access : public
* Parameters : ID
*/

router.get('/:id', getWorkout)


/*
* Route : /api/workouts
* Method : POST
* Description : Create add new workout
* Access : public
* Parameters : none
*/

router.post('/', createWorkout);

/*
* Route : /api/workouts/:id
* Method : DELETE
* Description : Delete workout by id
* Access : public
* Parameters : id
*/


router.delete('/:id', deleteWorkout);

/*
* Route : /api/workouts/:id
* Method : Patch
* Description : Update workout by id
* Access : public
* Parameters : id
*/

router.patch('/:id', UpdateWorkout)

module.exports = router