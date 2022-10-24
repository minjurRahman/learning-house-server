const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/course.json');

//Get response for running
app.get('/', (req, res) =>{
    res.send('Education plus API Running');
});

// Dynamic get course by ID
app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id)
    const selectCourse = news.find(n => n.id === id);
    res.send(selectCourse);

}) 





app.listen(port, () =>{
    console.log('Education institute server running on port:', port )
})