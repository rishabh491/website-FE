export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* About */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white">Rishabh Sahani</h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Professional interior design and home planning solution 2d and 3d. 
            Bringing life to your spaces with colors and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm sm:text-base">
            <li><a href="#services" className="hover:text-indigo-400">Services</a></li>
            <li><a href="#portfolio" className="hover:text-indigo-400">Portfolio</a></li>
            <li><a href="#about" className="hover:text-indigo-400">About</a></li>
            <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">📍 Makrana,Rajasthan,India</p>
          <p className="text-gray-400 text-sm sm:text-base">📞 +91 7568807817</p>
          <p className="text-gray-400 text-sm sm:text-base">✉ ramvijaysahani49@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="border-t border-gray-700 py-4 text-center text-xs sm:text-sm text-gray-500">
        © {new Date().getFullYear()} Sahani Interiors. All rights reserved.
      </div> */}
    </footer>
  );
}
