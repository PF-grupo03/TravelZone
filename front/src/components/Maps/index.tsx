import React from 'react';

const TourMap = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-2">Tour Map</h2>
      <p className="text-gray-600 mb-4">
        This comprehensive map is designed to guide you through an exciting journey filled with remarkable destinations and captivating experiences.
      </p>
      <div className="border-2 border-gray-200 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.843570111519!2d98.98761907487854!3d18.788792287240506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a6d3f5e4ff3%3A0x5c76e6c8f5b437d3!2sChiang%20Mai%2C%20Mueang%20Chiang%20Mai%20District%2C%20Chiang%20Mai%2C%20Thailand!5e0!3m2!1sen!2sus!4v1692984263480!5m2!1sen!2sus"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-64"
        ></iframe>
      </div>
    </div>
  );
};

export default TourMap;
