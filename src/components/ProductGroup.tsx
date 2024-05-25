// components/ProductGrid.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { fetchProductsByCategory, Product } from '@/utils/api';
import ProductCard from './ProductCard';

interface ProductGridProps {
  category: string;
}

const ProductGroup: React.FC<ProductGridProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetchProductsByCategory(category);
        setProducts(products.slice(0, 4)); // Limit to 4 products
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGroup
