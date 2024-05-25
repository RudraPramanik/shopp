// components/ProductCard.tsx
"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/utils/api";
import Link from "next/link";
import RattingIcon from "./icons/RattingIcon";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border border-gray-300 rounded-md p-4 space-y-2 ">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.thumbnail}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-row space-x-1">
          <RattingIcon />
          <RattingIcon />
          <RattingIcon />
          <RattingIcon />
          <RattingIcon />
          <p className="text-sm text-gray-600">{"(56)"}</p>
        </div>
        <Link href={`/product/${product.id}`}></Link>
        <p className="text-xs text-gray-700 mb-2">{product.description}</p>
        <p className="text-sm font-semibold text-indigo-600 ">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
