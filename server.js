const express = require('express');
const { notes } = require('./db/db.json');
const fs = require('fs');
const path = require('path');

const PORT = process.env.Port || 3001
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.get('/api/notes', (req, res) => {
//   let results = notes;
//   console.log(req.query)
//   res.json(results);
// });

app.listen(PORT, ()=>{
    console.log(`API server is now on port ${PORT}`);
})
