const Story = ({ img, title, description, location, author, date }) => {
  return (
    <div className="flex flex-col md:flex-row border border-[#2a2826] bg-[#111010] rounded-2xl overflow-hidden">

      <img
        className="w-full md:w-32 h-44 md:h-auto object-cover shrink-0"
        src={img}
        alt={title}
      />

      <div className="flex flex-row flex-1">
        <div className="flex flex-col justify-center px-5 py-4 gap-1.5 flex-1">
          <p className="text-[#887F79] text-[10px] font-semibold tracking-widest uppercase">
            ORIGIN STORY
          </p>
          <h3 className="text-[#DED9D3] text-xl font-serif leading-tight">{title}</h3>
          <p className="text-[#898583] text-xs">{description}</p>
          <div className="flex flex-wrap gap-x-2 text-[11px] text-[#828081] mt-1">
            <span>Collected from {location}</span>
            <span>·</span>
            <span>By {author}</span>
            <span>·</span>
            <span>{date}</span>
          </div>
        </div>

        <div className="flex items-end md:items-center justify-center px-4 pb-4 md:pb-0 text-[#948471] text-lg shrink-0">
          →
        </div>
      </div>

    </div>
  );
};
export default Story