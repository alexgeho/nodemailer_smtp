import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { emailRouter } from './routes/email-router';

const app: express.Express = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5003;
app.use('/email', emailRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the API');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
