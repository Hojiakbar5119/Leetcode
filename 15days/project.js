// projectService.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let projects = [];

// Loyihani qo'shish
app.post('/projects', (req, res) => {
    const project = req.body;
    projects.push(project);
    res.status(201).send(project);
});

// Barcha loyihalarni olish
app.get('/projects', (req, res) => {
    res.send(projects);
});

// Serverni ishga tushirish
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Project Service is running on http://localhost:${PORT}`);
});

