// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

// Create an Express application
const app = express();

app.use(bodyParser.json());

// Define a route for the root endpoint
app.use('/auth', authRoutes);

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
