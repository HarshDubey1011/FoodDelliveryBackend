// app.js

const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const pricingController = require('./controllers/pricingController');

const app = express();
const port = 3000;

const dotenv = require('dotenv');
dotenv.config();

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/calculatePrice', pricingController.calculatePrice);

// Swagger documentation options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Food Delivery API',
      version: '1.0.0',
      description: 'API for calculating food delivery prices',
    },
  },
  apis: ['./controllers/*.js'], // Path to the API routes/controllers
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
