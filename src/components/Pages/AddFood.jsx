import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

import Swal from 'sweetalert2';

const AddFood = () => {
  const { currentUser } = useContext(AuthContext);

  const handleAddFood = (e) => {
    e.preventDefault();
    console.log('Food added');
    const foodName = e.target[0].value;
    const foodImage = e.target[1].value;
    const foodQuantity = e.target[2].value;
    const pickupLocation = e.target[3].value;
    const expiredDateTime = e.target[4].value;
    const additionalNotes = e.target[5].value;
    const foodStatus = 'Available';
    const image = currentUser.photoURL;
    const name = currentUser.displayName;
    const email = currentUser.email;
    const donator = { image, name, email };

    const foodObj = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredDateTime,
      additionalNotes,
      donator,
      foodStatus,
    };
    console.log(foodObj);
    fetch('http://localhost:3000/foods/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(foodObj),
    })
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Your item is added!',
          icon: 'success',
        });
        e.target.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  };

  return (
    <div className="mt-20 mb-40 w-10/12 mx-auto">
      <h1 className="text-4xl font-bold text-center ">Add Food</h1>
      <form
        onSubmit={handleAddFood}
        className=" flex flex-col items-center justify-center mt-10 space-y-5"
      >
        <label className="form-control w-1/2">
          <input
            type="text"
            placeholder="Enter Food Name"
            className="input input-bordered"
          />
        </label>
        <label className="form-control w-1/2">
          <input
            type="url"
            placeholder="Enter Image URL"
            className="input input-bordered"
          />
        </label>
        <label className="form-control w-1/2">
          <input
            type="number"
            placeholder="Enter Food Quantity"
            className="input input-bordered"
          />
        </label>
        {/* location  */}
        <label className="form-control w-1/2">
          <input
            type="text"
            placeholder="Enter Pickup Location"
            className="input input-bordered"
          />
        </label>
        {/* Expired Date */}
        <label className="form-control w-1/2">
          <input
            type="date"
            placeholder="Enter Expiry Date"
            className="input input-bordered"
          />
        </label>
        <label className="form-control w-1/2">
          <input
            type="text"
            placeholder="Additioonal Notes"
            className="input input-bordered"
          />
        </label>

        <div className="flex justify-center items-center mt-10">
          <input
            type="submit"
            value="Submit"
            className="btn bg-transparent border-[#89b758] text-[#89b758] text-xl px-10 py-2 hover:bg-[#89b758] hover:text-white "
          />
        </div>
      </form>
    </div>
  );
};

export default AddFood;
