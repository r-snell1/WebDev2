import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();

// GET route to fetch students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;

