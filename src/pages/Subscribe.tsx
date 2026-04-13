import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Check, Bell, Shield, Clock, Zap, AlertCircle } from 'lucide-react';
import { CategoryNav } from '@/components/news/CategoryNav';
import { categories } from '@/data/mockData';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <CategoryNav />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              订阅成功！
            </h1>
            <p className="text-gray-600 mb-6">
              我们已向 <span className="font-medium text-gray-900">{email}</span> 发送了确认邮件。
              <br />
              请查收邮件并点击确认链接完成订阅。
            </p>
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-blue-800">
                <Clock className="w-4 h-4 inline mr-1" />
                每周一早上9:00，您将收到精选的行业周报
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              返回首页
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryNav />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
            <Bell className="w-4 h-4" />
            每周一更新
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            订阅行业周报
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            每周精选过去7天数据中心、IDC、CDN、云计算等领域的重要资讯，
            让您不错过任何行业动态。
          </p>
        </div>
      </section>

      {/* Subscribe Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Form */}
            <div className="md:col-span-3 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱地址
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    选择感兴趣的分类（可选）
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => toggleCategory(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedCategories.includes(category.id)
                            ? 'text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        style={{
                          backgroundColor: selectedCategories.includes(category.id) 
                            ? category.color 
                            : undefined
                        }}
                      >
                        {selectedCategories.includes(category.id) && (
                          <Check className="w-3.5 h-3.5 inline mr-1" />
                        )}
                        {category.name}
                      </button>
                    ))}
                  </div>
                  {selectedCategories.length === 0 && (
                    <p className="text-sm text-gray-500 mt-2">
                      不选择则订阅所有分类的资讯
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      处理中...
                    </>
                  ) : (
                    <>
                      <Bell className="w-5 h-5" />
                      立即订阅
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  订阅即表示您同意接收我们的周报邮件。您可以随时取消订阅。
                </p>
              </form>
            </div>

            {/* Benefits */}
            <div className="md:col-span-2 bg-gray-50 p-8 border-l border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-6">订阅权益</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">每周更新</p>
                    <p className="text-sm text-gray-600">每周一早上9:00准时发送</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">精选内容</p>
                    <p className="text-sm text-gray-600">人工筛选重要资讯</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">隐私保护</p>
                    <p className="text-sm text-gray-600">您的邮箱仅用于接收周报</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">随时取消</p>
                    <p className="text-sm text-gray-600">一键取消订阅，无骚扰</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
