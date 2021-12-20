const express = require('express');
const { notes } = require('./db/db.json');
const fs = require('fs');
const path = require('path');

const PORT = process.env.Port || 3001
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// app.get('/api/notes', (req, res) => {
//   let results = notes;
//   console.log(req.query)
//   res.json(results);
// });

app.listen(PORT, ()=>{
    console.log(`API server is now on port ${PORT}`);
})
