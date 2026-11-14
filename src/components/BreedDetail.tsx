import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
  Play,
  X,
} from 'lucide-react';
import { CatBreed } from '../types/cat';
import { SafeImage } from './SafeImage';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { getLocalizedBreed } from '../i18n/breedTranslations';

interface BreedDetailProps {
  language: Language;
  breed: CatBreed;
  allBreeds: CatBreed[];
  onBack: () => void;
  onSelectBreed: (breedId: string) => void;
}

function ScoreMeter({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs mb-1.5">
        <span className="font-medium text-[#5A473D] dark:text-[#C9B9AA]">{label}</span>
        <span dir="ltr" className="font-semibold text-[#2C221E] dark:text-[#F5EFE6] tabular-nums">
          {score} / 5
        </span>
      </div>
      <div className="grid grid-cols-5 gap-1.5" aria-label={`${label}: ${score} / 5`}>
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`h-2 rounded-sm transition-colors ${
              step <= score
                ? 'bg-[#D96B27] dark:bg-[#EA823E]'
                : 'bg-[#E3D9C8] dark:bg-[#362C27]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function BreedDetail({
  language,
  breed: rawBreed,
  allBreeds,
  onBack,
  onSelectBreed,
}: BreedDetailProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [playVideo, setPlayVideo] = useState(false);
  const t = TRANSLATIONS[language];
  const breed = getLocalizedBreed(rawBreed, language);

  const currentIdx = allBreeds.findIndex((b) => b.id === rawBreed.id);
  const prevBreed = getLocalizedBreed(
    allBreeds[(currentIdx - 1 + allBreeds.length) % allBreeds.length],
    language
  );
  const nextBreed = getLocalizedBreed(
    allBreeds[(currentIdx + 1) % allBreeds.length],
    language
  );

  const handleSwitchBreed = (id: string) => {
    setPlayVideo(false);
    setLightboxIdx(null);
    onSelectBreed(id);
  };

  return (
    <motion.article
      key={breed.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="py-10 sm:py-14 bg-[#FAF7F2] dark:bg-[#161210]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Breed Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E3D9C8] dark:border-[#362C27]">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5A473D] dark:text-[#C9B9AA] hover:text-[#D96B27] dark:hover:text-[#EA823E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {t.detail.backToCatalog}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleSwitchBreed(prevBreed.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E3D9C8] dark:border-[#362C27] bg-[#FFFDF9] dark:bg-[#211B18] text-xs font-medium text-[#5A473D] dark:text-[#C9B9AA] hover:border-[#D96B27] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5 rtl:rotate-180" />
              {prevBreed.name}
            </button>
            <button
              type="button"
              onClick={() => handleSwitchBreed(nextBreed.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E3D9C8] dark:border-[#362C27] bg-[#FFFDF9] dark:bg-[#211B18] text-xs font-medium text-[#5A473D] dark:text-[#C9B9AA] hover:border-[#D96B27] transition-colors cursor-pointer"
            >
              {nextBreed.name}
              <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>
        </div>

        {/* Hero Split Presentation */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#E3D9C8] dark:border-[#362C27] bg-[#F2ECE1] dark:bg-[#211B18]">
            <SafeImage
              src={breed.image}
              alt={breed.name}
              loading="eager"
              className="w-full h-full min-h-[300px] max-h-[480px] object-cover"
            />
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27] flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#D96B27] dark:text-[#EA823E]">
                {breed.regionLabel}
              </p>
              <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                {breed.name}
              </h1>
              <p className="mt-3 text-base text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed">
                {breed.shortDescription}
              </p>

              {/* Key Accession Specs */}
              <dl className="mt-6 pt-5 border-t border-[#EFE8DC] dark:border-[#322924] grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs text-[#8E776A] dark:text-[#9E8C7E]">
                    {t.detail.countryOrigin}
                  </dt>
                  <dd className="font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                    {breed.country}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#8E776A] dark:text-[#9E8C7E]">
                    {t.detail.lifeExpectancy}
                  </dt>
                  <dd className="font-semibold text-[#2C221E] dark:text-[#F5EFE6] tabular-nums">
                    {breed.lifespan}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#8E776A] dark:text-[#9E8C7E]">
                    {t.detail.coatType}
                  </dt>
                  <dd className="font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                    {t.catalog.coats[breed.coatType]}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#8E776A] dark:text-[#9E8C7E]">
                    {t.detail.temperament}
                  </dt>
                  <dd className="font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                    {breed.temperaments.map((temp) => t.catalog.temperaments[temp]).join(', ')}
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-xs text-[#8E776A] dark:text-[#9E8C7E]">
                    {t.detail.avgSizeWeight}
                  </dt>
                  <dd className="font-semibold text-[#2C221E] dark:text-[#F5EFE6] tabular-nums">
                    {breed.averageSizeWeight}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 pt-5 border-t border-[#EFE8DC] dark:border-[#322924] grid grid-cols-1 sm:grid-cols-2 gap-5">
              <ScoreMeter label={t.detail.intelligenceLevel} score={breed.intelligenceScore} />
              <ScoreMeter label={t.detail.activityLevel} score={breed.activityScore} />
            </div>
          </div>
        </div>

        {/* Rich Encyclopedic Detail Sections */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <section className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27]">
              <h2 className="font-serif text-2xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                {t.detail.originHistory}
              </h2>
              <p className="mt-3 text-[#4A382E] dark:text-[#D5C7BA] leading-relaxed">
                {breed.originHistory}
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27] space-y-5">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                  {t.detail.physicalAppearance}
                </h2>
                <p className="mt-3 text-[#4A382E] dark:text-[#D5C7BA] leading-relaxed">
                  {breed.physicalAppearance}
                </p>
              </div>
              <div className="pt-5 border-t border-[#EFE8DC] dark:border-[#322924]">
                <h3 className="font-serif text-lg font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                  {t.detail.coatColorsPatterns}
                </h3>
                <p className="mt-2 text-[#4A382E] dark:text-[#D5C7BA] leading-relaxed">
                  {breed.coatColorsPatterns}
                </p>
              </div>
            </section>

            <section className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27] space-y-5">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                  {t.detail.personalityBehavior}
                </h2>
                <p className="mt-3 text-[#4A382E] dark:text-[#D5C7BA] leading-relaxed">
                  {breed.personalityBehavior}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 border-t border-[#EFE8DC] dark:border-[#322924]">
                <div>
                  <h3 className="text-sm font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                    {t.detail.intelligenceProfile}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed">
                    {breed.intelligenceNote}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                    {t.detail.dailyActivityNeeds}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed">
                    {breed.activityNote}
                  </p>
                </div>
              </div>
            </section>

            <section className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27] space-y-5">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                  {t.detail.careGroomingNutrition}
                </h2>
                <p className="mt-3 text-[#4A382E] dark:text-[#D5C7BA] leading-relaxed">
                  {breed.careGrooming}
                </p>
              </div>
              <div className="pt-5 border-t border-[#EFE8DC] dark:border-[#322924]">
                <h3 className="font-serif text-lg font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                  {t.detail.recommendedDiet}
                </h3>
                <p className="mt-2 text-[#4A382E] dark:text-[#D5C7BA] leading-relaxed">
                  {breed.recommendedNutrition}
                </p>
              </div>
              <div className="pt-5 border-t border-[#EFE8DC] dark:border-[#322924]">
                <h3 className="font-serif text-lg font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                  {t.detail.healthPotentialConditions}
                </h3>
                <p className="mt-2 text-sm text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed">
                  {breed.healthConsiderations}
                </p>
                <p className="mt-2 text-xs text-[#8E776A] dark:text-[#9E8C7E]">
                  {t.detail.healthDisclaimer}
                </p>
              </div>
            </section>
          </div>

          {/* Right Sidebar: Compatibility, Facts & Video */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#F2ECE1] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27]">
              <h2 className="font-serif text-xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                {t.detail.householdCompatibility}
              </h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold text-[#7D6659] dark:text-[#B8A89A]">
                    {t.detail.withChildren}
                  </dt>
                  <dd className="mt-1 text-[#2C221E] dark:text-[#F5EFE6] leading-relaxed">
                    {breed.compatibility.children}
                  </dd>
                </div>
                <div className="pt-3 border-t border-[#E3D9C8] dark:border-[#362C27]">
                  <dt className="text-xs font-semibold text-[#7D6659] dark:text-[#B8A89A]">
                    {t.detail.withOtherPets}
                  </dt>
                  <dd className="mt-1 text-[#2C221E] dark:text-[#F5EFE6] leading-relaxed">
                    {breed.compatibility.otherPets}
                  </dd>
                </div>
                <div className="pt-3 border-t border-[#E3D9C8] dark:border-[#362C27]">
                  <dt className="text-xs font-semibold text-[#7D6659] dark:text-[#B8A89A]">
                    {t.detail.apartmentSuitability}
                  </dt>
                  <dd className="mt-1 font-semibold text-[#D96B27] dark:text-[#EA823E]">
                    {breed.compatibility.apartmentFriendly
                      ? t.detail.apartmentYes
                      : t.detail.apartmentNo}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27]">
              <h2 className="font-serif text-xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                {t.detail.interestingAnecdotes}
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-[#4A382E] dark:text-[#D5C7BA] leading-relaxed">
                {breed.interestingFacts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-serif font-semibold text-[#D96B27] dark:text-[#EA823E] tabular-nums shrink-0">
                      0{i + 1}.
                    </span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Breed Video Spotlight */}
            <div className="p-6 rounded-2xl bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27]">
              <h2 className="font-serif text-xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                {t.detail.videoSpotlight}
              </h2>
              <p className="mt-1 text-xs text-[#6B574C] dark:text-[#B8A89A]">
                {breed.youtubeTitle}
              </p>

              <div className="mt-4 aspect-video rounded-xl overflow-hidden bg-[#161210] relative border border-[#E3D9C8] dark:border-[#362C27]">
                {playVideo ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${breed.youtubeId}?autoplay=1&rel=0`}
                    title={breed.youtubeTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlayVideo(true)}
                    className="w-full h-full relative group cursor-pointer"
                    aria-label={breed.youtubeTitle}
                  >
                    <SafeImage
                      src={breed.image}
                      alt={breed.youtubeTitle}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#161210]/45 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-[#D96B27] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </span>
                    </div>
                  </button>
                )}
              </div>

              <a
                href={`https://www.youtube.com/watch?v=${breed.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#D96B27] dark:text-[#EA823E] hover:underline"
              >
                {t.detail.watchOnYoutube}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </aside>
        </div>

        {/* Multi-Image Breed Gallery */}
        <section className="mt-12 pt-10 border-t border-[#E3D9C8] dark:border-[#362C27]">
          <h2 className="font-serif text-2xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
            {breed.name} — {t.detail.visualGallery}
          </h2>
          <p className="mt-1 text-sm text-[#6B574C] dark:text-[#B8A89A]">
            {t.detail.clickFullscreen}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {breed.galleryImages.map((img, idx) => (
              <figure key={idx} className="group">
                <button
                  type="button"
                  onClick={() => setLightboxIdx(idx)}
                  className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#E3D9C8] dark:border-[#362C27] bg-[#F2ECE1] dark:bg-[#211B18] cursor-pointer block"
                  aria-label={`${breed.name} photo ${idx + 1}`}
                >
                  <SafeImage
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute bottom-3 end-3 w-8 h-8 rounded-lg bg-[#161210]/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </button>
              </figure>
            ))}
          </div>
        </section>
      </div>

      {/* Breed Image Lightbox */}
      {lightboxIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Breed photo viewer"
          className="fixed inset-0 z-50 bg-[#161210]/95 flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIdx(null)}
            aria-label="Close fullscreen image"
            className="absolute top-4 end-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={breed.galleryImages[lightboxIdx].src}
              alt={breed.galleryImages[lightboxIdx].caption}
              className="max-h-[75vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </motion.article>
  );
}
