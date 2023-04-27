const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  console.log(products);
  return products;
};

const getById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  console.log(product);
  return product;
};

const insertProduct = async (name) => { 
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUE (?)', [name],
  );
  return insertId;
};

module.exports = {
  getAll,
  getById,
  insertProduct,
};