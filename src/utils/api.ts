
export interface Product {
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
  
  export interface Category {
    id: number;
    name: string;
  }
  
  const BASE_URL = 'https://dummyjson.com';
  
  export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.products;
  };
  
  export const fetchProductById = async (id: number): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    const data = await response.json();
    return data;
  };
//   export const fetchProductById = async (id: number): Promise<Product> => {
//     const response = await fetch(`${BASE_URL}/products/${id}`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch product');
//     }
//     const data = await response.json();
//     return data;
//   };
  
export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products by category');
    }
    const data = await response.json();
    return data.products;
  };
  