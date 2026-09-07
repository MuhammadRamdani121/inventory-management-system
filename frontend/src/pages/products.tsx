import { useState, type FormEvent } from "react";
import type { Product } from "../types/Product";
import ProductTable from "../component/ProductTable";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([
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
  ]);
  // Menambahkan UseState Filter
  const [search, setSearch] = useState("");
  // Menambahkan UseState SetCategory
  const [category, setCategory] = useState("All");
  // Menambahkan UseState Set Stock
  const [stockStatus, setStockStatus] = useState("All");
  // Menambahkan UseState Form
  const [isFormOpen, setIsFormOpen] = useState(false);
  // Membuat form state object
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    stock: 0,
    category: "",
  });

  // data category
  const categories = ["All", "Electronics"];

  //data Stock
  const stockStatuses = ["All", "Low Stock", "Out of Stock"];

  //
  // Filter Product Berdasarkan nama
  const filterProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || product.category === category) &&
      (stockStatus === "All" ||
        (stockStatus === "Low Stock" &&
          product.stock > 0 &&
          product.stock <= 5) ||
        (stockStatus === "Out of Stock" && product.stock === 0)),
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newProduct: Product = {
      id: products.length + 1,
      name: formData.name,
      price: formData.price,
      stock: formData.stock,
      category: formData.category,
    };

    setProducts([...products, newProduct]);

    setIsFormOpen(false);
  }
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

      {/* Menambahkan Fitur Tombol Tambah */}
      <button type="button" onClick={() => setIsFormOpen(true)}>
        Tambah Product
      </button>
      {isFormOpen && (
        <div>
          <h2>Add Product</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Product Name"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />

            <input
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={(event) =>
                setFormData({ ...formData, price: Number(event.target.value) })
              }
            />

            <input
              type="number"
              placeholder="Stock"
              value={formData.stock}
              onChange={(event) =>
                setFormData({ ...formData, stock: Number(event.target.value) })
              }
            />

            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(event) =>
                setFormData({ ...formData, category: event.target.value })
              }
            />

            <button type="submit">Tambah</button>
            <button type="button" onClick={() => setIsFormOpen(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      <ProductTable products={filterProducts} />
    </div>
  );
}
