import 'dotenv/config.js';
import express from 'express';
import bodyParser from 'body-parser';

import connectDB from './config/db.js';

// Routes
import authRouter from './routers/authRoutes.js';
import taskRouter from './routers/taskRoutes.js';

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json());

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, () => {
  try {
    connectDB(process.env.MONGO_URI);
    console.log(`Server - http://localhost:${port}`);
  } catch (error) {
    console.error(error);
  }
});
