const express = require('express');

const PORT = process.env.Port || 3001
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//api routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//port is listening
app.listen(PORT, ()=>{
    console.log(`API server is now on port ${PORT}`);
})
