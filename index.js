const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const task = require('./routes/task');


dotenv.config()
const port = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}, ()=>{
    console.log("Connected to DATABASE")
});
app.use(express.json());

app.use("/api/task", task);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

