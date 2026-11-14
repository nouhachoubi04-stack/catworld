import { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, RotateCcw, Search, SlidersHorizontal } from 'lucide-react';
import { BreedSize, CatBreed, CoatType, TemperamentTag } from '../types/cat';
import { SafeImage } from './SafeImage';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { getLocalizedBreed } from '../i18n/breedTranslations';

export interface BreedFiltersState {
  search: string;
  country: string;
  size: BreedSize | 'All';
  coatType: CoatType | 'All';
  temperament: TemperamentTag | 'All';
  sortBy: 'popularity' | 'alpha-asc' | 'alpha-desc';
}

interface BreedCatalogProps {
  language: Language;
  breeds: CatBreed[];
  filters: BreedFiltersState;
  onFiltersChange: (next: BreedFiltersState) => void;
  onSelectBreed: (breedId: string) => void;
}

const SIZE_OPTIONS: (BreedSize | 'All')[] = ['All', 'Small', 'Medium', 'Large'];
const COAT_OPTIONS: (CoatType | 'All')[] = ['All', 'Short', 'Long', 'Hairless'];
const TEMPERAMENT_OPTIONS: (TemperamentTag | 'All')[] = [
  'All',
  'Calm',
  'Playful',
  'Affectionate',
  'Independent',
];

