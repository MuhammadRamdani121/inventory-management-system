import type { Product } from "../types/Product";

type ProductTableProps = {
  products: Product[];
};

export default function ProductTable({ products }: ProductTableProps) {
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
            <td className="p-3">Rp{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
