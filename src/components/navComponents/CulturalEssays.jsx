import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Essay from './subComponents/Essay';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CulturalEssays = () => {
  const [selectedEssay, setSelectedEssay] = useState(null);
  const essayList = [
    {
      title: "The Ritual of Morning Coffee",
      description: "Why the first cup in silence shapes the rest of the day.",
      pera: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas natus exercitationem illo! Dicta voluptatem officia neque porro quia iste vero similique delectus distinctio? Nihil quaerat esse officiis repellendus at placeat tempora iste reprehenderit impedit amet? Ipsum vitae officia autem dolores architecto? Dolore officia libero dolorem reiciendis culpa, et excepturi ea deserunt nesciunt quos voluptate repudiandae! Aliquid maxime neque porro a consectetur modi placeat doloremque esse debitis temporibus, aperiam adipisci est ut doloribus saepe nulla corrupti tempora officia, illum iste nam reiciendis magnam? Natus mollitia libero possimus excepturi molestias, quasi dolorum sit ipsam reprehenderit sunt consequuntur quod doloribus? Beatae harum, quod debitis est magnam voluptatem esse qui ad placeat iure molestiae. Temporibus omnis cumque, atque libero tempora consequuntur quasi aut quas facere molestias, delectus quisquam! Sunt voluptas magnam id error modi vel ipsum dicta tempora natus sapiente labore quaerat eius omnis, est similique magni maxime cum dolor aliquam at non accusamus consectetur quia! Nemo aliquam officiis, quae cum neque eos repellat nobis qui quibusdam quas assumenda, quo, cumque reiciendis expedita eligendi saepe magnam? Minima, quidem! Optio nulla dolore quam obcaecati quos voluptates culpa assumenda, magni voluptatem vel, incidunt fugit consectetur consequatur asperiores ex saepe deleniti itaque in dolores quibusdam fuga alias ipsam debitis! Voluptatem nostrum quaerat error earum dicta nemo incidunt sint dolor ipsa beatae. Nihil amet praesentium sit blanditiis tempore suscipit voluptas, incidunt nisi veniam totam officia, quas maiores et quos ipsum quia cum, aperiam laboriosam provident pariatur sint quibusdam. Sequi, in! Adipisci beatae esse voluptate quaerat dolores. Cupiditate voluptatibus magni corporis tenetur sapiente quia amet excepturi quae voluptatem dolore eligendi accusamus officia natus, mollitia expedita in repellat, beatae aliquam neque assumenda illo temporibus. Doloremque, ipsa tempora. Laboriosam dolore, nemo ab aperiam laudantium amet reiciendis cum temporibus nostrum quisquam maiores expedita libero ipsum id. Praesentium harum nobis dolorum quasi aut itaque quidem est explicabo, tempora vero veniam deleniti asperiores sit placeat alias odio perferendis possimus enim nemo voluptatum! Sapiente, in similique. Corporis excepturi quaerat vero modi saepe nulla molestiae blanditiis atque fugit itaque unde quod sit odio vitae quae ut corrupti eaque assumenda voluptas ipsam reiciendis placeat repellendus, ab fugiat. Harum recusandae iure nobis veritatis, quod laboriosam ad quia adipisci odio quam repellendus impedit fugit necessitatibus soluta, fugiat enim molestiae minima culpa esse similique autem rem vitae accusantium. Numquam amet provident voluptates earum. Sint neque dolore culpa, maxime temporibus expedita perspiciatis ullam magnam non quos harum molestias modi quae sit aliquam facilis fuga quia voluptatem quod tempore distinctio dolor veniam. Quis fugit a commodi officia voluptatibus impedit tempore cupiditate amet totam. Non mollitia, eligendi rem explicabo ipsum tenetur numquam ad soluta quidem voluptates iste vero porro architecto maiores! Obcaecati ex corrupti alias maiores ipsa provident, debitis ad autem adipisci quasi? Impedit explicabo hic labore ipsam culpa obcaecati facilis, consequuntur, commodi quidem odit, sit optio doloremque. Est corrupti illo provident dolores! Error suscipit dolor possimus aperiam accusantium laboriosam soluta sit pariatur vitae doloribus molestias quo repudiandae est sapiente quasi ea reprehenderit, rerum repellendus nihil. Odit provident explicabo consectetur doloribus soluta fugit?",
      author: "Ahmad, K.",
      year: 2026,
      cta: "Read Essay"
    },
    {
      title: "From Tea to Coffee: A Shift in Bangladeshi Habits",
      description: "How urban Bangladesh is redefining its social drink.",
      pera: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas natus exercitationem illo! Dicta voluptatem officia neque porro quia iste vero similique delectus distinctio? Nihil quaerat esse officiis repellendus at placeat tempora iste reprehenderit impedit amet? Ipsum vitae officia autem dolores architecto? Dolore officia libero dolorem reiciendis culpa, et excepturi ea deserunt nesciunt quos voluptate repudiandae! Aliquid maxime neque porro a consectetur modi placeat doloremque esse debitis temporibus, aperiam adipisci est ut doloribus saepe nulla corrupti tempora officia, illum iste nam reiciendis magnam? Natus mollitia libero possimus excepturi molestias, quasi dolorum sit ipsam reprehenderit sunt consequuntur quod doloribus? Beatae harum, quod debitis est magnam voluptatem esse qui ad placeat iure molestiae. Temporibus omnis cumque, atque libero tempora consequuntur quasi aut quas facere molestias, delectus quisquam! Sunt voluptas magnam id error modi vel ipsum dicta tempora natus sapiente labore quaerat eius omnis, est similique magni maxime cum dolor aliquam at non accusamus consectetur quia! Nemo aliquam officiis, quae cum neque eos repellat nobis qui quibusdam quas assumenda, quo, cumque reiciendis expedita eligendi saepe magnam? Minima, quidem! Optio nulla dolore quam obcaecati quos voluptates culpa assumenda, magni voluptatem vel, incidunt fugit consectetur consequatur asperiores ex saepe deleniti itaque in dolores quibusdam fuga alias ipsam debitis! Voluptatem nostrum quaerat error earum dicta nemo incidunt sint dolor ipsa beatae. Nihil amet praesentium sit blanditiis tempore suscipit voluptas, incidunt nisi veniam totam officia, quas maiores et quos ipsum quia cum, aperiam laboriosam provident pariatur sint quibusdam. Sequi, in! Adipisci beatae esse voluptate quaerat dolores. Cupiditate voluptatibus magni corporis tenetur sapiente quia amet excepturi quae voluptatem dolore eligendi accusamus officia natus, mollitia expedita in repellat, beatae aliquam neque assumenda illo temporibus. Doloremque, ipsa tempora. Laboriosam dolore, nemo ab aperiam laudantium amet reiciendis cum temporibus nostrum quisquam maiores expedita libero ipsum id. Praesentium harum nobis dolorum quasi aut itaque quidem est explicabo, tempora vero veniam deleniti asperiores sit placeat alias odio perferendis possimus enim nemo voluptatum! Sapiente, in similique. Corporis excepturi quaerat vero modi saepe nulla molestiae blanditiis atque fugit itaque unde quod sit odio vitae quae ut corrupti eaque assumenda voluptas ipsam reiciendis placeat repellendus, ab fugiat. Harum recusandae iure nobis veritatis, quod laboriosam ad quia adipisci odio quam repellendus impedit fugit necessitatibus soluta, fugiat enim molestiae minima culpa esse similique autem rem vitae accusantium. Numquam amet provident voluptates earum. Sint neque dolore culpa, maxime temporibus expedita perspiciatis ullam magnam non quos harum molestias modi quae sit aliquam facilis fuga quia voluptatem quod tempore distinctio dolor veniam. Quis fugit a commodi officia voluptatibus impedit tempore cupiditate amet totam. Non mollitia, eligendi rem explicabo ipsum tenetur numquam ad soluta quidem voluptates iste vero porro architecto maiores! Obcaecati ex corrupti alias maiores ipsa provident, debitis ad autem adipisci quasi? Impedit explicabo hic labore ipsam culpa obcaecati facilis, consequuntur, commodi quidem odit, sit optio doloremque. Est corrupti illo provident dolores! Error suscipit dolor possimus aperiam accusantium laboriosam soluta sit pariatur vitae doloribus molestias quo repudiandae est sapiente quasi ea reprehenderit, rerum repellendus nihil. Odit provident explicabo consectetur doloribus soluta fugit?",

      author: "Rahman, T.",
      year: 2026,
      cta: "Read Essay"
    },
    {
      title: "Coffee and the Intellectual Identity",
      description: "A reflection on how coffee shapes cognitive identity in modern urban life.",
      pera: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas natus exercitationem illo! Dicta voluptatem officia neque porro quia iste vero similique delectus distinctio? Nihil quaerat esse officiis repellendus at placeat tempora iste reprehenderit impedit amet? Ipsum vitae officia autem dolores architecto? Dolore officia libero dolorem reiciendis culpa, et excepturi ea deserunt nesciunt quos voluptate repudiandae! Aliquid maxime neque porro a consectetur modi placeat doloremque esse debitis temporibus, aperiam adipisci est ut doloribus saepe nulla corrupti tempora officia, illum iste nam reiciendis magnam? Natus mollitia libero possimus excepturi molestias, quasi dolorum sit ipsam reprehenderit sunt consequuntur quod doloribus? Beatae harum, quod debitis est magnam voluptatem esse qui ad placeat iure molestiae. Temporibus omnis cumque, atque libero tempora consequuntur quasi aut quas facere molestias, delectus quisquam! Sunt voluptas magnam id error modi vel ipsum dicta tempora natus sapiente labore quaerat eius omnis, est similique magni maxime cum dolor aliquam at non accusamus consectetur quia! Nemo aliquam officiis, quae cum neque eos repellat nobis qui quibusdam quas assumenda, quo, cumque reiciendis expedita eligendi saepe magnam? Minima, quidem! Optio nulla dolore quam obcaecati quos voluptates culpa assumenda, magni voluptatem vel, incidunt fugit consectetur consequatur asperiores ex saepe deleniti itaque in dolores quibusdam fuga alias ipsam debitis! Voluptatem nostrum quaerat error earum dicta nemo incidunt sint dolor ipsa beatae. Nihil amet praesentium sit blanditiis tempore suscipit voluptas, incidunt nisi veniam totam officia, quas maiores et quos ipsum quia cum, aperiam laboriosam provident pariatur sint quibusdam. Sequi, in! Adipisci beatae esse voluptate quaerat dolores. Cupiditate voluptatibus magni corporis tenetur sapiente quia amet excepturi quae voluptatem dolore eligendi accusamus officia natus, mollitia expedita in repellat, beatae aliquam neque assumenda illo temporibus. Doloremque, ipsa tempora. Laboriosam dolore, nemo ab aperiam laudantium amet reiciendis cum temporibus nostrum quisquam maiores expedita libero ipsum id. Praesentium harum nobis dolorum quasi aut itaque quidem est explicabo, tempora vero veniam deleniti asperiores sit placeat alias odio perferendis possimus enim nemo voluptatum! Sapiente, in similique. Corporis excepturi quaerat vero modi saepe nulla molestiae blanditiis atque fugit itaque unde quod sit odio vitae quae ut corrupti eaque assumenda voluptas ipsam reiciendis placeat repellendus, ab fugiat. Harum recusandae iure nobis veritatis, quod laboriosam ad quia adipisci odio quam repellendus impedit fugit necessitatibus soluta, fugiat enim molestiae minima culpa esse similique autem rem vitae accusantium. Numquam amet provident voluptates earum. Sint neque dolore culpa, maxime temporibus expedita perspiciatis ullam magnam non quos harum molestias modi quae sit aliquam facilis fuga quia voluptatem quod tempore distinctio dolor veniam. Quis fugit a commodi officia voluptatibus impedit tempore cupiditate amet totam. Non mollitia, eligendi rem explicabo ipsum tenetur numquam ad soluta quidem voluptates iste vero porro architecto maiores! Obcaecati ex corrupti alias maiores ipsa provident, debitis ad autem adipisci quasi? Impedit explicabo hic labore ipsam culpa obcaecati facilis, consequuntur, commodi quidem odit, sit optio doloremque. Est corrupti illo provident dolores! Error suscipit dolor possimus aperiam accusantium laboriosam soluta sit pariatur vitae doloribus molestias quo repudiandae est sapiente quasi ea reprehenderit, rerum repellendus nihil. Odit provident explicabo consectetur doloribus soluta fugit?",

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
    <div key={id} onClick={() => setSelectedEssay(essay)}>
      <Essay
        title={essay.title}
        description={essay.description}
        author={essay.author}
        year={essay.year}
        cta={essay.cta}
      />
    </div>
  ))}
