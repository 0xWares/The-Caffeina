const AllStory = ({ img, title, description, location, author, date, featured }) => {

  if (featured) {
    return (
      <div className="transition-transform cursor-pointer duration-300 hover:scale-[1.01] relative rounded-2xl overflow-hidden border border-[#2a2826]
        h-48 sm:h-56 md:h-64 lg:h-72">

        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={img}
          alt={title}
        />

        {/* Mobile: bottom fade. sm+: right fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent
          sm:bg-gradient-to-r sm:from-transparent sm:via-black/40 sm:to-black/85" />

        {/* Mobile: text pinned to bottom. sm+: text pinned to right */}
        <div className="absolute inset-0 flex items-end sm:items-center sm:justify-end">
          <div className="w-full px-4 pb-4 sm:w-3/5 md:w-1/2 sm:pr-6 md:pr-8 lg:pr-10 flex flex-col gap-1.5 sm:gap-2">
            <h3 className="text-[#EDE8E2] text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif leading-snug">
              {title}
            </h3>
            <p className="text-[#B0A89F] text-xs sm:text-sm leading-relaxed hidden sm:block">
              {description}
            </p>
            <p className="text-[#8A8380] text-[11px] sm:text-xs mt-0.5">
              Collected from {location} · {date}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="transition-transform cursor-pointer duration-300 hover:scale-[1.01] flex flex-col border border-[#2a2826] bg-[#111010] rounded-2xl overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-40 sm:h-44 md:h-48 object-cover"
          src={img}
          alt={title}
        />
        <span className="absolute top-3 left-3 text-[#B0A89F] text-[9px] font-bold tracking-widest uppercase bg-black/50 px-2 py-1 rounded">
          FIELD STORY
        </span>
      </div>

      <div className="flex flex-col px-4 py-4 gap-1.5 flex-1">
        <h3 className="text-[#DED9D3] text-base sm:text-lg font-serif leading-snug">{title}</h3>
        <p className="text-[#898583] text-xs sm:text-sm leading-relaxed">{description}</p>
        <p className="text-[#828081] text-[11px] mt-1">
          Collected from {location} · {date}
        </p>
      </div>
    </div>
  );
};

export default AllStory;