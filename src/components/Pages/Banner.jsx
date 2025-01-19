const Banner = () => {
  return (
    <div
      className="hero min-h-[700px]"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/free-photo/food-mix-salad-noodles-grillea-chicken-garlic-greena-top-view_141793-15488.jpg?t=st=1737261968~exp=1737265568~hmac=7e27d043e5761c94ba626a986040dbaaf9b74e1c2b207d290c101a5af4a7074f&w=2000)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="md:w-3/4">
          <h2 className="md:text-2xl font-semibold text-[#a1df5f]">
            HAPPY HOUR SELL
          </h2>
          <h1 className="mb-5 text-5xl md:text-8xl font-bold">
            We Serve <span className="text-[#89b758]">Delicious </span>
            Fast Foods
          </h1>

          <button className="btn bg-[#89b758] text-white border-0 text-lg px-10 hover:text-black ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
