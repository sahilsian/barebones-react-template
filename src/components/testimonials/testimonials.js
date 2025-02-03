import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {

  return (
    <section className="bg-[#20346f] relative text-white py-32 min-h-[400px]">
        {/* ask about spacing and orientation here, mines just by trial and error */}
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* wait for sahil to review this, basic buttons for now, first one is left side second one is right*/}
        
        <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#D07935] absolute left-8 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <FiChevronLeft/>
        </button>

        <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#D07935] absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <FiChevronRight/>
        </button>

        {/* placeholder circle for now, replace with actual testimonial images  */}
        <div className="mx-auto w-24 h-24 mb-4 rounded-full bg-gray-300 flex-shrink-0">
        </div>

        {/* testimonials name, and text area */}
        <h2 className="text-2xl font-semibold">First Name</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;