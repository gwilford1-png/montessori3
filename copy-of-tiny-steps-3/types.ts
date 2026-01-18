
export type ViewMode = 'SELECTION' | 'LIST' | 'DETAIL' | 'SHOPPING' | 'BUNDLES' | 'SCIENCE';
export type SectionType = 'Activity';

export interface ActivityStep {
  image_url: string;
  caption: string;
}

export interface Activity {
  id: string;
  title: string;
  category: string;
  filter_tag: string;
  type: string;
  description: string; // Combined summary for cards
  what_is_it: string; // Detailed "What"
  why_is_it_good: string; // Detailed "Why"
  dos: string[];
  donts: string[];
  steps: ActivityStep[];
  items_required?: string[];
  video_id?: string;
  safety_tips?: string;
  reference_link?: string;
  image_prompt?: string;
}

export interface BundleItem {
  id: number;
  title: string;
  line_1: string;
  line_2: string;
  link: string;
}

export interface ActivityBundle {
  id: string;
  name: string;
  tagline: string;
  age_range: string;
  items: BundleItem[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  cover_image: string;
  amazon_link: string;
  badge?: string;
  rating?: number;
  review_count?: string;
  pros?: string[];
  cons?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum TabView {
  ACTIVITIES = 'ACTIVITIES',
  EXPERT_CHAT = 'EXPERT_CHAT',
}
  thumbnail?: string;
