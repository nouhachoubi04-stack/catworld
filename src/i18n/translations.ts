export type Language = 'en' | 'fr' | 'ar';

export interface Translations {
  brandTagline: string;
  nav: {
    home: string;
    breeds: string;
    gallery: string;
    videos: string;
    blog: string;
    about: string;
    contact: string;
    searchPlaceholder: string;
    matchingBreeds: string;
    lightMode: string;
    darkMode: string;
    languageLabel: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaContact: string;
    slides: {
      caption: string;
      tag: string;
    }[];
    stats: {
      breedsLabel: string;
      breedsSub: string;
      countriesLabel: string;
      countriesSub: string;
      coatsLabel: string;
      coatsSub: string;
      lifespanLabel: string;
      lifespanSub: string;
      yearsSuffix: string;
    };
  };
  home: {
    curatedSpotlight: string;
    popularTitle: string;
    popularSubtitle: string;
    viewAllBreeds: string;
    discoverMore: string;
    coatWord: string;
    didYouKnowKicker: string;
    didYouKnowTitle: string;
    didYouKnowSubtitle: string;
    facts: {
      title: string;
      fact: string;
      metricLabel: string;
    }[];
  };
  catalog: {
    kicker: string;
    title: string;
    subtitle: string;
    showingCount: (shown: number, total: number) => string;
    searchLabel: string;
    searchPlaceholder: string;
    countryLabel: string;
    allCountries: string;
    temperamentLabel: string;
    allTemperaments: string;
    sortLabel: string;
    sortPopularity: string;
    sortAlphaAsc: string;
    sortAlphaDesc: string;
    sizeLabel: string;
    coatLabel: string;
    allOption: string;
    resetFilters: string;
    noResultsTitle: string;
    noResultsBody: string;
    showAllBreeds: string;
    lifespanLabel: string;
    activityLabel: string;
    characterLabel: string;
    discoverMore: string;
    sizes: Record<'Small' | 'Medium' | 'Large', string>;
    coats: Record<'Short' | 'Long' | 'Hairless', string>;
    temperaments: Record<'Calm' | 'Playful' | 'Affectionate' | 'Independent', string>;
    activityLevels: Record<'Low' | 'Moderate' | 'High' | 'Very High', string>;
  };
  detail: {
    backToCatalog: string;
    countryOrigin: string;
    lifeExpectancy: string;
    coatType: string;
    temperament: string;
    avgSizeWeight: string;
    intelligenceLevel: string;
    activityLevel: string;
    originHistory: string;
    physicalAppearance: string;
    coatColorsPatterns: string;
    personalityBehavior: string;
    intelligenceProfile: string;
    dailyActivityNeeds: string;
    careGroomingNutrition: string;
    recommendedDiet: string;
    healthPotentialConditions: string;
    healthDisclaimer: string;
    householdCompatibility: string;
    withChildren: string;
    withOtherPets: string;
    apartmentSuitability: string;
    apartmentYes: string;
    apartmentNo: string;
    interestingAnecdotes: string;
    videoSpotlight: string;
    watchOnYoutube: string;
    visualGallery: string;
    clickFullscreen: string;
  };
  gallery: {
    kicker: string;
    title: string;
    subtitle: string;
    categories: Record<'All' | 'Longhair' | 'Shorthair' | 'Exotic & Hairless' | 'Lifestyle & Care', string>;
    exploreBreed: string;
  };
  videos: {
    kicker: string;
    title: string;
    subtitle: string;
    categories: Record<'All' | 'Breed Spotlight' | 'Behavior & Habits' | 'Owner Care Tips' | 'Playful Moments', string>;
    clickToPlay: string;
    channelLabel: string;
    openBreedSheet: string;
    openYoutube: string;
    watchBtn: string;
  };
  blog: {
    kicker: string;
    title: string;
    subtitle: string;
    byAuthor: string;
    readMore: string;
    keyTakeaways: string;
    relatedBreeds: string;
    articles: {
      title: string;
      category: string;
      excerpt: string;
    }[];
  };
  about: {
    kicker: string;
    title: string;
    missionQuote: string;
    body: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    editorialDesk: string;
    collectiveTitle: string;
    collectiveCities: string;
    followCommunity: string;
    fullName: string;
    emailAddress: string;
    subject: string;
    message: string;
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sendMessage: string;
    errorSummary: string;
    errName: string;
    errEmail: string;
    errSubject: string;
    errMessage: string;
    successTitle: string;
    successBody: (name: string, subject: string) => string;
    sendAnother: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    breedCategories: string;
    socialChannels: string;
    catShorthair: string;
    catLonghair: string;
    catHairless: string;
    catLarge: string;
    catAffectionate: string;
    copyright: string;
    privacyPolicy: string;
    editorialContact: string;
    privacyTitle: string;
    privacyParagraphs: string[];
    close: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    brandTagline: 'Discover the World of Cats',
    nav: {
      home: 'Home',
      breeds: 'Cat Breeds',
      gallery: 'Gallery',
      videos: 'Videos',
      blog: 'Blog',
      about: 'About Us',
      contact: 'Contact',
      searchPlaceholder: 'Search breeds...',
      matchingBreeds: 'Matching Breeds',
      lightMode: 'Light',
      darkMode: 'Dark',
      languageLabel: 'Language',
    },
    hero: {
      kicker: 'CAT WORLD · Feline Encyclopedia & Visual Archive',
      title: 'Discover the Wonderful World of Cats',
      subtitle:
        'From serene longhaired Persian aristocrats to agile rosetted Bengals, explore the origins, temperaments, care routines, and quiet magic of the world’s most captivating feline breeds.',
      ctaPrimary: 'Explore Cat Breeds',
      ctaSecondary: 'Browse Gallery',
      ctaContact: 'Contact Us',
      slides: [
        { caption: 'Maine Coon · Gentle Giant of North America', tag: '01 · Heritage' },
        { caption: 'Siamese & British Shorthair · Contrasting Feline Icons', tag: '02 · Portraits' },
        { caption: 'Bengal Cat · Wild Rosettes & Curious Grace', tag: '03 · Agility' },
      ],
      stats: {
        breedsLabel: 'Pedigree Cat Breeds',
        breedsSub: 'Complete encyclopedia sheets',
        countriesLabel: 'Countries of Origin',
        countriesSub: 'Across five continents',
        coatsLabel: 'Distinct Coat Types',
        coatsSub: 'Short, Long & Hairless profiles',
        lifespanLabel: 'Average Lifespan',
        lifespanSub: 'With preventive wellness care',
        yearsSuffix: '+ yrs',
      },
    },
    home: {
      curatedSpotlight: 'Curated Spotlight',
      popularTitle: 'Popular Cat Breeds',
      popularSubtitle:
        'Beloved worldwide for their distinctive silhouettes, loyal temperaments, and rich heritage across continents.',
      viewAllBreeds: 'View All 20 Breeds',
      discoverMore: 'Discover More',
      coatWord: 'coat',
      didYouKnowKicker: 'Feline Science & Curiosities',
      didYouKnowTitle: 'Did You Know?',
      didYouKnowSubtitle: 'Behind every graceful leap and quiet purr lies remarkable evolutionary biology.',
      facts: [
        {
          title: 'Unique Nose Prints',
          fact: 'Just like human fingerprints, the textured pattern of ridges and bumps on a cat’s nose leather is completely unique to every individual feline.',
          metricLabel: 'Individual pattern',
        },
        {
          title: 'Healing Purr Frequencies',
          fact: 'Domestic cats purr at frequencies between 25 and 150 Hertz—vibrations studied for their role in soothing stress and supporting bone and tissue repair.',
          metricLabel: 'Resonance range',
        },
        {
          title: 'Floating Collarbones',
          fact: 'A cat’s clavicle is not rigidly attached to other bones by joints, allowing its shoulders to compress and squeeze cleanly through any opening its head can clear.',
          metricLabel: 'Shoulder flexibility',
        },
        {
          title: 'Scent-Tasting Organ',
          fact: 'When a cat opens its mouth slightly in a quizzical grimace after sniffing something intriguing, it is drawing air into the vomeronasal (Jacobson’s) organ.',
          metricLabel: 'Olfactory receptors',
        },
        {
          title: 'Sweetness Blindness',
          fact: 'Unlike humans and dogs, domestic cats lack the functional Tas1r2 gene receptor required to detect sweet sugars—reinforcing their biology as obligate carnivores.',
          metricLabel: 'Sweet taste receptors',
        },
        {
          title: 'Low-Light Vision Mastery',
          fact: 'Cats require roughly one-sixth the illumination humans need to see clearly thanks to a high density of rod cells and the reflective tapetum lucidum.',
          metricLabel: 'Low-light sensitivity',
        },
      ],
    },
    catalog: {
      kicker: 'Encyclopedia Catalog',
      title: 'Explore Cat Breeds',
      subtitle:
        'Filter by origin, build, coat type, and temperament to discover the feline companion that fits your home.',
      showingCount: (shown, total) => `Showing ${shown} of ${total} breeds`,
      searchLabel: 'Search by Breed Name',
      searchPlaceholder: 'e.g. Maine Coon, Siamese...',
      countryLabel: 'Country of Origin',
      allCountries: 'All Countries',
      temperamentLabel: 'Temperament',
      allTemperaments: 'All Temperaments',
      sortLabel: 'Sort Breeds',
      sortPopularity: 'Popularity (Most Popular)',
      sortAlphaAsc: 'Alphabetical (A – Z)',
      sortAlphaDesc: 'Alphabetical (Z – A)',
      sizeLabel: 'Size:',
      coatLabel: 'Coat:',
      allOption: 'All',
      resetFilters: 'Reset Filters',
      noResultsTitle: 'No matching cat breeds found',
      noResultsBody:
        'Try broadening your coat, size, or temperament selection—for instance, no purebred Hairless breeds are classified as Small in our current catalog.',
      showAllBreeds: 'Show All 20 Breeds',
      lifespanLabel: 'Lifespan',
      activityLabel: 'Activity Level',
      characterLabel: 'Character',
      discoverMore: 'Discover More',
      sizes: { Small: 'Small', Medium: 'Medium', Large: 'Large' },
      coats: { Short: 'Short', Long: 'Long', Hairless: 'Hairless' },
      temperaments: {
        Calm: 'Calm',
        Playful: 'Playful',
        Affectionate: 'Affectionate',
        Independent: 'Independent',
      },
      activityLevels: {
        Low: 'Low',
        Moderate: 'Moderate',
        High: 'High',
        'Very High': 'Very High',
      },
    },
    detail: {
      backToCatalog: 'Back to Cat Breeds Catalog',
      countryOrigin: 'Country of Origin',
      lifeExpectancy: 'Life Expectancy',
      coatType: 'Coat Type',
      temperament: 'Temperament',
      avgSizeWeight: 'Average Size & Weight',
      intelligenceLevel: 'Intelligence Level',
      activityLevel: 'Activity Level',
      originHistory: 'Origin & History',
      physicalAppearance: 'Physical Appearance',
      coatColorsPatterns: 'Coat Colors & Patterns',
      personalityBehavior: 'Personality & Behavior',
      intelligenceProfile: 'Intelligence Profile',
      dailyActivityNeeds: 'Daily Activity Needs',
      careGroomingNutrition: 'Care, Grooming & Nutrition',
      recommendedDiet: 'Recommended Diet',
      healthPotentialConditions: 'Health & Potential Conditions',
      healthDisclaimer:
        'Health notes are presented for general educational guidance; always consult a licensed veterinarian for individual diagnostic screening.',
      householdCompatibility: 'Household Compatibility',
      withChildren: 'With Children',
      withOtherPets: 'With Other Pets',
      apartmentSuitability: 'Indoor Apartment Suitability',
      apartmentYes: 'Well-suited to indoor apartment living',
      apartmentNo: 'Prefers spacious homes with high vertical enrichment',
      interestingAnecdotes: 'Interesting Anecdotes',
      videoSpotlight: 'Breed Video Spotlight',
      watchOnYoutube: 'Watch on YouTube',
      visualGallery: 'Visual Gallery',
      clickFullscreen: 'Click any photograph to view full screen.',
    },
    gallery: {
      kicker: 'Visual Monograph',
      title: 'Feline Photography Gallery',
      subtitle:
        'Curated portraits celebrating coat textures, heritage profiles, and serene everyday moments. Click any frame to inspect fullscreen.',
      categories: {
        All: 'All',
        Longhair: 'Longhair',
        Shorthair: 'Shorthair',
        'Exotic & Hairless': 'Exotic & Hairless',
        'Lifestyle & Care': 'Lifestyle & Care',
      },
      exploreBreed: 'Explore',
    },
    videos: {
      kicker: 'Curated Cinema & Guides',
      title: 'Cat Videos & Behavior Insights',
      subtitle:
        'Watch breed documentaries, veterinary nutrition advice, feline body-language breakdowns, and playful moments.',
      categories: {
        All: 'All',
        'Breed Spotlight': 'Breed Spotlight',
        'Behavior & Habits': 'Behavior & Habits',
        'Owner Care Tips': 'Owner Care Tips',
        'Playful Moments': 'Playful Moments',
      },
      clickToPlay: 'Click to Play Integrated Video',
      channelLabel: 'Channel:',
      openBreedSheet: 'Open Breed Sheet',
      openYoutube: 'Open on YouTube',
      watchBtn: 'Watch',
    },
    blog: {
      kicker: 'Care & Advice Journal',
      title: 'Feline Care Guides & Expert Articles',
      subtitle:
        'Practical, research-grounded articles covering nutrition, grooming, preventive veterinary medicine, behavior, and thoughtful adoption.',
      byAuthor: 'By',
      readMore: 'Read More',
      keyTakeaways: 'Key Takeaways',
      relatedBreeds: 'Related Breeds Mentioned',
      articles: [
        {
          title: 'How to Properly Care for Your Cat: Daily Essentials for a Thriving Companion',
          category: 'Essential Care',
          excerpt:
            'From litter box hygiene and vertical territory to daily enrichment rituals, learn how to design a calm, stimulating home environment tailored to natural feline instincts.',
        },
        {
          title: 'Choosing the Right Nutrition: Wet Food, Dry Kibble, and Hydration Balance',
          category: 'Nutrition',
          excerpt:
            'Understanding obligate carnivore biology, reading ingredient labels with confidence, and keeping your cat properly hydrated at every stage of life.',
        },
        {
          title: 'How to Understand Feline Behavior & Decode Subtle Body Language',
          category: 'Behavior',
          excerpt:
            'From slow eye blinks and tail-tip quivers to flattened ears and kneading paws, discover the silent vocabulary cats use every day.',
        },
        {
          title: 'Essential Veterinary Care: Preventive Checkups, Vaccines & Early Detection',
          category: 'Veterinary Health',
          excerpt:
            'Cats instinctively mask discomfort. Proactive annual wellness exams, dental care, and breed-aware screening keep small issues from becoming emergencies.',
        },
        {
          title: 'How to Choose the Cat Breed Best Suited to Your Home and Lifestyle',
          category: 'Adoption Guide',
          excerpt:
            'Aligning energy levels, grooming commitment, noise tolerance, and family dynamics so both you and your future cat thrive together.',
        },
        {
          title: 'How to Groom Your Cat’s Coat: Shorthair, Longhair & Hairless Care Routines',
          category: 'Grooming',
          excerpt:
            'Step-by-step tools and gentle stress-free techniques to prevent mats, minimize hairballs, and keep skin healthy across every coat type.',
        },
        {
          title: '7 Common Mistakes to Avoid When Adopting a Cat Into Your Home',
          category: 'Adoption Guide',
          excerpt:
            'Set your new companion up for lifelong confidence by avoiding rushed introductions, toxic houseplants, and overlooked safety preparations.',
        },
      ],
    },
    about: {
      kicker: 'About CAT WORLD',
      title: 'Understanding Every Purr, Lineage & Personality',
      missionQuote:
        '“CAT WORLD is a platform dedicated to helping cat lovers discover, understand and explore the fascinating world of feline breeds.”',
      body: 'Every feline breed carries centuries of regional climate adaptation, natural selection, and human companionship. Whether you are preparing your home for a first adoption, comparing coat-care commitments, or simply admiring the visual grace of diverse breeds, CAT WORLD brings trustworthy veterinary-informed insights and curated photography together in one welcoming space.',
      pillars: [
        {
          title: 'Verified Breed Profiles',
          description: 'Authentic origins, physical standards, and temperament expectations.',
        },
        {
          title: 'Preventive Wellness',
          description: 'Transparent notes on hereditary screening and responsible nutrition.',
        },
        {
          title: 'Mindful Matching',
          description: 'Helping families align lifestyle rhythm with feline needs.',
        },
      ],
    },
    contact: {
      kicker: 'Get in Touch',
      title: 'Questions About a Breed or Care Topic?',
      subtitle:
        'Reach out to our editorial desk for breed suggestions, photography submissions, educational inquiries, or feedback on CAT WORLD.',
      editorialDesk: 'Editorial Desk',
      collectiveTitle: 'International Feline Research Collective',
      collectiveCities: 'Paris · London · New York',
      followCommunity: 'Follow Our Community',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      fullNamePlaceholder: 'Claire Bernard',
      emailPlaceholder: 'you@example.com',
      subjectPlaceholder: 'Breed question, adoption guidance, or editorial note',
      messagePlaceholder: 'Share your question or tell us about your feline companion...',
      sendMessage: 'Send Message',
      errorSummary: 'Please review and correct the highlighted fields below before sending.',
      errName: 'Please enter your full name (at least 2 characters).',
      errEmail: 'Please enter a valid email address.',
      errSubject: 'Please provide a brief subject line.',
      errMessage: 'Please enter a message of at least 15 characters.',
      successTitle: 'Message Received',
      successBody: (name, subj) =>
        `Thank you, ${name}. Your inquiry regarding “${subj}” has been logged by the CAT WORLD editorial team.`,
      sendAnother: 'Send Another Message',
    },
    footer: {
      description:
        'Discover the World of Cats. An independent feline encyclopedia dedicated to breed heritage, responsible care, visual storytelling, and behavior science.',
      quickLinks: 'Quick Links',
      breedCategories: 'Breed Categories',
      socialChannels: 'Social Channels',
      catShorthair: 'Shorthair Breeds',
      catLonghair: 'Longhair & Semi-Longhair',
      catHairless: 'Hairless Breeds',
      catLarge: 'Large Gentle Giants',
      catAffectionate: 'Affectionate Companions',
      copyright: '© 2026 CAT WORLD – Discover the World of Cats. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      editorialContact: 'Editorial Contact',
      privacyTitle: 'Privacy Policy',
      privacyParagraphs: [
        'CAT WORLD respects visitor privacy. We do not sell personal data or run invasive behavioral tracking scripts across this platform.',
        'Theme and language preferences are stored locally in your browser via localStorage strictly to preserve your reading comfort.',
        'Information submitted through our Contact form is validated locally to help route editorial questions and is never shared with third-party marketers. Embedded educational videos use privacy-enhanced youtube-nocookie.com playback when activated.',
      ],
      close: 'Close',
    },
  },

