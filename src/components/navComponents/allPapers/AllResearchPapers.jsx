import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ActionBar from '../subComponents/ActionBar';
import AllPapers from './AllPapers';
import ResearchPaperSideBar from '../subComponents/ResearchPaperSideBar';
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import Pagination from '../subComponents/Pagination';

const AllResearchPapers = () => {
  const  papers = [
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
    <div className=''>
        <Navigation/>
        <div className="flex bg-[#0F0F0F] flex-col lg:flex-row">

      {/* Main content */}
      <div className="w-full lg:w-4/5 px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 flex flex-col justify-center">
        <h3 className="text-[#EEEBE6] text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10">
          Latest research into coffee and culture in Bangladesh
        </h3>

        <ActionBar />

        <p className="text-[#91908F] font-bold text-xs sm:text-sm mt-6 mb-3">
          FEATURED RESEARCH PAPER
        </p>
        <AllPapers {...featured} featured />

        <div className="space-y-3 sm:space-y-1 mt-8">
          <p className="text-[#91908F] font-bold text-xs sm:text-sm mb-3">
            RESEARCH PAPERS
          </p>
          {rest.map((paper, id) => (
            <AllPapers key={id} {...paper} />
          ))}
        </div>

        <Pagination
  totalPages={10}
  initialPage={1}
  onPageChange={(page) => console.log('Page changed to:', page)}
/>
      </div>

     
      <div className="w-full lg:w-1/5 border-t lg:border-t-0 lg:border-l border-[#2a2826]">
        <ResearchPaperSideBar />
      </div>
      

    </div>
    <Footer/>
    </div>
  );
};

export default AllResearchPapers;