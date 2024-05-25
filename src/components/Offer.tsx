'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const Offer = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category/laptops');
        const data = await response.json();
        console.log('Fetched data:', data);
        setProduct(data.products[0]); 
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='w-full bg-[#f4e3d6] py-10 px-4 flex flex-col sm:flex-row justify-between rounded-md'>
    {product && (
      <>
        <div className='flex flex-col justify-around'>
          <h3 className='text-2xl text-black'>{product.title}</h3>
          <p className='text-base text-black max-w-80 '>{product.description}</p>
          <button className='px-3 py-2 bg-[#ed7847] rounded-md text-white max-w-32'>
            SHOP NOW
          </button>
        </div>
        <div className='relative w-48 h-48'>
          <div className='absolute text-sm flex justify-center items-center w-20 h-20 top-4 left-4 bg-orange-200 text-black p-2 border-white border-2 rounded-full z-50 '>
            ${product.price}
          </div>
          <Image
            src={product.thumbnail}
            alt={product.title}
            layout='fill'
            objectFit='cover'
            className='rounded-md'
          />
        </div>
      </>
    )}
  </div>
  );
};

export default Offer;
