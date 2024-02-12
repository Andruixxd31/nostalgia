import { config } from 'dotenv';
import express from 'express';
import userRoutes from './routes/auth.routes.js';
config();

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000)

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Global Variables

// Routes
app.get('/', (_, res) => {
  res.send("hello world");
});
app.use(userRoutes);

export default app;
