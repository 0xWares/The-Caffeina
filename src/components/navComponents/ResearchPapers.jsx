import React from 'react';
import Paper from './subComponents/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ResearchPaperSideBar from './subComponents/ResearchPaperSideBar';
import ActionBar from './subComponents/ActionBar';
import { Link } from 'react-router-dom';

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
        CULTURAL ESSAYS
      </p>
      <h3 className="text-[#EEEBE6] text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-5 md:mb-7">
        Coffee as Culture
      </h3>
      <p className="text-[#706E6F] text-sm sm:text-base mb-8 sm:mb-12 md:mb-15">
        Essays exploring the deeper meaning of the coffee in modern life.
      </p>

      <div className="space-y-3 sm:space-y-4">
        {papers.map((paper, id) => (
          <Paper
            key={id}
            title={paper.title}
            // description={paper.description}
            author={paper.author}
            readTime={paper.readTime}

            year={paper.year}
            
          />
        ))}
      </div>

      <Link to="/all-research-papers" className="transition-transform duration-300 hover:scale-101 mx-auto w-full sm:w-8/12 md:w-7/12 mt-8 sm:mt-10 flex flex-row justify-center border border-[#2a2826] items-center text-[#A9A09B] text-base sm:text-lg md:text-xl gap-4 sm:gap-6 rounded-md py-2 sm:py-1 px-4  hover:bg-[#1c1a19]">
        View all field stories
        <span>
          <FontAwesomeIcon
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#948471]"
            icon={faArrowRight}
          />
        </span>
      </Link>
    </div>
  );
};

export default ResearchPapers;