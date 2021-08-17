import express from 'express';
import cors from 'cors';
import routes from './src/router/router';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', routes);

const port = 3333;
app.listen(port,() => console.log(`Server iniciado em "localhost:${port}"`));