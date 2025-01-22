import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
  const food = useLoaderData();
  console.log(food);

  return (
    <div className="w-10/12 mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-8">{food.foodName}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img
            src={food.foodImage}
            alt={food.foodName}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Text Details Section */}
        <div className="flex flex-col justify-center">
          <p className="text-lg">
            <span className="font-bold">Quantity:</span> {food.foodQuantity}
          </p>
          <p className="text-lg">
            <span className="font-bold">Pickup Location:</span>{' '}
            {food.pickupLocation}
          </p>
          <p className="text-lg">
            <span className="font-bold">Expiry Date:</span>{' '}
            {new Date(food.expiredDateTime).toLocaleString()}
          </p>
          <p className="text-lg">
            <span className="font-bold">Notes:</span> {food.additionalNotes}
          </p>
        </div>
      </div>

      {/* Donator Details Section */}
      <div className="mt-10 p-6 rounded-lg shadow-lg bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Donator Details</h2>
        <div className="flex items-center gap-6">
          {food.donator.image ? (
            <img
              src={food.donator.image}
              alt={food.donator.name}
              className="w-16 h-16 rounded-full shadow-md"
            />
          ) : (
            <img
              src="https://th.bing.com/th/id/OIP.GqGVPkLpUlSo5SmeDogUdwHaHa?rs=1&pid=ImgDetMain"
              alt={food.donator.name}
              className="w-16 h-16 rounded-full shadow-md"
            />
          )}

          <div>
            <p className="text-lg">
              <span className="font-bold">Name:</span> {food.donator.name}
            </p>
            <p className="text-lg">
              <span className="font-bold">Email:</span> {food.donator.email}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-10 text-center">
        <button
          className="btn bg-[#89b758] text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-200"
          onClick={() => alert('Thank you for checking the details!')}
        >
          Acknowledge
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
