import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gpa: Number,
    major: String,
    status: String
});

export default mongoose.model('Student', studentSchema);

