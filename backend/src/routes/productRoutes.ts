import { Router } from "express";

const router = Router();

const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 250000,
    stock: 20,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Mouse",
    price: 150000,
    stock: 15,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Monitor",
    price: 1500000,
    stock: 5,
    category: "Electronics",
  },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    category: req.body.category,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product Not Found",
    });
  }

  res.json(product);
});

export default router;
