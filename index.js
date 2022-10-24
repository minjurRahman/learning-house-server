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

//Display course category
app.get('/course-categories', (req, res) =>{
    res.send(categories)
})

//dynamic category if needed
app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    if(id === '08'){
        res.send(news);
    }
    else{
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }

})

//all the courses
app.get('/course', (req, res) =>{
    res.send(news);
})

app.listen(port, () =>{
    console.log('Education institute server running on port:', port )
})