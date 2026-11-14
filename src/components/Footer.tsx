import { useState } from 'react';
import { X } from 'lucide-react';
import { CatLogo } from './CatLogo';
import { NavSectionId } from './Navbar';
import { BreedFiltersState } from './BreedCatalog';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface FooterProps {
  language: Language;
  onNavigate: (section: NavSectionId) => void;
  onFilterCategory: (partial: Partial<BreedFiltersState>) => void;
}

export function Footer({ language, onNavigate, onFilterCategory }: FooterProps) {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-[#2C221E] dark:bg-[#0F0C0A] text-[#EBE3D5] border-t border-[#3E302B] dark:border-[#2B231F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="cursor-pointer inline-flex items-center gap-2.5 text-start"
              aria-label="Back to CAT WORLD top"
            >
              <CatLogo showWordmark={false} />
              <span className="font-serif text-xl font-semibold tracking-tight text-[#FAF7F2]">
                CAT WORLD
              </span>
            </button>
            <p className="text-sm text-[#C9B9AA] leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F4B98A]">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm text-[#C9B9AA]">
              {(
                [
                  { id: 'home', label: t.nav.home },
                  { id: 'breeds', label: t.nav.breeds },
                  { id: 'gallery', label: t.nav.gallery },
                  { id: 'videos', label: t.nav.videos },
                  { id: 'blog', label: t.nav.blog },
                  { id: 'about', label: t.nav.about },
                  { id: 'contact', label: t.nav.contact },
                ] as { id: NavSectionId; label: string }[]
              ).map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Breed Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F4B98A]">
              {t.footer.breedCategories}
            </h3>
            <ul className="space-y-2 text-sm text-[#C9B9AA]">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onFilterCategory({ coatType: 'Short', size: 'All', temperament: 'All' })
                  }
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  {t.footer.catShorthair}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onFilterCategory({ coatType: 'Long', size: 'All', temperament: 'All' })
                  }
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  {t.footer.catLonghair}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onFilterCategory({ coatType: 'Hairless', size: 'All', temperament: 'All' })
                  }
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  {t.footer.catHairless}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onFilterCategory({ size: 'Large', coatType: 'All', temperament: 'All' })
                  }
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  {t.footer.catLarge}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onFilterCategory({
                      temperament: 'Affectionate',
                      coatType: 'All',
                      size: 'All',
                    })
                  }
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  {t.footer.catAffectionate}
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F4B98A]">
              {t.footer.socialChannels}
            </h3>
            <ul className="space-y-2 text-sm text-[#C9B9AA]">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#43342E] dark:border-[#2B231F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A39284]">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-[#FAF7F2] underline underline-offset-4 transition-colors cursor-pointer"
            >
              {t.footer.privacyPolicy}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="hover:text-[#FAF7F2] underline underline-offset-4 transition-colors cursor-pointer"
            >
              {t.footer.editorialContact}
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.footer.privacyTitle}
          className="fixed inset-0 z-50 bg-[#161210]/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl bg-[#FAF7F2] dark:bg-[#211B18] text-[#2C221E] dark:text-[#F5EFE6] border border-[#E3D9C8] dark:border-[#362C27] p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E3D9C8] dark:border-[#362C27]">
              <h3 className="font-serif text-2xl font-semibold">{t.footer.privacyTitle}</h3>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                aria-label={t.footer.close}
                className="w-9 h-9 rounded-lg hover:bg-[#F2ECE1] dark:hover:bg-[#2B231F] flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed">
              {t.footer.privacyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="px-5 py-2 rounded-lg bg-[#D96B27] hover:bg-[#BF5819] text-white text-sm font-semibold cursor-pointer"
              >
                {t.footer.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
