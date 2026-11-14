import { CatBreed } from '../types/cat';
import { BREED_IMAGES, CARE_IMAGES, HERO_IMAGES } from './images';

export const CAT_BREEDS: CatBreed[] = [
  {
    id: 'persian',
    name: 'Persian Cat',
    country: 'Iran (Persia)',
    regionLabel: 'Middle East · Historic Pedigree',
    size: 'Medium',
    coatType: 'Long',
    temperaments: ['Calm', 'Affectionate'],
    popularityRank: 2,
    lifespan: '12–17 years',
    activityLevel: 'Low',
    activityScore: 2,
    intelligenceScore: 3,
    shortDescription:
      'Regal, serene, and gentle-natured companions famed for their flowing double coats and expressive round copper eyes.',
    image: BREED_IMAGES.persian,
    galleryImages: [
      { src: BREED_IMAGES.persian, caption: 'Classic cream-and-white Persian displaying dense ruff and broad facial structure' },
      { src: CARE_IMAGES.grooming, caption: 'Daily gentle combing preserves the silky Persian undercoat without tangles' },
      { src: BREED_IMAGES.exoticShorthair, caption: 'Cousin to the Exotic Shorthair, sharing the signature sweet round expression' }
    ],
    originHistory:
      'Named after historical Persia (modern-day Iran), long-haired cats were treasured along ancient caravan routes and brought to Europe in the 17th century by Italian traveler Pietro della Valle. Victorian cat fanciers refined the breed in England during the late 1800s, showcasing Persians at the very first Crystal Palace cat show in London in 1871.',
    physicalAppearance:
      'Stocky, cobby body supported by short, thick legs and large rounded paws. The Persian features a broad, round skull, small rounded ears set low on the head, full cheeks, a short snub nose, and wide, deeply expressive round eyes.',
    coatColorsPatterns:
      'Recognized in over 80 coat variations including Solid White, Cream, Blue, Black, Red, Chinchilla Silver, Golden, Shaded, Smoke, Tabby, Tortoiseshell, Calico, and Himalayan Colorpoint.',
    averageSizeWeight: 'Medium to Large build · 3.5–5.5 kg (7–12 lbs) · Height 25–30 cm',
    personalityBehavior:
      'Quiet, dignified, and deeply affectionate toward trusted household members. Persians prefer tranquil, predictable routines over boisterous activity, communicating with soft, musical chirps rather than loud demanding meows.',
    intelligenceNote:
      'Observant and routine-oriented; learns household schedules effortlessly and adapts quickly to gentle litter and grooming habits.',
    activityNote:
      'Low to moderate energy. Prefers short bursts of feather-wand play followed by long sunlit naps on favorite cushions.',
    careGrooming:
      'Requires daily 10-minute combing with a wide-toothed stainless steel comb to prevent matting behind the ears and underarms, plus gentle daily wiping around the tear ducts to keep facial folds clean.',
    recommendedNutrition:
      'High-protein moisture-rich wet meals paired with specialized large-kibble shapes designed for brachycephalic jaws. Hairball-control fiber blends help pass swallowed fur comfortably.',
    healthConsiderations:
      'Informative screening notes: Due to brachycephalic facial structure, owners should monitor breathing in hot weather and maintain eye/dental hygiene. Reputable breeders screen for Polycystic Kidney Disease (PKD) and Hypertrophic Cardiomyopathy (HCM).',
    compatibility: {
      children: 'Best with gentle, respectful children who handle cats calmly.',
      otherPets: 'Peaceful alongside calm dogs and non-dominant cats.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'A 19th-century Persian named White Heather was famously cherished by Queen Victoria.',
      'Persians have appeared consistently among the top five most registered pedigreed breeds worldwide for over a century.',
      'Traditional "doll-face" Persians retain a slightly longer muzzle than modern show-type "peke-face" lines.'
    ],
    youtubeId: 'srF789iZwEs',
    youtubeTitle: 'Persian Cat Breed Overview & Daily Care'
  },
  {
    id: 'siamese',
    name: 'Siamese Cat',
    country: 'Thailand',
    regionLabel: 'Southeast Asia · Royal Heritage',
    size: 'Medium',
    coatType: 'Short',
    temperaments: ['Affectionate', 'Playful'],
    popularityRank: 4,
    lifespan: '15–20 years',
    activityLevel: 'High',
    activityScore: 4,
    intelligenceScore: 5,
    shortDescription:
      'Vocal, intensely social, and aristocratic cats celebrated for striking sapphire eyes and dark heat-sensitive points.',
    image: BREED_IMAGES.siamese,
    galleryImages: [
      { src: BREED_IMAGES.siamese, caption: 'Seal-point Siamese showing sleek dark mask and vivid sapphire eyes' },
      { src: HERO_IMAGES.portraits, caption: 'Poised Siamese profile seated beside a British Shorthair' },
      { src: BREED_IMAGES.orientalShorthair, caption: 'Closely related to the Oriental Shorthair in silhouette and temperament' }
    ],
    originHistory:
      'Known in ancient Siam (modern Thailand) as Wichienmaat—"moon diamond"—Siamese cats were guarded as royal and temple companions for centuries, documented in the Tamra Maew (Cat-Book Poems) dating back to the Ayutthaya Kingdom (1351–1767). They arrived in Britain in the 1880s and captivated Western breeders.',
    physicalAppearance:
      'Svelte, athletic, tubular body with long slender legs, neat oval paws, and a long whip-like tail. Wedge-shaped head topped by large flared triangular ears and slanted almond-shaped vivid blue eyes.',
    coatColorsPatterns:
      'Short, fine, glossy coat exhibiting temperature-sensitive albinism in four classic point colors: Seal Point, Chocolate Point, Blue Point, and Lilac Point.',
    averageSizeWeight: 'Medium slender build · 3–5 kg (6.5–11 lbs) · Height 20–25 cm',
    personalityBehavior:
      'Deeply bonded, extroverted, and famously talkative. Siamese cats follow their favorite humans from room to room, greeting you at the door with expressive, low-pitched trills and persistent curiosity.',
    intelligenceNote:
      'Exceptional problem-solvers capable of mastering harness walking, fetch games, and opening unlocked latches.',
    activityNote:
      'High energy and socially demanding; thrives on interactive puzzle toys, climbing trees, and companionship.',
    careGrooming:
      'Minimal shedding. A weekly pass with a soft chamois cloth or rubber grooming brush keeps the short coat mirror-glossy. Regular dental brushing is strongly recommended.',
    recommendedNutrition:
      'Lean, high-protein animal-first diets supporting slender muscular tone; avoid calorie-dense treats that soften their athletic silhouette.',
    healthConsiderations:
      'Informative notes: Generally long-lived (often reaching 18+ years). Monitor dental health closely and consult veterinarians regarding genetic screening for progressive retinal atrophy (PRA) or mild respiratory sensitivities.',
    compatibility: {
      children: 'Thrives with energetic, respectful children who engage in interactive play.',
      otherPets: 'Loves feline companions—especially another Siamese—and friendly dogs.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Siamese kittens are born completely white; their dark points develop gradually in cooler body extremities.',
      'U.S. First Lady Lucy Hayes received one of America’s earliest Siamese cats as a diplomatic gift from the Consul in Bangkok in 1878.',
      'The breed’s signature "cross-eyed" or kinked-tail traits seen in antiquity were linked to ancient temple legends.'
    ],
    youtubeId: 'Q4Vjadpyehw',
    youtubeTitle: 'Siamese Cats: The Oldest Domestic Feline'
  },
  {
    id: 'maine-coon',
    name: 'Maine Coon',
    country: 'United States',
    regionLabel: 'North America · Gentle Giant',
    size: 'Large',
    coatType: 'Long',
    temperaments: ['Affectionate', 'Playful', 'Calm'],
    popularityRank: 1,
    lifespan: '12–15 years',
    activityLevel: 'Moderate',
    activityScore: 3,
    intelligenceScore: 5,
    shortDescription:
      'America’s gentle giants featuring lynx-tipped ears, a shaggy waterproof coat, and charming dog-like loyalty.',
    image: BREED_IMAGES.maineCoon,
    galleryImages: [
      { src: BREED_IMAGES.maineCoon, caption: 'Classic brown tabby Maine Coon with tufted ears and full chest ruff' },
      { src: HERO_IMAGES.sunlight, caption: 'Majestic Maine Coon lounging peacefully across a sunlit linen sofa' },
      { src: CARE_IMAGES.playtime, caption: 'Playful hunting instincts remain strong throughout adulthood' }
    ],
    originHistory:
      'Native to the rugged winters of Maine, this natural working farm and shipboard mouser evolved a thick, water-repellent coat and snowshoe-like tufted paws. Declared the official state cat of Maine in 1985, a Maine Coon named Cosey won Best in Show at the first major North American cat show at Madison Square Garden in 1895.',
    physicalAppearance:
      'Substantial rectangular frame with heavy boning, broad chest, prominent square muzzle, large ears crowned with lynx-like tufts, and a lush, sweeping plumed tail as long as the torso.',
    coatColorsPatterns:
      'Over 75 color combinations; Brown Classic Tabby is iconic, alongside Silver, Red, Black Smoke, Cream, Blue, and Tortoiseshell patterns.',
    averageSizeWeight: 'Large giant build · 5.5–10 kg (12–22 lbs) · Length up to 100 cm',
    personalityBehavior:
      'Affectionately nicknamed "the gentle giant." Despite their imposing size, Maine Coons are remarkably soft-spoken—communicating with adorable trills and chirps—and enjoy staying nearby without being overly demanding lap-sitters.',
    intelligenceNote:
      'Highly trainable and observant; famously fascinated by running faucets, fetch games, and interactive puzzles.',
    activityNote:
      'Moderate, steady energy. Reaches full physical and behavioral maturity slowly at 3 to 4 years of age.',
    careGrooming:
      'Uneven shaggy coat resists severe matting better than fine Persian fur, yet benefits from brushing twice weekly with a wide-toothed steel comb, especially around the mane and britches.',
    recommendedNutrition:
      'High-protein, joint-supportive nutrition (including omega-3 fatty acids) in measured portions suited to slow-maturing large frames.',
    healthConsiderations:
      'Informative notes: Responsible breeders DNA-test and echocardiogram-screen for Hypertrophic Cardiomyopathy (HCM), Hip Dysplasia, and Spinal Muscular Atrophy (SMA).',
    compatibility: {
      children: 'Outstanding patient temperament with gentle children.',
      otherPets: 'Exceptionally sociable with cat-friendly dogs and other felines.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'A Maine Coon named Stewie held the Guinness World Record for longest domestic cat at 123 cm (48.5 inches).',
      'Many Maine Coons happily dip their paws into water bowls—a habit traced to ancestral shipboard life.',
      'Polydactyl (extra-toed) Maine Coons were prized by 19th-century sailors for extra balance on rocking decks.'
    ],
    youtubeId: 'pQyum9WXXpE',
    youtubeTitle: 'Maine Coon 101: Temperament, Size & Care'
  },
  {
    id: 'british-shorthair',
    name: 'British Shorthair',
    country: 'United Kingdom',
    regionLabel: 'Western Europe · Iconic Plush',
    size: 'Medium',
    coatType: 'Short',
    temperaments: ['Calm', 'Independent', 'Affectionate'],
    popularityRank: 3,
    lifespan: '14–20 years',
    activityLevel: 'Low',
    activityScore: 2,
    intelligenceScore: 4,
    shortDescription:
      'Plush, round-cheeked British classics famous for dense velvet coats, copper eyes, and easygoing poise.',
    image: BREED_IMAGES.britishShorthair,
    galleryImages: [
      { src: BREED_IMAGES.britishShorthair, caption: 'Iconic British Blue showcasing dense plush coat and vivid copper eyes' },
      { src: HERO_IMAGES.portraits, caption: 'Balanced companion energy alongside a slender Siamese' },
      { src: CARE_IMAGES.nutrition, caption: 'Portion discipline supports the sturdy British Shorthair frame' }
    ],
    originHistory:
      'Descended from domestic cats brought to Britain by Roman legions and hardened as sturdy barn cats across the English countryside, the British Shorthair was formalized in the late 19th century by Harrison Weir, founder of the Cat Fancy. The classic solid blue-gray variety earned the affectionate title "British Blue."',
    physicalAppearance:
      'Powerful, compact, broad-chested body with sturdy legs and a thick rounded tail. Round head with full chubby jowls, medium rounded ears, and large round copper, gold, or emerald eyes.',
    coatColorsPatterns:
      'Short, remarkably dense, crisp "crackle" plush coat. Most iconic in Solid Blue, plus Silver Tabby, Black, Cream, Lilac, Golden Shaded, and Bicolor.',
    averageSizeWeight: 'Medium to Large sturdy build · 4–8 kg (9–17 lbs) · Height 30–35 cm',
    personalityBehavior:
      'Dignified, quiet, and wonderfully steady. British Shorthairs love being in the same room as their humans—often curled contentedly beside you on the sofa rather than clinging to your lap—making them ideal for calm households.',
    intelligenceNote:
      'Quickly understands household boundaries and adapts calmly to consistent daily schedules.',
    activityNote:
      'Low to moderate activity; enjoys brief evening play sessions and birdwatching from sturdy perches.',
    careGrooming:
      'A weekly brushing lifts dead undercoat hairs effortlessly; increase to 2–3 times weekly during spring and autumn seasonal shedding.',
    recommendedNutrition:
      'Controlled, high-protein portions to maintain muscular strength without gaining excess indoor weight.',
    healthConsiderations:
      'Informative notes: Hardy and long-lived; screen breeding lines for Hypertrophic Cardiomyopathy (HCM) and Polycystic Kidney Disease (PKD), and monitor indoor weight.',
    compatibility: {
      children: 'Patient and sturdy—great with respectful children.',
      otherPets: 'Coexists calmly with polite dogs and other cats.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'The British Blue inspired the smiling Cheshire Cat illustrations in Lewis Carroll’s Alice’s Adventures in Wonderland.',
      'Their coat feels uniquely crisp rather than flat due to a dense, springy undercoat.',
      'British Shorthairs typically do not finish filling out their broad cheeks until three years of age.'
    ],
    youtubeId: 'EUCbUoa8SbY',
    youtubeTitle: 'Cats 101: British Shorthair Profile'
  },
  {
    id: 'bengal',
    name: 'Bengal Cat',
    country: 'United States',
    regionLabel: 'North America · Hybrid Heritage',
    size: 'Medium',
    coatType: 'Short',
    temperaments: ['Playful', 'Independent'],
    popularityRank: 5,
    lifespan: '12–16 years',
    activityLevel: 'Very High',
    activityScore: 5,
    intelligenceScore: 5,
    shortDescription:
      'Athletic, leopard-rosetted explorers combining wild Asian Leopard Cat patterning with playful domestic devotion.',
    image: BREED_IMAGES.bengal,
    galleryImages: [
      { src: BREED_IMAGES.bengal, caption: 'Glittering golden-brown Bengal coat patterned with crisp dark rosettes' },
      { src: HERO_IMAGES.cozy, caption: 'Alert Bengal scanning outdoor movement from a sunny window ledge' },
      { src: CARE_IMAGES.playtime, caption: 'High-energy interactive play satisfies Bengal predatory instincts' }
    ],
    originHistory:
      'Created in California during the 1960s and 1980s by geneticist and breeder Jean Mill, who crossed a domestic shorthair with a wild Asian Leopard Cat (Prionailurus bengalensis) to preserve wild coat beauty in a gentle domestic companion. Modern registered Bengals (F4 generation and beyond) are 100% domestic in temperament.',
    physicalAppearance:
      'Long, sleek, heavily muscled athlete with slightly longer hind legs for impressive leaps, broad nose, dark mascara eye markings, and rounded ears.',
    coatColorsPatterns:
      'Uniquely soft "pelt-like" coat often dusted with iridescent "glitter" sheen. Patterns include two-toned Rosetted Spotted and Swirled Marble in Brown, Snow, Silver, and Charcoal.',
    averageSizeWeight: 'Medium muscular build · 4–7 kg (8–15 lbs) · Height 25–33 cm',
    personalityBehavior:
      'Curious, bold, and endlessly inventive. Bengals greet guests with confidence, adore climbing to the highest shelf in the house, and frequently invent interactive games involving water bowls or hidden toys.',
    intelligenceNote:
      'Among the sharpest problem-solvers in the feline world; thrives on clicker training, agility courses, and puzzle feeders.',
    activityNote:
      'Very High energy; requires structured daily interactive play, tall climbing furniture, and mental challenges.',
    careGrooming:
      'Virtually wash-and-wear coat that sheds lightly; a gentle weekly brushing keeps the glitter coat radiant. Trim nails biweekly.',
    recommendedNutrition:
      'High-protein, low-carbohydrate meals rich in animal meat to fuel lean muscle mass and high daily energy output.',
    healthConsiderations:
      'Informative notes: Reputable breeders test for Bengal Progressive Retinal Atrophy (PRA-b), Pyruvate Kinase Deficiency (PK-Def), and Hypertrophic Cardiomyopathy (HCM).',
    compatibility: {
      children: 'Great match for active older children who enjoy teaching tricks and wand play.',
      otherPets: 'Bonds well with confident dogs and equally energetic cats.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Many Bengals love water and will happily join owners near sinks, showers, or shallow water play trays.',
      'Their coat "glitter" comes from hollow translucent hair shafts that catch sunlight like spun gold.',
      'Bengals possess an unusually wide vocal repertoire, from chirps to soft raspy barks.'
    ],
    youtubeId: 'qOuA6yRKICo',
    youtubeTitle: 'Bengal Cats: Intelligence, Coat & Activity'
  },
  {
    id: 'ragdoll',
    name: 'Ragdoll',
    country: 'United States',
    regionLabel: 'North America · Lap Companion',
    size: 'Large',
    coatType: 'Long',
    temperaments: ['Calm', 'Affectionate'],
    popularityRank: 6,
    lifespan: '13–18 years',
    activityLevel: 'Moderate',
    activityScore: 2,
    intelligenceScore: 4,
    shortDescription:
      'Blue-eyed, rabbit-soft gentle giants renowned for going blissfully limp when cradled in trusted arms.',
    image: BREED_IMAGES.ragdoll,
    galleryImages: [
      { src: BREED_IMAGES.ragdoll, caption: 'Seal bicolor Ragdoll displaying crisp white inverted V facial mask' },
      { src: BREED_IMAGES.birman, caption: 'Often compared with the Birman, though Ragdolls are larger with fuller coats' },
      { src: CARE_IMAGES.grooming, caption: 'Silky single-layer coat tangles less than most longhaired breeds' }
    ],
    originHistory:
      'Developed in Riverside, California during the 1960s by breeder Ann Baker from a white domestic longhaired cat named Josephine and pointed pedigree lines. Baker named the breed "Ragdoll" after noticing the kittens’ extraordinary tendency to relax every muscle completely when picked up.',
    physicalAppearance:
      'Large, heavy-boned cat with broad chest, medium-length plumed tail, broad wedge head, and unforgettable vivid oval sapphire-blue eyes.',
    coatColorsPatterns:
      'Plush, silky semi-long coat lacking a dense woolly undercoat. Always pointed in Seal, Blue, Chocolate, Lilac, Red, or Cream across Colorpoint, Mitted, or Bicolor patterns.',
    averageSizeWeight: 'Large sturdy build · 4.5–9 kg (10–20 lbs) · Height 23–28 cm',
    personalityBehavior:
      'Sweet-natured, trusting, and deeply people-oriented. Ragdolls often greet family members at the entryway, follow them quietly from room to room, and flop cheerfully beside desks or across laps.',
    intelligenceNote:
      'Eager to please and easily taught gentle indoor routines such as fetching soft toys or coming when called.',
    activityNote:
      'Gentle to moderate playfulness; enjoys floor-level wand chases more than high-altitude leaping.',
    careGrooming:
      'Surprisingly easy for a semi-longhair; combing twice weekly prevents subtle tangles around the neck ruff and hind legs.',
    recommendedNutrition:
      'Balanced, portion-monitored wet and dry nutrition tailored to large indoor cats prone to relaxed lounging.',
    healthConsiderations:
      'Informative notes: Strictly indoor supervision is essential due to their trusting nature. Screen breeding lines for HCM (MYBPC3 Ragdoll mutation) and urinary crystal prevention via hydration.',
    compatibility: {
      children: 'Widely considered one of the gentlest breeds for families with children.',
      otherPets: 'Integrates smoothly with kind dogs and gentle resident cats.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Like Siamese cats, Ragdoll kittens are born pure white and develop their color points over their first few weeks.',
      'Their fur texture is frequently compared to soft rabbit down because it has minimal mat-prone undercoat.',
      'Ragdolls take up to four full years to reach their mature coat and adult weight.'
    ],
    youtubeId: '9f3HGa-6CPU',
    youtubeTitle: 'Ragdoll Cat 101: Gentle Blue-Eyed Giants'
  },
  {
    id: 'sphynx',
    name: 'Sphynx',
    country: 'Canada',
    regionLabel: 'North America · Hairless Icon',
    size: 'Medium',
    coatType: 'Hairless',
    temperaments: ['Affectionate', 'Playful'],
    popularityRank: 7,
    lifespan: '12–15 years',
    activityLevel: 'High',
    activityScore: 4,
    intelligenceScore: 5,
    shortDescription:
      'Warm-skinned, suede-soft acrobats bursting with extroverted humor, oversized ears, and affectionate charm.',
    image: BREED_IMAGES.sphynx,
    galleryImages: [
      { src: BREED_IMAGES.sphynx, caption: 'Sphynx showing sculptural wrinkles, large open ears, and lemon-shaped eyes' },
      { src: CARE_IMAGES.vet, caption: 'Regular wellness and skin checks keep hairless breeds thriving' },
      { src: CARE_IMAGES.playtime, caption: 'Extroverted Sphynx cats thrive on energetic daily interaction' }
    ],
    originHistory:
      'While hairless mutations have surfaced naturally in history—including in ancient Mexico—the modern Sphynx breed began in Toronto, Canada in 1966 when a domestic shorthair gave birth to a hairless kitten named Prune. Dedicated breeders in North America and Europe carefully outcrossed lines to ensure strong genetic diversity.',
    physicalAppearance:
      'Medium muscular frame with a rounded "pear-shaped" belly, long slender toes resembling fingers, dramatic bat-like upright ears, wrinkled forehead and shoulders, and expressive lemon-shaped eyes.',
    coatColorsPatterns:
      'Covered in ultra-fine peach fuzz feeling like warm chamois leather. Pigmentation shows directly on the skin in all colors and patterns—pink, seal, blue, calico, tabby, or solid black.',
    averageSizeWeight: 'Medium muscular build · 3–5.5 kg (6.5–12 lbs) · Height 20–25 cm',
    personalityBehavior:
      'Pure comedic warmth and Velcro affection. Sphynx cats seek body heat beneath blankets, drape themselves across shoulders like warm scarves, and entertain households with clownish leaps and constant social engagement.',
    intelligenceNote:
      'Remarkably socially attuned; learns tricks rapidly and communicates expressively with chirps and paw taps.',
    activityNote:
      'High energy and warmth-seeking; thrives in heated indoor spaces with cozy fleece burrows.',
    careGrooming:
      'No fur brushing, yet requires a gentle weekly or biweekly lukewarm bath or wipe-down to remove skin oils that would otherwise stain upholstery, plus routine ear and nail-bed cleaning.',
    recommendedNutrition:
      'Higher-calorie, nutrient-dense meals to fuel a faster metabolism needed to maintain warm body temperature without fur insulation.',
    healthConsiderations:
      'Informative notes: Protect skin from direct summer sunburn and winter drafts. Routine veterinary echocardiogram screening for Hypertrophic Cardiomyopathy (HCM) is advised.',
    compatibility: {
      children: 'Loves playful, gentle families who appreciate constant attention.',
      otherPets: 'Snuggles happily with warm dogs and other social cats.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Contrary to popular belief, Sphynx cats are not hypoallergenic; Fel d 1 allergens reside primarily in saliva and skin oils.',
      'Touching a Sphynx feels surprisingly warm—like holding a heated peach or suede hot-water bottle.',
      'Sphynx cats typically lack whiskers or have short curled whisker stubs.'
    ],
    youtubeId: 'QC1frKc85Dw',
    youtubeTitle: 'Sphynx Cat Facts & Skin Care Insights'
  },
  {
    id: 'scottish-fold',
    name: 'Scottish Fold',
    country: 'Scotland',
    regionLabel: 'Northern Europe · Folded-Ear Charm',
    size: 'Medium',
    coatType: 'Short',
    temperaments: ['Calm', 'Affectionate'],
    popularityRank: 8,
    lifespan: '12–15 years',
    activityLevel: 'Moderate',
    activityScore: 2,
    intelligenceScore: 4,
    shortDescription:
      'Owl-faced, sweet-voiced companions famous for their forward-folded ears and endearing upright sitting posture.',
    image: BREED_IMAGES.scottishFold,
    galleryImages: [
      { src: BREED_IMAGES.scottishFold, caption: 'Silver-cream Scottish Fold showing round head and neatly folded ears' },
      { src: BREED_IMAGES.britishShorthair, caption: 'British Shorthairs were historically used in responsible Scottish Fold outcrosses' },
      { src: CARE_IMAGES.vet, caption: 'Responsible joint monitoring is key for folded-ear genetics' }
    ],
    originHistory:
      'Every Scottish Fold traces back to Susie, a white barn cat spotted on a farm near Coupar Angus in Perthshire, Scotland in 1961. Shepherd William Ross adopted one of Susie’s folded-ear kittens and partnered with geneticists to establish the breed using careful outcrosses to British and American Shorthairs.',
    physicalAppearance:
      'Compact, well-padded medium body, large wide-set round eyes, rounded muzzle, and small ears folded forward and downward—giving an unmistakable owl-like silhouette.',
    coatColorsPatterns:
      'Dense, resilient plush coat (also occurs in a longhaired variety called Highland Fold) across tabby, silver shaded, cream, blue, calico, and bicolor coats.',
    averageSizeWeight: 'Medium rounded build · 3–6 kg (6.5–13 lbs) · Height 20–25 cm',
    personalityBehavior:
      'Gentle, adaptable, and devoted without being intrusive. Scottish Folds are famous for lounging in quirky positions—including flat on their backs or sitting upright in the iconic "Buddha pose."',
    intelligenceNote:
      'Attentive and easygoing; picks up household routines smoothly and enjoys gentle puzzle toys.',
    activityNote:
      'Moderate activity with gentle daily play preferences rather than high-altitude acrobatics.',
    careGrooming:
      'Weekly brushing keeps the plush coat tidy; check folded ear canals gently each week for wax buildup without probing deeply.',
    recommendedNutrition:
      'Balanced joint-supportive diet with controlled calories to protect cartilage and prevent excess joint load.',
    healthConsiderations:
      'Important informative note: The gene causing folded ears (osteochondrodysplasia) affects cartilage throughout the body. Ethical breeding strictly pairs one folded-ear cat with a straight-eared cat—never two Folds—and owners should watch for joint stiffness or tail rigidity with regular vet exams.',
    compatibility: {
      children: 'Calm and affectionate with gentle, considerate children.',
      otherPets: 'Adjusts easily to peaceful cats and calm dogs.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Scottish Fold kittens are all born with straight ears; the signature fold appears around 21 days of age.',
      'Only kittens carrying the fold gene develop folded ears; straight-eared littermates are called Scottish Straights.',
      'Singer Taylor Swift popularized the breed worldwide with her Scottish Folds Meredith Grey and Olivia Benson.'
    ],
    youtubeId: 'qUeY9I3W05c',
    youtubeTitle: 'Understanding Scottish Fold Genetics & Care'
  },
  {
    id: 'russian-blue',
    name: 'Russian Blue',
    country: 'Russia',
    regionLabel: 'Northern Europe · Shimmering Coat',
    size: 'Medium',
    coatType: 'Short',
    temperaments: ['Calm', 'Independent', 'Affectionate'],
    popularityRank: 9,
    lifespan: '15–20 years',
    activityLevel: 'Moderate',
    activityScore: 3,
    intelligenceScore: 5,
    shortDescription:
      'Poised, emerald-eyed aristocrats cloaked in a dense silver-tipped blue double coat and quiet devotion.',
    image: BREED_IMAGES.russianBlue,
    galleryImages: [
      { src: BREED_IMAGES.russianBlue, caption: 'Russian Blue highlighting luminous emerald eyes and silver-tipped slate fur' },
      { src: CARE_IMAGES.grooming, caption: 'Soft double coat responds beautifully to light weekly brushing' },
      { src: HERO_IMAGES.sunlight, caption: 'Quiet sunlit perches suit the Russian Blue temperament' }
    ],
    originHistory:
      'Folklore links the Russian Blue to the sub-Arctic port city of Arkhangelsk ("Archangel Cat"), where sailors prized their dense double coats and keen mousing skills aboard 19th-century merchant ships bound for Britain. Exhibited in London as early as 1875, the breed was carefully preserved by Scandinavian and British breeders after World War II.',
    physicalAppearance:
      'Fine-boned yet muscular athletic silhouette, long graceful neck, slightly upturned mouth corners giving a subtle "Mona Lisa smile," and vivid emerald-green eyes set against silver-blue fur.',
    coatColorsPatterns:
      'Exclusively solid slate-blue with translucent silver-tipped guard hairs creating an unmistakable metallic shimmer in natural light.',
    averageSizeWeight: 'Medium slender build · 3.5–5.5 kg (8–12 lbs) · Height 23–28 cm',
    personalityBehavior:
      'Reserved with strangers yet deeply loyal and subtly affectionate with their chosen household. Russian Blues cherish quiet routines, punctuality at meal times, and soft-voiced companionship.',
    intelligenceNote:
      'Exceptionally clever and tidy; learns door latches, fetch, and strict litter preferences instinctively.',
    activityNote:
      'Moderate bursts of agile play balanced by serene afternoon window-gazing.',
    careGrooming:
      'Low-shedding plush double coat needs only once-weekly combing to remove loose hairs without flattening the plush texture.',
    recommendedNutrition:
      'High-protein meals served on a predictable schedule; watch portions closely as mature Russian Blues enjoy their food.',
    healthConsiderations:
      'Informative notes: One of the healthiest, longest-lived natural breeds with very few known hereditary conditions; maintain dental care and steady indoor hydration.',
    compatibility: {
      children: 'Best with calm, older children who respect quiet initial shyness.',
      otherPets: 'Adapts peacefully to serene cats and gentle dogs.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Russian Blue kittens are born with yellow eyes that gradually transform into vivid emerald green by adulthood.',
      'Their dense double coat actually stands slightly away from the skin, creating a velvety cushion feel.',
      'Russian Blues are famously sensitive to human moods and often quietly comfort distressed owners.'
    ],
    youtubeId: '03fwfD36xl0',
    youtubeTitle: 'Russian Blue Cat 101: Coat & Temperament'
  },
  {
    id: 'abyssinian',
    name: 'Abyssinian',
    country: 'Ethiopia / Southeast Asia',
    regionLabel: 'Ancient Lineage · Ticked Athlete',
    size: 'Medium',
    coatType: 'Short',
    temperaments: ['Playful', 'Affectionate'],
    popularityRank: 10,
    lifespan: '12–15 years',
    activityLevel: 'Very High',
    activityScore: 5,
    intelligenceScore: 5,
    shortDescription:
      'Ancient, cougar-toned acrobats with iridescent ticked coats, boundless curiosity, and playful agility.',
    image: BREED_IMAGES.abyssinian,
    galleryImages: [
      { src: BREED_IMAGES.abyssinian, caption: 'Ruddy Abyssinian displaying warm cinnamon-orange ticked agouti coat' },
      { src: CARE_IMAGES.playtime, caption: 'Active wand and agility play keeps Abyssinians mentally fulfilled' },
      { src: BREED_IMAGES.egyptianMau, caption: 'Shares ancient North African/Mediterranean silhouette heritage' }
    ],
    originHistory:
      'Named after Abyssinia (historical Ethiopia), where a cat named Zula was brought to England in 1868, modern genetic studies suggest Abyssinians also carry deep ancestral roots along the Indian Ocean coast and Southeast Asia. They are among the oldest recognized pedigree breeds in the cat fancy.',
    physicalAppearance:
      'Lithe, medium-sized athlete resembling a miniature cougar, crowned with large cupped alert ears, expressive almond eyes framed by dark eyeliner, and slender legs with small oval paws.',
    coatColorsPatterns:
      'Distinctive "ticked" agouti coat where every individual hair shaft carries multiple alternating bands of dark and light pigment. Classic shades: Ruddy, Red (Sorrel), Blue, and Fawn.',
    averageSizeWeight: 'Medium athletic build · 3–5 kg (6.5–11 lbs) · Height 20–25 cm',
    personalityBehavior:
      'Perpetually in motion and irresistibly inquisitive. Rather than passive lap cats, Abyssinians prefer supervising every household chore from your shoulder or the top of a bookshelf.',
    intelligenceNote:
      'Brilliant, quick-learning, and eager for puzzle feeders, obstacle agility, and leash training.',
    activityNote:
      'Very High energy; thrives with vertical climbing shelves, window perches, and plenty of interactive play.',
    careGrooming:
      'Effortless sleek coat; a weekly soft brush or damp-hand rub removes loose hairs and accentuates the warm ticked sheen.',
    recommendedNutrition:
      'Protein-rich diet supporting lean athletic muscle and continuous daily motion.',
    healthConsiderations:
      'Informative notes: Ethical breeders test for Pyruvate Kinase Deficiency (PK-Def), Progressive Retinal Atrophy (rdAc), and monitor periodontal gum health.',
    compatibility: {
      children: 'Wonderful playmates for active, gentle children.',
      otherPets: 'Thrives alongside equally lively cats and playful dogs.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Because they love heights, Abyssinians are affectionately nicknamed "Aby-grabbies" and "cats on springs."',
      'Their ticked agouti coat mirrors the camouflage of wild African wildcats.',
      'Abyssinians rarely have large litters, typically averaging only two to four kittens.'
    ],
    youtubeId: 'OHVcuK7GJ0Q',
    youtubeTitle: 'Abyssinian Cat 101: Energy & Intelligence'
  },
  {
    id: 'turkish-angora',
    name: 'Turkish Angora',
    country: 'Turkey',
    regionLabel: 'Anatolia · National Treasure',
    size: 'Medium',
    coatType: 'Long',
    temperaments: ['Playful', 'Affectionate', 'Independent'],
    popularityRank: 11,
    lifespan: '12–18 years',
    activityLevel: 'High',
    activityScore: 4,
    intelligenceScore: 5,
    shortDescription:
      'Silky, balletic Anatolian beauties prized for plumed tails, luminous heterochromatic eyes, and sparkling wit.',
    image: BREED_IMAGES.turkishAngora,
    galleryImages: [
      { src: BREED_IMAGES.turkishAngora, caption: 'Pure white odd-eyed Turkish Angora with fine silky ruff and plumed tail' },
      { src: CARE_IMAGES.grooming, caption: 'Single-layer silky fur glides cleanly through a fine comb' },
      { src: BREED_IMAGES.siberian, caption: 'Contrast between silky single-coat Angora and dense triple-coat forest breeds' }
    ],
    originHistory:
      'Originating in the mountainous Ankara (historically Angora) region of central Turkey, this natural ancient breed captivated European nobility as early as the 16th century. When numbers declined in the early 20th century, the Ankara Zoo launched a dedicated conservation program to preserve pure white odd-eyed Turkish Angoras as a living national treasure.',
    physicalAppearance:
      'Fine-boned, graceful, balletic frame with long legs, tufted upright ears, almond-shaped eyes (often odd-eyed blue and amber), and a long bottle-brush tail carried proudly over the back.',
    coatColorsPatterns:
      'Single-layered silky, shimmering medium-long coat with no dense undercoat. Iconic in pure snow White, yet recognized in Black, Blue, Red, Tabby, Smoke, and Tortoiseshell.',
    averageSizeWeight: 'Small to Medium slender build · 2.5–4.5 kg (5.5–10 lbs) · Height 23–28 cm',
    personalityBehavior:
      'Spirited, clever, and assertively charming. Turkish Angoras bond closely with their favorite human, greet guests boldly, and insist on being part of every family activity.',
    intelligenceNote:
      'Exceptionally sharp problem-solvers; known for opening cabinet doors and initiating games of fetch.',
    activityNote:
      'High playful energy well into senior years; loves tall climbing towers and swimming/splashing toys.',
    careGrooming:
      'Despite its flowing beauty, the lack of heavy undercoat makes grooming light—brushing once or twice weekly keeps the silky coat airy and mat-free.',
    recommendedNutrition:
      'Balanced, lean animal-protein meals matching their agile, energetic metabolism.',
    healthConsiderations:
      'Informative notes: Pure white cats with one or two blue eyes carry a higher incidence of congenital deafness (BAER hearing test screens kittens early). Also monitor for HCM and ataxia in breeding programs.',
    compatibility: {
      children: 'Engaging and playful with respectful, active children.',
      otherPets: 'Gets along well with confident dogs and cats, though Angoras often assume the lead role.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Turkish Angoras were among the very first longhaired cats ever brought to Europe.',
      'Many Turkish Angoras enjoy playing in shallow water and batting at floating toys.',
      'In Turkish folklore, pure white odd-eyed Angoras are revered symbols of luck and purity.'
    ],
    youtubeId: 'J3KikawAXAE',
    youtubeTitle: 'Turkish Angora Cat: History & Characteristics'
  },
  {
    id: 'norwegian-forest',
    name: 'Norwegian Forest Cat',
    country: 'Norway',
    regionLabel: 'Scandinavia · Nordic Heritage',
    size: 'Large',
    coatType: 'Long',
    temperaments: ['Calm', 'Independent', 'Affectionate'],
    popularityRank: 12,
    lifespan: '14–16 years',
    activityLevel: 'Moderate',
    activityScore: 3,
    intelligenceScore: 4,
    shortDescription:
      'Mythic Viking-era forest climbers built with waterproof double coats, thick winter ruffs, and serene strength.',
    image: BREED_IMAGES.norwegianForest,
    galleryImages: [
      { src: BREED_IMAGES.norwegianForest, caption: 'Silver-and-white Norwegian Forest Cat displaying triangular head and full winter ruff' },
      { src: BREED_IMAGES.maineCoon, caption: 'Often compared to the Maine Coon, yet distinguished by a straight nose profile' },
      { src: BREED_IMAGES.siberian, caption: 'Fellow cold-climate natural forest breed built for northern winters' }
    ],
    originHistory:
      'Known in Norway as the Skogkatt, this ancient natural breed roamed Scandinavian forests and farmsteads for centuries, woven into Norse mythology as the large, strong cats pulling the chariot of goddess Freya. King Olav V named the Norwegian Forest Cat the official cat of Norway in the 1970s.',
    physicalAppearance:
      'Sturdy, muscular frame with higher hind legs for effortless tree climbing, straight triangular nose profile, almond-shaped oblique eyes, tufted ears, and a plush water-shedding double coat.',
    coatColorsPatterns:
      'Nearly all natural colors and tabby/bicolor patterns, including Brown Tabby, Silver Tabby, Black, White, Amber, and Tortoiseshell with white.',
    averageSizeWeight: 'Large sturdy build · 4.5–9 kg (10–20 lbs) · Height 25–35 cm',
    personalityBehavior:
      'Independent yet warmly devoted. Norwegian Forest Cats enjoy surveying rooms from high shelves and resting beside family members on their own terms, maintaining an unhurried, peaceful demeanor.',
    intelligenceNote:
      'Observant outdoor-heritage instincts make them skilled climbers and adaptable learners.',
    activityNote:
      'Moderate energy with an instinctive love for tall cat trees and vertical climbing.',
    careGrooming:
      'Weekly combing suffices most of the year, increasing to daily combing during spring shedding when they drop their heavy winter undercoat.',
    recommendedNutrition:
      'High-protein meals rich in omega fatty acids to sustain skin health and thick coat quality.',
    healthConsiderations:
      'Informative notes: Generally robust natural breed; reputable breeders DNA-test for Glycogen Storage Disease IV (GSD IV) and screen for HCM and hip dysplasia.',
    compatibility: {
      children: 'Patient and steady with respectful children.',
      otherPets: 'Coexists calmly with polite dogs and fellow felines.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Norwegian Forest Cats are among the few domestic cats capable of descending trees head-first thanks to strong curved claws.',
      'Their coat undergoes a dramatic seasonal transformation between plush winter mane and sleek summer vest.',
      'Unlike the Maine Coon’s curved nose dip, the Wegie features a straight triangle profile.'
    ],
    youtubeId: 'QdzRbR3FhWw',
    youtubeTitle: 'Norwegian Forest Cat 101: Skogkatt Guide'
  },
  {
    id: 'american-shorthair',
    name: 'American Shorthair',
    country: 'United States',
    regionLabel: 'North America · All-American Classic',
    size: 'Medium',
    coatType: 'Short',
    temperaments: ['Calm', 'Playful', 'Affectionate'],
    popularityRank: 13,
    lifespan: '15–20 years',
    activityLevel: 'Moderate',
    activityScore: 3,
    intelligenceScore: 4,
    shortDescription:
      'Hardy, silver-tabby classics celebrated for sturdy athleticism, gentle temperament, and remarkable longevity.',
    image: BREED_IMAGES.americanShorthair,
    galleryImages: [
      { src: BREED_IMAGES.americanShorthair, caption: 'Classic silver tabby American Shorthair with bold black swirling markings' },
      { src: CARE_IMAGES.nutrition, caption: 'Portion control keeps this sturdy working breed trim and agile' },
      { src: CARE_IMAGES.playtime, caption: 'Balanced playfulness makes them effortless family companions' }
    ],
    originHistory:
      'Descendants of hardy European working cats carried aboard 17th-century ships—including the Mayflower—to guard cargo from rodents, American Shorthairs evolved naturally across North American farms and towns before gaining formal pedigree recognition in 1906.',
    physicalAppearance:
      'Well-balanced, broad-chested athletic body with medium-short dense coat, full round face, medium ears, and wide luminous eyes.',
    coatColorsPatterns:
      'Recognized in over 80 colors and patterns; the iconic Silver Classic Tabby—with swirling bull’s-eye flank patterns and vivid green eyes—is world-famous.',
    averageSizeWeight: 'Medium to Large muscular build · 3.5–6.5 kg (8–15 lbs) · Height 22–28 cm',
    personalityBehavior:
      'Even-tempered, friendly, and wonderfully adaptable. They enjoy playful wand chases as kittens and settle into cheerful, unobtrusive companions who tolerate busy households gracefully.',
    intelligenceNote:
      'Practical, adaptable learners who master routines effortlessly without demanding constant supervision.',
    activityNote:
      'Balanced moderate activity; equally happy batting toy mice or napping in sunlit armchairs.',
    careGrooming:
      'Easy once-weekly brushing removes loose seasonal fur and keeps the dense coat gleaming.',
    recommendedNutrition:
      'Measured high-protein indoor rations to prevent mid-life weight gain in less active adult years.',
    healthConsiderations:
      'Informative notes: Renowned for natural vigor and longevity up to 20 years; monitor weight and routine dental health, plus standard HCM screening in breeding lines.',
    compatibility: {
      children: 'One of the finest family-friendly breeds for households with children.',
      otherPets: 'Calm and adaptable around friendly dogs and other cats.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Originally registered as the "Domestic Shorthair," the breed was renamed American Shorthair in 1966 to distinguish pedigreed lines.',
      'A silver tabby American Shorthair named Buster Brown helped define the breed’s iconic silver standard.',
      'Their thick, hard-textured coat originally shielded working farm cats from brambles and harsh weather.'
    ],
    youtubeId: 'd0NyAUbBnrM',
    youtubeTitle: 'American Shorthair 101: The Basics'
  },
  {
    id: 'birman',
    name: 'Birman',
    country: 'Myanmar (Burma) / France',
    regionLabel: 'Southeast Asia & Europe · Sacred Cat',
    size: 'Medium',
    coatType: 'Long',
    temperaments: ['Calm', 'Affectionate'],
    popularityRank: 14,
    lifespan: '12–16 years',
    activityLevel: 'Moderate',
    activityScore: 3,
    intelligenceScore: 4,
    shortDescription:
      'Velvet-voiced "Sacred Cats of Burma" wearing crisp white-gloved paws and deep sapphire-blue eyes.',
    image: BREED_IMAGES.birman,
    galleryImages: [
      { src: BREED_IMAGES.birman, caption: 'Seal-point Birman highlighting symmetrical white gloves and sapphire eyes' },
      { src: BREED_IMAGES.ragdoll, caption: 'Shares pointed coloration with the Ragdoll, though Birmans feature a Roman nose' },
      { src: CARE_IMAGES.grooming, caption: 'Single-layered silky coat rarely forms painful mats' }
    ],
    originHistory:
      'Legend tells of golden-coated temple cats in ancient Burma whose fur turned creamy white and eyes sapphire blue when a loyal cat comforted a dying priest before a statue of goddess Tsun-Kyan-Kse. Historically, a pair was brought to France around 1919, where French breeders rescued and standardized the "Sacré de Birmanie."',
    physicalAppearance:
      'Medium-long sturdy body, Roman nose profile, deep sapphire-blue nearly round eyes, silky semi-long pointed coat, and four signature pure-white "gloves" across the paws.',
    coatColorsPatterns:
      'Always colorpointed with pure white paws (gloves on front feet, gauntlets up the back). Point shades include Seal, Blue, Chocolate, Lilac, Red, Cream, Tortie, and Lynx.',
    averageSizeWeight: 'Medium solid build · 3.5–6 kg (8–13 lbs) · Height 23–28 cm',
    personalityBehavior:
      'Gentle, affectionate, and subtly curious. Birmans adore soft conversation, greeting you gently at the door, and keeping close company without demanding constant center stage.',
    intelligenceNote:
      'Sensitive to household tone and emotionally perceptive; learns gentle indoor rules quickly.',
    activityNote:
      'Moderate playfulness; enjoys gentle interactive feather toys and sunny afternoon lounging.',
    careGrooming:
      'Fine, silky semi-long coat lacks thick undercoat, requiring only gentle weekly combing to remain tangle-free.',
    recommendedNutrition:
      'Quality protein-forward meals with hydration support to maintain silky fur and kidney wellness.',
    healthConsiderations:
      'Informative notes: Generally healthy; owners should stay attentive to kidney screening and balanced nutrition.',
    compatibility: {
      children: 'Gentle and tolerant with considerate children.',
      otherPets: 'Prefers calm feline companions and polite dogs.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Only two Birman cats survived World War II in Europe; the entire modern breed was rebuilt through careful outcrossing.',
      'The symmetrical white "laces" on the back paws are a hallmark judged strictly in cat shows.',
      'Birmans are born pure white and develop their masked points gradually over their first months.'
    ],
    youtubeId: 'NR2csfBxd6M',
    youtubeTitle: 'Birman Cat: White-Gloved Sacred Beauty'
  },
  {
    id: 'burmese',
    name: 'Burmese',
    country: 'Myanmar (Burma) / USA',
    regionLabel: 'Southeast Asia · Satin Companion',
    size: 'Medium',
    coatType: 'Short',
    temperaments: ['Affectionate', 'Playful'],
    popularityRank: 15,
    lifespan: '14–18 years',
    activityLevel: 'High',
    activityScore: 4,
    intelligenceScore: 5,
    shortDescription:
      'Compact, satin-coated "bricks wrapped in silk" bursting with golden-eyed warmth and puppy-like devotion.',
    image: BREED_IMAGES.burmese,
    galleryImages: [
      { src: BREED_IMAGES.burmese, caption: 'Rich sable Burmese showing glossy satin coat and luminous gold eyes' },
      { src: BREED_IMAGES.siamese, caption: 'Closely connected in early 20th-century foundation history' },
      { src: CARE_IMAGES.playtime, caption: 'Keeps kitten-like playful enthusiasm well into adulthood' }
    ],
    originHistory:
      'The modern Burmese traces to Wong Mau, a rich walnut-brown cat brought from Burma to San Francisco in 1930 by Dr. Joseph Thompson. Genetic breeding with seal-point Siamese revealed Wong Mau carried a unique sepia gene, establishing the lush sable Burmese breed in 1936.',
    physicalAppearance:
      'Surprisingly heavy, compact muscular body—"a brick wrapped in silk"—paired with rounded head contours, expressive golden-to-amber eyes, and an ultra-short, glossy satin coat.',
    coatColorsPatterns:
      'Rich Sable (warm dark seal brown) is the signature shade, alongside Champagne, Blue, and Platinum (Lilac); European Burmese lines also include Red, Cream, and Tortie.',
    averageSizeWeight: 'Medium compact build · 3.5–5.5 kg (8–12 lbs) · Height 20–25 cm',
    personalityBehavior:
      'Intensely people-focused, fearless, and affectionate. Burmese cats love burrowing under sweaters, greeting every visitor warmly, and playing fetch well into their teens.',
    intelligenceNote:
      'Bright, persistent, and socially clever; thrives when included in daily family activities.',
    activityNote:
      'Playful and energetic throughout life, though comfortable curling in laps after active play.',
    careGrooming:
      'One of the easiest coats to maintain—a quick weekly hand-stroke or soft brush enhances its natural mirror-like gloss.',
    recommendedNutrition:
      'High-protein, moderate-calorie meals to preserve lean athletic muscle on their dense compact frame.',
    healthConsiderations:
      'Informative notes: Breeders screen for Burmese hypokalemia and craniofacial defects in extreme show lines; monitor dental health regularly.',
    compatibility: {
      children: 'Fabulous with playful, affectionate children.',
      otherPets: 'Prefers social households with another cat or friendly dog rather than being left alone all day.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Burmese cats are famously heavier than they look due to dense bone and muscle structure.',
      'Their voice is softer and sweeter than their Siamese relatives.',
      'Wong Mau, the foundation mother of the breed, became one of the most studied cats in feline genetics.'
    ],
    youtubeId: 'BcCJ-xj-0Vk',
    youtubeTitle: 'Burmese Cats 101: Personality & Lifestyle Fit'
  },
  {
    id: 'savannah',
    name: 'Savannah',
    country: 'United States',
    regionLabel: 'North America · Tall Serval Hybrid',
    size: 'Large',
    coatType: 'Short',
    temperaments: ['Playful', 'Independent'],
    popularityRank: 16,
    lifespan: '12–20 years',
    activityLevel: 'Very High',
    activityScore: 5,
    intelligenceScore: 5,
    shortDescription:
      'Tall, long-legged spotted athletes combining African Serval elegance with curious, leash-ready loyalty.',
    image: BREED_IMAGES.savannah,
    galleryImages: [
      { src: BREED_IMAGES.savannah, caption: 'Tall golden-spotted Savannah showing upright ears and tear-stain markings' },
      { src: BREED_IMAGES.bengal, caption: 'Fellow spotted hybrid breed prized for high athletic intelligence' },
      { src: CARE_IMAGES.playtime, caption: 'Requires expansive vertical climbing and stimulating enrichment' }
    ],
    originHistory:
      'First bred in Pennsylvania in 1986 by Judee Frank through a cross between a domestic Siamese and an African Serval (Leptailurus serval), the breed was later developed by Patrick Kelley and Joyce Sroufe into the Savannah officially recognized by TICA in 2001.',
    physicalAppearance:
      'Tall, lean, long-necked stature with remarkably long legs, huge upright cupped ears crowned with ocelli markings, hooded brow lines, and bold dark cheetah-like spots.',
    coatColorsPatterns:
      'Coarse yet soft short coat in Brown Spotted Tabby (golden to tawny), Silver Spotted Tabby, Black, and Black Smoke.',
    averageSizeWeight: 'Large tall build · 5.5–11 kg (12–25 lbs, varying by generation) · Height up to 40 cm',
    personalityBehavior:
      'Bold, adventurous, and deeply bonded to their household like an energetic working dog. Savannahs leap effortlessly onto refrigerator tops, love harness walks outdoors, and investigate running water.',
    intelligenceNote:
      'High-level problem solver; easily masters harness walking, fetch, and complex puzzle feeders.',
    activityNote:
      'Very High energy; best suited to spacious homes with ceiling-high cat furniture and dedicated daily exercise.',
    careGrooming:
      'Low-maintenance short coat requires only occasional brushing.',
    recommendedNutrition:
      'High-protein, meat-rich wet and raw-inspired balanced diets meeting athletic energy demands.',
    healthConsiderations:
      'Informative notes: Later-generation Savannahs (F5+) share standard domestic longevity and care needs. Always verify local municipal regulations regarding hybrid generation ownership before adopting.',
    compatibility: {
      children: 'Best with active, older children familiar with high-energy feline play.',
      otherPets: 'Gets along well with confident dogs and hardy cats; supervise closely around small caged pets.',
      apartmentFriendly: false
    },
    interestingFacts: [
      'A Savannah cat named Arcturus Aldebaran Powers held the Guinness World Record as the tallest living domestic cat at 48.4 cm.',
      'Savannahs can leap over 2.4 meters (8 feet) straight vertically from a standing start.',
      'Unlike most cats, many Savannahs happily splash in shallow tubs and kiddie pools.'
    ],
    youtubeId: 'abuAUjFv88s',
    youtubeTitle: 'The Savannah: Largest Domestic Cats in the World'
  },
  {
    id: 'exotic-shorthair',
    name: 'Exotic Shorthair',
    country: 'United States',
    regionLabel: 'North America · Plush Teddy Bear',
    size: 'Medium',
    coatType: 'Short',
    temperaments: ['Calm', 'Affectionate'],
    popularityRank: 17,
    lifespan: '12–15 years',
    activityLevel: 'Low',
    activityScore: 2,
    intelligenceScore: 3,
    shortDescription:
      'Sweet-faced "lazy man’s Persians" combining classic Persian serenity with a plush, low-maintenance teddy coat.',
    image: BREED_IMAGES.exoticShorthair,
    galleryImages: [
      { src: BREED_IMAGES.exoticShorthair, caption: 'Red tabby Exotic Shorthair with dense plush coat and round copper eyes' },
      { src: BREED_IMAGES.persian, caption: 'Shares Persian temperament and facial structure with a short plush coat' },
      { src: CARE_IMAGES.nutrition, caption: 'Shallow wide ceramic bowls suit flat-faced breeds comfortably' }
    ],
    originHistory:
      'Developed in the United States during the 1950s and 1960s by American Shorthair breeders who crossed with Persians to introduce silver coats and green eyes—quickly discovering the resulting plush, teddy-bear-like kittens possessed the Persian’s sweet face without daily mat-combing demands.',
    physicalAppearance:
      'Cobby, thick-set medium frame, short thick neck, broad round skull, wide-set large round eyes, short snub nose, and a dense, stand-away plush coat.',
    coatColorsPatterns:
      'Occurs in every Persian color and pattern: Red Tabby, Cream, Blue, Silver, Calico, Bicolor, and Colorpoint.',
    averageSizeWeight: 'Medium cobby build · 3.5–6 kg (8–13 lbs) · Height 25–30 cm',
    personalityBehavior:
      'Gentle, affectionate, and subtly more playful than the classic Persian. Exotic Shorthairs follow their humans quietly around the home and adore curling into cozy window beds.',
    intelligenceNote:
      'Calm, routine-loving companion who responds warmly to gentle voice praise.',
    activityNote:
      'Low to moderate energy; appreciates short interactive toy chases without frantic climbing.',
    careGrooming:
      'Weekly brushing keeps the plush double coat tidy; wipe gently around the eyes daily to clear normal tearing.',
    recommendedNutrition:
      'Moisture-rich wet food served on wide shallow ceramic dishes that accommodate flat facial contours comfortably.',
    healthConsiderations:
      'Informative notes: Shares Persian screening priorities including Polycystic Kidney Disease (PKD), HCM, dental alignment, and warm-weather airflow comfort.',
    compatibility: {
      children: 'Gentle and patient with calm children.',
      otherPets: 'Peaceful alongside mellow cats and gentle dogs.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Exotic Shorthairs are affectionately nicknamed "the Persian in pajamas" for their easy-care plush coat.',
      'Despite their quiet nature, they often display endearing bursts of kittenish curiosity well into adulthood.',
      'Garfield’s rounded expression was inspired by red tabby Exotic Shorthair and Persian traits.'
    ],
    youtubeId: 'b5ukHXdllFY',
    youtubeTitle: 'The Exotic Shorthair Cat 101: Personality & Care'
  },
  {
    id: 'oriental-shorthair',
    name: 'Oriental Shorthair',
    country: 'United Kingdom / USA',
    regionLabel: 'Transatlantic · Sculpted Elegance',
    size: 'Medium',
    coatType: 'Short',
    temperaments: ['Playful', 'Affectionate'],
    popularityRank: 18,
    lifespan: '12–15 years',
    activityLevel: 'High',
    activityScore: 4,
    intelligenceScore: 5,
    shortDescription:
      'Dramatic, big-eared conversationalists dressed in over 300 vibrant coat colors and sleek athletic poise.',
    image: BREED_IMAGES.orientalShorthair,
    galleryImages: [
      { src: BREED_IMAGES.orientalShorthair, caption: 'Chestnut-ebony Oriental Shorthair showcasing wedge head and flared ears' },
      { src: BREED_IMAGES.siamese, caption: 'Siamese partner breed sharing sleek build and expressive vocal nature' },
      { src: CARE_IMAGES.playtime, caption: 'Thrives on athletic puzzle games and social interaction' }
    ],
    originHistory:
      'Created in England during the 1950s and 1960s by breeders crossing Siamese cats with Russian Blues, British Shorthairs, and Abyssinians to retain the Siamese’s unmistakable sleek silhouette and extroverted soul while unlocking a rainbow of solid, tabby, smoke, and bicolor coats.',
    physicalAppearance:
      'Long, sleek, fine-boned yet athletic body, striking triangular wedge head, dramatic oversized flared ears, almond-shaped green (or blue/odd) eyes, and a long tapering tail.',
    coatColorsPatterns:
      'Extraordinary diversity—over 300 recognized color and pattern combinations including Ebony, Chestnut (Havana), Lavender, Cinnamon, Silver Tabby, Ticked, Tortoiseshell, and Bicolor.',
    averageSizeWeight: 'Medium slender build · 3–5 kg (6.5–11 lbs) · Height 23–28 cm',
    personalityBehavior:
      'Theatrically expressive, deeply affectionate, and rarely quiet for long. Oriental Shorthairs form intense emotional bonds and thrive in homes where conversation and interactive play happen every evening.',
    intelligenceNote:
      'Remarkably inventive; learns fetch, leash walking, and trick routines quickly to entertain their humans.',
    activityNote:
      'High energy; dislikes prolonged solitude and flourishes alongside another playful cat.',
    careGrooming:
      'Sleek single-layered coat requires minimal grooming—just a weekly soft brush and dental care.',
    recommendedNutrition:
      'Lean, high-protein meals supporting active movement and glossy coat condition.',
    healthConsiderations:
      'Informative notes: Maintain consistent dental hygiene and monitor respiratory/heart health through annual veterinary exams.',
    compatibility: {
      children: 'Engaging and playful with energetic, gentle children.',
      otherPets: 'Loves living with another social cat—especially Siamese or fellow Orientals.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'No other feline breed matches the Oriental Shorthair’s astonishing palette of over 300 coat patterns.',
      'Their large ears are famously expressive—often earning playful comparisons to miniature elves.',
      'Because of their minimal body fat, they love burrowing under warm blankets.'
    ],
    youtubeId: 'nL1SoOsyRr8',
    youtubeTitle: 'Oriental Cats 101: Coat Variety & Personality'
  },
  {
    id: 'egyptian-mau',
    name: 'Egyptian Mau',
    country: 'Egypt',
    regionLabel: 'North Africa · Living Antiquity',
    size: 'Medium',
    coatType: 'Short',
    temperaments: ['Playful', 'Affectionate', 'Independent'],
    popularityRank: 19,
    lifespan: '13–16 years',
    activityLevel: 'High',
    activityScore: 4,
    intelligenceScore: 5,
    shortDescription:
      'The fastest domestic feline on Earth and the only naturally spotted domestic breed, shimmering with gooseberry-green eyes.',
    image: BREED_IMAGES.egyptianMau,
    galleryImages: [
      { src: BREED_IMAGES.egyptianMau, caption: 'Silver Egyptian Mau showing natural charcoal spotting and vivid green eyes' },
      { src: BREED_IMAGES.abyssinian, caption: 'Fellow historic breed echoing ancient Mediterranean feline art' },
      { src: CARE_IMAGES.playtime, caption: 'Lightning-fast sprints celebrate the Mau’s cheetah-like skin flap' }
    ],
    originHistory:
      'Resembling the graceful spotted cats painted on 3,000-year-old Egyptian tomb frescoes ("Mau" means cat in ancient Egyptian), modern pedigreed Egyptian Maus were rescued from Cairo street populations in the 1950s by exiled Russian princess Natalie Troubetskoy and introduced to North America in 1956.',
    physicalAppearance:
      'Medium muscular build with slightly longer hind legs, loose flank skin flap aiding full-stride speed, characteristic "scarab M" forehead mark, and vivid gooseberry-green eyes.',
    coatColorsPatterns:
      'The only naturally spotted domestic cat breed (not created by wild hybrid crossing). Occurs in Silver, Bronze, and Smoke.',
    averageSizeWeight: 'Medium athletic build · 3–5.5 kg (6.5–12 lbs) · Height 20–25 cm',
    personalityBehavior:
      'Fiercely loyal to their chosen family while cautious around unfamiliar guests. When delighted, Egyptian Maus perform a charming rhythmic "happy dance" with their hind paws while chortling softly.',
    intelligenceNote:
      'Sharp, observant, and responsive to consistent positive-reinforcement training.',
    activityNote:
      'High sprinting and leaping energy; thrives with high perches and chasing wand toys.',
    careGrooming:
      'Silky, fine-to-medium short coat needs simple weekly brushing.',
    recommendedNutrition:
      'High-protein, meat-rich meals supporting athletic speed and lean musculature.',
    healthConsiderations:
      'Informative notes: Generally hardy; note occasional sensitivity to anesthesia protocols (discuss with your veterinarian) and screen breeding lines for PK-Def and HCM.',
    compatibility: {
      children: 'Bonds warmly with calm, respectful older children.',
      otherPets: 'Best introduced gradually to gentle cats and polite dogs.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Egyptian Maus are the fastest domestic cat breed, clocked at speeds exceeding 48 km/h (30 mph).',
      'They possess a longer gestation period than most cats—typically around 73 days instead of 63–65.',
      'Their unique "worried brow" expression comes from tilted almond eyes under the forehead scarab marking.'
    ],
    youtubeId: 'E6MlDrB_qCU',
    youtubeTitle: 'Egyptian Mau Cat 101: The Fastest Domestic Cat'
  },
  {
    id: 'siberian',
    name: 'Siberian Cat',
    country: 'Russia',
    regionLabel: 'Eurasia · Triple-Coat Forest Cat',
    size: 'Large',
    coatType: 'Long',
    temperaments: ['Affectionate', 'Playful', 'Calm'],
    popularityRank: 20,
    lifespan: '12–16 years',
    activityLevel: 'High',
    activityScore: 4,
    intelligenceScore: 5,
    shortDescription:
      'Hearty Russian forest cats blessed with triple-layered waterproof fur, athletic grace, and warm dog-like devotion.',
    image: BREED_IMAGES.siberian,
    galleryImages: [
      { src: BREED_IMAGES.siberian, caption: 'Golden-brown Siberian showcasing lush ruff and sturdy barrel-chested frame' },
      { src: BREED_IMAGES.norwegianForest, caption: 'Shares cold-weather resilience with the Norwegian Forest Cat' },
      { src: CARE_IMAGES.grooming, caption: 'Regular combing during spring coat blow keeps triple-layer coats airy' }
    ],
    originHistory:
      'Referenced in Russian fairy tales and village chronicles for centuries as fearless farm guardians against sub-zero Siberian winters, the Siberian Forest Cat was officially standardized in St. Petersburg during the late 1980s and arrived in the United States in 1990.',
    physicalAppearance:
      'Strong, rounded "barrel-chested" muscular body, rounded muzzle and ear tips, expressive large golden-to-green eyes, and a luxurious water-repellent triple coat.',
    coatColorsPatterns:
      'Found in rich Golden Tabby, Brown Mackerel Tabby, Silver, Red, Black, and the colorpointed Neva Masquerade variety.',
    averageSizeWeight: 'Large muscular build · 4.5–9 kg (10–20 lbs) · Height 25–30 cm',
    personalityBehavior:
      'Warm-hearted, courageous, and wonderfully playful. Siberians love welcoming visitors at the door, splashing near water bowls, and curling near your head after leaping effortlessly onto high shelves.',
    intelligenceNote:
      'Exceptionally clever problem-solvers; known for mastering fetch games and opening unlatched doors.',
    activityNote:
      'High yet balanced energy—agile climbers who also appreciate relaxing family evenings.',
    careGrooming:
      'The water-resistant coat resists severe tangling; brush twice weekly year-round and daily during spring shedding.',
    recommendedNutrition:
      'High-protein, meat-centered diet with adequate hydration to nourish their dense triple coat.',
    healthConsiderations:
      'Informative notes: Hardy natural breed; reputable breeders perform routine echocardiogram screening for Hypertrophic Cardiomyopathy (HCM).',
    compatibility: {
      children: 'Sturdy, patient, and deeply affectionate with families and children.',
      otherPets: 'Sociable and confident with gentle dogs and fellow cats.',
      apartmentFriendly: true
    },
    interestingFacts: [
      'Many mildly allergic cat lovers tolerate Siberians better than other breeds because some lines produce lower levels of Fel d 1 protein—though no cat is 100% hypoallergenic.',
      'Siberians take up to five years to achieve full physical maturity.',
      'Their dense triple coat lets water bead right off the surface.'
    ],
    youtubeId: '0KU_AEmMjT8',
    youtubeTitle: 'Siberian Cat 101: Coat, Allergens & Personality'
  }
];
