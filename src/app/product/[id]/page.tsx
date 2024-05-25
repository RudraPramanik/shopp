// app/product/[id]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProductById, fetchProductsByCategory, Product } from '@/utils/api';
import ImageSlider from '@/components/UI/ImageSlider';
import ProductCard from '@/components/UI/ProductCard';
import RattingIcon from '@/components/icons/RattingIcon';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productData = await fetchProductById(Number(id));
        setProduct(productData);
        const categoryProductsData = await fetchProductsByCategory(productData.category);
        setCategoryProducts(categoryProductsData);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      {product && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="col-span-1">
              <ImageSlider images={product.images} />
            </div>
            <div className="col-span-1">
              <div className='flex flex-row space-x-2' >
              <RattingIcon/>
              <RattingIcon/>
              <RattingIcon/>
              <RattingIcon/>
              <RattingIcon/>

              </div>
              <p className="text-lg mb-4">{product.description}</p>
              <h1 className="text-xl mb-4"> Brand: <span className='text-xl font-semibold' >{product.title}</span> </h1>

              <div className="mt-4 flex flex-row items-center space-x-4 ">
                <p className="text-2xl font-bold">${product.price}</p>
                <p className=' bg-yellow-400 p-2 text-xl font-semibold rounded-md ' >20% off</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-md mt-8">
            <div className="border-b border-gray-300">
              <p className="px-4 py-2">Product Description</p>
            </div>
            <p className="text-lg max-w-96 p-4 mb-4">
              <span className="font-semibold">Description</span>
              <br />
              {product.description}
            </p>
           
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((categoryProduct) => (
                <ProductCard key={categoryProduct.id} product={categoryProduct} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
