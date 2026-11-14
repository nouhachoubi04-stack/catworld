import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CatBreed } from '../types/cat';
import { DID_YOU_KNOW_FACTS } from '../data/gallery';
import { SafeImage } from './SafeImage';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { getLocalizedBreed } from '../i18n/breedTranslations';

interface HomeSectionsProps {
  language: Language;
  popularBreeds: CatBreed[];
  onSelectBreed: (breedId: string) => void;
  onViewAllBreeds: () => void;
}

export function HomeSections({
  language,
  popularBreeds,
  onSelectBreed,
  onViewAllBreeds,
}: HomeSectionsProps) {
  const t = TRANSLATIONS[language];

  return (
    <>
      {/* Popular Cat Breeds Section */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] dark:bg-[#161210]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#E3D9C8] dark:border-[#362C27]">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#D96B27] dark:text-[#EA823E]">
                {t.home.curatedSpotlight}
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2C221E] dark:text-[#F5EFE6] text-balance">
                {t.home.popularTitle}
              </h2>
              <p className="mt-2 text-[#6B574C] dark:text-[#B8A89A] max-w-2xl">
                {t.home.popularSubtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={onViewAllBreeds}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#D96B27] dark:border-[#EA823E] text-[#D96B27] dark:text-[#EA823E] hover:bg-[#D96B27] hover:text-white dark:hover:bg-[#EA823E] dark:hover:text-[#161210] font-semibold text-sm transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
            >
              {t.home.viewAllBreeds}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {popularBreeds.map((rawBreed, index) => {
              const breed = getLocalizedBreed(rawBreed, language);
              return (
                <motion.article
                  key={breed.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-2xl overflow-hidden bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27] flex flex-col transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#F2ECE1] dark:bg-[#2B231F]">
                    <SafeImage
                      src={breed.image}
                      alt={breed.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-[#7D6659] dark:text-[#B8A89A]">
                      <span>{breed.country}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{breed.lifespan}</span>
                      <span aria-hidden="true">·</span>
                      <span>{t.catalog.coats[breed.coatType]}</span>
                    </div>

                    <h3 className="mt-2 font-serif text-xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                      {breed.name}
                    </h3>

                    <p className="mt-2 text-sm text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed line-clamp-2 flex-1">
                      {breed.shortDescription}
                    </p>

                    <div className="mt-5 pt-4 border-t border-[#EFE8DC] dark:border-[#322924] flex items-center justify-between gap-4">
                      <span className="text-xs font-medium text-[#6B574C] dark:text-[#B8A89A] truncate">
                        {breed.temperaments.map((temp) => t.catalog.temperaments[temp]).join(' · ')}
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectBreed(breed.id)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D96B27] dark:text-[#EA823E] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        {t.home.discoverMore}
                        <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Did You Know? Section */}
      <section className="py-16 sm:py-20 bg-[#F2ECE1] dark:bg-[#1C1714] border-y border-[#E3D9C8] dark:border-[#362C27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#D96B27] dark:text-[#EA823E]">
              {t.home.didYouKnowKicker}
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2C221E] dark:text-[#F5EFE6] text-balance">
              {t.home.didYouKnowTitle}
            </h2>
            <p className="mt-2 text-[#5A473D] dark:text-[#C9B9AA]">
              {t.home.didYouKnowSubtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DID_YOU_KNOW_FACTS.map((item, index) => {
              const locFact = t.home.facts[index];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-6 rounded-2xl bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-[#EFE8DC] dark:border-[#322924]">
                      <span dir="ltr" className="font-serif text-2xl font-semibold text-[#D96B27] dark:text-[#EA823E] tabular-nums">
                        {item.metric}
                      </span>
                      <span className="text-xs text-[#7D6659] dark:text-[#B8A89A]">
                        {locFact?.metricLabel ?? item.metricLabel}
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                      {locFact?.title ?? item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed">
                      {locFact?.fact ?? item.fact}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
