const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let mockData = {
  products: [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Carrot' },
  ]
};

app.get('/api/products', (req, res) => {
  res.json(mockData.products);
});

app.listen(port, () => {
})