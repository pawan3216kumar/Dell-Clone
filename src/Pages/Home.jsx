import { useContext, useState } from 'react';
import { HomeData } from '../Data/Homedata';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {
  const {addToCart} = useContext(CartContext);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filterData = (data) => {
    if (!selectedFilter) return data;
    return data.filter(ele => ele.specs.Processor === selectedFilter);
  };

  const sortData = (data) => {
    if (!sortOrder) return data;
    return data.sort((a, b) => {
      if (sortOrder === 'price-asc') return a.Price - b.Price;
      if (sortOrder === 'price-desc') return b.Price - a.Price;
      if (sortOrder === 'rating-asc') return a.Rating - b.Rating;
      if (sortOrder === 'rating-desc') return b.Rating - a.Rating;
      return 0;
    });
  };

  const filteredAndSortedData = sortData(filterData(HomeData));

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="filter" className="mr-2 font-semibold">Filter by Processor:</label>
          <select id="filter" value={selectedFilter} onChange={handleFilterChange} className="p-2 border rounded">
            <option value="">All</option>
            <option value="Intel">Intel</option>
            <option value="AMD">AMD</option>
          </select>
        </div>
        <div>
          <label htmlFor="sort" className="mr-2 font-semibold">Sort by:</label>
          <select id="sort" value={sortOrder} onChange={handleSortChange} className="p-2 border rounded">
            <option value="">None</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="rating-asc">Rating (Low to High)</option>
            <option value="rating-desc">Rating (High to Low)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedData.map((ele, i) => (
          <div key={i} className="bg-slate-600 text-white p-4 rounded-lg shadow-md flex flex-col">
            <div className="flex justify-center mb-4">
              <img src={ele.image} alt={ele.title} className="object-contain h-48 w-48" />
            </div>
            <h2 className="text-xl font-bold mb-2">{ele.title}</h2>
            <div className="mb-2">
              <p className="text-sm mb-1">Rating: {ele.Rating}</p>
              <p className="text-sm">Processor: {ele.specs.Processor}</p>
              <p className="text-sm">OS: {ele.specs.OS}</p>
              <p className="text-sm">Graphics: {ele.specs.Graphics}</p>
              <p className="text-sm">Memory: {ele.specs.Memory}</p>
              <p className="text-sm">Storage: {ele.specs.Storages}</p>
              <p className="text-sm">Display: {ele.specs.Display}</p>
            </div>
            <div className="mt-auto">
              <p className="text-lg font-semibold mb-2">Price: ${ele.Price}</p>
              <div className="text-sm">
                <h2 className="font-semibold mt-2">{ele.Financing}</h2>
              </div>
              <button 
                onClick={() => addToCart(ele)} 
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
              >
                Add to Cart
              </button>
              <Link to={`/product/${ele.id}`} className="text-blue-500 underline mt-2 block">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
