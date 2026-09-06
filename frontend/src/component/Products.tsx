import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

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
  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
