import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Mail, Menu, Moon, Search, Sun, X } from 'lucide-react';
import { CatLogo } from './CatLogo';
import { CatBreed } from '../types/cat';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { getLocalizedBreed } from '../i18n/breedTranslations';

export type NavSectionId =
  | 'home'
  | 'breeds'
  | 'gallery'
  | 'videos'
  | 'blog'
  | 'about'
  | 'contact';

interface NavbarProps {
  activeSection: NavSectionId;
  onNavigate: (section: NavSectionId) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  breeds: CatBreed[];
  onSelectBreed: (breedId: string) => void;
}

const LANGUAGE_OPTIONS: { code: Language; short: string; label: string }[] = [
  { code: 'fr', short: 'FR', label: 'Français' },
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'ar', short: 'AR', label: 'العربية' },
];

export function Navbar({
  activeSection,
  onNavigate,
  isDark,
  onToggleTheme,
  language,
  onLanguageChange,
  searchQuery,
  onSearchChange,
  breeds,
  onSelectBreed,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[language];

  const navItems: { id: NavSectionId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'breeds', label: t.nav.breeds },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'videos', label: t.nav.videos },
    { id: 'blog', label: t.nav.blog },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const quickMatches =
    searchQuery.trim().length > 0
      ? breeds
          .map((b) => getLocalizedBreed(b, language))
          .filter(
            (b) =>
              b.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
              b.country.toLowerCase().includes(searchQuery.trim().toLowerCase())
          )
          .slice(0, 5)
      : [];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (id: NavSectionId) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchFocused(false);
    setMobileOpen(false);
    onNavigate('breeds');
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2 px-3 sm:px-6'
          : 'py-0 px-0'
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ${
          isScrolled
            ? 'max-w-7xl rounded-2xl border border-[#D9CEBC]/90 dark:border-[#3E322C] bg-[#FAF7F2]/90 dark:bg-[#1A1512]/90 backdrop-blur-lg shadow-lg px-4 sm:px-6'
            : 'max-w-full border-b border-[#E3D9C8] dark:border-[#362C27] bg-[#FAF7F2]/95 dark:bg-[#161210]/95 backdrop-blur-md px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3">
          {/* Zone 1: Brand Wordmark */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleLinkClick('home')}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D96B27] rounded-lg shrink-0 cursor-pointer"
            aria-label="CAT WORLD Home"
          >
            <CatLogo />
          </motion.button>

          {/* Zone 2: Animated Floating Pill Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-[#EFE8DC]/80 dark:bg-[#231D1A] border border-[#E3D9C8]/80 dark:border-[#362C27]"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D96B27] ${
                    isActive
                      ? 'text-white dark:text-[#161210] font-semibold'
                      : 'text-[#5A473D] dark:text-[#C9B9AA] hover:text-[#2C221E] dark:hover:text-[#F5EFE6]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      className="absolute inset-0 rounded-full bg-[#D96B27] dark:bg-[#EA823E] shadow-xs"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Tablet Condensed Nav (lg to xl) */}
          <nav
            aria-label="Compact Navigation"
            className="hidden lg:flex xl:hidden items-center gap-1 p-1 rounded-full bg-[#EFE8DC]/80 dark:bg-[#231D1A] border border-[#E3D9C8]/80 dark:border-[#362C27]"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-2.5 py-1.5 text-xs font-medium rounded-full whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-white dark:text-[#161210] font-semibold'
                      : 'text-[#5A473D] dark:text-[#C9B9AA] hover:text-[#2C221E] dark:hover:text-[#F5EFE6]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPillTablet"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      className="absolute inset-0 rounded-full bg-[#D96B27] dark:bg-[#EA823E]"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Search, Language Switcher, Dark Mode & Contact Link */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Search Bar */}
            <div ref={searchContainerRef} className="relative hidden md:block">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search
                  className="w-3.5 h-3.5 text-[#7D6659] dark:text-[#A39284] absolute start-3 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onFocus={() => setSearchFocused(true)}
                  onChange={(e) => {
                    onSearchChange(e.target.value);
                    setSearchFocused(true);
                  }}
                  placeholder={t.nav.searchPlaceholder}
                  aria-label={t.nav.searchPlaceholder}
                  className="w-36 xl:w-44 ps-8 pe-3 py-1.5 text-xs rounded-full border border-[#E3D9C8] dark:border-[#3A2F29] bg-[#FFFDF9] dark:bg-[#211B18] text-[#2C221E] dark:text-[#F5EFE6] placeholder:text-[#8E776A] dark:placeholder:text-[#918073] focus:outline-none focus:border-[#D96B27] dark:focus:border-[#EA823E] focus:w-48 transition-all duration-200"
                />
              </form>

              <AnimatePresence>
                {searchFocused && quickMatches.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18 }}
                    className="absolute end-0 mt-2 w-72 rounded-xl border border-[#E3D9C8] dark:border-[#3A2F29] bg-[#FFFDF9] dark:bg-[#211B18] shadow-xl overflow-hidden z-50"
                  >
                    <div className="px-3 py-2 border-b border-[#EFE8DC] dark:border-[#322924] text-xs font-medium text-[#7D6659] dark:text-[#A39284]">
                      {t.nav.matchingBreeds}
                    </div>
                    <ul className="divide-y divide-[#EFE8DC] dark:divide-[#322924]">
                      {quickMatches.map((breed) => (
                        <li key={breed.id}>
                          <button
                            type="button"
                            onClick={() => {
                              setSearchFocused(false);
                              onSelectBreed(breed.id);
                            }}
                            className="w-full px-3 py-2.5 flex items-center gap-3 text-start hover:bg-[#F2ECE1] dark:hover:bg-[#2B231F] transition-colors cursor-pointer"
                          >
                            <img
                              src={breed.image}
                              alt={breed.name}
                              className="w-10 h-8 object-cover rounded shrink-0"
                            />
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-[#2C221E] dark:text-[#F5EFE6] truncate">
                                {breed.name}
                              </div>
                              <div className="text-xs text-[#7D6659] dark:text-[#A39284] truncate">
                                {breed.country}
                              </div>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3-Language Switcher (FR / EN / AR) */}
            <div
              role="group"
              aria-label={t.nav.languageLabel}
              className="inline-flex items-center p-0.5 rounded-full border border-[#E3D9C8] dark:border-[#3A2F29] bg-[#EFE8DC]/70 dark:bg-[#211B18]"
            >
              <Globe
                className="w-3.5 h-3.5 text-[#7D6659] dark:text-[#A39284] ms-2 me-1 hidden sm:block"
                aria-hidden="true"
              />
              {LANGUAGE_OPTIONS.map((opt) => {
                const selected = language === opt.code;
                return (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => onLanguageChange(opt.code)}
                    title={opt.label}
                    aria-label={opt.label}
                    aria-pressed={selected}
                    className={`relative px-2 py-1 text-[11px] font-semibold rounded-full transition-colors cursor-pointer ${
                      selected
                        ? 'text-white dark:text-[#161210]'
                        : 'text-[#5A473D] dark:text-[#C9B9AA] hover:text-[#2C221E] dark:hover:text-[#F5EFE6]'
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="activeLangPill"
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-[#4A382E] dark:bg-[#F4B98A]"
                      />
                    )}
                    <span className="relative z-10">{opt.short}</span>
                  </button>
                );
              })}
            </div>

            {/* Animated Dark / Light Mode Toggle */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={onToggleTheme}
              aria-label={isDark ? t.nav.lightMode : t.nav.darkMode}
              title={isDark ? t.nav.lightMode : t.nav.darkMode}
              className="h-9 px-2.5 inline-flex items-center justify-center gap-1.5 rounded-full border border-[#E3D9C8] dark:border-[#3A2F29] bg-[#FFFDF9] dark:bg-[#211B18] text-[#4A382E] dark:text-[#F5EFE6] hover:border-[#D96B27] dark:hover:border-[#EA823E] hover:text-[#D96B27] dark:hover:text-[#EA823E] transition-colors cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -60, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 60, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex items-center"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.span>
              </AnimatePresence>
              <span className="hidden 2xl:inline text-xs font-medium">
                {isDark ? t.nav.lightMode : t.nav.darkMode}
              </span>
            </motion.button>

            {/* Quick Contact Link on Mobile/Tablet where full nav is collapsed */}
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex lg:hidden items-center gap-1.5 h-9 px-3 rounded-full bg-[#D96B27] text-white text-xs font-semibold whitespace-nowrap cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              {t.nav.contact}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden w-9 h-9 inline-flex items-center justify-center rounded-full border border-[#E3D9C8] dark:border-[#3A2F29] bg-[#FFFDF9] dark:bg-[#211B18] text-[#2C221E] dark:text-[#F5EFE6] cursor-pointer"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-b border-[#E3D9C8] dark:border-[#362C27] bg-[#FAF7F2] dark:bg-[#161210]"
          >
            <div className="px-4 py-4 space-y-3">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center md:hidden">
                <Search
                  className="w-4 h-4 text-[#7D6659] dark:text-[#A39284] absolute start-3 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder={t.nav.searchPlaceholder}
                  aria-label={t.nav.searchPlaceholder}
                  className="w-full ps-9 pe-3 py-2.5 text-sm rounded-xl border border-[#E3D9C8] dark:border-[#3A2F29] bg-[#FFFDF9] dark:bg-[#211B18] text-[#2C221E] dark:text-[#F5EFE6] focus:outline-none focus:border-[#D96B27]"
                />
              </form>
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleLinkClick(item.id)}
                      className={`min-h-[44px] px-3 py-2 rounded-xl text-sm font-medium text-start transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#D96B27] text-white'
                          : 'bg-[#F2ECE1] dark:bg-[#211B18] text-[#2C221E] dark:text-[#F5EFE6]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
