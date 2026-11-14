import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { BlogArticle, CatBreed } from '../types/cat';
import { BLOG_ARTICLES } from '../data/articles';
import { SafeImage } from './SafeImage';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { getLocalizedBreed } from '../i18n/breedTranslations';

interface BlogSectionProps {
  language: Language;
  breeds: CatBreed[];
  onSelectBreed: (breedId: string) => void;
}

export function BlogSection({ language, breeds, onSelectBreed }: BlogSectionProps) {
  const [selectedArticleIdx, setSelectedArticleIdx] = useState<number | null>(null);
  const t = TRANSLATIONS[language];

  const selectedArticle: BlogArticle | null =
    selectedArticleIdx !== null ? BLOG_ARTICLES[selectedArticleIdx] : null;

  useEffect(() => {
    if (!selectedArticle) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticleIdx(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedArticle]);

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="py-16 sm:py-20 bg-[#F2ECE1] dark:bg-[#1C1714] border-t border-[#E3D9C8] dark:border-[#362C27]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-8 border-b border-[#DFD5C5] dark:border-[#362C27]">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#D96B27] dark:text-[#EA823E]">
            {t.blog.kicker}
          </p>
          <h2
            id="blog-heading"
            className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2C221E] dark:text-[#F5EFE6] text-balance"
          >
            {t.blog.title}
          </h2>
          <p className="mt-2 text-[#5A473D] dark:text-[#C9B9AA] max-w-2xl">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Editorial 7-Article Layout: Lead Feature + 6 Grid Cards */}
        <div className="mt-10 space-y-8">
          {/* Lead Article */}
          {BLOG_ARTICLES[0] && (
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4 }}
              className="group grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27]"
            >
              <div className="lg:col-span-6 aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#EBE3D5] dark:bg-[#2B231F]">
                <SafeImage
                  src={BLOG_ARTICLES[0].image}
                  alt={t.blog.articles[0]?.title ?? BLOG_ARTICLES[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#7D6659] dark:text-[#B8A89A]">
                    <span className="font-semibold text-[#D96B27] dark:text-[#EA823E]">
                      {t.blog.articles[0]?.category ?? BLOG_ARTICLES[0].category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{BLOG_ARTICLES[0].readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{BLOG_ARTICLES[0].publishedDate}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-[#2C221E] dark:text-[#F5EFE6] leading-snug">
                    {t.blog.articles[0]?.title ?? BLOG_ARTICLES[0].title}
                  </h3>
                  <p className="mt-3 text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed">
                    {t.blog.articles[0]?.excerpt ?? BLOG_ARTICLES[0].excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#EFE8DC] dark:border-[#322924] flex items-center justify-between gap-4">
                  <span className="text-xs text-[#7D6659] dark:text-[#A39284] truncate">
                    {t.blog.byAuthor} {BLOG_ARTICLES[0].author}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedArticleIdx(0)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D96B27] hover:bg-[#BF5819] text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {t.blog.readMore}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </motion.article>
          )}

          {/* Remaining 6 Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {BLOG_ARTICLES.slice(1).map((article, idx) => {
              const realIdx = idx + 1;
              const locArticle = t.blog.articles[realIdx];
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group rounded-2xl overflow-hidden bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27] flex flex-col transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#EBE3D5] dark:bg-[#2B231F]">
                    <SafeImage
                      src={article.image}
                      alt={locArticle?.title ?? article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-[#7D6659] dark:text-[#B8A89A]">
                      <span className="font-semibold text-[#D96B27] dark:text-[#EA823E]">
                        {locArticle?.category ?? article.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-[#2C221E] dark:text-[#F5EFE6] leading-snug">
                      {locArticle?.title ?? article.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed flex-1">
                      {locArticle?.excerpt ?? article.excerpt}
                    </p>

                    <div className="mt-5 pt-4 border-t border-[#EFE8DC] dark:border-[#322924] flex items-center justify-between gap-4">
                      <span className="text-xs text-[#7D6659] dark:text-[#A39284]">
                        {article.publishedDate}
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedArticleIdx(realIdx)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D96B27] dark:text-[#EA823E] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        {t.blog.readMore}
                        <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && selectedArticleIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.blog.articles[selectedArticleIdx]?.title ?? selectedArticle.title}
          className="fixed inset-0 z-50 bg-[#161210]/80 backdrop-blur-sm overflow-y-auto p-4 sm:p-8 flex justify-center items-start"
          onClick={() => setSelectedArticleIdx(null)}
        >
          <article
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl my-4 rounded-2xl bg-[#FAF7F2] dark:bg-[#1E1815] border border-[#E3D9C8] dark:border-[#362C27] overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-[16/9] bg-[#2C221E]">
              <SafeImage
                src={selectedArticle.image}
                alt={t.blog.articles[selectedArticleIdx]?.title ?? selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedArticleIdx(null)}
                aria-label="Close article reader"
                className="absolute top-4 end-4 w-11 h-11 rounded-full bg-[#161210]/75 hover:bg-[#161210] text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-10 max-w-2xl mx-auto">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#7D6659] dark:text-[#B8A89A]">
                <span className="font-semibold text-[#D96B27] dark:text-[#EA823E]">
                  {t.blog.articles[selectedArticleIdx]?.category ?? selectedArticle.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.publishedDate}</span>
              </div>

              <h2 className="mt-3 font-serif text-2xl sm:text-4xl font-semibold text-[#2C221E] dark:text-[#F5EFE6] leading-tight">
                {t.blog.articles[selectedArticleIdx]?.title ?? selectedArticle.title}
              </h2>
              <p className="mt-2 text-xs text-[#7D6659] dark:text-[#A39284]">
                {t.blog.byAuthor} {selectedArticle.author}
              </p>

              <div className="mt-7 space-y-7 border-t border-[#E3D9C8] dark:border-[#362C27] pt-7">
                {selectedArticle.sections.map((section, idx) => (
                  <section key={idx} className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                      {section.heading}
                    </h3>
                    {section.paragraphs.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-[#4A382E] dark:text-[#D5C7BA] leading-[1.8]"
                      >
                        {para}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="mt-8 p-6 rounded-xl bg-[#F2ECE1] dark:bg-[#26201C] border border-[#E3D9C8] dark:border-[#362C27]">
                <h4 className="font-serif text-lg font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                  {t.blog.keyTakeaways}
                </h4>
                <ul className="mt-3 space-y-2.5 text-sm text-[#4A382E] dark:text-[#D5C7BA]">
                  {selectedArticle.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-4 h-4 text-[#D96B27] dark:text-[#EA823E] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Breeds */}
              {selectedArticle.relatedBreedIds.length > 0 && (
                <div className="mt-8 pt-6 border-t border-[#E3D9C8] dark:border-[#362C27]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7D6659] dark:text-[#A39284]">
                    {t.blog.relatedBreeds}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {selectedArticle.relatedBreedIds.map((bId) => {
                      const raw = breeds.find((b) => b.id === bId);
                      if (!raw) return null;
                      const matched = getLocalizedBreed(raw, language);
                      return (
                        <button
                          key={matched.id}
                          type="button"
                          onClick={() => {
                            setSelectedArticleIdx(null);
                            onSelectBreed(matched.id);
                          }}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FFFDF9] dark:bg-[#26201C] border border-[#E3D9C8] dark:border-[#3A2F29] hover:border-[#D96B27] text-xs font-semibold text-[#2C221E] dark:text-[#F5EFE6] transition-colors cursor-pointer"
                        >
                          <img
                            src={matched.image}
                            alt={matched.name}
                            className="w-6 h-6 rounded object-cover"
                          />
                          {matched.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
