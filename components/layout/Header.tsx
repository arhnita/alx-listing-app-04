import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-pink-500 mr-1">alx</div>
            </div>
          </div>

          {/* Search Bar - Central */}
          <div className="hidden lg:block">
            <div className="flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition">
              <div className="px-6 py-3 border-r border-gray-300">
                <div className="text-sm font-medium text-gray-900">Location</div>
                <div className="text-sm text-gray-500">Search for destination</div>
              </div>
              <div className="px-6 py-3 border-r border-gray-300">
                <div className="text-sm font-medium text-gray-900">Check in</div>
                <div className="text-sm text-gray-500">Add date</div>
              </div>
              <div className="px-6 py-3 border-r border-gray-300">
                <div className="text-sm font-medium text-gray-900">Check out</div>
                <div className="text-sm text-gray-500">Add date</div>
              </div>
              <div className="px-6 py-3">
                <div className="text-sm font-medium text-gray-900">People</div>
                <div className="text-sm text-gray-500">Add guest</div>
              </div>
              <div className="p-2 ml-2">
                <div className="bg-pink-500 text-white rounded-full p-3 hover:bg-pink-600 transition cursor-pointer">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg transition">
              Airbnb your home
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900 transition">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m0-18a9 9 0 019 9" />
              </svg>
            </button>
            <div className="flex items-center border border-gray-300 rounded-full p-2 hover:shadow-md transition cursor-pointer">
              <svg className="h-4 w-4 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <div className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Property Type Icons */}
        <div className="hidden md:flex items-center justify-between py-4 border-t">
          <div className="flex items-center space-x-8">
            <div className="flex flex-col items-center space-y-2 cursor-pointer group">
              <div className="p-3 group-hover:bg-gray-100 rounded-lg transition">
                <svg className="h-6 w-6 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 group-hover:text-gray-900">Rooms</span>
            </div>
            <div className="flex flex-col items-center space-y-2 cursor-pointer group">
              <div className="p-3 group-hover:bg-gray-100 rounded-lg transition">
                <svg className="h-6 w-6 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 group-hover:text-gray-900">Mansion</span>
            </div>
            <div className="flex flex-col items-center space-y-2 cursor-pointer group">
              <div className="p-3 group-hover:bg-gray-100 rounded-lg transition">
                <svg className="h-6 w-6 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 group-hover:text-gray-900">Countryside</span>
            </div>
            <div className="flex flex-col items-center space-y-2 cursor-pointer group">
              <div className="p-3 group-hover:bg-gray-100 rounded-lg transition">
                <svg className="h-6 w-6 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 group-hover:text-gray-900">Villa</span>
            </div>
            <div className="flex flex-col items-center space-y-2 cursor-pointer group">
              <div className="p-3 group-hover:bg-gray-100 rounded-lg transition">
                <svg className="h-6 w-6 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 group-hover:text-gray-900">Tropical</span>
            </div>
            <div className="flex flex-col items-center space-y-2 cursor-pointer group">
              <div className="p-3 group-hover:bg-gray-100 rounded-lg transition">
                <svg className="h-6 w-6 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 group-hover:text-gray-900">New</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition">
              <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="text-sm text-gray-700">Filter</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;