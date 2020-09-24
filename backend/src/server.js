const express = require('express');
const cors = require('cors');

const app = express();

const router = require('./routes');

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.get('/', (req, res)=>{
   res.json({teste: "tá indo"});
})


module.exports = app;