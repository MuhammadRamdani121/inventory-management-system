import express from "express";
import cors from "cors";

import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Inventory API is running!",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
