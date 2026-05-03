import React from 'react'
import Navigation from '../../Navigation';
import Footer from "../../../components/Footer"

const AllCulturalEssays = () => {
  return (
    <div className='bg-[#0F0F0F] min-h-screen'>
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center text-center mb-12">
          <h5 className="text-xl sm:text-2xl md:text-3xl text-[#9FA09C] mt-3 sm:mt-4">
            Cultural essay
          </h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E6DBD0] leading-tight max-w-4xl">
            Coffee and the Intellectual Identity
          </h1>
          <h4 className="text-base sm:text-base md:text-base text-[#9FA09C] mt-3 sm:mt-4">
            A quiet archive of coffee, culture and thought.
          </h4>
          <div className='w-full max-w-2xl flex items-start flex-col py-2 border-y border-[#BDB1B0] mt-4'>
            <p className='text-[#BDB1B0] ml-8'>By Hasan M.</p>
            <p className='text-[#BDB1B0] ml-8'>published: 2026</p>
          </div>
        </div>

        {/* Main Two-Column Layout */}
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto'>
          
          {/* Left Column – Main Essay Content */}
          <div className='flex flex-col gap-8 lg:w-2/3'>
            {/* Opening Quote */}
            <div className='bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10'>
              <h1 className='text-[#D4C2B5] text-2xl md:text-4xl leading-relaxed'>
                <span className='text-6xl md:text-7xl align-top'>&ldquo;</span>
                Coffee is no longer just a beverage. It has quietly positioned itself as a symbol of thought, solitude, and modern identity.
              </h1>
            </div>

            {/* Intro Paragraph */}
            <div className=''>
              <p className='text-[#E0E0E0] text-base md:text-lg leading-relaxed'>
                Coffee in characterizing of more is drink. It was testified agathring alternative conssiderantly assevered mas the life in tone and social engagement, altering an social psychologitic fineness, thir rin for coffee-shop growth.
              </p>
            </div>

            {/* Context Box */}
            <div className='bg-[#1A1A1A] rounded-xl p-5 md:p-6 border-l-4 border-amber-500/70'>
              <h2 className='text-2xl md:text-3xl font-semibold text-white mb-2'>Context</h2>
              <p className='text-gray-300 text-base md:text-lg'>
                Coffee shop growth in Dhaka has increased significantly over the past decade
              </p>
            </div>

            {/* Essay Point 1 */}
            <div className='border-b border-white/10 pb-6 group hover:border-white/30 transition-colors'>
              <h1 className='text-white text-2xl md:text-3xl font-bold group-hover:text-amber-300 transition-colors'>
                1. Coffee Beyond Consumption
              </h1>
              <p className='text-gray-300 text-base md:text-lg mt-3 leading-relaxed text-justify'>
                Coffee, in characterizing of more is drink. It was testified agathring alternative consideratly assevered mas the life of tones and social engagement, altering a social psychologitic fincess, thin in icoffee, shop growth.
              </p>
            </div>

            {/* Essay Point 2 */}
            <div className='border-b border-white/10 pb-6 group hover:border-white/30 transition-colors'>
              <h1 className='text-white text-2xl md:text-3xl font-bold group-hover:text-amber-300 transition-colors'>
                2. The Shift from Tea to Thought
              </h1>
              <p className='text-gray-300 text-base md:text-lg mt-3 leading-relaxed text-justify'>
                In Dhaka, coffee shop growth has significat significantly in expanding. smiler kuhun mallQualzing, alternating eternal culture adsdering esato C.coffee with the digital generation. The creative class.
              </p>
            </div>
          </div>

          {/* Right Column – Sidebar */}
          <div className='flex flex-col gap-8 lg:w-1/3'>
            {/* Observations */}
            <div className="space-y-6">
              <div className="border border-white/20 rounded-xl p-6 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:-translate-y-1">
                <h1 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-tight flex items-center gap-2">
                  <span className="text-amber-400">✦</span> Observation
                </h1>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed pl-4 border-l-4 border-amber-400/60 italic">
                  “People don't drink coffee for taste. They drink it for space.”
                </p>
              </div>

              <div className="border border-white/20 rounded-xl p-6 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:-translate-y-1">
                <h1 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-tight flex items-center gap-2">
                  <span className="text-amber-400">✦</span> Observation
                </h1>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed pl-4 border-l-4 border-amber-400/60 italic">
                  “Urban Bangladesh increasingly associates coffee with productivity, not leisure.”
                </p>
              </div>
            </div>

            {/* Related Essays */}
            <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl">
              <h1 className="text-2xl md:text-3xl font-bold text-white border-b border-white/30 pb-3 mb-5 tracking-tight">
                Related Essays
              </h1>
              <div className="space-y-5">
                <div className="group cursor-pointer hover:translate-x-1 transition-transform">
                  <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-amber-300 transition-colors">
                    From Tea to Coffee:
                  </h2>
                  <h3 className="text-lg text-gray-300 mt-1 mb-1">
                    A shift in Bangladeshi Habits
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    How urban Bangladesh is redefining its social drink.
                  </p>
                </div>
                <div className="border-t border-white/10"></div>
                <div className="group cursor-pointer hover:translate-x-1 transition-transform">
                  <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-amber-300 transition-colors">
                    The Ritual of Morning Coffee
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">
                    Why the first cup in silence shapes the rest of the day.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AllCulturalEssays