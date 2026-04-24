import React from 'react';
import Paper from './subComponents/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ResearchPaperSideBar from './subComponents/ResearchPaperSideBar';
import ActionBar from './subComponents/ActionBar';

const ResearchPapers = () => {
  const papers = [
    {
      type: "Research Paper",
      title: "The Evolution of Coffee Culture in Urban Dhaka",
      author: "Rahman, S.",
      readTime: "8 min read",
      year: 2026
    },
    {
      type: "Research Paper",
      title: "Caffeine Consumption Patterns of Young Professionals",
      author: "Hasan, M.",
      readTime: "10 min read",
      year: 2026
    },
    {
      type: "Research Paper",
      title: "The Economics of Coffee Farming in Bangladesh",
      author: "Alam, R.",
      readTime: "12 min read",
      year: 2025
    }
  ];

  const [featured, ...rest] = papers;

  return (
    // Mobile: single column stack. lg+: side-by-side
    <div className="flex flex-col lg:flex-row">

      {/* Main content */}
      <div className="w-full lg:w-4/5 px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 flex flex-col justify-center">
        <h3 className="text-[#EEEBE6] text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10">
          Latest research into coffee and culture in Bangladesh
        </h3>

        <ActionBar />

        <p className="text-[#91908F] font-bold text-xs sm:text-sm mt-6 mb-3">
          FEATURED RESEARCH PAPER
        </p>
        <Paper {...featured} featured />

        <div className="space-y-3 sm:space-y-1 mt-8">
          <p className="text-[#91908F] font-bold text-xs sm:text-sm mb-3">
            RESEARCH PAPERS
          </p>
          {rest.map((paper, id) => (
            <Paper key={id} {...paper} />
          ))}
        </div>

        <button className="cursor-pointer mx-auto w-full sm:w-8/12 md:w-7/12 mt-8 sm:mt-10 flex flex-row justify-center border border-[#2a2826] items-center text-[#A9A09B] text-base sm:text-lg gap-4 sm:gap-6 rounded-md py-2 px-4 hover:bg-[#1c1a19] transition-colors duration-300">
          View all research papers
          <FontAwesomeIcon
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#948471]"
            icon={faArrowRight}
          />
        </button>
      </div>

     
      <div className="w-full lg:w-1/5 border-t lg:border-t-0 lg:border-l border-[#2a2826]">
        <ResearchPaperSideBar />
      </div>

    </div>
  );
};

export default ResearchPapers;