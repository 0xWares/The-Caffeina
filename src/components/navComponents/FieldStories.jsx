import React from 'react';
import Story from './subComponents/Story';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FieldStories = () => {
  const FieldStory = [
    {
      img: "https://plus.unsplash.com/premium_photo-1724820187988-1c01f8a9b289?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Journey of a Coffee Bean: A Farmer's Tale",
      description: "He wakes before sunrise, but has never tasted the final cup.",
      location: "Bandarban",
      author: "The Caffeina Field Team",
      date: "April 10, 2026"
    },
    {
      img: "https://images.unsplash.com/photo-1493925410384-84f842e616fb?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Nurturing Coffee: A Look into Sustainable Practices",
      description: "A farmer's methodical approach amidst the lush foothills of Chittagong.",
      location: "Chittagong",
      author: "Rahman, M.",
      date: "March 3, 2026"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1724820187104-fd02d2b27cfc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "A Day in the Life of a Bangladeshi Coffee Harvester",
      description: "She carries baskets of crimson cherries with quiet pride.",
      location: "Sylhet",
      author: "The Caffeina Field Team",
      date: "January 20, 2026"
    }
  ];

  return (
    <div className="px-5 py-8 sm:px-8 sm:py-12 md:px-20 md:py-20 flex flex-col justify-center">
      <p className="text-[#91908F] font-bold text-xs sm:text-sm mb-2 sm:mb-4">
        FIELD STORIES
      </p>
      <h3 className="text-[#EEEBE6] text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-5 md:mb-7">
        Voices from the origin
      </h3>
      <p className="text-[#706E6F] text-sm sm:text-base mb-8 sm:mb-12 md:mb-15">
        Human stories collected from the heart of Bangladesh coffee farming
      </p>

      <div className="space-y-4 sm:space-y-5">
        {FieldStory.map((story, id) => (
          <Story
            key={id}
            img={story.img}
            title={story.title}
            description={story.description}
            location={story.location}
            author={story.author}
            date={story.date}
          />
        ))}
      </div>

      <button className="mx-auto w-full sm:w-8/12 md:w-7/12 mt-8 sm:mt-10 flex flex-row justify-center border border-[#2a2826] items-center text-[#A9A09B] text-base sm:text-lg md:text-xl gap-4 sm:gap-6 rounded-md py-2 sm:py-1 px-4 transition-colors hover:bg-[#1c1a19]">
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

export default FieldStories;