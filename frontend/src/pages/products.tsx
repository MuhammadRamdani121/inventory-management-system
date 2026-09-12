import { useState, type FormEvent, useEffect } from "react";
import ProductForm from "../component/ProductForm";
import ProductTable from "../component/ProductTable";
import type { Product } from "../types/Product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteProductId, setDeleteProductId] = useState<number | null>(null);

  function handleFormChange(field: string, value: string | number) {
    setFormData({ ...formData, [field]: value });
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:3000/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        const formattedProducts: Product[] = data.map(
          (
            product: Omit<Product, "price"> & {
              price: string | number;
            },
          ) => ({
            ...product,
            price: Number(product.price),
          }),
        );

        setProducts(formattedProducts);
      } catch (error) {
        console.error(error);
        setError("Gagal mengambil data product.");
      } finally {
        setLoading(false);
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

    // VALIDATION
    if (!formData.name.trim()) {
      alert("Product name wajib diisi");
      return;
    }

    if (formData.price <= 0) {
      alert("Price harus lebih dari 0");
      return;
    }

    if (formData.stock < 0) {
      alert("Stock tidak boleh kurang dari 0");
      return;
    }

    if (!formData.category.trim()) {
      alert("Category wajib diisi");
      return;
    }

    // setelah ini baru POST / PUT
  };

  const handleUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!editingProduct) return;

    try {
      const response = await fetch(
        `http://localhost:3000/api/products/${editingProduct.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const updatedProduct: Product = await response.json();

      setProducts((products) =>
        products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product,
        ),
      );

      resetForm();
      setEditingProduct(null);
      setIsFormOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (deleteProductId === null) return;

    try {
      const response = await fetch(
        `http://localhost:3000/api/products/${deleteProductId}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      setProducts((products) =>
        products.filter((product) => product.id !== deleteProductId),
      );

      setDeleteProductId(null);
    } catch (error) {
      console.error(error);
    }
  };

  function resetForm() {
    setFormData({
      name: "",
      price: 0,
      stock: 0,
      category: "",
    });
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
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

          onDelete={(id) => setDeleteProductId(id)}
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

      {deleteProductId !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h2 className="mb-2 text-xl font-bold">Hapus Product?</h2>

            <p className="mb-6 text-gray-600">
              Apakah kamu yakin ingin menghapus product ini?
            </p>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setDeleteProductId(null)}
                className="rounded border px-4 py-2"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                className="rounded bg-red-600 px-4 py-2 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
