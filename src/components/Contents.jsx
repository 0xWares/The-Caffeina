import React from 'react';
import { NavLink } from 'react-router-dom';

const Contents = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-[#C9A97A] font-bold border-b-2 border-[#C9A97A] pb-1.5 sm:pb-2 tracking-wide sm:tracking-widest text-[10px] xs:text-xs sm:text-sm'
      : 'text-[#7A7977] font-normal pb-1.5 sm:pb-2 tracking-wide sm:tracking-widest text-[10px] xs:text-xs sm:text-sm hover:text-[#C9A97A] transition-colors duration-200';

  return (
    <div className="mt-6 sm:mt-8 md:mt-10">
      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-x-2 gap-y-1 xs:gap-x-4 sm:gap-x-6 md:gap-x-16 mb-0 px-2 xs:px-4">
        <NavLink to="researchpapers" className={navLinkStyle}>
          RESEARCH PAPERS
        </NavLink>
        <NavLink to="fieldstories" className={navLinkStyle}>
          FIELD STORIES
        </NavLink>
        <NavLink to="culturalessays" className={navLinkStyle}>
          CULTURAL ESSAYS
        </NavLink>
      </div>
      <div className="w-full border-b-3 border-[#2a2a2a] mt-1.5 sm:mt-2 md:mt-0" />
    </div>
  );
};

export default Contents;