import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Essay from './subComponents/Essay';

const CulturalEssays = () => {
  const essayList = [
    {
      title: "The Ritual of Morning Coffee",
      description: "Why the first cup in silence shapes the rest of the day.",
      author: "Ahmad, K.",
      year: 2026,
      cta: "Read Essay"
    },
    {
      title: "From Tea to Coffee: A Shift in Bangladeshi Habits",
      description: "How urban Bangladesh is redefining its social drink.",
      author: "Rahman, T.",
      year: 2026,
      cta: "Read Essay"
    },
    {
      title: "Coffee and the Intellectual Identity",
      description: "A reflection on how coffee shapes cognitive identity in modern urban life.",
      author: "Hasan, M.",
      year: 2026,
      cta: "Read Essay"
    },
    
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
        {essayList.map((essay, id) => (
          <Essay
            key={id}
            title={essay.title}
            description={essay.description}
            author={essay.author}
            year={essay.year}
            cta={essay.cta}
          />
        ))}
      </div>

      <button className="transition-transform duration-300 hover:scale-101 mx-auto w-full sm:w-8/12 md:w-7/12 mt-8 sm:mt-10 flex flex-row justify-center border border-[#2a2826] items-center text-[#A9A09B] text-base sm:text-lg md:text-xl gap-4 sm:gap-6 rounded-md py-2 sm:py-1 px-4  hover:bg-[#1c1a19]">
        View all field stories
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

export default CulturalEssays;