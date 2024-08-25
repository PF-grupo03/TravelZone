import React from 'react';

const BookingCard = ({ price }) => {
  return (
    <div className="flex justify-end">
      <div className="bg-white p-4 shadow-lg rounded-lg max-w-xs">
        <div className="text-gray-500">Price</div>
        <div className="text-xl font-bold">From</div>
        <div className="text-3xl font-bold text-gray-800">${price}</div>

        <div className="mt-4 flex">
          <button className="text-lg font-semibold border-b-2 border-teal-500 pb-1 mr-4">
            Booking Form
          </button>
          <button className="text-lg font-semibold text-gray-500">
            Enquiry Form
          </button>
        </div>

        <div className="mt-4 text-gray-500">
          <div>Date</div>
          <div className="font-medium text-gray-800">03-13-2024</div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <span className="text-gray-800">Adults</span>
            <div className="flex items-center">
              <button className="bg-gray-200 px-2">-</button>
              <span className="mx-2">1</span>
              <button className="bg-gray-200 px-2">+</button>
            </div>
          </div>
          <div className="text-gray-500 text-sm">Over 18 (${price})</div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <span className="text-gray-800">Children</span>
            <div className="flex items-center">
              <button className="bg-gray-200 px-2">-</button>
              <span className="mx-2">0</span>
              <button className="bg-gray-200 px-2">+</button>
            </div>
          </div>
          <div className="text-gray-500 text-sm">Under 18 ($200)</div>
        </div>

        <div className="mt-4">
          <span className="text-gray-800">Extra Services</span>
          <div className="flex flex-col mt-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Health Insurance ($220)
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              Medical Insurance ($45)
            </label>
          </div>
        </div>

        <button className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg font-semibold">
          BOOK NOW FOR ${price}
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
