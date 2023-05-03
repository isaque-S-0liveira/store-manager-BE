const express = require('express');
const productsController = require('./controllers/productsController');
const saleController = require('./controllers/saleController');
const { validateId, validateName } = require('./middlewares/productsValidations');
const {
  validateSaleInsert,
  validateProductId,
  validationId } = require('./middlewares/salesValidations');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAll);

app.get('/products/:id', validateId, productsController.getById);

app.post('/products', validateName, productsController.insertProduct);

app.post('/sales', validateSaleInsert, validateProductId, saleController.insertSale);

app.get('/sales', saleController.getAll);
app.get('/sales/:id', validationId, saleController.getById);

app.put('/products/:id', validateId, validateName, productsController.updateProduct);

app.delete('/products/:id', validateId, productsController.DeleteProduct);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;