</div>

      <Link to="/all-cultural-essays" className="cursor-pointer transition-transform duration-300 hover:scale-101 mx-auto w-full sm:w-8/12 md:w-7/12 mt-8 sm:mt-10 flex flex-row justify-center border border-[#2a2826] items-center text-[#A9A09B] text-base sm:text-lg md:text-xl gap-4 sm:gap-6 rounded-md py-2 sm:py-1 px-4  hover:bg-[#1c1a19]">
        View all field stories
        <span>
          <FontAwesomeIcon
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#948471]"
            icon={faArrowRight}
          />
        </span>
      </Link>

      {selectedEssay && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    onClick={() => setSelectedEssay(null)}  
  >
    
    <div
      className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#171516] border border-[#2a2826] rounded-2xl p-5 sm:p-6 md:p-8relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#171516] border border-[#2a2826] rounded-2xl p-5 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto no-scrollbar"
      onClick={(e) => e.stopPropagation()}  
    >

      {/* Close Button */}
      <button
        onClick={() => setSelectedEssay(null)}
        className="absolute top-4 right-4 text-[#A0928B] hover:text-white text-xl cursor-pointer"
      >
        ✕
      </button>

      {/* Content */}
      <p className="text-[#887F79] text-xs sm:text-sm mb-2">
        CULTURAL ESSAY
      </p>

      <h2 className="text-[#EEEBE6] text-2xl sm:text-3xl mb-4">
        {selectedEssay.title}
      </h2>

      <p className="text-[#726E6B] text-sm sm:text-base mb-6">
        {selectedEssay.description}
      </p>
      <p className='text-[#726E6B] text-sm sm:text-base mb-6 text-justify'>{selectedEssay.pera}</p>

      <div className="flex gap-2 text-xs sm:text-sm text-[#828081]">
        <span>{selectedEssay.author}</span>
        <span>•</span>
        <span>{selectedEssay.year}</span>
      </div>

    </div>
  </div>
)}
    </div>
  );
};

export default CulturalEssays;