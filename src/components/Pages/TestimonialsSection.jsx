const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jane Doe',
      image:
        'https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg',
      feedback:
        'This platform has made it incredibly easy for me to donate food and help those in need. Highly recommended!',
      location: 'New York, USA',
    },
    {
      id: 2,
      name: 'John Smith',
      image:
        'https://assets.mobileworldlive.com/wp-content/uploads/2015/10/16130048/Dorsey-iamge.png',
      feedback:
        'I’ve been able to receive fresh food whenever I needed it. This initiative is a blessing!',
      location: 'Los Angeles, USA',
    },
    {
      id: 3,
      name: 'Emily Johnson',
      image: 'https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg',
      feedback:
        'The process is seamless and efficient. Kudos to the team for creating this amazing platform.',
      location: 'Chicago, USA',
    },
  ];

  return (
    <div className="w-10/12 mx-auto my-20 py-20">
      <h2 className="text-5xl font-bold text-center mb-10">
        What People Are Saying
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="shadow-lg rounded-lg p-6 bg-white text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{testimonial.location}</p>
            <p className="text-gray-700 italic">
              &quot;{testimonial.feedback}&quot;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
