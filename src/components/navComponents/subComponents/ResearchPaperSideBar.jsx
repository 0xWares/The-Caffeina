import React from 'react';

const ResearchPaperSideBar = () => {
  const keywords = ['Coffee Culture', 'Urban Behavior', 'Farming', 'Economics'];

  return (
    <div className="px-5 py-6 sm:px-8 lg:px-4 lg:py-8 flex flex-col gap-8">

      {/* On mobile/tablet: horizontal scrolling keyword row. On lg+: vertical stack */}
      <div>
        <h2 className="text-[#524847] text-sm font-bold tracking-widest uppercase mt-6 lg:mt-10 mb-3">
          Keywords
        </h2>
        {/* Mobile: horizontal scroll row */}
        <div className="flex flex-row flex-wrap lg:flex-col gap-2">
          {keywords.map((kw) => (
            <button
              key={kw}
              className="bg-[#2E1E1C] px-3 py-1.5 text-[#DED9D3] text-sm rounded cursor-pointer hover:bg-[#3d2826] transition-colors duration-200 whitespace-nowrap"
            >
              {kw}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[#524847] text-sm font-bold tracking-widest uppercase mb-3">
          Download PDF
        </h2>
        <button className="w-full sm:w-auto lg:w-full bg-[#2E1E1C] px-3 py-1.5 text-[#DED9D3] text-sm rounded cursor-pointer hover:bg-[#3d2826] transition-colors duration-200">
          Submit Research
        </button>
      </div>

    </div>
  );
};

export default ResearchPaperSideBar;