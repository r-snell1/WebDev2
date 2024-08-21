import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import SERVER_PORT from './Utils.js';
import studentsRouter from './routes/students.js'; 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const DB_NAME="school"
mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Routes
app.use('/students', studentsRouter);

// Start server
const PORT = process.env.PORT || SERVER_PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
