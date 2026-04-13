export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  summary: string;
  source: string;
  sourceUrl: string;
  coverImage?: string;
  categoryId: string;
  category?: Category;
  tags: string[];
  publishedAt: string;
  viewCount: number;
}

export interface Subscriber {
  id: string;
  email: string;
  isActive: boolean;
  subscribedAt: string;
  preferences: string[];
}

export type NewsFilter = {
  category?: string;
  timeRange?: '7days' | '30days' | 'all';
  sortBy?: 'latest' | 'popular';
};
