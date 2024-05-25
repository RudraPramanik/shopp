// components/UI/ImageSlider.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64">
        <Image
          src={selectedImage}
          alt="Selected product image"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex mt-4 space-x-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative w-16 h-16 cursor-pointer border-2 ${selectedImage === image ? 'border-blue-500' : 'border-transparent'}`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
