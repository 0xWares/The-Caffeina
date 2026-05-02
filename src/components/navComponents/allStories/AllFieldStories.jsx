import React from 'react'
import ActionBar from '../subComponents/ActionBar';
import AllStory from './AllStories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Footer';
import Pagination from '../subComponents/Pagination';
import Navigation from '../../Navigation';

const AllFieldStories = () => {
    const FieldStory = [
    {
      img: "https://plus.unsplash.com/premium_photo-1724820187988-1c01f8a9b289?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Journey of a Coffee Bean: A Farmer's Tale",
      description: "He wakes before sunrise, but has never tasted the final cup.",
      location: "Bandarban",
      author: "The Caffeina Field Team",
      date: "April 2026"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1724820187104-fd02d2b27cfc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "A Day in the Life of a Bangladeshi Coffee Harvester",
      description: "She picks the cherries under the shade of towering trees.",
      location: "Sylhet",
      author: "The Caffeina Field Team",
      date: "January 2026"
    },
    {
      img: "https://images.unsplash.com/photo-1493925410384-84f842e616fb?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Harvest Season in the Hills of Rangamati",
      description: "A farmer's methodical approach amidst the lush foothills.",
      location: "Rangamati",
      author: "Rahman, M.",
      date: "September 2025"
    },
    {
      img: "https://images.unsplash.com/photo-1493925410384-84f842e616fb?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Harvest Season in the Hills of Rangamati",
      description: "A farmer's methodical approach amidst the lush foothills.",
      location: "Rangamati",
      author: "Rahman, M.",
      date: "September 2025"
    }
  ];

  const [featured, ...rest] = FieldStory;
  return (
    <div className='bg-[#0F0F0F]'>
        <Navigation/>
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

      <ActionBar />

      {/* Featured */}
      <p className="text-[#91908F] font-bold text-xs tracking-widest mt-6 mb-3">
        FEATURED STORY
      </p>
      <AllStory {...featured} featured />

      {/* Rest — 1 col on mobile, 2 col on sm+ */}
      <p className="text-[#91908F] font-bold text-xs tracking-widest mt-8 sm:mt-10 mb-4">
        ALL FIELD STORIES
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {rest.map((story, id) => (
          <AllStory key={id} {...story} />
        ))}
      </div>

      <Pagination/>
      
    </div>
    <Footer/>
    </div>
  )
}

export default AllFieldStories
