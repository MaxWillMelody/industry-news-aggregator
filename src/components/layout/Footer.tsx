import { Link } from 'react-router-dom';
import { Newspaper, Mail, Github, Twitter } from 'lucide-react';
import { categories } from '@/data/mockData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">行业新闻</h3>
                <p className="text-xs text-gray-400">每周更新行业动态</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              专注于数据中心、IDC、CDN、云计算等领域的行业新闻聚合平台，为从业者提供及时、准确的行业资讯。
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">新闻分类</h4>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-sm text-gray-400 hover:text-white transition-colors">
                  搜索新闻
                </Link>
              </li>
              <li>
                <Link to="/subscribe" className="text-sm text-gray-400 hover:text-white transition-colors">
                  订阅周报
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">订阅周报</h4>
            <p className="text-sm text-gray-400 mb-4">
              每周一发送，精选过去7天重要行业动态
            </p>
            <form
              onSubmit={e => {
                e.preventDefault();
                window.location.href = '/subscribe';
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="输入邮箱地址"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                订阅
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} 行业新闻聚合平台. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">
              隐私政策
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              使用条款
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              联系我们
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
