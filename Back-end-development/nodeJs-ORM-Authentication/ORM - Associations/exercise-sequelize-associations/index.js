const bodyParser = require('body-parser');
const express = require('express');

const patientsController = require('./controllers/patientsController')

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', patientsController.getAllPatients);
app.get('/surgeries', patientsController.getPatientsSurgeries);
app.get('/without-doctor', patientsController.getPatientsAndSurgeriesWithoutDoctor);
app.post('/', patientsController.createPatient);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});