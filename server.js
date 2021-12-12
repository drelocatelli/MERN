const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./src/routes');

// app use
const app = express();
const port = process.env.PORT || 3000;

const dbURL = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBCLUSTERNAME}.wkgwx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(dbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err) => {
    if(err) {
        console.log(err);
    }else {
        console.log('[MongoDB] is connected');
    }
});

app.use(cors());
app.use(cookieParser());

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log('[Server] is running on port ' + port);
});