export function BreedCatalog({
  language,
  breeds,
  filters,
  onFiltersChange,
  onSelectBreed,
}: BreedCatalogProps) {
  const t = TRANSLATIONS[language];

  const localizedBreeds = useMemo(
    () =>
      breeds.map((b) => ({
        rawCountry: b.country,
        breed: getLocalizedBreed(b, language),
      })),
    [breeds, language]
  );

  const countries = useMemo(() => {
    const map = new Map<string, string>();
    localizedBreeds.forEach(({ rawCountry, breed }) => {
      if (!map.has(rawCountry)) map.set(rawCountry, breed.country);
    });
    return Array.from(map.entries()).sort((a, b) => a[1].localeCompare(b[1]));
  }, [localizedBreeds]);

  const filteredBreeds = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    const list = localizedBreeds.filter(({ rawCountry, breed }) => {
      if (
        query &&
        !breed.name.toLowerCase().includes(query) &&
        !breed.country.toLowerCase().includes(query) &&
        !breed.shortDescription.toLowerCase().includes(query)
      ) {
        return false;
      }
      if (filters.country !== 'All' && rawCountry !== filters.country) return false;
      if (filters.size !== 'All' && breed.size !== filters.size) return false;
      if (filters.coatType !== 'All' && breed.coatType !== filters.coatType) return false;
      if (
        filters.temperament !== 'All' &&
        !breed.temperaments.includes(filters.temperament)
      ) {
        return false;
      }
      return true;
    });

    return [...list]
      .map((item) => item.breed)
      .sort((a, b) => {
        if (filters.sortBy === 'alpha-asc') return a.name.localeCompare(b.name);
        if (filters.sortBy === 'alpha-desc') return b.name.localeCompare(a.name);
        return a.popularityRank - b.popularityRank;
      });
  }, [localizedBreeds, filters]);

  const hasActiveFilters =
    filters.search !== '' ||
    filters.country !== 'All' ||
    filters.size !== 'All' ||
    filters.coatType !== 'All' ||
    filters.temperament !== 'All' ||
    filters.sortBy !== 'popularity';

  const handleReset = () => {
    onFiltersChange({
      search: '',
      country: 'All',
      size: 'All',
      coatType: 'All',
      temperament: 'All',
      sortBy: 'popularity',
    });
  };

  return (
    <section
      id="breeds"
      aria-labelledby="breeds-heading"
      className="py-16 sm:py-20 bg-[#FAF7F2] dark:bg-[#161210]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E3D9C8] dark:border-[#362C27]">
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-[#D96B27] dark:text-[#EA823E]">
              {t.catalog.kicker}
            </p>
            <h2
              id="breeds-heading"
              className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2C221E] dark:text-[#F5EFE6] text-balance"
            >
              {t.catalog.title}
            </h2>
            <p className="mt-2 text-[#5A473D] dark:text-[#C9B9AA] max-w-2xl">
              {t.catalog.subtitle}
            </p>
          </div>
          <div className="text-sm font-medium text-[#6B574C] dark:text-[#B8A89A] tabular-nums">
            {t.catalog.showingCount(filteredBreeds.length, breeds.length)}
          </div>
        </div>

        {/* Interactive Search & Filter Controls */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#F2ECE1] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27] space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search by Name */}
            <div>
              <label
                htmlFor="breed-search-input"
                className="block text-xs font-semibold text-[#5A473D] dark:text-[#C9B9AA] mb-1.5"
              >
                {t.catalog.searchLabel}
              </label>
              <div className="relative">
                <Search
                  className="w-4 h-4 text-[#7D6659] dark:text-[#A39284] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="breed-search-input"
                  type="search"
                  value={filters.search}
                  onChange={(e) =>
                    onFiltersChange({ ...filters, search: e.target.value })
                  }
                  placeholder={t.catalog.searchPlaceholder}
                  className="w-full ps-9 pe-3 py-2.5 text-sm rounded-lg border border-[#D9CEBC] dark:border-[#3A2F29] bg-[#FFFDF9] dark:bg-[#161210] text-[#2C221E] dark:text-[#F5EFE6] placeholder:text-[#8E776A] focus:outline-none focus:border-[#D96B27]"
                />
              </div>
            </div>

            {/* Filter by Country */}
            <div>
              <label
                htmlFor="breed-country-select"
                className="block text-xs font-semibold text-[#5A473D] dark:text-[#C9B9AA] mb-1.5"
              >
                {t.catalog.countryLabel}
              </label>
              <select
                id="breed-country-select"
                value={filters.country}
                onChange={(e) =>
                  onFiltersChange({ ...filters, country: e.target.value })
                }
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#D9CEBC] dark:border-[#3A2F29] bg-[#FFFDF9] dark:bg-[#161210] text-[#2C221E] dark:text-[#F5EFE6] focus:outline-none focus:border-[#D96B27]"
              >
                <option value="All">{t.catalog.allCountries}</option>
                {countries.map(([raw, localizedName]) => (
                  <option key={raw} value={raw}>
                    {localizedName}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Character */}
            <div>
              <label
                htmlFor="breed-temperament-select"
                className="block text-xs font-semibold text-[#5A473D] dark:text-[#C9B9AA] mb-1.5"
              >
                {t.catalog.temperamentLabel}
              </label>
              <select
                id="breed-temperament-select"
                value={filters.temperament}
                onChange={(e) =>
                  onFiltersChange({
                    ...filters,
                    temperament: e.target.value as TemperamentTag | 'All',
                  })
                }
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#D9CEBC] dark:border-[#3A2F29] bg-[#FFFDF9] dark:bg-[#161210] text-[#2C221E] dark:text-[#F5EFE6] focus:outline-none focus:border-[#D96B27]"
              >
                {TEMPERAMENT_OPTIONS.map((temp) => (
                  <option key={temp} value={temp}>
                    {temp === 'All'
                      ? t.catalog.allTemperaments
                      : t.catalog.temperaments[temp]}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label
                htmlFor="breed-sort-select"
                className="block text-xs font-semibold text-[#5A473D] dark:text-[#C9B9AA] mb-1.5"
              >
                {t.catalog.sortLabel}
              </label>
              <select
                id="breed-sort-select"
                value={filters.sortBy}
                onChange={(e) =>
                  onFiltersChange({
                    ...filters,
                    sortBy: e.target.value as BreedFiltersState['sortBy'],
                  })
                }
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#D9CEBC] dark:border-[#3A2F29] bg-[#FFFDF9] dark:bg-[#161210] text-[#2C221E] dark:text-[#F5EFE6] focus:outline-none focus:border-[#D96B27]"
              >
                <option value="popularity">{t.catalog.sortPopularity}</option>
                <option value="alpha-asc">{t.catalog.sortAlphaAsc}</option>
                <option value="alpha-desc">{t.catalog.sortAlphaDesc}</option>
              </select>
            </div>
          </div>

          {/* Segmented Filter Tabs for Size & Coat Type */}
          <div className="pt-4 border-t border-[#E3D9C8] dark:border-[#362C27] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#5A473D] dark:text-[#C9B9AA] inline-flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
                  {t.catalog.sizeLabel}
                </span>
                <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-[#E6DDD0] dark:bg-[#161210]">
                  {SIZE_OPTIONS.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => onFiltersChange({ ...filters, size })}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        filters.size === size
                          ? 'bg-[#D96B27] text-white shadow-xs'
                          : 'text-[#5A473D] dark:text-[#C9B9AA] hover:text-[#2C221E] dark:hover:text-[#F5EFE6]'
                      }`}
                    >
                      {size === 'All' ? t.catalog.allOption : t.catalog.sizes[size]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#5A473D] dark:text-[#C9B9AA]">
                  {t.catalog.coatLabel}
                </span>
                <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-[#E6DDD0] dark:bg-[#161210]">
                  {COAT_OPTIONS.map((coat) => (
                    <button
                      key={coat}
                      type="button"
                      onClick={() => onFiltersChange({ ...filters, coatType: coat })}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        filters.coatType === coat
                          ? 'bg-[#D96B27] text-white shadow-xs'
                          : 'text-[#5A473D] dark:text-[#C9B9AA] hover:text-[#2C221E] dark:hover:text-[#F5EFE6]'
                      }`}
                    >
                      {coat === 'All' ? t.catalog.allOption : t.catalog.coats[coat]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#D96B27] dark:text-[#EA823E] hover:bg-[#D96B27]/10 transition-colors whitespace-nowrap cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {t.catalog.resetFilters}
              </button>
            )}
          </div>
        </div>

        {/* Results Grid or Empty State */}
        {filteredBreeds.length === 0 ? (
          <div className="mt-12 p-12 rounded-2xl border border-[#E3D9C8] dark:border-[#362C27] bg-[#FFFDF9] dark:bg-[#211B18] text-center max-w-xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
              {t.catalog.noResultsTitle}
            </h3>
            <p className="mt-2 text-sm text-[#6B574C] dark:text-[#B8A89A]">
              {t.catalog.noResultsBody}
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D96B27] hover:bg-[#BF5819] text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              {t.catalog.showAllBreeds}
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredBreeds.map((breed) => (
              <motion.article
                key={breed.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-[#FFFDF9] dark:bg-[#211B18] border border-[#E3D9C8] dark:border-[#362C27] flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-[#D96B27]/60 dark:hover:border-[#EA823E]/60"
              >
                <button
                  type="button"
                  onClick={() => onSelectBreed(breed.id)}
                  className="aspect-[4/3] w-full overflow-hidden bg-[#F2ECE1] dark:bg-[#2B231F] block text-start cursor-pointer"
                  aria-label={breed.name}
                >
                  <SafeImage
                    src={breed.image}
                    alt={`${breed.name} — ${breed.country}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </button>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#7D6659] dark:text-[#B8A89A]">
                    <span className="truncate">{breed.country}</span>
                    <span className="shrink-0">
                      {t.catalog.sizes[breed.size]} · {t.catalog.coats[breed.coatType]}
                    </span>
                  </div>

                  <h3 className="mt-2 font-serif text-xl font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                    {breed.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#5A473D] dark:text-[#C9B9AA] leading-relaxed line-clamp-3 flex-1">
                    {breed.shortDescription}
                  </p>

                  {/* Structured Breed Key Specs */}
                  <dl className="mt-5 pt-4 border-t border-[#EFE8DC] dark:border-[#322924] grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                    <div>
                      <dt className="text-[#8E776A] dark:text-[#9E8C7E]">
                        {t.catalog.lifespanLabel}
                      </dt>
                      <dd className="font-semibold text-[#2C221E] dark:text-[#F5EFE6] tabular-nums">
                        {breed.lifespan}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#8E776A] dark:text-[#9E8C7E]">
                        {t.catalog.activityLabel}
                      </dt>
                      <dd className="font-semibold text-[#2C221E] dark:text-[#F5EFE6]">
                        {t.catalog.activityLevels[breed.activityLevel]}
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-[#8E776A] dark:text-[#9E8C7E]">
                        {t.catalog.characterLabel}
                      </dt>
                      <dd className="font-medium text-[#4A382E] dark:text-[#E5D8CB]">
                        {breed.temperaments.map((temp) => t.catalog.temperaments[temp]).join(' · ')}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => onSelectBreed(breed.id)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F2ECE1] dark:bg-[#2B231F] hover:bg-[#D96B27] dark:hover:bg-[#EA823E] text-[#2C221E] dark:text-[#F5EFE6] hover:text-white dark:hover:text-[#161210] font-semibold text-sm transition-colors cursor-pointer"
                    >
                      {t.catalog.discoverMore}
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
