const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body).then(results => {
        res.json(results)
    }).catch(error => {
        res.json(error)
    })
})

router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(results => {
        res.json(results)
    }).catch(error => {
        res.json(error)
    })
})

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).sort({day:-1}).limit(7).then(results => {
        res.json(results)
    }).catch(error => {
        res.json(error)
    })
})

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(res.params.id, {
        $push:{exercises: res.body}
    },{
        useFindAndModify:false
    }).then(results => {
        res.json(results)
    }).catch(error => {
        res.json(error)
    })
})

module.exports = router;