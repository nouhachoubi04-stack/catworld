import { useState, useMemo } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { VideoItem } from '../types/cat';
import { VIDEOS_DATA } from '../data/videos';
import { SafeImage } from './SafeImage';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface VideosSectionProps {
  language: Language;
  onSelectBreed: (breedId: string) => void;
}

const VIDEO_CATEGORIES: ('All' | VideoItem['category'])[] = [
  'All',
  'Breed Spotlight',
  'Behavior & Habits',
  'Owner Care Tips',
  'Playful Moments',
];

export function VideosSection({ language, onSelectBreed }: VideosSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | VideoItem['category']>('All');
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEOS_DATA[0]);
  const [isPlayingEmbed, setIsPlayingEmbed] = useState(false);
  const t = TRANSLATIONS[language];

  const filteredVideos = useMemo(() => {
    if (activeCategory === 'All') return VIDEOS_DATA;
    return VIDEOS_DATA.filter((v) => v.category === activeCategory);
  }, [activeCategory]);

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlayingEmbed(true);
  };

  return (
    <section
      id="videos"
      aria-labelledby="videos-heading"
      className="py-16 sm:py-20 bg-[#FAF7F2] dark:bg-[#161210]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E3D9C8] dark:border-[#362C27]">
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-[#D96B27] dark:text-[#EA823E]">
              {t.videos.kicker}
            </p>
            <h2
              id="videos-heading"
              className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2C221E] dark:text-[#F5EFE6] text-balance"
            >
              {t.videos.title}
            </h2>
            <p className="mt-2 text-[#5A473D] dark:text-[#C9B9AA] max-w-2xl">
              {t.videos.subtitle}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Video categories"
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#E6DDD0] dark:bg-[#211B18]"
          >
            {VIDEO_CATEGORIES.map((cat) => (
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
                {t.videos.categories[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Integrated Theater Player */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl overflow-hidden bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27]">
          <div className="lg:col-span-8 aspect-video bg-[#161210] relative">
            {isPlayingEmbed ? (
              <iframe
                key={activeVideo.youtubeId}
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlayingEmbed(true)}
                className="w-full h-full relative group cursor-pointer block"
                aria-label={`Play ${activeVideo.title}`}
              >
                <SafeImage
                  src={activeVideo.thumbnailFallback}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#161210]/45 flex flex-col items-center justify-center p-6">
                  <span className="w-16 h-16 rounded-full bg-[#D96B27] hover:bg-[#BF5819] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </span>
                  <span className="mt-3 text-xs font-semibold tracking-wide text-[#FAF7F2] bg-[#161210]/70 px-3 py-1 rounded-full">
                    {t.videos.clickToPlay}
                  </span>
                </div>
              </button>
            )}
          </div>

          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#7D6659] dark:text-[#B8A89A]">
                <span className="font-semibold text-[#D96B27] dark:text-[#EA823E]">
                  {t.videos.categories[activeVideo.category]}
                </span>
                <span aria-hidden="true">·</span>
                <span dir="ltr" className="tabular-nums">{activeVideo.duration}</span>
              </div>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                {activeVideo.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-[#7D6659] dark:text-[#A39284]">
                {t.videos.channelLabel} {activeVideo.channel}
              </p>
              <p className="mt-4 text-sm text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed">
                {activeVideo.description}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#EFE8DC] dark:border-[#322924] flex flex-wrap items-center gap-3">
              {activeVideo.relatedBreedId && (
                <button
                  type="button"
                  onClick={() => onSelectBreed(activeVideo.relatedBreedId!)}
                  className="px-4 py-2 rounded-lg bg-[#D96B27] hover:bg-[#BF5819] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  {t.videos.openBreedSheet}
                </button>
              )}
              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#E3D9C8] dark:border-[#3A2F29] text-xs font-semibold text-[#5A473D] dark:text-[#C9B9AA] hover:border-[#D96B27] transition-colors"
              >
                {t.videos.openYoutube}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Video Library Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video) => {
            const isSelected = activeVideo.id === video.id;
            return (
              <article
                key={video.id}
                className={`group rounded-2xl overflow-hidden border transition-all duration-200 flex flex-col ${
                  isSelected
                    ? 'border-[#D96B27] dark:border-[#EA823E] bg-[#F2ECE1] dark:bg-[#2A221D]'
                    : 'border-[#E3D9C8] dark:border-[#362C27] bg-[#FFFDF9] dark:bg-[#211B18] hover:-translate-y-0.5'
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleSelectVideo(video)}
                  className="relative aspect-video w-full overflow-hidden bg-[#161210] block text-start cursor-pointer"
                  aria-label={`Play ${video.title}`}
                >
                  <SafeImage
                    src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[#161210]/30 group-hover:bg-[#161210]/45 transition-colors flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-[#D96B27]/95 text-white flex items-center justify-center shadow">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </span>
                  </div>
                  <span dir="ltr" className="absolute bottom-2 end-2 px-2 py-0.5 rounded bg-[#161210]/80 text-[11px] font-medium text-white tabular-nums">
                    {video.duration}
                  </span>
                </button>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-[#D96B27] dark:text-[#EA823E]">
                      {t.videos.categories[video.category]}
                    </div>
                    <h4 className="mt-1 font-serif text-base font-semibold text-[#2C221E] dark:text-[#F5EFE6] line-clamp-2">
                      {video.title}
                    </h4>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-[#EFE8DC] dark:border-[#322924] flex items-center justify-between text-xs text-[#7D6659] dark:text-[#A39284]">
                    <span className="truncate">{video.channel}</span>
                    <button
                      type="button"
                      onClick={() => handleSelectVideo(video)}
                      className="font-semibold text-[#D96B27] dark:text-[#EA823E] hover:underline shrink-0 ms-2 cursor-pointer"
                    >
                      {t.videos.watchBtn}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