  fr: {
    brandTagline: 'Découvrez l’univers des chats',
    nav: {
      home: 'Accueil',
      breeds: 'Races de Chats',
      gallery: 'Galerie',
      videos: 'Vidéos',
      blog: 'Blog',
      about: 'À Propos',
      contact: 'Contact',
      searchPlaceholder: 'Rechercher une race...',
      matchingBreeds: 'Races correspondantes',
      lightMode: 'Clair',
      darkMode: 'Sombre',
      languageLabel: 'Langue',
    },
    hero: {
      kicker: 'CAT WORLD · Encyclopédie Féline & Archive Visuelle',
      title: 'Découvrez le Merveilleux Monde des Chats',
      subtitle:
        'Des Persans majestueux à poil long aux Bengals agiles à rosettes, explorez les origines, le caractère, l’entretien et la magie discrète des plus fascinantes races félines.',
      ctaPrimary: 'Explorer les Races',
      ctaSecondary: 'Voir la Galerie',
      ctaContact: 'Nous Contacter',
      slides: [
        { caption: 'Maine Coon · Doux Géant d’Amérique du Nord', tag: '01 · Héritage' },
        { caption: 'Siamois & British Shorthair · Icônes Contrastées', tag: '02 · Portraits' },
        { caption: 'Chat Bengal · Rosettes Sauvages & Curiosité', tag: '03 · Agilité' },
      ],
      stats: {
        breedsLabel: 'Races de Chats',
        breedsSub: 'Fiches encyclopédiques complètes',
        countriesLabel: 'Pays d’Origine',
        countriesSub: 'À travers cinq continents',
        coatsLabel: 'Types de Pelage',
        coatsSub: 'Poil court, long et sans poils',
        lifespanLabel: 'Espérance de Vie Moyenne',
        lifespanSub: 'Avec un suivi préventif adapté',
        yearsSuffix: '+ ans',
      },
    },
    home: {
      curatedSpotlight: 'Sélection Éditoriale',
      popularTitle: 'Races de Chats Populaires',
      popularSubtitle:
        'Appréciées dans le monde entier pour leurs silhouettes emblématiques, leur caractère fidèle et leur histoire fascinante.',
      viewAllBreeds: 'Voir les 20 Races',
      discoverMore: 'Découvrir Plus',
      coatWord: 'pelage',
      didYouKnowKicker: 'Science & Curiosités Félines',
      didYouKnowTitle: 'Le Saviez-Vous ?',
      didYouKnowSubtitle: 'Derrière chaque bond gracieux et chaque ronronnement se cache une biologie extraordinaire.',
      facts: [
        {
          title: 'Empreintes Nasales Uniques',
          fact: 'Tout comme les empreintes digitales humaines, le motif de crêtes et de sillons sur la truffe d’un chat est strictement unique à chaque individu.',
          metricLabel: 'Motif individuel',
        },
        {
          title: 'Fréquences du Ronronnement',
          fact: 'Les chats domestiques ronronnent entre 25 et 150 Hertz, des vibrations étudiées pour apaiser le stress et favoriser la régénération osseuse et tissulaire.',
          metricLabel: 'Plage de résonance',
        },
        {
          title: 'Clavicules Flottantes',
          fact: 'La clavicule du chat n’est pas soudée rigidement aux autres os, ce qui permet à ses épaules de se comprimer pour passer partout où sa tête passe.',
          metricLabel: 'Souplesse d’épaule',
        },
        {
          title: 'Organe de Jacobson',
          fact: 'Lorsqu’un chat entrouvre la gueule après avoir flairé une odeur intrigante (flehmen), il analyse les phéromones via l’organe voméronasal situé au palais.',
          metricLabel: 'Récepteurs olfactifs',
        },
        {
          title: 'Insensibilité au Sucré',
          fact: 'Contrairement aux humains et aux chiens, le chat est dépourvu du récepteur génétique Tas1r2 permettant de percevoir le goût sucré, confirmant son régime carnivore strict.',
          metricLabel: 'Récepteurs sucrés',
        },
        {
          title: 'Maîtrise Nocturne',
          fact: 'Grâce à une forte densité de bâtonnets rétiniens et au tapetum lucidum réfléchissant, le chat voit clairement avec six fois moins de lumière que l’humain.',
          metricLabel: 'Vision nocturne',
        },
      ],
    },
    catalog: {
      kicker: 'Catalogue Encyclopédique',
      title: 'Explorer les Races de Chats',
      subtitle:
        'Filtrez par pays d’origine, taille, type de pelage et caractère pour trouver le compagnon félin idéal.',
      showingCount: (shown, total) => `${shown} sur ${total} races affichées`,
      searchLabel: 'Rechercher par Nom',
      searchPlaceholder: 'ex. Maine Coon, Siamois...',
      countryLabel: 'Pays d’Origine',
      allCountries: 'Tous les Pays',
      temperamentLabel: 'Caractère',
      allTemperaments: 'Tous les Caractères',
      sortLabel: 'Trier par',
      sortPopularity: 'Popularité (Plus populaires)',
      sortAlphaAsc: 'Ordre alphabétique (A – Z)',
      sortAlphaDesc: 'Ordre alphabétique (Z – A)',
      sizeLabel: 'Taille :',
      coatLabel: 'Pelage :',
      allOption: 'Tous',
      resetFilters: 'Réinitialiser',
      noResultsTitle: 'Aucune race correspondante',
      noResultsBody:
        'Essayez d’élargir vos critères de pelage, de taille ou de caractère afin d’afficher plus de races.',
      showAllBreeds: 'Afficher les 20 Races',
      lifespanLabel: 'Espérance de vie',
      activityLabel: 'Activité',
      characterLabel: 'Caractère',
      discoverMore: 'Découvrir Plus',
      sizes: { Small: 'Petite', Medium: 'Moyenne', Large: 'Grande' },
      coats: { Short: 'Court', Long: 'Long', Hairless: 'Sans poils' },
      temperaments: {
        Calm: 'Calme',
        Playful: 'Joueur',
        Affectionate: 'Affectueux',
        Independent: 'Indépendant',
      },
      activityLevels: {
        Low: 'Faible',
        Moderate: 'Modéré',
        High: 'Élevé',
        'Very High': 'Très élevé',
      },
    },
    detail: {
      backToCatalog: 'Retour au Catalogue des Races',
      countryOrigin: 'Pays d’Origine',
      lifeExpectancy: 'Espérance de Vie',
      coatType: 'Type de Pelage',
      temperament: 'Caractère',
      avgSizeWeight: 'Taille & Poids Moyen',
      intelligenceLevel: 'Niveau d’Intelligence',
      activityLevel: 'Niveau d’Activité',
      originHistory: 'Origine & Histoire',
      physicalAppearance: 'Apparence Physique',
      coatColorsPatterns: 'Couleurs & Motifs du Pelage',
      personalityBehavior: 'Personnalité & Comportement',
      intelligenceProfile: 'Profil d’Intelligence',
      dailyActivityNeeds: 'Besoins d’Activité Quotidienne',
      careGroomingNutrition: 'Entretien, Toilettage & Alimentation',
      recommendedDiet: 'Alimentation Recommandée',
      healthPotentialConditions: 'Santé & Affections Potentielles',
      healthDisclaimer:
        'Ces informations de santé sont fournies à titre éducatif ; consultez toujours un vétérinaire pour un suivi personnalisé.',
      householdCompatibility: 'Compatibilité du Foyer',
      withChildren: 'Avec les Enfants',
      withOtherPets: 'Avec les Autres Animaux',
      apartmentSuitability: 'Vie en Appartement',
      apartmentYes: 'Parfaitement adapté à la vie en appartement',
      apartmentNo: 'Préfère un grand espace avec des parcours en hauteur',
      interestingAnecdotes: 'Anecdotes Intéressantes',
      videoSpotlight: 'Vidéo de la Race',
      watchOnYoutube: 'Regarder sur YouTube',
      visualGallery: 'Galerie Photo',
      clickFullscreen: 'Cliquez sur une photographie pour l’agrandir en plein écran.',
    },
    gallery: {
      kicker: 'Monographie Visuelle',
      title: 'Galerie Photographique Féline',
      subtitle:
        'Portraits sélectionnés célébrant textures de pelage, lignées historiques et moments doux du quotidien.',
      categories: {
        All: 'Tout',
        Longhair: 'Poil long',
        Shorthair: 'Poil court',
        'Exotic & Hairless': 'Exotiques & Sans poils',
        'Lifestyle & Care': 'Vie & Soins',
      },
      exploreBreed: 'Découvrir',
    },
    videos: {
      kicker: 'Cinéma & Conseils',
      title: 'Vidéos de Chats & Comportement',
      subtitle:
        'Documentaires par race, conseils vétérinaires, décryptage du langage corporel félin et moments attendrissants.',
      categories: {
        All: 'Tout',
        'Breed Spotlight': 'Focus Races',
        'Behavior & Habits': 'Comportement',
        'Owner Care Tips': 'Conseils Soins',
        'Playful Moments': 'Moments Adorables',
      },
      clickToPlay: 'Cliquer pour Lancer la Vidéo',
      channelLabel: 'Chaîne :',
      openBreedSheet: 'Voir la Fiche Race',
      openYoutube: 'Ouvrir sur YouTube',
      watchBtn: 'Regarder',
    },
    blog: {
      kicker: 'Journal Soins & Conseils',
      title: 'Guides Pratiques & Articles Experts',
      subtitle:
        'Articles approfondis sur la nutrition, le toilettage, la prévention vétérinaire, le comportement et l’adoption responsable.',
      byAuthor: 'Par',
      readMore: 'Lire la Suite',
      keyTakeaways: 'Points Clés à Retenir',
      relatedBreeds: 'Races Associées',
      articles: [
        {
          title: 'Comment Bien Prendre Soin de Son Chat au Quotidien',
          category: 'Soins Essentiels',
          excerpt:
            'Hygiène de la litière, territoire en hauteur et jeux de prédation : créez un environnement apaisant adapté aux instincts naturels.',
        },
        {
          title: 'Quelle Alimentation Choisir : Pâtée, Croquettes et Hydratation ?',
          category: 'Nutrition',
          excerpt:
            'Comprendre les besoins du carnivore strict, lire les étiquettes et maintenir une hydratation optimale à chaque âge.',
        },
        {
          title: 'Comprendre le Comportement du Chat et Son Langage Corporel',
          category: 'Comportement',
          excerpt:
            'Clignements lents des yeux, position des oreilles et mouvements de queue : décodez le vocabulaire silencieux de votre félin.',
        },
        {
          title: 'Les Soins Vétérinaires Essentiels et le Dépistage Précoce',
          category: 'Santé Vétérinaire',
          excerpt:
            'Les chats masquent instinctivement leur inconfort. Bilans annuels, soins dentaires et dépistages ciblés protègent leur longévité.',
        },
        {
          title: 'Comment Choisir la Race de Chat Adaptée à Votre Mode de Vie ?',
          category: 'Guide Adoption',
          excerpt:
            'Équilibrez niveau d’énergie, temps de brossage, sociabilité et vie de famille pour une cohabitation harmonieuse.',
        },
        {
          title: 'Comment Entretenir le Pelage : Poil Court, Long ou Sans Poils',
          category: 'Toilettage',
          excerpt:
            'Outils adaptés et gestes doux pour éviter les nœuds, limiter les boules de poils et préserver une peau saine.',
        },
        {
          title: '7 Erreurs à Éviter Lorsqu’on Adopte un Chat chez Soi',
          category: 'Guide Adoption',
          excerpt:
            'Pièce de transition, plantes toxiques à écarter et redirection positive : préparez l’arrivée de votre compagnon sereinement.',
        },
      ],
    },
    about: {
      kicker: 'À Propos de CAT WORLD',
      title: 'Comprendre Chaque Ronronnement, Lignée & Personnalité',
      missionQuote:
        '« CAT WORLD est une plateforme dédiée à aider les amoureux des chats à découvrir, comprendre et explorer le monde fascinant des races félines. »',
      body: 'Chaque race féline porte des siècles d’adaptation climatique, de sélection naturelle et de complicité humaine. Que vous prépariez une première adoption ou souhaitiez approfondir vos connaissances vétérinaires et comportementales, CAT WORLD rassemble contenus fiables et photographies soignées.',
      pillars: [
        {
          title: 'Fiches Vérifiées',
          description: 'Origines authentiques, standards morphologiques et tempérament réel.',
        },
        {
          title: 'Prévention Santé',
          description: 'Notes transparentes sur les dépistages héréditaires et la nutrition.',
        },
        {
          title: 'Adoption Réfléchie',
          description: 'Aider chaque foyer à choisir un compagnon en harmonie avec son rythme.',
        },
      ],
    },
    contact: {
      kicker: 'Nous Contacter',
      title: 'Une Question sur une Race ou les Soins ?',
      subtitle:
        'Écrivez à notre rédaction pour proposer une race, poser une question éducative ou partager vos retours sur CAT WORLD.',
      editorialDesk: 'Rédaction Éditoriale',
      collectiveTitle: 'Collectif International d’Études Félines',
      collectiveCities: 'Paris · Londres · New York',
      followCommunity: 'Suivre Notre Communauté',
      fullName: 'Nom Complet',
      emailAddress: 'Adresse Email',
      subject: 'Sujet',
      message: 'Message',
      fullNamePlaceholder: 'Claire Bernard',
      emailPlaceholder: 'vous@exemple.com',
      subjectPlaceholder: 'Question sur une race, conseil d’adoption ou suggestion',
      messagePlaceholder: 'Partagez votre question ou parlez-nous de votre compagnon félin...',
      sendMessage: 'Envoyer le Message',
      errorSummary: 'Veuillez corriger les champs signalés ci-dessous avant d’envoyer.',
      errName: 'Veuillez saisir votre nom complet (au moins 2 caractères).',
      errEmail: 'Veuillez saisir une adresse email valide.',
      errSubject: 'Veuillez indiquer un sujet.',
      errMessage: 'Votre message doit contenir au moins 15 caractères.',
      successTitle: 'Message Envoyé',
      successBody: (name, subj) =>
        `Merci ${name}. Votre demande concernant « ${subj} » a bien été enregistrée par l’équipe CAT WORLD.`,
      sendAnother: 'Envoyer un Autre Message',
    },
    footer: {
      description:
        'Découvrez l’univers des chats. Encyclopédie féline indépendante consacrée aux races, aux soins responsables, à la photographie et au comportement.',
      quickLinks: 'Liens Rapides',
      breedCategories: 'Catégories de Races',
      socialChannels: 'Réseaux Sociaux',
      catShorthair: 'Races à Poil Court',
      catLonghair: 'Poil Long & Mi-Long',
      catHairless: 'Races Sans Poils',
      catLarge: 'Grands Doux Géants',
      catAffectionate: 'Compagnons Affectueux',
      copyright: '© 2026 CAT WORLD – Discover the World of Cats. Tous droits réservés.',
      privacyPolicy: 'Politique de Confidentialité',
      editorialContact: 'Contact Éditorial',
      privacyTitle: 'Politique de Confidentialité',
      privacyParagraphs: [
        'CAT WORLD respecte la vie privée de ses visiteurs. Nous ne vendons aucune donnée personnelle et n’utilisons aucun traceur publicitaire invasif.',
        'Vos préférences de thème (clair/sombre) et de langue sont enregistrées localement dans votre navigateur via localStorage uniquement pour votre confort de lecture.',
        'Les informations saisies dans le formulaire de contact sont validées localement et ne sont jamais partagées avec des tiers. Les vidéos utilisent le mode de confidentialité avancée youtube-nocookie.com.',
      ],
      close: 'Fermer',
    },
  },

