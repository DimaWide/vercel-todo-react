// api/index.js
const express = require('express');
const serverless = require('serverless-http'); // Это библиотека для обертки Express как serverless функции
const app = express();

// Обработчик для корня
app.get('/', (req, res) => {
  res.send('Hello from Node.js with Express on Vercel!');
});

// Экспортируем сервер как serverless функцию
module.exports.handler = serverless(app);
