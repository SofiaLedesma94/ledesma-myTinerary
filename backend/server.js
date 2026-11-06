const path = require('path');
const express = require('express');
const cors = require('cors');

// Esto le dice explícitamente que busque el .env un nivel arriba (en la raíz del proyecto)
require('dotenv').config({ path: path.join(__dirname, '../.env') });

console.log("Estado MONGO_URI:", process.env.MONGODB_URI ? "✅ Cargada correctamente" : "❌ No encontrada o vacía");

require('./config/database');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/', router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`🚀 Servidor de MyTinerary corriendo en el puerto ${port}`);
});