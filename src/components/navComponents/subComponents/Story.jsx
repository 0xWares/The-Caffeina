import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Story = ({ img, title, description, location, author, date }) => {
  return (
    <div className="relative flex flex-col sm:flex-row border border-[#22191C] bg-[#171516] rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.01] overflow-hidden">

      {/* IMAGE (FIXED UNIFORM HEIGHT) */}
      <div className="w-full sm:w-48 md:w-56 h-40 sm:h-44 md:h-48 flex-shrink-0">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-2 sm:gap-3 px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-5 w-full">

        <p className="text-[#887F79] text-xs sm:text-sm">
          Research papers
        </p>

        <h3 className="text-[#DED9D3] text-xl sm:text-2xl md:text-3xl leading-tight">
          {title}
        </h3>

        <p className="text-[#DED9D3] text-sm sm:text-base">
          {description}
        </p>

        <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs sm:text-sm">
          <span className="text-[#828081]">{author}</span>
          <span className="text-[#828081]">•</span>
          <span className="text-[#828081]">{location}</span>
          <span className="text-[#828081]">•</span>
          <span className="text-[#828081]">{date}</span>
        </div>
      </div>

      {/* ARROW */}
      <div className="absolute right-5 bottom-5 p-4 sm:p-0 sm:relative sm:flex sm:items-end sm:justify-end">
        <FontAwesomeIcon
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#948471]"
          icon={faArrowRight}
        />
      </div>

    </div>
  );
};

export default Story;