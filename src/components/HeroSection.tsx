import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { HERO_IMAGES } from '../data/images';
import { SafeImage } from './SafeImage';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface HeroSectionProps {
  language: Language;
  onExploreBreeds: () => void;
  onExploreGallery: () => void;
  onContact: () => void;
}

const SLIDE_ASSETS = [
  {
    src: HERO_IMAGES.sunlight,
    alt: 'Majestic Maine Coon cat resting on a warm beige linen sofa in golden sunlight',
  },
  {
    src: HERO_IMAGES.portraits,
    alt: 'Seal-point Siamese cat and blue-gray British Shorthair seated side by side',
  },
  {
    src: HERO_IMAGES.cozy,
    alt: 'Rosetted Bengal cat perched beside a sunlit wooden window and terracotta plants',
  },
];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1100;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = window.setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => window.clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function HeroSection({
  language,
  onExploreBreeds,
  onExploreGallery,
  onContact,
}: HeroSectionProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    if (paused) return;
    const interval = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDE_ASSETS.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, [paused]);

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + SLIDE_ASSETS.length) % SLIDE_ASSETS.length);
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % SLIDE_ASSETS.length);
  };

  const currentAsset = SLIDE_ASSETS[slideIndex];
  const currentText = t.hero.slides[slideIndex];

  return (
    <section
      aria-label="Hero 3-Image Carousel"
      className="relative bg-[#FAF7F2] dark:bg-[#161210] pt-4 pb-12 sm:pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3-Image Interactive Carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative overflow-hidden rounded-2xl border border-[#E3D9C8] dark:border-[#362C27] bg-[#2C221E] min-h-[480px] sm:min-h-[550px] lg:min-h-[600px] flex items-end sm:items-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <SafeImage
                src={currentAsset.src}
                alt={currentAsset.alt}
                loading="eager"
                className="w-full h-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#161210]/92 via-[#161210]/55 to-[#161210]/20 sm:bg-gradient-to-r sm:from-[#161210]/90 sm:via-[#161210]/60 sm:to-transparent rtl:sm:bg-gradient-to-l"
              />
            </motion.div>
          </AnimatePresence>

          {/* Hero Content Overlay */}
          <div className="relative z-10 w-full px-6 py-10 pb-24 sm:pb-12 sm:px-12 lg:px-16 max-w-3xl">
            <motion.p
              key={`kicker-${language}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs sm:text-sm font-medium tracking-wider text-[#F4B98A] mb-3"
            >
              {t.hero.kicker}
            </motion.p>

            <motion.h1
              key={`title-${language}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="font-serif text-3xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.12] tracking-tight text-[#FAF7F2] text-balance"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              key={`sub-${language}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-4 sm:mt-5 text-base sm:text-lg text-[#EBE3D5] leading-relaxed max-w-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={onExploreBreeds}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D96B27] hover:bg-[#BF5819] text-white font-semibold text-sm sm:text-base shadow-sm transition-all duration-150 active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <button
                type="button"
                onClick={onExploreGallery}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/12 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-[#FAF7F2] font-medium text-sm sm:text-base transition-colors whitespace-nowrap cursor-pointer"
              >
                {t.hero.ctaSecondary}
              </button>

              <button
                type="button"
                onClick={onContact}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/12 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-[#FAF7F2] font-medium text-sm sm:text-base transition-colors whitespace-nowrap cursor-pointer"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                {t.hero.ctaContact}
              </button>
            </motion.div>
          </div>

          {/* Interactive 3-Image Carousel Switcher Strip & Arrows */}
          <div className="absolute bottom-4 inset-x-4 sm:inset-x-8 z-10 flex items-center justify-between gap-4">
            {/* 3 Clickable Slide Thumbnails */}
            <div className="flex items-center gap-2.5 overflow-x-auto">
              {SLIDE_ASSETS.map((asset, idx) => {
                const active = idx === slideIndex;
                return (
                  <button
                    key={asset.alt}
                    type="button"
                    onClick={() => setSlideIndex(idx)}
                    aria-label={`Slide ${idx + 1}: ${t.hero.slides[idx].caption}`}
                    className={`group flex items-center gap-2.5 p-1.5 pe-3 rounded-xl border transition-all cursor-pointer shrink-0 ${
                      active
                        ? 'bg-[#161210]/85 border-[#EA823E] text-white'
                        : 'bg-[#161210]/50 border-white/20 text-white/75 hover:bg-[#161210]/75 hover:text-white'
                    }`}
                  >
                    <img
                      src={asset.src}
                      alt=""
                      className="w-11 h-8 rounded-lg object-cover shrink-0"
                    />
                    <span className="hidden md:block text-start">
                      <span className="block text-[11px] font-semibold leading-tight">
                        {t.hero.slides[idx].tag}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Caption + Prev/Next Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden lg:inline-block text-xs text-[#EBE3D5]/90 me-2">
                {currentText.caption}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous hero slide"
                className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-[#161210]/65 hover:bg-[#161210]/90 text-white border border-white/25 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next hero slide"
                className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-[#161210]/65 hover:bg-[#161210]/90 text-white border border-white/25 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Animated Statistics Strip */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-[#F2ECE1] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27]">
            <div className="font-serif text-3xl font-semibold text-[#D96B27] dark:text-[#EA823E]">
              <AnimatedCounter target={20} suffix="+" />
            </div>
            <div className="mt-1 text-sm font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
              {t.hero.stats.breedsLabel}
            </div>
            <p className="mt-0.5 text-xs text-[#6B574C] dark:text-[#B8A89A]">
              {t.hero.stats.breedsSub}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F2ECE1] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27]">
            <div className="font-serif text-3xl font-semibold text-[#D96B27] dark:text-[#EA823E]">
              <AnimatedCounter target={14} />
            </div>
            <div className="mt-1 text-sm font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
              {t.hero.stats.countriesLabel}
            </div>
            <p className="mt-0.5 text-xs text-[#6B574C] dark:text-[#B8A89A]">
              {t.hero.stats.countriesSub}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F2ECE1] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27]">
            <div className="font-serif text-3xl font-semibold text-[#D96B27] dark:text-[#EA823E]">
              <AnimatedCounter target={3} />
            </div>
            <div className="mt-1 text-sm font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
              {t.hero.stats.coatsLabel}
            </div>
            <p className="mt-0.5 text-xs text-[#6B574C] dark:text-[#B8A89A]">
              {t.hero.stats.coatsSub}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F2ECE1] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27]">
            <div className="font-serif text-3xl font-semibold text-[#D96B27] dark:text-[#EA823E]">
              <AnimatedCounter target={15} suffix={t.hero.stats.yearsSuffix} />
            </div>
            <div className="mt-1 text-sm font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
              {t.hero.stats.lifespanLabel}
            </div>
            <p className="mt-0.5 text-xs text-[#6B574C] dark:text-[#B8A89A]">
              {t.hero.stats.lifespanSub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
