import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const SERVER_PORT = 27017 //to be consistent with Utils.js
    const COLLECTION ="students" //to be consistent with your MongoDB collection
    useEffect(() => {
        axios.get(`http://localhost:${SERVER_PORT}/${COLLECTION}`)
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the students!", error);
            });
    }, []);

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map(student => (
                    <li key={student._id} className="left-align">
                        {student.name} - {student.age} - {student.gpa} - {student.major}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;

