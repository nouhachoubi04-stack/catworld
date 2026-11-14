export type CoatType = 'Short' | 'Long' | 'Hairless';
export type BreedSize = 'Small' | 'Medium' | 'Large';
export type TemperamentTag = 'Calm' | 'Playful' | 'Affectionate' | 'Independent';

export interface CatBreed {
  id: string;
  name: string;
  country: string;
  regionLabel: string;
  size: BreedSize;
  coatType: CoatType;
  temperaments: TemperamentTag[];
  popularityRank: number;
  lifespan: string;
  activityLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
  activityScore: number; // 1-5
  intelligenceScore: number; // 1-5
  shortDescription: string;
  image: string;
  galleryImages: { src: string; caption: string }[];
  originHistory: string;
  physicalAppearance: string;
  coatColorsPatterns: string;
  averageSizeWeight: string;
  personalityBehavior: string;
  intelligenceNote: string;
  activityNote: string;
  careGrooming: string;
  recommendedNutrition: string;
  healthConsiderations: string;
  compatibility: {
    children: string;
    otherPets: string;
    apartmentFriendly: boolean;
  };
  interestingFacts: string[];
  youtubeId: string;
  youtubeTitle: string;
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  channel: string;
  duration: string;
  category: 'Breed Spotlight' | 'Behavior & Habits' | 'Owner Care Tips' | 'Playful Moments';
  description: string;
  thumbnailFallback: string;
  relatedBreedId?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  image: string;
  excerpt: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  keyTakeaways: string[];
  relatedBreedIds: string[];
}

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  breedName: string;
  breedId?: string;
  category: 'Longhair' | 'Shorthair' | 'Exotic & Hairless' | 'Lifestyle & Care';
  origin: string;
  aspectHint: 'tall' | 'wide' | 'square';
  caption: string;
}
