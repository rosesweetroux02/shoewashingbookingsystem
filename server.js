// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle booking submission
app.post('/api/bookings', (req, res) => {
    const bookingData = req.body;

    // Here you would typically save this data to a database
    console.log('Booking Data Received:', bookingData);

    // Respond with a confirmation message
    res.json({
        message: 'Booking confirmed!',
        bookingReference: Math.floor(Math.random() * 1000000), // Random booking reference number
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});