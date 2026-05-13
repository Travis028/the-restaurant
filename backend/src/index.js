const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(morgan('dev'));

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Restaurant API Running' });
});

// Routes (to be added)
app.get('/api', (req, res) => {
    res.json({ message: 'Restaurant SaaS Platform API' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
