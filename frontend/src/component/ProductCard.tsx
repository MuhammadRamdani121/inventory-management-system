import type { Product } from "../types/Product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Harga: Rp{product.price}</p>
      <p>Stock: Rp{product.stock}</p>
      <p>Category: Rp{product.category}</p>
    </div>
  );
}
