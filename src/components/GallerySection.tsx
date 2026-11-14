import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from 'lucide-react';
import { GalleryPhoto } from '../types/cat';
import { GALLERY_PHOTOS } from '../data/gallery';
import { SafeImage } from './SafeImage';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface GallerySectionProps {
  language: Language;
  onSelectBreed: (breedId: string) => void;
}

const CATEGORIES: ('All' | GalleryPhoto['category'])[] = [
  'All',
  'Longhair',
  'Shorthair',
  'Exotic & Hairless',
  'Lifestyle & Care',
];

export function GallerySection({ language, onSelectBreed }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | GalleryPhoto['category']>('All');
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  const t = TRANSLATIONS[language];

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const activeIndex = useMemo(
    () => filteredPhotos.findIndex((p) => p.id === selectedPhotoId),
    [filteredPhotos, selectedPhotoId]
  );

  const activePhoto = activeIndex >= 0 ? filteredPhotos[activeIndex] : null;

  useEffect(() => {
    if (!activePhoto) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhotoId(null);
      if (e.key === 'ArrowRight') {
        const next = filteredPhotos[(activeIndex + 1) % filteredPhotos.length];
        setSelectedPhotoId(next.id);
      }
      if (e.key === 'ArrowLeft') {
        const prev =
          filteredPhotos[(activeIndex - 1 + filteredPhotos.length) % filteredPhotos.length];
        setSelectedPhotoId(prev.id);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activePhoto, activeIndex, filteredPhotos]);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-16 sm:py-20 bg-[#F2ECE1] dark:bg-[#1C1714] border-t border-[#E3D9C8] dark:border-[#362C27]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#DFD5C5] dark:border-[#362C27]">
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-[#D96B27] dark:text-[#EA823E]">
              {t.gallery.kicker}
            </p>
            <h2
              id="gallery-heading"
              className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2C221E] dark:text-[#F5EFE6] text-balance"
            >
              {t.gallery.title}
            </h2>
            <p className="mt-2 text-[#5A473D] dark:text-[#C9B9AA] max-w-2xl">
              {t.gallery.subtitle}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Gallery categories"
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#E6DDD0] dark:bg-[#161210]"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D96B27] text-white shadow-xs'
                    : 'text-[#5A473D] dark:text-[#C9B9AA] hover:text-[#2C221E] dark:hover:text-[#F5EFE6]'
                }`}
              >
                {t.gallery.categories[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* CSS Multi-Column Masonry Grid */}
        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo) => {
            const aspectClass =
              photo.aspectHint === 'tall'
                ? 'aspect-[3/4]'
                : photo.aspectHint === 'wide'
                ? 'aspect-[16/10]'
                : 'aspect-[4/3]';

            return (
              <motion.figure
                key={photo.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35 }}
                className="break-inside-avoid rounded-2xl overflow-hidden bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27] group"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPhotoId(photo.id)}
                  className={`relative w-full ${aspectClass} overflow-hidden block text-start cursor-pointer`}
                  aria-label={`${photo.title} — ${photo.breedName}`}
                >
                  <SafeImage
                    src={photo.src}
                    alt={`${photo.title} — ${photo.breedName}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#161210]/80 via-[#161210]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5"
                  >
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-xs text-[#F4B98A] font-medium">
                          {photo.breedName} · {photo.origin}
                        </p>
                        <p className="font-serif text-lg font-semibold text-white">
                          {photo.title}
                        </p>
                      </div>
                      <span className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm text-white flex items-center justify-center shrink-0">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </button>
                <figcaption className="px-4 py-3 flex items-center justify-between gap-3 text-xs">
                  <span className="font-semibold text-[#2C221E] dark:text-[#F5EFE6] truncate">
                    {photo.title}
                  </span>
                  <span className="text-[#7D6659] dark:text-[#B8A89A] shrink-0">
                    {photo.breedName}
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="fixed inset-0 z-50 bg-[#161210]/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setSelectedPhotoId(null)}
        >
          <div className="flex items-center justify-between text-[#EBE3D5]">
            <div dir="ltr" className="text-xs sm:text-sm tabular-nums">
              {activeIndex + 1} / {filteredPhotos.length} · {t.gallery.categories[activePhoto.category]}
            </div>
            <button
              type="button"
              onClick={() => setSelectedPhotoId(null)}
              aria-label="Close lightbox"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="flex-1 flex items-center justify-center gap-3 sm:gap-6 my-4 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                const prev =
                  filteredPhotos[
                    (activeIndex - 1 + filteredPhotos.length) % filteredPhotos.length
                  ];
                setSelectedPhotoId(prev.id);
              }}
              aria-label="Previous image"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>

            <div className="max-w-4xl max-h-[72vh] flex items-center justify-center">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-[72vh] max-w-full rounded-xl object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                const next = filteredPhotos[(activeIndex + 1) % filteredPhotos.length];
                setSelectedPhotoId(next.id);
              }}
              aria-label="Next image"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>

          <div
            className="max-w-3xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white border-t border-white/15 pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="font-serif text-lg font-semibold">{activePhoto.title}</h3>
              <p className="text-xs sm:text-sm text-[#C9B9AA]">{activePhoto.caption}</p>
            </div>
            {activePhoto.breedId && (
              <button
                type="button"
                onClick={() => {
                  const id = activePhoto.breedId!;
                  setSelectedPhotoId(null);
                  onSelectBreed(id);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D96B27] hover:bg-[#BF5819] text-white text-xs font-semibold whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
              >
                {t.gallery.exploreBreed} {activePhoto.breedName}
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
