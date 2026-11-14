import { motion } from 'motion/react';
import { BookOpen, HeartHandshake, ShieldCheck } from 'lucide-react';
import { HERO_IMAGES } from '../data/images';
import { SafeImage } from './SafeImage';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface AboutSectionProps {
  language: Language;
}

export function AboutSection({ language }: AboutSectionProps) {
  const t = TRANSLATIONS[language];
  const icons = [BookOpen, ShieldCheck, HeartHandshake];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 bg-[#FAF7F2] dark:bg-[#161210]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#D96B27] dark:text-[#EA823E]">
                {t.about.kicker}
              </p>
              <h2
                id="about-heading"
                className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2C221E] dark:text-[#F5EFE6] text-balance"
              >
                {t.about.title}
              </h2>

              <blockquote className="mt-6 py-5 border-y border-[#E3D9C8] dark:border-[#362C27] font-serif text-xl sm:text-2xl italic text-[#2C221E] dark:text-[#F5EFE6] leading-relaxed">
                {t.about.missionQuote}
              </blockquote>

              <p className="mt-5 text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed">
                {t.about.body}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.about.pillars.map((pillar, idx) => {
                const Icon = icons[idx] ?? BookOpen;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-[#F2ECE1] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27]"
                  >
                    <Icon
                      className="w-5 h-5 text-[#D96B27] dark:text-[#EA823E]"
                      aria-hidden="true"
                    />
                    <h3 className="mt-3 text-sm font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#6B574C] dark:text-[#B8A89A] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#E3D9C8] dark:border-[#362C27] bg-[#F2ECE1] dark:bg-[#211B18]"
          >
            <SafeImage
              src={HERO_IMAGES.cozy}
              alt="Bengal cat observing sunlight through a warm wooden window"
              className="w-full h-full min-h-[320px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
