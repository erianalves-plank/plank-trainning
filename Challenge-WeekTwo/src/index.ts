import express from 'express';
//import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

app.use('/rockets', require('../routes/rockets'));

app.get('/', (req, res) => {
    return res.send('Hello Yellow');
})

app.listen(3333, () => console.log('Running.'));