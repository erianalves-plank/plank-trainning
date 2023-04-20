import 'reflect-metadata';
import express from 'express';
import AppDataSource from '../datasource/dataSource';
import './database'
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
dotenv.config()
import { rocketRouter } from '../routes/rocketRouter';

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

const app = express();

app.use(bodyParser.json());

app.use('/rocket', rocketRouter);


app.get('/', (req, res) => {
    return res.send('Hello Yellow');
})

app.listen(8080, () => console.log('Running.'));