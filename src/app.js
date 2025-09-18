import express from 'express';
import cors from 'cors';
// import usersRouter from './modules/users/user.routes.js';
import emailRoutes from './modules/email/email.routes.js';
import patientRoutes from './modules/patients/patient.routes.js'
import appointmentsRoutes from './modules/appointments/appointment.routes.js'

const app = express();

app.use(cors());
app.use(express.json());

// app.use('/api/users', usersRouter);
app.use('/api/email', emailRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/appointments', appointmentsRoutes);
// app.use('/api/rooms', usersRouter);
// app.use('/api/therapists', emailRoutes);
// app.use('/api/treatmentTypes', emailRoutes);


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });