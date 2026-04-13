import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Newspaper, Bell } from 'lucide-react';
import { categories } from '@/data/mockData';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: '首页' },
    ...categories.map(c => ({ to: `/category/${c.slug}`, label: c.name })),
    { to: '/subscribe', label: '订阅' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
              <Newspaper className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">行业新闻</h1>
              <p className="text-xs text-gray-500 -mt-1">数据中心·IDC·CDN·云</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.slice(0, 4).map(category => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === `/category/${category.slug}`
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                更多
              </button>
              <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {categories.slice(4).map(category => (
                  <Link
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="搜索"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Subscribe Button - Desktop */}
            <Link
              to="/subscribe"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <Bell className="w-4 h-4" />
              订阅周报
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="菜单"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                location.pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              首页
            </Link>
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  location.pathname === `/category/${category.slug}`
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/subscribe"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50"
            >
              订阅周报
            </Link>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
          <div className="w-full max-w-2xl mx-4 bg-white rounded-xl shadow-2xl overflow-hidden">
            <form
              onSubmit={e => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const input = form.elements.namedItem('search') as HTMLInputElement;
                if (input.value.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
                }
              }}
              className="flex items-center gap-3 p-4 border-b border-gray-200"
            >
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="search"
                placeholder="搜索新闻、政策、行业动态..."
                className="flex-1 text-lg outline-none placeholder:text-gray-400"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </form>
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-500 mb-2">热门搜索</p>
              <div className="flex flex-wrap gap-2">
                {['数据中心', 'AI算力', '东数西算', 'PUE', '液冷技术'].map(tag => (
                  <Link
                    key={tag}
                    to={`/search?q=${encodeURIComponent(tag)}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="px-3 py-1.5 bg-white rounded-full text-sm text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
