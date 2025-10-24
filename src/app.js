const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api/v1/auth', require('./routes/authRoutes'));

// Ruta de prueba
app.get('/api/v1/health', (req, res) => {
  res.json({ message: 'API LoboShop funcionando correctamente' });
});

module.exports = app;
