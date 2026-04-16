import React from 'react';
import Paper from './subComponents/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <div className="px-5 py-8 sm:px-8 sm:py-12 md:px-20 md:py-20 flex flex-col justify-center">
      <p className="text-[#91908F] font-bold text-xs sm:text-sm mb-2 sm:mb-4">
        RESEARCH PAPERS
      </p>
      <h3 className="text-[#EEEBE6] text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 md:mb-12">
        Latest research into coffee and culture in Bangladesh
      </h3>

      <div className="space-y-3 sm:space-y-4">
        {papers.map((paper, id) => (
          <Paper
            key={id}
            title={paper.title}
            author={paper.author}
            readTime={paper.readTime}
            year={paper.year}
          />
        ))}
      </div>

      <button className="mx-auto w-full sm:w-8/12 md:w-7/12 mt-8 sm:mt-10 flex flex-row justify-center border border-[#2a2826] items-center text-[#A9A09B] text-base sm:text-lg md:text-xl gap-4 sm:gap-6 rounded-md py-2 sm:py-1 px-4 transition-colors hover:bg-[#1c1a19]">
        View all research papers
        <span>
          <FontAwesomeIcon
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#948471]"
            icon={faArrowRight}
          />
        </span>
      </button>
    </div>
  );
};

export default ResearchPapers;