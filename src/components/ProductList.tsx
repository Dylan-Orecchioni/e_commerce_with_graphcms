"use client";

import Product from "./Product";

const ProductList = ({ products }: { products: any[] }) => {
  return (
    <div className="grid grid-cols-4 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
