'use client'
import { useState, FC, ChangeEvent, FormEvent } from 'react';

const NewsLetter: FC = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <div className="max-w-md mx-auto p-6 text-white ">
      <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to our Newsletter</h2>
      <p className="mb-4 text-sm text-center">Stay updated with the latest news and exclusive offers news and exclusive offers. </p>
      <form onSubmit={handleSubmit} className="flex items-center relative">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full p-4 pl-24 rounded-md border border-gray-300 focus:outline-none text-gray-600 "
          required
        />
        <button
          type="submit"
          className="absolute right-0 text-white px-4 py-2 my-2 mx-2 rounded-md bg-[#ed7847] focus:outline-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
