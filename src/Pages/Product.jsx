import React from 'react';
import { useParams } from 'react-router-dom';
import { HomeData } from '../Data/Homedata';

const ProductPage = () => {
  const { productId } = useParams();
  const product = HomeData.find(item => item.id === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <img src={product.image} alt={product.title} className="object-contain h-48 w-48" />
      </div>
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="text-lg">Price: ${product.Price}</p>
      <p className="text-sm mb-1">Rating: {product.Rating}</p>
      <p className="text-sm">Processor: {product.specs.Processor}</p>
      <p className="text-sm">OS: {product.specs.OS}</p>
      <p className="text-sm">Graphics: {product.specs.Graphics}</p>
      <p className="text-sm">Memory: {product.specs.Memory}</p>
      <p className="text-sm">Storage: {product.specs.Storages}</p>
      <p className="text-sm">Display: {product.specs.Display}</p>
      
    </div>
  );
};

export default ProductPage;
