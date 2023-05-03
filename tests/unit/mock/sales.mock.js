const expected = {
  id: 4,
  itemsSold: [
    {
      productId: 1,
      quantity: 1
    },
    {
      productId: 2,
      quantity: 5
    }
  ]
};
const bodyExpected = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
];

const allSales = [
  {
    "saleId": 1,
    "date": "2023-05-03T00:13:04.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2023-05-03T00:13:04.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2023-05-03T00:13:04.000Z",
    "productId": 3,
    "quantity": 15
  }
];

const sale = [
  {
    "date": "2023-05-03T00:13:04.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2023-05-03T00:13:04.000Z",
    "productId": 2,
    "quantity": 10
  }
]

module.exports = { expected, bodyExpected, allSales, sale };