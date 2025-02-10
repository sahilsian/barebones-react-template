import React from 'react';

{/* review by sahil-san :0 */}

const Footer = () => {
  return (
    <footer className="bg-[#20346f]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6  border-gray-300 pb-6">

          <div className="flex flex-col items-start gap-4 md:w-1/3">
            {/* get logo */}
            
            <div>
              <h2 className="text-2xl font-bold text-white">Sno-Fest</h2>
              <p className="text-white">Campbellton, NB</p>
            </div>
            
          </div>

          
        </div>
        {/* containerize these 3 image cards when refactoring */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-300 pt-8 mt-6">
          {/* activity layout*/}
          

          {/* ask sahil bout containerizing this too */}

          {/* newsletter very specific to footer, prob not containerized  */}
          
        </div>

        {/* copyright very specific to footer */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-sm space-y-2 md:space-y-0">
          
          <p className="text-white">
            © 2024 Snofest |{' '}
            {/* <a
              href="#privacy"
              className="underline hover:text-orange-600"
            >
              Privacy
            </a> */}
          </p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;