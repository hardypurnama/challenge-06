const express = require('express');
const app = express();
const Motor = require('./modules/motor'); //import file /modules/motor.js

const PORT = process.env.PORT || 8000;

const motor = new Motor(); // instantiate class Motor

app.use(express.json()); // untuk membaca req.body dengan data berbentuk json

//endpoint CRUD motor
app.get('/motors',  (...args) => motor.handleGetMotors(...args)); // get Motors (ambil semua data motor)
app.get('/motor/:id', (...args) => motor.handleGetMotor(...args)); // get motor/:id (ambil data motor by id)
app.post('/motor', (...args) => motor.handleCreateMotor(...args)); // post motor (menambahkan data motor)
app.put('/motor/:id', (...args) => motor.handleUpdateMotor(...args)); // put motor/:id (mengedit data motor by id)
app.delete('/motor/:id', (...args) => motor.handleDeleteMotor(...args)); // delete motor/:id (delete data motor by id)

app.use((req, res) => {
    res.send("404 Not Found");
});
  
app.listen(PORT, () => {
    console.log(`Express Server Started at : http://localhost:${PORT}`);
});