const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const challengeRoutes = require('./routes/challenges');
const db = require('./config/db');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use('/api/challenges', challengeRoutes);
app.use('/api/community', )

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});