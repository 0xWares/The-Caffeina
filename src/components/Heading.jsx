import React from 'react';

const Heading = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 sm:mt-14 md:mt-16 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E6DBD0] leading-tight">
        The Caffeina Journal
      </h1>
      <h4 className="text-xl sm:text-2xl md:text-3xl text-[#9FA09C] mt-3 sm:mt-4">
        A quiet archive of coffee, culture and thought.
      </h4>
    </div>
  );
};

export default Heading;