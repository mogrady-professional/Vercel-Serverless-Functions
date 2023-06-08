const express = require('express'); // Express web server framework
const colors = require('colors'); // For pretty console output
const dotenv = require('dotenv').config(); // Load environment variables from .env file
const cors = require('cors'); // CORS middleware
// Bring in Error Handler Middleware
const { errorHandler } = require('./middleware/errorMiddleware');
// Bring in Connection to MongoDB
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000; // Port to listen on
// Connect to MongoDB
connectDB();
const app = express(); // Create a new Express application
app.use(express.json()); // Parse request body as JSON
app.use(cors());

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.json({
    message: 'Hello, World3!',
  });
});

app.get('/about', (req, res) => {
  res.send('This is my about route..... ');
});

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Retrieve the NODE_ENV value
const nodeEnv = process.env.NODE_ENV;

// Determine the environment based on NODE_ENV value
const isProduction = nodeEnv === 'production';
const isLocal = nodeEnv === 'development';

// Example usage
if (isProduction) {
  console.log('Running in production environment');
} else if (isLocal) {
  console.log('Running in local environment');
} else {
  console.log('Unknown environment');
}

// Export the Express API
module.exports = app;
