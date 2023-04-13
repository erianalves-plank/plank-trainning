import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config()
import { rocketRouter } from '../routes/rocketRouter';
import { crewmanRouter } from '../routes/crewmanRouter';
import { crewRouter } from '../routes/crewRouter';
import { launchRouter } from '../routes/launchRoute';

const app = express();
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

app.use('/rocket', rocketRouter);
app.use('/crewman', crewmanRouter);
app.use('/crew', crewRouter);
app.use('/launch', launchRouter);

app.get('/', (req, res) => {
    return res.send('Hello Yellow');
})

app.listen(3333, () => console.log('Running.'));