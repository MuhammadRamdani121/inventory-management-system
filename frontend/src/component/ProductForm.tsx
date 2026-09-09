import type { FormEvent } from "react";

type ProductFormProps = {
  formData: {
    name: string;
    price: number;
    stock: number;
    category: string;
  };

  onChange: (field: string, value: string | number) => void;

  onSubmit: (event: FormEvent<HTMLFormElement>) => void;

  onCancel: () => void;

  isEdit: boolean;
};

export default function productForm({
  formData,
  onChange,
  onSubmit,
  onCancel,
  isEdit,
}: ProductFormProps) {
  return (
    <>
      <header className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          {isEdit ? "Edit Product" : "Add Product"}
        </h2>

        <button type="button" onClick={onCancel} className="text-gray-500">
          ✕
        </button>
      </header>

      <main>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="rounded border px-3 py-2"
          />

          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => onChange("price", Number(e.target.value))}
            className="rounded border px-3 py-2"
          />

          <input
            type="number"
            placeholder="Stock"
            value={formData.stock}
            onChange={(e) => onChange("stock", Number(e.target.value))}
            className="rounded border px-3 py-2"
          />

          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => onChange("category", e.target.value)}
            className="rounded border px-3 py-2"
          />

          <footer className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onCancel}
              className="rounded border px-4 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded bg-black px-4 py-2 text-white"
            >
              {isEdit ? "Update" : "Tambah"}
            </button>
          </footer>
        </form>
      </main>
    </>
  );
}
