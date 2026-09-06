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
    id: 3,
    name: "Monitor",
    price: 1500000,
    stock: 5,
    category: "PC",
  },
];

export default function Products() {
  // Menambahkan UseState Filter
  const [search, setSearch] = useState("");
  // Menambahkan UseState SetCategory
  const [category, setCategory] = useState("All");

  // data category
  const categories = ["All", "Electronics"];
  // Filter Product Berdasarkan nama
  const filterProducts = products.filter(
    (product) =>
      product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
      (category === "All" || product.category === category),
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
      <ProductTable products={filterProducts} />
    </div>
  );
}
