const express = require('express');
const app = express();
require('./config/db');
const postsRoutes = require('./routes/troovController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors("http://localhost:3000/"));
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('Server started: 5500'));