import { Link, useLocation } from 'react-router-dom';
import { categories } from '@/data/mockData';

export function CategoryNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-hide">
          <Link
            to="/"
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              currentPath === '/'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            全部
          </Link>
          {categories.map(category => {
            const isActive = currentPath === `/category/${category.slug}`;
            return (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: isActive ? category.color : undefined,
                }}
              >
                {category.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
