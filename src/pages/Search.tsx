import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, X, Filter, Clock, TrendingUp } from 'lucide-react';
import { NewsCard } from '@/components/news/NewsCard';
import { CategoryNav } from '@/components/news/CategoryNav';
import { searchNews, categories } from '@/data/mockData';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [searchInput, setSearchInput] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');

  const results = useMemo(() => {
    let filtered = searchNews(query);
    
    if (selectedCategory) {
      filtered = filtered.filter(news => news.category?.slug === selectedCategory);
    }
    
    if (sortBy === 'popular') {
      filtered = [...filtered].sort((a, b) => b.viewCount - a.viewCount);
    } else {
      filtered = [...filtered].sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }
    
    return filtered;
  }, [query, selectedCategory, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(searchInput);
    setSearchParams({ q: searchInput });
  };

  const clearSearch = () => {
    setSearchInput('');
    setQuery('');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryNav />
      
      {/* Search Hero */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            搜索行业资讯
          </h1>
          <p className="text-gray-600 mb-8">
            在 {searchNews('').length} 条行业资讯中搜索
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <SearchIcon className="absolute left-4 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="输入关键词搜索（例如：数据中心、液冷技术、政策法规...）"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-14 pr-12 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none shadow-sm"
                autoFocus
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              搜索
            </button>
          </form>
        </div>
      </section>

      {/* Filters */}
      {query && (
        <div className="bg-white border-b border-gray-200 sticky top-24 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">分类：</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">全部分类</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.slug}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">排序：</span>
                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setSortBy('latest')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      sortBy === 'latest'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600'
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    最新
                  </button>
                  <button
                    onClick={() => setSortBy('popular')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      sortBy === 'popular'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600'
                    }`}
                  >
                    <TrendingUp className="w-4 h-4" />
                    热门
                  </button>
                </div>
              </div>

              {/* Results Count */}
              <div className="ml-auto text-sm text-gray-500">
                找到 <span className="font-semibold text-gray-900">{results.length}</span> 条结果
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!query ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SearchIcon className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">请输入关键词搜索</h2>
            <p className="text-gray-600">
              热门搜索：数据中心、AI算力、液冷技术、东数西算、政策法规
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {['数据中心', 'AI算力', '液冷技术', '东数西算', '政策法规'].map(tag => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchInput(tag);
                    setQuery(tag);
                    setSearchParams({ q: tag });
                  }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ) : results.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((news, index) => (
              <div 
                key={news.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <NewsCard news={news} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              未找到相关结果
            </h2>
            <p className="text-gray-600 mb-6">
              请尝试其他关键词或调整筛选条件
            </p>
            <button
              onClick={clearSearch}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              清空搜索
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
