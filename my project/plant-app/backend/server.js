const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = require('../database/database');
connectDB();

// Middleware
app.use(express.json());
app.use(express.static('../frontend'));

// Use routes
const routes = require('./routes');
app.use('/api', routes);


// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../frontend/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
