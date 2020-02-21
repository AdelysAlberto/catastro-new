import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

dotenv.config();
const routes = require('./routes');
const db = require('./dal/models');


const app = express();
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(morgan('tiny'));


app.get('/', (req, res) => {
    res.send('Hi');
});

app.use('/', routes);

app.listen(process.env.PORT, () => {
    db.sequelize.sync()
        .then(() => {
            console.log('Connected BD');
            console.log('Starting in Port', process.env.PORT);
        })
        .catch((error) => {
            console.log(error);
        });
});
