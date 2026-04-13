import { CategoryNav } from '@/components/news/CategoryNav';
import { Newspaper, Target, Users, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryNav />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            关于我们
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            专注于数据中心、IDC、CDN、云计算等领域的行业资讯聚合平台
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
          {/* Mission */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">我们的使命</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              在信息爆炸的时代，我们致力于为数据中心、IDC、CDN、云计算等领域的从业者提供精准、及时的行业资讯。
              通过聚合多个权威来源的新闻动态，帮助您快速了解行业发展趋势、政策变化和技术创新，
              让您在繁忙的工作中也能掌握行业脉搏。
            </p>
          </section>

          {/* What We Do */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">我们做什么</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">资讯聚合</h3>
                <p className="text-sm text-gray-600">
                  每日监控多个行业媒体、政府官网、企业公告，自动抓取重要资讯
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">智能分类</h3>
                <p className="text-sm text-gray-600">
                  基于AI技术自动分类新闻，涵盖数据中心、IDC、CDN、云计算等6大领域
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">周报精选</h3>
                <p className="text-sm text-gray-600">
                  每周一发送精选周报，汇总过去7天最重要的行业动态
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">风险提示</h3>
                <p className="text-sm text-gray-600">
                  及时推送行业安全事件、政策变化等风险提示信息
                </p>
              </div>
            </div>
          </section>

          {/* Target Users */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">目标用户</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                数据中心运营管理人员
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                IDC服务商及从业者
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                云计算架构师和工程师
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                行业分析师和投资人
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                企业IT决策者和采购人员
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">联系我们</h2>
            </div>
            <p className="text-gray-600 mb-4">
              如果您有任何建议、反馈或合作意向，欢迎通过以下方式联系我们：
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@example.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
