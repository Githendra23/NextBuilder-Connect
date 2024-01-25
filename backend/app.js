const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user');
const verifyTokenRoutes = require('./routes/verifyToken');

app.use('/user', userRoutes);
app.use('/verifyToken', verifyTokenRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});