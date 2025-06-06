import React from 'react';

const Hero = () => {
  return (
    <div className="isolate">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-30 dark:opacity-20"></div>
        <div className="container mx-auto px-6 py-20 md:py-20 lg:py-28 xl:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="flex-1 space-y-6 lg:space-y-7">
              <div className="space-y-4 lg:space-y-5">
                <div className="flex items-center ">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2">
                    New
                  </span>
                  <h2 className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-neutral-900 text-amber-400 font-medium text-sm backdrop-blur-sm border border-neutral-800/50">
                    <i className="bx bx-trending-up mr-1">
                      Next Generation Design System
                    </i>
                  </h2>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                  <span className="block mb-1">Design</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
                    Without Limit
                  </span>
                </h1>
                <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
                  Elevate your wev projects with our streamlined design system
                  powered your by the largest Tailwind css v4. Create stunning
                  user experience with state of hte art theme switching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
