import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Eye, Share2, ExternalLink, Clock } from 'lucide-react';
import { NewsCard } from '@/components/news/NewsCard';
import { getNewsById, getNewsWithCategory } from '@/data/mockData';

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const news = useMemo(() => getNewsById(id || ''), [id]);
  const allNews = useMemo(() => getNewsWithCategory(), []);
  
  const relatedNews = useMemo(() => {
    if (!news) return [];
    return allNews
      .filter(n => n.categoryId === news.categoryId && n.id !== news.id)
      .slice(0, 3);
  }, [news, allNews]);

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">新闻不存在</h1>
          <p className="text-gray-600 mb-4">抱歉，您访问的新闻不存在或已被删除。</p>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const readingTime = Math.ceil(news.content.length / 500);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link
              to={`/category/${news.category?.slug}`}
              className="px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: news.category?.color }}
            >
              {news.category?.name}
            </Link>
            {news.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {news.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-200">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(news.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {news.viewCount.toLocaleString()} 阅读
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readingTime} 分钟阅读
            </span>
            <span className="text-gray-400">来源：{news.source}</span>
          </div>
        </header>

        {/* Cover Image */}
        {news.coverImage && (
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img
              src={news.coverImage}
              alt={news.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-600 leading-relaxed mb-6 font-medium">
            {news.summary}
          </p>
          <div className="text-gray-800 leading-relaxed whitespace-pre-line">
            {news.content}
          </div>
        </div>

        {/* Source Link */}
        <div className="flex items-center justify-between py-6 border-t border-gray-200">
          <a
            href={news.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            查看原文
            <ExternalLink className="w-4 h-4" />
          </a>
          
          <button 
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert('链接已复制到剪贴板');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            分享
          </button>
        </div>
      </article>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">相关推荐</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedNews.map(item => (
                <NewsCard key={item.id} news={item} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
