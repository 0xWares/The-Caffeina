import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-[#141414] flex flex-col gap-4 sm:gap-6 py-6 sm:py-8 px-4">
      <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center flex-wrap text-center">
        <Link to="/all-research-papers" className="text-[#8A8683] text-xs sm:text-sm cursor-pointer hover:text-white transition-colors">
          RESEARCH PAPERS
        </Link>
        <Link to="/all-field-story" className="text-[#8A8683] text-xs sm:text-sm cursor-pointer hover:text-white transition-colors">
          FIELD STORIES
        </Link>
        <Link  className="text-[#8A8683] text-xs sm:text-sm cursor-pointer hover:text-white transition-colors">
          CULTURAL ESSAYS
        </Link>
      </div>

      <div className="flex flex-row gap-x-2 gap-y-1 justify-center items-center flex-wrap text-center">
        <p className="text-[#8A8683] text-xs sm:text-sm font-bold cursor-pointer">The Caffeina</p>
        <span className="text-[#8A8683] text-xs sm:text-sm">•</span>
        <p className="text-[#8A8683] text-xs sm:text-sm cursor-pointer">Dhaka</p>
        <span className="text-[#8A8683] text-xs sm:text-sm ">•</span>
        <p className="text-[#8A8683] text-xs sm:text-sm cursor-pointer">Bangladesh</p>
        <span className="text-[#8A8683] text-xs sm:text-sm">•</span>
        <p className="text-[#8A8683] text-xs sm:text-sm cursor-pointer">&copy; 2026</p>
      </div>

      <div className="flex flex-row justify-center items-center gap-4 sm:gap-5">
        <FontAwesomeIcon
          className="text-[#8A8683] text-xl sm:text-2xl cursor-pointer hover:text-white transition-colors"
          icon={faFacebook}
        />
        <FontAwesomeIcon
          className="text-[#8A8683] text-xl sm:text-2xl cursor-pointer hover:text-white transition-colors"
          icon={faInstagram}
        />
      </div>
    </div>
  );
};

export default Footer;