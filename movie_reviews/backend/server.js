import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import movies from './api/movies.route.js'

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express.js API for Movies and Reviews',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express.js. It retrieves data from MongoDB sample_mflix database.',
   contact: {
      name: 'Your Name',
      url: 'https://yourwebsite.com',
      email: 'yourucid@njit.edu',
    },
  },
  servers: [
    {
      url: 'http://localhost:5050',
      description: 'Development Server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./api/movies.route.js'],
};

const swaggerSpec = swaggerJSDoc(options);

dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.use(cors())
app.use(express.json())

app.use("/api/v1/movies", movies)

app.use('*', (req,res) => {
  res.status(404).json({error: "not found"})
})

export default app