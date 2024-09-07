// index.js
const express = require('express');
const sequelize = require('./src/config/config');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/auth', authRoutes);

sequelize.sync({ force: false }) // Sync models to the database
  .then(() => {
    console.log('Database connected and models synchronized');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Database connection failed:', err.message));
