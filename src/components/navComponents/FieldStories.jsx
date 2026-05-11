import React, { useState } from 'react';
import Story from './subComponents/Story';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FieldStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const FieldStory = [
    {
      img: "https://plus.unsplash.com/premium_photo-1724820187988-1c01f8a9b289?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Journey of a Coffee Bean: A Farmer's Tale",
      description: "He wakes before sunrise, but has never tasted the final cup.",
      pera: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas natus exercitationem illo! Dicta voluptatem officia neque porro quia iste vero similique delectus distinctio? Nihil quaerat esse officiis repellendus at placeat tempora iste reprehenderit impedit amet? Ipsum vitae officia autem dolores architecto? Dolore officia libero dolorem reiciendis culpa, et excepturi ea deserunt nesciunt quos voluptate repudiandae! Aliquid maxime neque porro a consectetur modi placeat doloremque esse debitis temporibus, aperiam adipisci est ut doloribus saepe nulla corrupti tempora officia, illum iste nam reiciendis magnam? Natus mollitia libero possimus excepturi molestias, quasi dolorum sit ipsam reprehenderit sunt consequuntur quod doloribus?",
      location: "Bandarban",
      author: "The Caffeina Field Team",
      date: "April 2026"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1724820187104-fd02d2b27cfc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "A Day in the Life of a Bangladeshi Coffee Harvester",
      description: "She picks the cherries under the shade of towering trees.",
      pera: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas natus exercitationem illo! Dicta voluptatem officia neque porro quia iste vero similique delectus distinctio? Nihil quaerat esse officiis repellendus at placeat tempora iste reprehenderit impedit amet? Ipsum vitae officia autem dolores architecto? Dolore officia libero dolorem reiciendis culpa, et excepturi ea deserunt nesciunt quos voluptate repudiandae! Aliquid maxime neque porro a consectetur modi placeat doloremque esse debitis temporibus, aperiam adipisci est ut doloribus saepe nulla corrupti tempora officia, illum iste nam reiciendis magnam?",
      location: "Sylhet",
      author: "The Caffeina Field Team",
      date: "January 2026"
    },
    {
      img: "https://images.unsplash.com/photo-1493925410384-84f842e616fb?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Harvest Season in the Hills of Rangamati",
      description: "A farmer's methodical approach amidst the lush foothills.",
      pera: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas natus exercitationem illo! Dicta voluptatem officia neque porro quia iste vero similique delectus distinctio? Nihil quaerat esse officiis repellendus at placeat tempora iste reprehenderit impedit amet? Ipsum vitae officia autem dolores architecto? Dolore officia libero dolorem reiciendis culpa, et excepturi ea deserunt nesciunt quos voluptate repudiandae!",
      location: "Rangamati",
      author: "Rahman, M.",
      date: "September 2025"
    },
    {
      img: "https://images.unsplash.com/photo-1493925410384-84f842e616fb?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Harvest Season in the Hills of Rangamati",
      description: "A farmer's methodical approach amidst the lush foothills.",
      pera: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas natus exercitationem illo! Dicta voluptatem officia neque porro quia iste vero similique delectus distinctio? Nihil quaerat esse officiis repellendus at placeat tempora iste reprehenderit impedit amet?",
      location: "Rangamati",
      author: "Rahman, M.",
      date: "September 2025"
    }
  ];

  return (
    <div className="px-4 py-8 sm:px-8 sm:py-12 md:px-16 md:py-16 lg:px-20 lg:py-20 flex flex-col">

      <p className="text-[#91908F] font-bold text-xs sm:text-sm mb-2 sm:mb-3">
        FIELD STORIES
      </p>
      <h3 className="text-[#EEEBE6] text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4 md:mb-5">
        Voices from the origin
      </h3>
      <p className="text-[#706E6F] text-sm sm:text-base mb-5 sm:mb-8 md:mb-10">
        Human stories collected from the heart of Bangladesh coffee farming
      </p>

      <p className="text-[#91908F] font-bold text-xs tracking-widest mt-8 sm:mt-10 mb-4">
        ALL FIELD STORIES
      </p>
      <div className="flex flex-col gap-4">
        {FieldStory.map((story, id) => (
          <div key={id} onClick={() => setSelectedStory(story)} className="cursor-pointer">
            <Story
              img={story.img}
              title={story.title}
              description={story.description}
              location={story.location}
              author={story.author}
              date={story.date}
            />
          </div>
        ))}
      </div>

      <Link to="/all-field-story" className="cursor-pointer mx-auto w-full sm:w-10/12 md:w-8/12 lg:w-7/12 mt-8 sm:mt-10 flex flex-row justify-center border border-[#2a2826] items-center text-[#A9A09B] text-base sm:text-lg md:text-xl gap-3 sm:gap-5 rounded-md py-2.5 px-4 hover:bg-[#1c1a19] transition-colors duration-300">
        View all field stories
        <FontAwesomeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#948471]" icon={faArrowRight} />
      </Link>

      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#171516] border border-[#2a2826] rounded-2xl p-5 sm:p-6 md:p-8 no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 text-[#A0928B] hover:text-white text-xl cursor-pointer"
            >
              ✕
            </button>

            {/* Story Image */}
            <img
              src={selectedStory.img}
              alt={selectedStory.title}
              className="w-full h-48 sm:h-56 object-cover rounded-xl mb-5"
            />

            {/* Label */}
            <p className="text-[#887F79] text-xs sm:text-sm mb-2">
              FIELD STORY
            </p>

            {/* Title */}
            <h2 className="text-[#EEEBE6] text-2xl sm:text-3xl mb-4">
              {selectedStory.title}
            </h2>

            {/* Description */}
            <p className="text-[#726E6B] text-sm sm:text-base mb-6">
              {selectedStory.description}
            </p>

            {/* Body */}
            <p className="text-[#726E6B] text-sm sm:text-base mb-6 text-justify">
              {selectedStory.pera}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-[#828081]">
              <span>{selectedStory.author}</span>
              <span>•</span>
              <span>{selectedStory.location}</span>
              <span>•</span>
              <span>{selectedStory.date}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FieldStories;