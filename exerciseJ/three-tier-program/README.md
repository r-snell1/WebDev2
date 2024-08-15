Here are the things you need to complete to bring this app live:

1) create a Mongo DB and update const DB_NAME="   " inside express-server.js
2) create a collection with the name of your choice, and update const COLLECTION ="  " inside StudentList.js
3) fill in the collection with a few JSON documents, per backend\models\Student.js's schema
3) pick a server port for express. Update this value for both backend\Utils.js and StudentsList.js
4) launch the server under 'backend' folder. Command: node express-server.js
5) go to the 'presentation' folder, launch the React app. Command: npm start

6) go back to the DB you created, add a new field (i.e major) to all the documents
7) update studentSchema inside backend\models\Student.js with this 'new' field
8) update presentation\src\components\StudentList.js to incorporate this 'new' field

Sit back and enjoy your work!
