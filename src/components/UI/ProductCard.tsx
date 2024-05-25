// components/UI/ProductCard.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { Product } from '@/utils/api';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex sm:flex-row flex-col border border-gray-300 rounded-md p-4 mb-4">
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src={product.thumbnail}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className=" mx-2 sm:ml-4">
        <h3 className="text-xl font-bold">{product.title}</h3>
        <p className="text-sm text-gray-700">{product.description}</p>
        <p className="text-lg font-semibold mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
