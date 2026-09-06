import { useState } from "react";
import type { Product } from "../types/Product";
import ProductTable from "../component/ProductTable";

const products: Product[] = [
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
  {
    id: 4,
    name: "Monitor",
    price: 1500000,
    stock: 0,
    category: "PC",
  },
];

export default function Products() {
  // Menambahkan UseState Filter
  const [search, setSearch] = useState("");
  // Menambahkan UseState SetCategory
  const [category, setCategory] = useState("All");
  // Menambahkan UseState Set Stock
  const [stockStatus, setStockStatus] = useState("All");

  // data category
  const categories = ["All", "Electronics"];

  //data Stock
  const stockStatuses = ["All", "Low Stock", "Out of Stock"];

  // Filter Product Berdasarkan nama
  const filterProducts = products.filter(
    (product) =>
      product.name.toLocaleLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || product.category === category) &&
      (stockStatus === "All" ||
        (stockStatus === "Low Stock" &&
          product.stock > 0 &&
          product.stock <= 5) ||
        (stockStatus === "Out of Stock" && product.stock === 0)),
  );
  return (
    <div>
      <h1>Product</h1>

      {/* Menambahkan Fitur Search Menggunakan UseState */}
      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {/* Menambahkan fitur dropdown category */}

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Menambahkan fitur dropdown Stock */}
      <select
        value={stockStatus}
        onChange={(event) => setStockStatus(event.target.value)}
      >
        {stockStatuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>

      <ProductTable products={filterProducts} />
    </div>
  );
}
