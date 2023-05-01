const connection = require('./connection');

const insertDateSale = async () => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales (date) VALUES (NOW())');
  return insertId;
};

const insertSale = async (saleId, productId, quantity) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales_products ( sale_id, product_Id, quantity) VALUES(?,?,?)',
    [saleId, productId, quantity],
  );
  return insertId;
};

module.exports = {
  insertSale,
  insertDateSale,
};