const products = [
  {
    id: 1,
    name: "Laptop",
    price: 75000,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Monitor",
    price: 25000,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Keyboard",
    price: 3000,
    category: "Accessories"
  }
];

export const getProducts = (req, res) => {
  res.json({
    success: true,
    count: products.length,
    data: products
  });
};

export const getProductById = (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  res.json({
    success: true,
    data: product
  });
};