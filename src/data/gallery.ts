import { GalleryPhoto } from '../types/cat';
import { BREED_IMAGES, CARE_IMAGES, HERO_IMAGES } from './images';

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    src: HERO_IMAGES.sunlight,
    title: 'Golden Hour Lounge',
    breedName: 'Maine Coon',
    breedId: 'maine-coon',
    category: 'Longhair',
    origin: 'United States',
    aspectHint: 'wide',
    caption: 'A classic brown tabby Maine Coon basking in late afternoon sunbeams.'
  },
  {
    id: 'gal-2',
    src: BREED_IMAGES.persian,
    title: 'Velvet Sovereign',
    breedName: 'Persian Cat',
    breedId: 'persian',
    category: 'Longhair',
    origin: 'Iran (Persia)',
    aspectHint: 'square',
    caption: 'Cream and white Persian showing serene copper eyes and lush ruff.'
  },
  {
    id: 'gal-3',
    src: BREED_IMAGES.bengal,
    title: 'Wild Rosettes',
    breedName: 'Bengal Cat',
    breedId: 'bengal',
    category: 'Shorthair',
    origin: 'United States',
    aspectHint: 'tall',
    caption: 'Richly rosetted golden pelt of an athletic Bengal in warm studio light.'
  },
  {
    id: 'gal-4',
    src: BREED_IMAGES.sphynx,
    title: 'Sculptural Grace',
    breedName: 'Sphynx',
    breedId: 'sphynx',
    category: 'Exotic & Hairless',
    origin: 'Canada',
    aspectHint: 'tall',
    caption: 'Warm peach skin folds and luminous eyes atop travertine stone.'
  },
  {
    id: 'gal-5',
    src: HERO_IMAGES.portraits,
    title: 'Two Icons Together',
    breedName: 'Siamese & British Shorthair',
    breedId: 'siamese',
    category: 'Shorthair',
    origin: 'Thailand / United Kingdom',
    aspectHint: 'wide',
    caption: 'Slender seal-point elegance paired with plush British blue density.'
  },
  {
    id: 'gal-6',
    src: BREED_IMAGES.turkishAngora,
    title: 'Odd-Eyed Elegance',
    breedName: 'Turkish Angora',
    breedId: 'turkish-angora',
    category: 'Longhair',
    origin: 'Turkey',
    aspectHint: 'tall',
    caption: 'Silky white coat and striking heterochromatic blue and amber eyes.'
  },
  {
    id: 'gal-7',
    src: BREED_IMAGES.russianBlue,
    title: 'Emerald & Silver',
    breedName: 'Russian Blue',
    breedId: 'russian-blue',
    category: 'Shorthair',
    origin: 'Russia',
    aspectHint: 'square',
    caption: 'Silver-tipped slate coat shimmering against warm natural linen.'
  },
  {
    id: 'gal-8',
    src: CARE_IMAGES.grooming,
    title: 'Daily Ritual',
    breedName: 'Coat Care',
    category: 'Lifestyle & Care',
    origin: 'Home Studio',
    aspectHint: 'wide',
    caption: 'Gentle wooden-bristle brushing builds trust while keeping coats tangle-free.'
  },
  {
    id: 'gal-9',
    src: BREED_IMAGES.savannah,
    title: 'Savanna Poise',
    breedName: 'Savannah',
    breedId: 'savannah',
    category: 'Exotic & Hairless',
    origin: 'United States',
    aspectHint: 'tall',
    caption: 'Tall upright ears and bold cheetah-inspired spotting on terracotta tiles.'
  },
  {
    id: 'gal-10',
    src: BREED_IMAGES.ragdoll,
    title: 'Sapphire Serenity',
    breedName: 'Ragdoll',
    breedId: 'ragdoll',
    category: 'Longhair',
    origin: 'United States',
    aspectHint: 'square',
    caption: 'Bicolor Ragdoll resting peacefully on chunky beige knitwear.'
  },
  {
    id: 'gal-11',
    src: BREED_IMAGES.scottishFold,
    title: 'Owl-Faced Charm',
    breedName: 'Scottish Fold',
    breedId: 'scottish-fold',
    category: 'Exotic & Hairless',
    origin: 'Scotland',
    aspectHint: 'square',
    caption: 'Distinctive forward-folded ears and round amber gaze.'
  },
  {
    id: 'gal-12',
    src: BREED_IMAGES.abyssinian,
    title: 'Sunlit Ticked Coat',
    breedName: 'Abyssinian',
    breedId: 'abyssinian',
    category: 'Shorthair',
    origin: 'Ethiopia / Southeast Asia',
    aspectHint: 'tall',
    caption: 'Warm ruddy agouti bands catching soft studio daylight.'
  },
  {
    id: 'gal-13',
    src: HERO_IMAGES.cozy,
    title: 'Window Watcher',
    breedName: 'Bengal Cat',
    breedId: 'bengal',
    category: 'Lifestyle & Care',
    origin: 'Home Sanctuary',
    aspectHint: 'wide',
    caption: 'Alert curiosity beside sunlit timber windows and terracotta pots.'
  },
  {
    id: 'gal-14',
    src: BREED_IMAGES.norwegianForest,
    title: 'Nordic Heritage',
    breedName: 'Norwegian Forest Cat',
    breedId: 'norwegian-forest',
    category: 'Longhair',
    origin: 'Norway',
    aspectHint: 'tall',
    caption: 'Thick winter ruff and lynx-like poise perched on weathered oak.'
  },
  {
    id: 'gal-15',
    src: BREED_IMAGES.orientalShorthair,
    title: 'Sculpted Silhouette',
    breedName: 'Oriental Shorthair',
    breedId: 'oriental-shorthair',
    category: 'Exotic & Hairless',
    origin: 'United Kingdom / United States',
    aspectHint: 'tall',
    caption: 'Dramatic flared ears and glossy chestnut-ebony coat.'
  },
  {
    id: 'gal-16',
    src: CARE_IMAGES.playtime,
    title: 'Mid-Air Pounce',
    breedName: 'Enrichment Play',
    category: 'Lifestyle & Care',
    origin: 'Home Studio',
    aspectHint: 'wide',
    caption: 'Interactive feather wand play channels natural athletic agility.'
  },
  {
    id: 'gal-17',
    src: BREED_IMAGES.birman,
    title: 'White-Gloved Sacred Cat',
    breedName: 'Birman',
    breedId: 'birman',
    category: 'Longhair',
    origin: 'Myanmar (Burma) / France',
    aspectHint: 'square',
    caption: 'Symmetrical pure white paws paired with deep sapphire eyes.'
  },
  {
    id: 'gal-18',
    src: BREED_IMAGES.egyptianMau,
    title: 'Living Antiquity',
    breedName: 'Egyptian Mau',
    breedId: 'egyptian-mau',
    category: 'Shorthair',
    origin: 'Egypt',
    aspectHint: 'wide',
    caption: 'Natural silver spotting and vivid gooseberry-green eyes.'
  }
];

