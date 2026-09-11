import express from "express";
import cors from "cors";

import { pool } from "./db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

pool
  .query("SELECT NOW()")
  .then((result) => {
    console.log("Database connected:", result.rows[0]);
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

app.get("/", (req, res) => {
  res.json({
    message: "Inventory API is running!",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
