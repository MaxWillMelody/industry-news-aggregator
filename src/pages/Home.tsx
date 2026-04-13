import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, AlertTriangle, FileText, Bell, ArrowRight } from 'lucide-react';
import { NewsCard } from '@/components/news/NewsCard';
import { CategoryNav } from '@/components/news/CategoryNav';
import { getNewsWithCategory, categories } from '@/data/mockData';

export default function Home() {
  const allNews = useMemo(() => getNewsWithCategory(), []);
  
  const featuredNews = allNews[0];
  const latestNews = allNews.slice(1, 7);
  const riskNews = allNews.filter(n => n.category?.slug === 'risk').slice(0, 3);
  const policyNews = allNews.filter(n => n.category?.slug === 'policy').slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                每周一更新 · 已收录 {allNews.length} 条资讯
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                数据中心与云计算
                <br />
                <span className="text-blue-300">行业资讯聚合平台</span>
              </h1>
              <p className="text-lg text-blue-100 max-w-xl">
                专注收集过去7天数据中心、IDC、CDN、云计算等领域的最新动态、政策解读与风险提示，为行业从业者提供精准信息。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/subscribe"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  订阅周报
                </Link>
                <Link
                  to="/search"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                >
                  浏览资讯
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    本周热点
                  </h3>
                  <div className="space-y-3">
                    {allNews.slice(0, 4).map((news, index) => (
                      <Link
                        key={news.id}
                        to={`/news/${news.id}`}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-500/30 rounded-full flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </span>
                        <p className="text-sm text-blue-100 line-clamp-2 group-hover:text-white transition-colors">
                          {news.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main News */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured News */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">精选推荐</h2>
                <Link to={`/news/${featuredNews.id}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  查看详情 →
                </Link>
              </div>
              <NewsCard news={featuredNews} variant="featured" />
            </section>

            {/* Latest News Grid */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">最新资讯</h2>
                <Link to="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  查看更多 →
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {latestNews.map(news => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                新闻分类
              </h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <Link
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-gray-700 group-hover:text-gray-900">{category.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Risk Alerts */}
            {riskNews.length > 0 && (
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  风险提示
                </h3>
                <div className="space-y-3">
                  {riskNews.map(news => (
                    <Link
                      key={news.id}
                      to={`/news/${news.id}`}
                      className="block p-3 rounded-xl bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <p className="text-sm font-medium text-red-900 line-clamp-2 mb-1">
                        {news.title}
                      </p>
                      <p className="text-xs text-red-600">{news.source}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Policy Updates */}
            {policyNews.length > 0 && (
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-500" />
                  最新政策
                </h3>
                <div className="space-y-3">
                  {policyNews.map(news => (
                    <Link
                      key={news.id}
                      to={`/news/${news.id}`}
                      className="block p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <p className="text-sm font-medium text-orange-900 line-clamp-2 mb-1">
                        {news.title}
                      </p>
                      <p className="text-xs text-orange-600">{news.source}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Subscribe CTA */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">订阅行业周报</h3>
              <p className="text-sm text-blue-100 mb-4">
                每周一发送，精选过去7天重要行业动态，不错过任何关键信息。
              </p>
              <Link
                to="/subscribe"
                className="block w-full py-2.5 bg-white text-blue-600 rounded-xl text-center font-semibold hover:bg-blue-50 transition-colors"
              >
                立即订阅
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
