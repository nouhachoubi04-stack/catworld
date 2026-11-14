import { VideoItem } from '../types/cat';
import { BREED_IMAGES, CARE_IMAGES, HERO_IMAGES } from './images';

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'vid-1',
    youtubeId: 'pQyum9WXXpE',
    title: 'Maine Coon 101: Inside America’s Gentle Giant',
    channel: 'Cat Nation',
    duration: '04:18',
    category: 'Breed Spotlight',
    description:
      'Explore the history, impressive size, lynx-tipped ears, and surprisingly soft-spoken personality of the iconic Maine Coon.',
    thumbnailFallback: BREED_IMAGES.maineCoon,
    relatedBreedId: 'maine-coon'
  },
  {
    id: 'vid-2',
    youtubeId: 'WzuhuaeS0aQ',
    title: 'Cat Body Language 101: Reading Ears, Tails & Eyes',
    channel: 'Jackson Galaxy',
    duration: '11:42',
    category: 'Behavior & Habits',
    description:
      'Learn how to interpret slow blinks, upright question-mark tails, ear positions, and subtle stress signals before petting.',
    thumbnailFallback: HERO_IMAGES.portraits
  },
  {
    id: 'vid-3',
    youtubeId: 'M7w8pDCo30M',
    title: 'The Natural Way to Play: Hunt, Catch, Kill, Eat',
    channel: 'Jackson Galaxy',
    duration: '09:15',
    category: 'Behavior & Habits',
    description:
      'Discover how structured wand-toy play mimics natural feline hunting cycles to reduce boredom and nighttime zoomies.',
    thumbnailFallback: CARE_IMAGES.playtime
  },
  {
    id: 'vid-4',
    youtubeId: 'Q4Vjadpyehw',
    title: 'Siamese Cats: The Oldest Royal Domestic Feline',
    channel: 'Discovery UK · Cats 101',
    duration: '03:54',
    category: 'Breed Spotlight',
    description:
      'Journey back to ancient Siam to understand why temperature-sensitive coat points and musical vocalizations define the Siamese.',
    thumbnailFallback: BREED_IMAGES.siamese,
    relatedBreedId: 'siamese'
  },
  {
    id: 'vid-5',
    youtubeId: 'e8qspEeBO-k',
    title: 'Why Cats Dislike Brushing (And How to Fix It)',
    channel: 'Jackson Galaxy',
    duration: '06:28',
    category: 'Owner Care Tips',
    description:
      'Practical grooming psychology to transform brushing into a calm, rewarding bonding ritual for shorthair and longhair cats alike.',
    thumbnailFallback: CARE_IMAGES.grooming
  },
  {
    id: 'vid-6',
    youtubeId: 'JUsLlxXWch0',
    title: 'Pet Food Basics: Choosing Balanced Feline Nutrition',
    channel: 'Schwarzman Animal Medical Center',
    duration: '14:10',
    category: 'Owner Care Tips',
    description:
      'Veterinary guidance on reading pet food labels, balancing wet vs. dry diets, and maintaining healthy indoor weight.',
    thumbnailFallback: CARE_IMAGES.nutrition
  },
  {
    id: 'vid-7',
    youtubeId: 'qOuA6yRKICo',
    title: 'Bengal Cats: Wild Rosettes & Athletic Intelligence',
    channel: 'Animal Planet · Cats 101',
    duration: '04:05',
    category: 'Breed Spotlight',
    description:
      'See why the glittering spotted Bengal thrives on water play, puzzle challenges, and high vertical territory.',
    thumbnailFallback: BREED_IMAGES.bengal,
    relatedBreedId: 'bengal'
  },
  {
    id: 'vid-8',
    youtubeId: '9f3HGa-6CPU',
    title: 'Ragdoll Cat 101: Four Facts About This Gentle Giant',
    channel: 'Wild Wonders',
    duration: '04:32',
    category: 'Breed Spotlight',
    description:
      'Closer look at the Ragdoll’s vivid blue eyes, rabbit-soft coat, and famously relaxed temperament in family homes.',
    thumbnailFallback: BREED_IMAGES.ragdoll,
    relatedBreedId: 'ragdoll'
  },
  {
    id: 'vid-9',
    youtubeId: 'N2D7waUSZPE',
    title: 'Cornell Feline Health Center: Comfort & Wellness Care',
    channel: 'Cornell Veterinary Medicine',
    duration: '05:12',
    category: 'Owner Care Tips',
    description:
      'Insights from leading feline veterinary researchers on stress-free veterinary visits and lifelong preventive care.',
    thumbnailFallback: CARE_IMAGES.vet
  },
  {
    id: 'vid-10',
    youtubeId: 'y0sF5xhGreA',
    title: 'Adorable Kittens & Playful Feline Moments',
    channel: 'The Pet Collective',
    duration: '20:00',
    category: 'Playful Moments',
    description:
      'Heartwarming, joyful compilation celebrating curious kittens, goofy leaps, and cozy feline companionship.',
    thumbnailFallback: HERO_IMAGES.cozy
  },
  {
    id: 'vid-11',
    youtubeId: 'abuAUjFv88s',
    title: 'The Savannah: Tallest Domestic Cats in the World',
    channel: 'Discovery UK · Cats 101',
    duration: '04:11',
    category: 'Breed Spotlight',
    description:
      'Explore the remarkable jumping ability, serval heritage, and high-energy lifestyle requirements of the Savannah.',
    thumbnailFallback: BREED_IMAGES.savannah,
    relatedBreedId: 'savannah'
  },
  {
    id: 'vid-12',
    youtubeId: '03fwfD36xl0',
    title: 'Russian Blue 101: Emerald Eyes & Silver Shimmer',
    channel: 'Cat Nation',
    duration: '04:45',
    category: 'Breed Spotlight',
    description:
      'Discover the calm intelligence, quiet loyalty, and unmistakable double coat of the Russian Blue.',
    thumbnailFallback: BREED_IMAGES.russianBlue,
    relatedBreedId: 'russian-blue'
  }
];
