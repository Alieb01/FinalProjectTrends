const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./api/productRoutes');
const planRoutes = require('./api/planRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/rd/product', productRoutes);
app.use('/api/rd/plan', planRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
