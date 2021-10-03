//all auth related woek will be done here
const router = require("express").Router();
const Task = require("../models/Task");

router.post("/createtask", async (req, res) => {
    // console.log(req.body);
    const newTask = new Task(req.body);
    try {
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/deletetask/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        await task.deleteOne();
        return res.status(200).send("you deleted this task successfully");
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get("/AllTask", function (req, res) {
    try {
        Task.find({}, (err, task) => {
            return res.status(200).send(task);
        });
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/getTaskByDate/:date', async (req, res) => {
    try {
        await Task.find({dateOfCompletion:req.body.date}, (err, task) => {
                return res.status(200).send(task);
            });
    } catch (err) {
        return res.status(500).json(err);
    }
})


module.exports = router