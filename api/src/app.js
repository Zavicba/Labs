const express = require('express');
const morgan = require('morgan')
const json = require('express')
const apiRoutes = require('./routes/api');
const bodyParser = require('body-parser'); 
const cors = require('cors')
const app = express();

//middlewares
app.use(morgan('dev'))
//app.use(json());
//app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' })); 
//app.use(express.urlencoded({extended: false}));

app.use(cors())

/* app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
 *///rutas
app.use('/api/search',apiRoutes);





module.exports = app;