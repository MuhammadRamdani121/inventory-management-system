import type { Product } from "../types/Product";

type ProductTableProps = {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
};

export default function ProductTable({
  products,
  onEdit,
  onDelete,
}: ProductTableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b text-left">
          <th className="p-3">ID</th>
          <th className="p-3">Product</th>
          <th className="p-3">Category</th>
          <th className="p-3">Stock</th>
          <th className="p-3">Status</th>
          <th className="p-3">Price</th>
          <th className="p-3">Action</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-b">
            <td className="p-3">{product.id}</td>
            <td className="p-3">{product.name}</td>
            <td className="p-3">{product.category}</td>
            <td className="p-3">{product.stock}</td>
            <td className="p-3">
              {product.stock === 0
                ? "Out of Stock"
                : product.stock <= 5
                  ? "Low Stock"
                  : "In Stock"}
            </td>
            <td>{Number(product.price).toLocaleString("id-ID")}</td>

            <td className="p-3">
              <button type="button" onClick={() => onEdit(product)}>
                Edit
              </button>

              <button type="button" onClick={() => onDelete(product.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
