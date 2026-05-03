import React, { useState, useEffect, useRef, useCallback } from 'react';

const DURATION = 5000;

const FeaturedStoryCarousel = ({ stories }) => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoTimer = useRef(null);
  const progressTimer = useRef(null);
  const touchStartX = useRef(null);

  const goTo = useCallback((index) => {
    const next = (index + stories.length) % stories.length;
    setCurrent(next);
    setProgress(0);
  }, [stories.length]);

  const startAuto = useCallback(() => {
    clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % stories.length);
      setProgress(0);
    }, DURATION);
  }, [stories.length]);

  // Progress bar tick
  useEffect(() => {
    setProgress(0);
    clearInterval(progressTimer.current);
    progressTimer.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(progressTimer.current); return 100; }
        return prev + (100 / (DURATION / 100));
      });
    }, 100);
    return () => clearInterval(progressTimer.current);
  }, [current]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoTimer.current);
  }, [startAuto]);

  const handlePrev = () => { goTo(current - 1); startAuto(); };
  const handleNext = () => { goTo(current + 1); startAuto(); };

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { goTo(diff > 0 ? current + 1 : current - 1); startAuto(); }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full h-[60vh] overflow-hidden sm:h-[65vh] md:h-[70vh] overflow-hidden rounded-2xl"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      
    >
      {/* Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#C8A96E] z-20 transition-none"
        style={{ width: `${progress}%` }}
      />

      {/* Slides */}
      {stories.map((story, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={story.img}
            alt={story.title}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/15" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-20 sm:px-10 sm:pb-24 md:px-14">
            <span className="inline-block text-[#C8A96E] text-[0.65rem] font-semibold tracking-[0.18em] uppercase border border-[#C8A96E]/40 px-2.5 py-1 mb-3">
              📍 {story.location}
            </span>
            <h2 className="font-serif text-[#EEEBE6] text-2xl sm:text-3xl md:text-4xl leading-snug mb-2.5 max-w-xl">
              {story.title}
            </h2>
            <p className="text-[#9E9B97] text-sm italic font-light mb-4 max-w-md leading-relaxed">
              {story.description}
            </p>
            <div className="flex items-center gap-3 text-[#6B6967] text-[0.68rem] uppercase tracking-wider font-medium">
              <span>{story.author}</span>
              <span className="text-[#3A3937]">·</span>
              <span>{story.date}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Index */}
      <div className="absolute top-5 right-5 text-white/35 text-[0.7rem] tracking-widest font-medium z-10">
        {String(current + 1).padStart(2, '0')} / {String(stories.length).padStart(2, '0')}
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/[0.08] border border-white/[0.12] text-white hover:bg-white/[0.18] transition-colors"
        aria-label="Previous"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/[0.08] border border-white/[0.12] text-white hover:bg-white/[0.18] transition-colors"
        aria-label="Next"
      >
        →
      </button>

      {/* Dot Controllers */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {stories.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); startAuto(); }}
            className={`h-[6px] rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-white w-5'
                : 'bg-white/30 w-[6px] hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedStoryCarousel;