const express = require('express');
const productsController = require('./controllers/productsController');
const { validateId, validateName } = require('./middlewares/productsValidations');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAll);

app.get('/products/:id', validateId, productsController.getById);

app.post('/products', validateName, productsController.insertProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;