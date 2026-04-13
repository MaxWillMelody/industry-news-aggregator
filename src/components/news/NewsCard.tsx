import { Link } from 'react-router-dom';
import { Calendar, Eye, ArrowRight } from 'lucide-react';
import type { NewsItem } from '@/types';

interface NewsCardProps {
  news: NewsItem;
  variant?: 'default' | 'compact' | 'featured';
}

export function NewsCard({ news, variant = 'default' }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return '今天';
    if (diffDays === 1) return '昨天';
    if (diffDays < 7) return `${diffDays}天前`;
    return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' });
  };

  if (variant === 'featured') {
    return (
      <Link
        to={`/news/${news.id}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={news.coverImage || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3"
              style={{ backgroundColor: news.category?.color || '#1e40af' }}
            >
              {news.category?.name}
            </span>
            <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-blue-200 transition-colors">
              {news.title}
            </h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 line-clamp-2 mb-4">{news.summary}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(news.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {news.viewCount.toLocaleString()}
              </span>
            </div>
            <span className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              阅读更多 <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link
        to={`/news/${news.id}`}
        className="group flex gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
      >
        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
          <img
            src={news.coverImage || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop'}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-1">
            {news.title}
          </h4>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span
              className="px-2 py-0.5 rounded text-white"
              style={{ backgroundColor: news.category?.color || '#1e40af' }}
            >
              {news.category?.name}
            </span>
            <span>{formatDate(news.publishedAt)}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/news/${news.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={news.coverImage || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop'}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-lg text-xs font-medium text-white shadow-sm"
            style={{ backgroundColor: news.category?.color || '#1e40af' }}
          >
            {news.category?.name}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
          {news.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{news.summary}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(news.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {news.viewCount.toLocaleString()}
            </span>
          </div>
          <span className="text-gray-400">{news.source}</span>
        </div>
      </div>
    </Link>
  );
}
