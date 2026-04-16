import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Paper = ({ title, author, readTime, year }) => {
  return (
    <div className="flex flex-col sm:flex-row px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-5 gap-4 sm:gap-3 border border-[#2a2826] bg-[#171516] rounded-2xl">
      <div className="w-full sm:w-11/12 flex flex-col gap-2 sm:gap-3">
        <p className="text-[#887F79] text-xs sm:text-sm">Research papers</p>
        <h3 className="text-[#DED9D3] text-xl sm:text-2xl md:text-3xl leading-tight">
          {title}
        </h3>
        <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 text-xs sm:text-sm">
          <span className="text-[#828081]">{author}</span>
          <span className="text-[#828081] hidden sm:inline">•</span>
          <span className="text-[#828081]">{readTime}</span>
          <span className="text-[#828081] hidden sm:inline">•</span>
          <span className="text-[#828081]">{year}</span>
        </div>
      </div>

      <div className="flex sm:justify-end sm:items-end justify-end items-center mt-2 sm:mt-0">
        <FontAwesomeIcon
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#948471]"
          icon={faArrowRight}
        />
      </div>
    </div>
  );
};

export default Paper;