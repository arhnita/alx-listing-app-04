import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">AirCover</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Anti-discrimination</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Disability support</a></li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hosting</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition">Airbnb your home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Hosting resources</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Community forum</a></li>
            </ul>
          </div>

          {/* Airbnb */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Airbnb</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition">Newsroom</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">New features</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Investors</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Terms</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2024 ALX Listing App. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-600">English (US)</span>
            <span className="text-sm text-gray-600">$ USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;