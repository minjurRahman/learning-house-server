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




app.listen(port, () =>{
    console.log('Education institute server running on port:', port )
})