const express = require('express');

const app = express();
app.use(express.json());

const port = 5000;

// GET, POST, PUT, DELETE

let studentsList = [
    {
        id: 1,
        name: 'Giridhar'
    },
    {
        id: 2,
        name: "Ramesh"
    }
];

app.get("/get-students-list", (req, res) => {
    // res.send();
    return res.status(200).json({
        status: 200,
        data: studentsList,
        success: true,
        message: "Stundets list fetched successfully"
    });
});

app.post("/add-student", (req, res) => {
    const studentData = req.body;
    studentsList.push(studentData);
    res.status(201).json({
        status: 201,
        data: studentData,
        success: true,
        message: `Student data created 
        successfully`
    });
});

// params => /update-student/:id
// query params => /update-student?id=1
app.put("/update-student/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    studentsList = studentsList.map((student, index) => {
        if (student.id === id) {
            return { ...student, name: name }
        }

        return student;
    });

    res.status(200).json({
        status: 200,
        data: studentsList,
        success: true,
        message: "Student data updated successfully",
    });
});

app.delete("/delete-student/:id", (req, res) => {
    const id = parseInt(req.params.id);

    studentsList = studentsList.filter((student) => {
        return student.id !== id;
    });

    return res.status(200).json({
        status: 200,
        data: studentsList,
        success: true,
        message: "Student data deleted successfully"
    });
});

// npm install express
// npm install nodemon
app.listen(port, () => {
    console.log(`Server running 
        on port http://localhost:${port}`);
});