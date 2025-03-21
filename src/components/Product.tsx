import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  description: string;
  onAddToCart: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 bg-white"
        key={product.id}
      >
        <Image
          src={product.images[0].url}
          alt={product.name}
          objectFit="cover"
          layout="responsive"
          width={300}
          height={300}
          className="rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="text-lg font-bold text-green-600">
              ${product.price}
            </span>
          </p>
          <p className="text-sm text-gray-500 mt-2">{product.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
