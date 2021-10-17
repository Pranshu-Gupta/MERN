const express = require('express');
const connectDB = require('./config/db');

const expressApp = express();

connectDB();

expressApp.use(express.json());

expressApp.get('/', (req, res) => res.send('API is running'));

//define routes
expressApp.use('/api/users', require('./routes/api/users'));
expressApp.use('/api/auth', require('./routes/api/auth'));
expressApp.use('/api/posts', require('./routes/api/posts'));
expressApp.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

expressApp.listen(PORT, () => console.log(`Server is up and running on http://localhost:${PORT}`));
