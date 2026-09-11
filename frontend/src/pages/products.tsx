import { useState, type FormEvent, useEffect } from "react";
import ProductForm from "../component/ProductForm";
import ProductTable from "../component/ProductTable";
import type { Product } from "../types/Product";

export default function Products() {
  function handleFormChange(field: string, value: string | number) {
    setFormData({ ...formData, [field]: value });
  }
  // Membuat UseState
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/api/products");

        const data = await response.json();

        const formattedProducts: Product[] = data.map(
          (product: Omit<Product, "price"> & { price: string | number }) => ({
            ...product,
            price: Number(product.price),
          }),
        );

        setProducts(formattedProducts);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);
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

  // Membuat UseState Edit Product
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const newProduct: Product = await response.json();

      setProducts((products) => [...products, newProduct]);

      resetForm();
      setIsFormOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  function handleUpdate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!editingProduct) return;

    const updateProducts = products.map((product) =>
      product.id === editingProduct.id
        ? {
            ...product,
            name: formData.name,
            price: formData.price,
            stock: formData.stock,
            category: formData.category,
          }
        : product,
    );
    setProducts(updateProducts);
    setEditingProduct(null);
  }

  function handleDelete(id: number) {
    const updateProducts = products.filter((product) => product.id !== id);

    setProducts(updateProducts);
  }

  function resetForm() {
    setFormData({
      name: "",
      price: 0,
      stock: 0,
      category: "",
    });
  }
  return (
    <div className="w-full p-6">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <nav>
          <h1 className="text-2xl font-bold">Product</h1>
          <p className="text-sm text-gray-200">
            Manage Your Inventory Products
          </p>
        </nav>

        <nav className="mb-4 flex gap-3">
          {/* Menambahkan Fitur Tombol Tambah */}
          <button
            type="button"
            onClick={() => {
              resetForm();
              setIsFormOpen(false);
              setIsFormOpen(true);
            }}
            className="rounded bg-black px-4 py-2 text-white"
          >
            Tambah Product
          </button>

          {/* Menambahkan Fitur Search Menggunakan UseState */}
          <input
            type="text"
            placeholder="Search Product"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="rounded border-3 px-3 py-2"
          />

          {/* Menambahkan fitur dropdown category */}
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded border-3 px-3 py-2"
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
            className="rounded border-3 px-3 py-2"
          >
            {stockStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </nav>
      </header>

      {/* Body */}
      <main className="overflow-hidden rounded-lg border bg-white">
        <ProductTable
          products={filterProducts}
          onEdit={(product) => {
            setEditingProduct(product);

            setFormData({
              name: product.name,
              price: product.price,
              stock: product.stock,
              category: product.category,
            });
          }}

          onDelete={handleDelete}
        />

        {isFormOpen && (
          <ProductForm
            formData={formData}
            onChange={handleFormChange}
            onSubmit={handleSubmit}
            onCancel={() => setIsFormOpen(false)}
            isEdit={false}
          />
        )}

        {/* form edit */}
        {editingProduct && (
          <ProductForm
            formData={formData}
            onChange={handleFormChange}
            onSubmit={handleUpdate}
            onCancel={() => {
              resetForm();
              setEditingProduct(null);
            }}
            isEdit={true}
          />
        )}
      </main>
    </div>
  );
}
