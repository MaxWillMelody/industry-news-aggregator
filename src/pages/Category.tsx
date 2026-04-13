import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Filter, Clock, TrendingUp } from 'lucide-react';
import { NewsCard } from '@/components/news/NewsCard';
import { CategoryNav } from '@/components/news/CategoryNav';
import { getNewsByCategory, getCategoryBySlug, categories } from '@/data/mockData';
import type { Category as CategoryType } from '@/types';

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = useMemo(() => getCategoryBySlug(slug || ''), [slug]);
  const news = useMemo(() => getNewsByCategory(slug || ''), [slug]);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">分类不存在</h1>
          <p className="text-gray-600 mb-4">抱歉，您访问的分类不存在或已被删除。</p>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryNav />
      
      {/* Category Header */}
      <section 
        className="py-12"
        style={{ 
          background: `linear-gradient(135deg, ${category.color}15 0%, ${category.color}05 100%)`,
          borderBottom: `1px solid ${category.color}20`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg shadow-sm">
                <Filter className="w-4 h-4" />
                共 {news.length} 条资讯
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-gray-500">筛选：</span>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium">
                全部时间
              </button>
              <button className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-sm font-medium transition-colors">
                近7天
              </button>
              <button className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-sm font-medium transition-colors">
                近30天
              </button>
            </div>
            <div className="w-px h-6 bg-gray-200 mx-2" />
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium">
                <Clock className="w-4 h-4" />
                最新发布
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-sm font-medium transition-colors">
                <TrendingUp className="w-4 h-4" />
                最多阅读
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {news.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div 
                key={item.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <NewsCard news={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">暂无资讯</h3>
            <p className="text-gray-600">该分类下暂时没有新闻，请查看其他分类。</p>
          </div>
        )}

        {/* Other Categories */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">浏览其他分类</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories
              .filter(c => c.id !== category.id)
              .map(otherCategory => (
                <Link
                  key={otherCategory.id}
                  to={`/category/${otherCategory.slug}`}
                  className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all text-center group"
                >
                  <span 
                    className="inline-block w-3 h-3 rounded-full mb-2"
                    style={{ backgroundColor: otherCategory.color }}
                  />
                  <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {otherCategory.name}
                  </p>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
