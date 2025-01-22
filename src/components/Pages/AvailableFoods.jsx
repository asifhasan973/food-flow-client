import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AvailableFoods = () => {
  const originalFoods = useLoaderData();
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [sortOrder, setSortOrder] = useState('asc');
  const [foods, setFoods] = useState(
    originalFoods.filter((food) => food.foodStatus === 'available')
  );

  const handleSort = () => {
    const sortedFoods = [...foods].sort((a, b) => {
      const dateA = new Date(a.expiredDateTime);
      const dateB = new Date(b.expiredDateTime);

      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setFoods(sortedFoods);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filteredFoods = originalFoods.filter(
      (food) =>
        food.foodStatus === 'available' &&
        food.foodName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFoods(filteredFoods);
    setVisibleCount(6);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleFoods = foods.slice(0, visibleCount);

  return (
    <div className="w-10/12 mx-auto mb-40 mt-20">
      <h1 className="text-center text-4xl font-bold mt-20 pb-10">
        Available Foods
      </h1>

      {/* Search and Sort Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by food name..."
          className="input input-bordered w-1/3"
        />

        {/* Sort Button */}
        <button
          onClick={handleSort}
          className="btn hover:bg-[#89b758] hover:text-white text-[#89b758] border-[#89b758] px-6 py-2 rounded-md bg-transparent transition duration-200"
        >
          Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleFoods.map((food) => (
          <div key={food._id} className="">
            <div className="card card-compact bg-base-100 h-full border">
              <figure>
                <img
                  className="h-[250px] object-cover"
                  src={food.foodImage}
                  alt={food.foodName}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{food.foodName}</h2>
                <p>{food.additionalNotes}</p>
                <h3 className="text-base">
                  <span className="font-bold">Availability:</span>{' '}
                  {food.foodStatus}
                </h3>
                <h3 className="text-base">
                  <span className="font-bold">Quantity:</span>{' '}
                  {food.foodQuantity}
                </h3>
                <h3 className="text-base">
                  <span className="font-bold">Expired Date:</span>{' '}
                  {new Date(food.expiredDateTime).toLocaleDateString()}
                </h3>
                <button className="btn bg-[#89b758] text-white border-0 text-lg px-10 hover:text-black">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleFoods.length < foods.length && (
        <div className="flex justify-center items-center mt-10">
          <button
            onClick={handleShowMore}
            className="btn bg-transparent border-[#89b758] text-[#89b758] text-xl px-10 py-2 hover:bg-[#89b758] hover:text-white"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
