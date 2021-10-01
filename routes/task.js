//all auth related woek will be done here
const router = require("express").Router();
const Task = require("../models/Task");

router.get("/alltasks", function(req, res) {
    return res.send("done");
});

router.post("/", async (req, res) => {
    // console.log(req.body);
    const newTask = new Task(req.body);
    try {
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router