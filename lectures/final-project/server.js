import 'dotenv/config.js';
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';

import connectDB from './config/db.js';
import swaggerSpec from './config/swagger.js';

// Routes
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json());

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

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
