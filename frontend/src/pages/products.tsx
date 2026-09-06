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
];

export default function Products() {
  // Menambahkan UseState
  const [search, setSearch] = useState("");

  // Filter Product Berdasarkan nama
  const filterProducts = products.filter((products) =>
    products.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
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

      <ProductTable products={filterProducts} />
    </div>
  );
}