  ar: {
    brandTagline: 'اكتشف عالم القطط',
    nav: {
      home: 'الرئيسية',
      breeds: 'سلالات القطط',
      gallery: 'المعرض',
      videos: 'الفيديوهات',
      blog: 'المدونة',
      about: 'من نحن',
      contact: 'اتصل بنا',
      searchPlaceholder: 'ابحث عن سلالة...',
      matchingBreeds: 'السلالات المطابقة',
      lightMode: 'نهاري',
      darkMode: 'ليلي',
      languageLabel: 'اللغة',
    },
    hero: {
      kicker: 'عالم القطط · موسوعة السلالات والأرشيف البصري',
      title: 'اكتشف العالم الرائع للقطط',
      subtitle:
        'من القطط الفارسية الهادئة ذات الفراء الطويل إلى قطط البنغال الرشيقة المرقطة، استكشف أصول أشهر السلالات العالمية وطباعها وطرق العناية بها.',
      ctaPrimary: 'استكشف سلالات القطط',
      ctaSecondary: 'تصفح المعرض',
      ctaContact: 'تواصل معنا',
      slides: [
        { caption: 'الماين كون · العملاق اللطيف من أمريكا الشمالية', tag: '01 · الأصالة' },
        { caption: 'السيامي والبريطاني قصير الشعر · أيقونات متباينة', tag: '02 · بورتريه' },
        { caption: 'قط البنغال · نقوش برية ورشاقة فائقة', tag: '03 · الحيوية' },
      ],
      stats: {
        breedsLabel: 'سلالة قطط أصيلة',
        breedsSub: 'ملفات موسوعية متكاملة',
        countriesLabel: 'دولة منشأ',
        countriesSub: 'عبر خمس قارات',
        coatsLabel: 'أنواع الفراء',
        coatsSub: 'قصير، طويل، وعديم الشعر',
        lifespanLabel: 'متوسط العمر',
        lifespanSub: 'مع الرعاية البيطرية الوقائية',
        yearsSuffix: '+ سنة',
      },
    },
    home: {
      curatedSpotlight: 'اختيارات مميزة',
      popularTitle: 'أشهر سلالات القطط',
      popularSubtitle:
        'سلالات محبوبة عالمياً بفضل مظهرها الفريد وطباعها الوفية وتاريخها العريق عبر الحضارات.',
      viewAllBreeds: 'عرض جميع السلالات (20)',
      discoverMore: 'اكتشف المزيد',
      coatWord: 'فراء',
      didYouKnowKicker: 'علوم وحقائق مدهشة',
      didYouKnowTitle: 'هل تعلم؟',
      didYouKnowSubtitle: 'خلف كل قفزة رشيقة وكل خرخرة هادئة تكمن أسرار بيولوجية مذهلة.',
      facts: [
        {
          title: 'بصمة أنف فريدة',
          fact: 'تماماً مثل بصمات أصابع الإنسان، يمتلك كل قط نمطاً فريداً من النتوءات والخطوط على أنفه لا يتطابق مع أي قط آخر.',
          metricLabel: 'نمط فريد',
        },
        {
          title: 'ترددات الخرخرة العلاجية',
          fact: 'تخرخر القطط المنزلية بترددات تتراوح بين 25 و150 هرتز، وهي اهتزازات تساعد على تهدئة التوتر ودعم شفاء العظام والأنسجة.',
          metricLabel: 'نطاق الرنين',
        },
        {
          title: 'عظام ترقوة مرنة',
          fact: 'لا ترتبط عظمة الترقوة لدى القط بمفاصل صلبة مع بقية الهيكل العظمي، مما يمنح كتفيه مرونة للمرور من أي فتحة يتسع لها رأسه.',
          metricLabel: 'مرونة الكتف',
        },
        {
          title: 'عضو استشعار الروائح',
          fact: 'عندما يفتح القط فمه قليلاً بعد شم رائحة مثيرة، فإنه يمرر الهواء إلى عضو جاكوبسون في سقف الفم لتحليل الإشارات الكيميائية.',
          metricLabel: 'مستقبلات شمية',
        },
        {
          title: 'عدم تذوق السكريات',
          fact: 'تفتقر القطط المنزلية إلى المستقبل الجيني Tas1r2 المسؤول عن تذوق الطعم الحلو، مما يؤكد طبيعتها البيولوجية كآكلات لحوم خالصة.',
          metricLabel: 'مستقبلات الحلاوة',
        },
        {
          title: 'رؤية ليلية فائقة',
          fact: 'تحتاج القطط إلى سُدس كمية الضوء التي يحتاجها الإنسان للرؤية بوضوح بفضل كثافة الخلايا العصوية والطبقة العاكسة خلف الشبكية.',
          metricLabel: 'حساسية الإضاءة المنخفضة',
        },
      ],
    },
    catalog: {
      kicker: 'الموسوعة الشاملة',
      title: 'استكشف سلالات القطط',
      subtitle:
        'صفِّ النتائج حسب بلد المنشأ والحجم ونوع الفراء والطبع للعثور على الرفيق الأنسب لمنزلك.',
      showingCount: (shown, total) => `عرض ${shown} من أصل ${total} سلالة`,
      searchLabel: 'ابحث باسم السلالة',
      searchPlaceholder: 'مثال: ماين كون، سيامي...',
      countryLabel: 'بلد المنشأ',
      allCountries: 'جميع الدول',
      temperamentLabel: 'الطبع والشخصية',
      allTemperaments: 'جميع الطباع',
      sortLabel: 'ترتيب حسب',
      sortPopularity: 'الأكثر شعبية',
      sortAlphaAsc: 'ترتيب أبجدي (أ – ي)',
      sortAlphaDesc: 'ترتيب أبجدي (ي – أ)',
      sizeLabel: 'الحجم:',
      coatLabel: 'الفراء:',
      allOption: 'الكل',
      resetFilters: 'إعادة ضبط الفلاتر',
      noResultsTitle: 'لم يتم العثور على سلالات مطابقة',
      noResultsBody:
        'جرّب توسيع خيارات الحجم أو الفراء أو الطبع لعرض المزيد من السلالات المتاحة.',
      showAllBreeds: 'عرض السلالات الـ 20',
      lifespanLabel: 'متوسط العمر',
      activityLabel: 'مستوى النشاط',
      characterLabel: 'الطبع',
      discoverMore: 'اكتشف المزيد',
      sizes: { Small: 'صغير', Medium: 'متوسط', Large: 'كبير' },
      coats: { Short: 'قصير', Long: 'طويل', Hairless: 'بدون شعر' },
      temperaments: {
        Calm: 'هادئ',
        Playful: 'لعوب',
        Affectionate: 'حنون',
        Independent: 'مستقل',
      },
      activityLevels: {
        Low: 'منخفض',
        Moderate: 'متوسط',
        High: 'مرتفع',
        'Very High': 'مرتفع جداً',
      },
    },
    detail: {
      backToCatalog: 'العودة إلى دليل السلالات',
      countryOrigin: 'بلد المنشأ',
      lifeExpectancy: 'متوسط العمر',
      coatType: 'نوع الفراء',
      temperament: 'الطبع',
      avgSizeWeight: 'الحجم والوزن المتوسط',
      intelligenceLevel: 'مستوى الذكاء',
      activityLevel: 'مستوى النشاط',
      originHistory: 'الأصل والتاريخ',
      physicalAppearance: 'المظهر الجسدي',
      coatColorsPatterns: 'ألوان وأنماط الفراء',
      personalityBehavior: 'الشخصية والسلوك',
      intelligenceProfile: 'مستوى الذكاء والتعلم',
      dailyActivityNeeds: 'الاحتياجات اليومية للنشاط',
      careGroomingNutrition: 'العناية والتنظيف والتغذية',
      recommendedDiet: 'النظام الغذائي الموصى به',
      healthPotentialConditions: 'الصحة والمشكلات الصحية المحتملة',
      healthDisclaimer:
        'تُقدَّم هذه المعلومات الصحية للتوعية العامة فقط؛ يُنصح دائماً باستشارة طبيب بيطري مختص للفحص الدوري.',
      householdCompatibility: 'التوافق الأسري والمنزلي',
      withChildren: 'مع الأطفال',
      withOtherPets: 'مع الحيوانات الأليفة الأخرى',
      apartmentSuitability: 'الملاءمة للشقق السكنية',
      apartmentYes: 'مناسب تماماً للعيش داخل الشقق',
      apartmentNo: 'يفضّل المنازل الواسعة ذات مساحات التسلق المرتفعة',
      interestingAnecdotes: 'حقائق وطرائف مثيرة',
      videoSpotlight: 'فيديو تعريفي بالسلالة',
      watchOnYoutube: 'المشاهدة على يوتيوب',
      visualGallery: 'معرض صور السلالة',
      clickFullscreen: 'اضغط على أي صورة لعرضها بملء الشاشة.',
    },
    gallery: {
      kicker: 'أرشيف بصري',
      title: 'معرض صور القطط',
      subtitle:
        'صور احترافية تبرز جمال الفراء وتنوع السلالات ولحظات الحياة اليومية الهادئة. اضغط على أي صورة للتكبير.',
      categories: {
        All: 'الكل',
        Longhair: 'طويل الشعر',
        Shorthair: 'قصير الشعر',
        'Exotic & Hairless': 'نادر وعديم الشعر',
        'Lifestyle & Care': 'الحياة والعناية',
      },
      exploreBreed: 'استكشف',
    },
    videos: {
      kicker: 'مكتبة الفيديو التعليمية',
      title: 'فيديوهات القطط والسلوك',
      subtitle:
        'شاهد تقارير السلالات، نصائح التغذية البيطرية، تحليل لغة جسد القطط، واللحظات اللطيفة.',
      categories: {
        All: 'الكل',
        'Breed Spotlight': 'تعريف بالسلالات',
        'Behavior & Habits': 'السلوك والعادات',
        'Owner Care Tips': 'نصائح المربين',
        'Playful Moments': 'لحظات مرحة',
      },
      clickToPlay: 'اضغط لتشغيل الفيديو المدمج',
      channelLabel: 'القناة:',
      openBreedSheet: 'فتح ملف السلالة',
      openYoutube: 'فتح في يوتيوب',
      watchBtn: 'مشاهدة',
    },
    blog: {
      kicker: 'مدونة العناية والنصائح',
      title: 'أدلة العناية ومقالات الخبراء',
      subtitle:
        'مقالات علمية وعملية حول التغذية، العناية بالفراء، الفحص البيطري الوقائي، وفهم سلوك القطط.',
      byAuthor: 'بقلم',
      readMore: 'اقرأ المزيد',
      keyTakeaways: 'أهم النصائح العملية',
      relatedBreeds: 'سلالات ذات صلة',
      articles: [
        {
          title: 'كيف تعتني بقطك بشكل صحيح: الأساسيات اليومية',
          category: 'العناية الأساسية',
          excerpt:
            'من نظافة صندوق الفضلات وتوفير مساحات التسلق إلى جلسات اللعب اليومية، تعلم تصميم بيئة منزلية مريحة لقطك.',
        },
        {
          title: 'اختيار التغذية المناسبة: الطعام الرطب والجاف وتوازن الماء',
          category: 'التغذية',
          excerpt:
            'فهم احتياجات القطط كآكلات لحوم، قراءة مكونات الطعام، والحفاظ على الترطيب الكافي في كل مرحلة عمرية.',
        },
        {
          title: 'كيف تفهم سلوك القطط وتقرأ لغة جسدها بدقة؟',
          category: 'السلوك',
          excerpt:
            'من رمش العين البطيء وحركة الذيل إلى وضعيات الأذن، اكتشف اللغة الصامتة التي يتواصل بها قطك يومياً.',
        },
        {
          title: 'الرعاية البيطرية الأساسية: الفحوصات الوقائية والتطعيمات',
          category: 'الصحة البيطرية',
          excerpt:
            'تخفي القطط الألم غريزياً؛ لذا فإن الفحص السنوي وصحة الأسنان يحميانها من المضاعفات المبكرة.',
        },
        {
          title: 'كيف تختار سلالة القط المناسبة لأسلوب حياتك ومنزلك؟',
          category: 'دليل التبني',
          excerpt:
            'الموازنة بين مستوى النشاط، العناية بالفراء، الهدوء، وتوافق السلالة مع الأطفال والحيوانات الأخرى.',
        },
        {
          title: 'العناية بفراء القطط: القصير والطويل وعديم الشعر',
          category: 'التنظيف والعناية',
          excerpt:
            'أدوات التمشيط المناسبة والخطوات الهادئة لمنع التشابك وتقليل كرات الشعر والحفاظ على صحة الجلد.',
        },
        {
          title: '7 أخطاء شائعة يجب تجنبها عند تبني قط جديد',
          category: 'دليل التبني',
          excerpt:
            'تجنب الاستعجال في التعريف بالمنزل والنباتات المنزلية السامة لتمنح قطك بداية واثقة وآمنة.',
        },
      ],
    },
    about: {
      kicker: 'حول منصة CAT WORLD',
      title: 'فهم كل خرخرة وكل سلالة وشخصية فريدة',
      missionQuote:
        '« CAT WORLD هي منصة مخصصة لمساعدة محبي القطط على اكتشاف وفهم واستكشاف العالم المذهل لسلالات القطط. »',
      body: 'تحمل كل سلالة من سلالات القطط قروناً من التكيف المناخي والتاريخي والرفقة الإنسانية. سواء كنت تستعد لتبني قطك الأول أو تقارن احتياجات السلالات، تجمع منصة CAT WORLD بين المعرفة الموثوقة والتصوير الفوتوغرافي الراقي في مكان واحد.',
      pillars: [
        {
          title: 'ملفات سلالات موثقة',
          description: 'تاريخ المنشأ الدقيق، المواصفات الشكلية، والطباع المتوقعة.',
        },
        {
          title: 'الوعي الصحي الوقائي',
          description: 'إرشادات شفافة حول الفحوصات الوراثية والتغذية المتوازنة.',
        },
        {
          title: 'اختيار مدروس ومناسب',
          description: 'مساعدة الأسر على اختيار السلالة المتناغمة مع إيقاع حياتها.',
        },
      ],
    },
    contact: {
      kicker: 'تواصل معنا',
      title: 'هل لديك سؤال حول سلالة أو رعاية القطط؟',
      subtitle:
        'راسل فريق التحرير لطرح استفساراتك، اقتراح سلالات جديدة، أو مشاركة ملاحظاتك حول منصة CAT WORLD.',
      editorialDesk: 'مكتب التحرير',
      collectiveTitle: 'المجموعة الدولية لأبحاث السنوريات',
      collectiveCities: 'باريس · لندن · نيويورك',
      followCommunity: 'تابع مجتمعنا',
      fullName: 'الاسم الكامل',
      emailAddress: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      fullNamePlaceholder: 'ليلى المنصور',
      emailPlaceholder: 'you@example.com',
      subjectPlaceholder: 'استفسار عن سلالة أو نصيحة رعاية',
      messagePlaceholder: 'اكتب استفسارك أو حدثنا عن قطك...',
      sendMessage: 'إرسال الرسالة',
      errorSummary: 'يرجى مراجعة الحقول الموضحة أدناه وتصحيحها قبل الإرسال.',
      errName: 'يرجى إدخال الاسم الكامل (حرفين على الأقل).',
      errEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
      errSubject: 'يرجى كتابة موضوع الرسالة.',
      errMessage: 'يرجى كتابة رسالة لا تقل عن 15 حرفاً.',
      successTitle: 'تم استلام رسالتك بنجاح',
      successBody: (name, subj) =>
        `شكراً لك يا ${name}. تم تسجيل استفسارك بخصوص «${subj}» لدى فريق تحرير CAT WORLD.`,
      sendAnother: 'إرسال رسالة أخرى',
    },
    footer: {
      description:
        'اكتشف عالم القطط. موسوعة مستقلة مكرسة لتراث السلالات، الرعاية المسؤولة، التصوير الفوتوغرافي، وعلم سلوك القطط.',
      quickLinks: 'روابط سريعة',
      breedCategories: 'فئات السلالات',
      socialChannels: 'التواصل الاجتماعي',
      catShorthair: 'القطط قصيرة الشعر',
      catLonghair: 'القطط طويلة الشعر',
      catHairless: 'القطط عديمة الشعر',
      catLarge: 'السلالات الكبيرة اللطيفة',
      catAffectionate: 'سلالات حنونة واجتماعية',
      copyright: '© 2026 CAT WORLD – Discover the World of Cats. جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
      editorialContact: 'التواصل التحريري',
      privacyTitle: 'سياسة الخصوصية',
      privacyParagraphs: [
        'تحترم منصة CAT WORLD خصوصية الزوار ولا تبيع أي بيانات شخصية ولا تستخدم أدوات تتبع إعلانية متطفلة.',
        'يتم حفظ تفضيلات الوضع الليلي أو النهاري ولغة العرض محلياً في متصفحك عبر localStorage فقط لتجربة قراءة مريحة.',
        'يتم التحقق من نموذج التواصل محلياً، وتعمل مقاطع الفيديو المدمجة عبر وضع الخصوصية المعزز youtube-nocookie.com عند التشغيل.',
      ],
      close: 'إغلاق',
    },
  },
};
