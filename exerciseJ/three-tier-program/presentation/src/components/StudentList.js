import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import {hideTag} from "./HideTag";

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const SERVER_PORT = 9999 //to be consistent with Utils.js
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
            <button onClick={hideTag}> Hide/Show student count</button>

            <ul id={"studentHide"}>
                <h2>{students.length}</h2>
                {students.map(student => (
                    <li key={student._id} className="left-align">
                        {student.name} - {student.gpa} - {student.major} - {student.status}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;