export interface DidYouKnowFact {
  id: string;
  title: string;
  fact: string;
  metric: string;
  metricLabel: string;
}

export const DID_YOU_KNOW_FACTS: DidYouKnowFact[] = [
  {
    id: 'fact-1',
    title: 'Unique Nose Prints',
    fact: 'Just like human fingerprints, the textured pattern of ridges and bumps on a cat’s nose leather is completely unique to every individual feline.',
    metric: '100%',
    metricLabel: 'Individual pattern'
  },
  {
    id: 'fact-2',
    title: 'Healing Purr Frequencies',
    fact: 'Domestic cats purr at frequencies between 25 and 150 Hertz—vibrations studied for their role in soothing stress and supporting bone and tissue repair.',
    metric: '25–150 Hz',
    metricLabel: 'Resonance range'
  },
  {
    id: 'fact-3',
    title: 'Floating Collarbones',
    fact: 'A cat’s clavicle is not rigidly attached to other bones by joints, allowing its shoulders to compress and squeeze cleanly through any opening its head can clear.',
    metric: '360°',
    metricLabel: 'Shoulder flexibility'
  },
  {
    id: 'fact-4',
    title: 'Scent-Tasting Organ',
    fact: 'When a cat opens its mouth slightly in a quizzical grimace after sniffing something intriguing, it is drawing air into the vomeronasal (Jacobson’s) organ on the roof of its mouth.',
    metric: '200M+',
    metricLabel: 'Olfactory receptors'
  },
  {
    id: 'fact-5',
    title: 'Sweetness Blindness',
    fact: 'Unlike humans and dogs, domestic cats lack the functional Tas1r2 gene receptor required to detect sweet sugars—reinforcing their biology as obligate carnivores.',
    metric: '0',
    metricLabel: 'Sweet taste receptors'
  },
  {
    id: 'fact-6',
    title: 'Low-Light Vision Mastery',
    fact: 'Cats require roughly one-sixth the illumination humans need to see clearly thanks to a high density of rod cells and the reflective tapetum lucidum behind the retina.',
    metric: '6x',
    metricLabel: 'Low-light sensitivity'
  }
];
