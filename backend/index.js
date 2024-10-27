import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';  
import emailRoutes from './routes/mailSend.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

// Use JSON middleware
app.use(bodyParser.json());

// Enable CORS middleware
app.use(cors());

// Basic route
app.get('/', (req, res) => {
    res.send("API is Working");
});

// Mount your email routes at /api
app.use('/api', emailRoutes);

// Start the server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
