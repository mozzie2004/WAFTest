require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const path = require('path');
const umzug = require('./umzug');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json({extended: true}));
app.use('/api/foods', require('./routes/foods'));
app.use('/', express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})




const start = async () => {
    try {

        await sequelize.authenticate();
        await umzug.migrate.up();
        await umzug.seed.up();

        app.listen(PORT, ()=>{console.log('...start' + PORT)})

    } catch(e) {
        console.log(e)
    }
}

start();

