import React from 'react';

{/* review by sahil-san :0 */}

const Footer = () => {
  return (
    <footer className="bg-[#FFFBEA] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6  border-gray-300 pb-6">

          <div className="flex flex-col items-start gap-4 md:w-1/3">
            {/* get logo */}
            <img
              src=""
              alt="Rec N Roll logo"
              className="w-20 h-20 object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">Rec N Roll</h2>
              <p className="text-gray-700">Campbellton, NB</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#instagram">
                <img
                  src=""
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a href="#facebook">
                <img
                  src=""
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="#youtube">
                <img
                  src=""
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </a>
              <a href="#tiktok">
                <img
                  src=""
                  alt="TikTok"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* probably compatmentalized, 3 images layout */}
          <div className="flex flex-col md:flex-row items-center justify-end gap-8 md:w-2/3">
            {/* image card */}
            <div className="flex flex-col items-center text-center">
              <img
                src=""
                alt="Arcade"
                className="mb-2 w-auto h-[150px] object-cover"
              />
              <h3 className="text-lg font-semibold">Arcade</h3>
              <p className="text-gray-600">Enjoy our Arcade Text Here</p>
            </div>

            {/* image ard */}
            <div className="flex flex-col items-center text-center">
              <img
                src=""
                alt="Bowling"
                className="mb-2 w-auto h-[150px] object-cover"
              />
              <h3 className="text-lg font-semibold">Bowling</h3>
              <p className="text-gray-600">Enjoy our Arcade Text Here</p>
            </div>

            {/* image card */}
            <div className="flex flex-col items-center text-center">
              <img
                src=""
                alt="Playground"
                className="mb-2 w-auto h-[150px] object-cover"
              />
              <h3 className="text-lg font-semibold">Playground</h3>
              <p className="text-gray-600">Enjoy our Arcade Text Here</p>
            </div>
          </div>
        </div>
        {/* containerize these 3 image cards when refactoring */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-300 pt-8 mt-6">
          {/* activity layout*/}
          <div>
            <h4 className="text-lg font-semibold mb-3">Activities</h4>
            <ul className="space-y-1">

              <li>Mini Golf</li>
              <li>Arcade</li>
              <li>Playground</li>
              <li>Bowling</li>
              <li>Party Rooms</li>
              <li>Food and Beverage</li>

            </ul>
          </div>

          {/* pricing layout */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Pricing</h4>
            <ul className="space-y-1">
              <li>Day Passes</li>
              <li>Reservations</li>
              <li>Fees & Waivers</li>
              <li>Rentals</li>
              <li>Birthdays</li>
            </ul>
          </div>

          {/* facility layout routes */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Facility</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Safety</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* ask sahil bout containerizing this too */}

          {/* newsletter very specific to footer, prob not containerized  */}
          <div>
            <h4 className="text-lg font-semibold mb-3">
              Sign up for News and Offers
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="flex-1 border border-gray-400 px-3 py-2 rounded-l-xl focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-r-xl hover:bg-gray-800 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* copyright very specific to footer */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-sm space-y-2 md:space-y-0">
          <p>
            Want to learn about our <strong>mission</strong>?{' '}
            <a
              href="#blog"
              className="underline hover:text-orange-600"
            >
              Read more about us on our blog.
            </a>
          </p>
          <p className="text-gray-500">
            © 2024 Rec N Roll |{' '}
            <a
              href="#privacy"
              className="underline hover:text-orange-600"
            >
              Privacy
            </a>
          </p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;