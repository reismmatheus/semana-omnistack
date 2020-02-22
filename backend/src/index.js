const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://dwuino:dwuino@cluster0-opsu1.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json())
app.use(routes);

//Query Params: req.query - ?nome=matheus
//Route Params: req.params - /id :id
//Body: req.body

app.listen(3333);