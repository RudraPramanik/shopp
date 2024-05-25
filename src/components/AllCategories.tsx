'use client';
import { useEffect, useState, FC } from 'react';
import Card from './Card'; // Ensure Card component is correctly imported

interface Category {
  slug: string;
  name: string;
  url: string;
}

const AllCategories: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Card className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <ul className="">
        {categories.map((category) => (
          <li key={category.slug} className="text-base text-gray-500 my-1 cursor-pointer">
            {category.name}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default AllCategories;

// 'use client'
// import { useEffect, useState, FC } from 'react';
// import Card from './Card';

// const AllCategories: FC = () => {
//   const [categories, setCategories] = useState<string[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<null | string>(null);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products/categories');
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         setError('Failed to load categories');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <Card className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
//       <ul className="">
//         {categories.map((category) => (
//           <li key={category} className="text-base text-gray-500 my-1 cursor-pointer ">{category}</li>
//         ))}
//       </ul>
//     </Card>
//   );
// };

// export default AllCategories;
