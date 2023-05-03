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

const getAll = async () => {
  const [allSales] = await connection.execute(
`SELECT 
sp.sale_id AS saleId,
s.date AS date,
sp.product_id AS productId,
sp.quantity AS quantity
FROM sales AS s
INNER JOIN 
sales_products AS sp ON s.id = sp.sale_id
GROUP BY saleId, productId, quantity
ORDER BY saleId; `, [],
  );
  return allSales;
};

const getById = async (id) => {
const [sale] = await connection.execute(
`SELECT 
 s.date AS date,
 sp.product_id AS productId,
 sp.quantity AS quantity
FROM sales AS s
INNER JOIN 
 sales_products AS sp ON s.id = sp.sale_id 
where sp.sale_id = ?
ORDER BY sp.sale_Id `, [id],
  );
  return sale;
};

module.exports = {
  insertSale,
  insertDateSale,
  getAll,
  getById,
};