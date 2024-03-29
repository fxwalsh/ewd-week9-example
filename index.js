// Load the http module to create an http server.
import createUsersRouter from './src/routes/userRouter';
import buildDependencies from "./src/config/dependencies";
import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const port = process.env.PORT
const dependencies = buildDependencies();

const app = express();
app.use(express.json())

app.use('/api/users', createUsersRouter(dependencies));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});