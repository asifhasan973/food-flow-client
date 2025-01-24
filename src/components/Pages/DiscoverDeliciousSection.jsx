const DiscoverDeliciousSection = () => {
  const foodCategories = [
    {
      id: 1,
      title: 'Healthy Salads',
      description:
        'Explore fresh, nutritious, and delicious salad options for a healthy lifestyle.',
      image:
        'https://www.healthygreenkitchen.com/wp-content/uploads/2022/02/healthy-quinoa-chicken-salad-bowl.jpg',
    },
    {
      id: 2,
      title: 'Hearty Meals',
      description:
        'Enjoy a variety of warm, hearty meals perfect for any time of the day.',
      image:
        'https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=700,466',
    },
    {
      id: 3,
      title: 'Sweet Treats',
      description:
        'Indulge in delightful desserts and satisfy your sweet tooth with our options.',
      image:
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      id: 4,
      title: 'Beverages',
      description:
        'Find refreshing beverages, smoothies, and drinks for every occasion.',
      image:
        'https://eu-images.contentstack.com/v3/assets/blta023acee29658dfc/blta9f158c45627aa62/651dbb742365a678d7ec7f18/AdobeStock_279692163_Editorial_Use_Only-Beverage-FTR-new.jpg?disable=upscale&width=1200&height=630&fit=crop',
    },
  ];

  return (
    <div className="w-full py-20 ">
      <div className="w-10/12 mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 text-gray-800">
          Discover Delicious Food
        </h2>
        <p className="text-lg text-gray-600 mb-16">
          Dive into a variety of food options curated for every taste. From
          healthy meals to indulgent treats, we have something for everyone.
        </p>

        {/* Food Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {foodCategories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-white text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverDeliciousSection;
