const Workout = require('../models/workoutModle');
const mongoose = require('mongoose')
//get all Workouts

exports.getWorkouts = async (req, res) => {

    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    if (workouts.length === 0)
        return res.status(404).json({ error: "No entries found" })

    res.status(200).json(workouts)
}

//get all single Workouts by its id

exports.getWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Workouts" })
    }

    const workout = await Workout.findById(id);

    if (!workout)
        return res.status(404).json({ error: "No such Workout" })

    res.status(200).json(workout);
}

//create a new Workouts

exports.createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    let emptyFields = [];
    
    if (!title) {
        emptyFields.push('title')
    } else if (!load) {
        emptyFields.push('load')
    } else if (!reps) {
        emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error:'Plese fill all the fields!',emptyFields})
    }
    // add doc to DB
    try {
        const workout = await Workout.create({
            title,
            load,
            reps
        });

        res.status(200).json(workout);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


// Delete Workout by its ID

exports.deleteWorkout = async (req, res) => {
    const { id } = req.params;  // params, not pramas

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" });
    }

    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
        return res.status(404).json({ error: "No such workout to delete" });
    }

    res.status(200).json(workout);
};


// Update Workout by its ID

exports.UpdateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" });
    }

    const workout = await Workout.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true, runValidators: true }
    );

    if (!workout) {
        return res.status(404).json({ error: "No such workout to update" });
    }

    res.status(200).json(workout);
};


