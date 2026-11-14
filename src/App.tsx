import { useState, useEffect, useMemo } from 'react';
import { CAT_BREEDS } from './data/breeds';
import { Navbar, NavSectionId } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HomeSections } from './components/HomeSections';
import { BreedCatalog, BreedFiltersState } from './components/BreedCatalog';
import { BreedDetail } from './components/BreedDetail';
import { GallerySection } from './components/GallerySection';
import { VideosSection } from './components/VideosSection';
import { BlogSection } from './components/BlogSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Language } from './i18n/translations';
import { getLocalizedBreed } from './i18n/breedTranslations';

const DEFAULT_FILTERS: BreedFiltersState = {
  search: '',
  country: 'All',
  size: 'All',
  coatType: 'All',
  temperament: 'All',
  sortBy: 'popularity',
};

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = window.localStorage.getItem('catworld-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'fr';
    const saved = window.localStorage.getItem('catworld-lang');
    if (saved === 'en' || saved === 'fr' || saved === 'ar') return saved;
    return 'fr';
  });

  const [activeSection, setActiveSection] = useState<NavSectionId>('home');
  const [selectedBreedId, setSelectedBreedId] = useState<string | null>(null);
  const [filters, setFilters] = useState<BreedFiltersState>(DEFAULT_FILTERS);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      window.localStorage.setItem('catworld-theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('catworld-theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    window.localStorage.setItem('catworld-lang', language);
  }, [language]);

  const selectedBreed = useMemo(
    () => CAT_BREEDS.find((b) => b.id === selectedBreedId) ?? null,
    [selectedBreedId]
  );

  useEffect(() => {
    if (selectedBreed) {
      const loc = getLocalizedBreed(selectedBreed, language);
      document.title = `${loc.name} | CAT WORLD`;
    } else {
      document.title =
        language === 'fr'
          ? 'CAT WORLD – Découvrez l’Univers des Chats'
          : language === 'ar'
          ? 'CAT WORLD – اكتشف عالم القطط'
          : 'CAT WORLD – Discover the World of Cats & Feline Breeds';
    }
  }, [selectedBreed, language]);

  const popularBreeds = useMemo(
    () => [...CAT_BREEDS].sort((a, b) => a.popularityRank - b.popularityRank).slice(0, 6),
    []
  );

  const handleNavigate = (section: NavSectionId) => {
    setSelectedBreedId(null);
    setActiveSection(section);

    window.setTimeout(() => {
      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 50);
  };

  const handleSelectBreed = (breedId: string) => {
    setSelectedBreedId(breedId);
    setActiveSection('breeds');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterCategory = (partial: Partial<BreedFiltersState>) => {
    setFilters({
      ...DEFAULT_FILTERS,
      ...partial,
    });
    handleNavigate('breeds');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C221E] dark:bg-[#161210] dark:text-[#F5EFE6] transition-colors duration-200">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        language={language}
        onLanguageChange={setLanguage}
        searchQuery={filters.search}
        onSearchChange={(q) => setFilters((prev) => ({ ...prev, search: q }))}
        breeds={CAT_BREEDS}
        onSelectBreed={handleSelectBreed}
      />

      <main className="flex-1">
        {selectedBreed ? (
          <BreedDetail
            language={language}
            breed={selectedBreed}
            allBreeds={CAT_BREEDS}
            onBack={() => handleNavigate('breeds')}
            onSelectBreed={handleSelectBreed}
          />
        ) : (
          <>
            <HeroSection
              language={language}
              onExploreBreeds={() => handleNavigate('breeds')}
              onExploreGallery={() => handleNavigate('gallery')}
              onContact={() => handleNavigate('contact')}
            />

            <HomeSections
              language={language}
              popularBreeds={popularBreeds}
              onSelectBreed={handleSelectBreed}
              onViewAllBreeds={() => handleNavigate('breeds')}
            />

            <BreedCatalog
              language={language}
              breeds={CAT_BREEDS}
              filters={filters}
              onFiltersChange={setFilters}
              onSelectBreed={handleSelectBreed}
            />

            <GallerySection
              language={language}
              onSelectBreed={handleSelectBreed}
            />

            <VideosSection
              language={language}
              onSelectBreed={handleSelectBreed}
            />

            <BlogSection
              language={language}
              breeds={CAT_BREEDS}
              onSelectBreed={handleSelectBreed}
            />

            <AboutSection language={language} />

            <ContactSection language={language} />
          </>
        )}
      </main>

      <Footer
        language={language}
        onNavigate={handleNavigate}
        onFilterCategory={handleFilterCategory}
      />
    </div>
  );
}
