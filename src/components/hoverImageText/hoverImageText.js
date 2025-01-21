import React from 'react';

export const HoverImageText = () => {
  return (
    <div
      className="relative group w-64 h-80 bg-cover bg-center overflow-hidden cursor-pointer"
      style={{ backgroundImage: `url('https://placehold.co/400x600')` }} >
      {/* upon hovering the rectangle it sets in a translucence to the image*/}
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-all duration-300 ease-in-out"/>

      {/* bottom left text*/}
      <div className="absolute bottom-4 left-4 text-white transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-xl font-bold mb-1">Entertainment #1</h3>
        <p className="text-sm">Text Here</p>
      </div>

      {/* translucence sets in and the middle of the component lays out see more */}
      <div 
        className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        See More
      </div>
    </div>
  );
};