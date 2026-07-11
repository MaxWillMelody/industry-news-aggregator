import type { Category, NewsItem } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: '数据中心',
    slug: 'data-center',
    description: '数据中心建设、运营、技术动态',
    color: '#1e40af',
  },
  {
    id: '2',
    name: 'IDC',
    slug: 'idc',
    description: '互联网数据中心行业资讯',
    color: '#059669',
  },
  {
    id: '3',
    name: 'CDN',
    slug: 'cdn',
    description: '内容分发网络技术与市场',
    color: '#7c3aed',
  },
  {
    id: '4',
    name: '云计算',
    slug: 'cloud-computing',
    description: '云计算服务与技术趋势',
    color: '#0891b2',
  },
  {
    id: '5',
    name: '政策法规',
    slug: 'policy',
    description: '行业政策、监管动态、法规解读',
    color: '#ea580c',
  },
  {
    id: '6',
    name: '风险提示',
    slug: 'risk',
    description: '行业风险、安全预警、市场警示',
    color: '#dc2626',
  },
];

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: '谷歌云宣布对象存储涨价19%',
    content: '谷歌云于2026-07-11发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，将推动云服务商差异化竞争。',
    summary: '谷歌云于2026-07-11发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，将推动云服...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-07-11T18:28:00Z',
    viewCount: 3070
  },
  {
    id: '2',
    title: '阿里云IDC支持智能调度，降低中小企业算力门槛',
    content: '阿里云宣布新一代产品正式发布，计划扩建现有智算中心。该项目价格上调5%-34%，预计未来两年逐步落地。此举将推动技术创新，有利于行业长期健康发展。',
    summary: '阿里云宣布新一代产品正式发布，计划扩建现有智算中心。该项目价格上调5%-34%，预计未来两年逐步落地。此举将推动技术创新，有利于行业长期健康发展。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-07-11T17:50:00Z',
    viewCount: 7831
  },
  {
    id: '3',
    title: 'AWS容器服务正式商用，支持智能调度',
    content: 'AWS于2026-07-11发布公告，宣布服务全面升级。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长期健康发展。',
    summary: 'AWS于2026-07-11发布公告，宣布服务全面升级。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长期健康...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-07-11T09:56:00Z',
    viewCount: 5214
  },
  {
    id: '4',
    title: '京东云CDN支持智能调度，降低中小企业算力门槛',
    content: '京东云今日宣布，服务全面升级。新功能将支持智能调度，可降低中小企业算力门槛。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。',
    summary: '京东云今日宣布，服务全面升级。新功能将支持智能调度，可降低中小企业算力门槛。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-07-10T16:40:00Z',
    viewCount: 6560
  },
  {
    id: '5',
    title: 'IDC行业成本压力传导，推动技术创新',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-07-09T10:42:00Z',
    viewCount: 1504
  },
  {
    id: '6',
    title: '微软云CDN实现秒级扩容，降低中小企业算力门槛',
    content: '微软云今日宣布，服务全面升级。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计到2026年底初见成效。',
    summary: '微软云今日宣布，服务全面升级。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计到2026年底初见成效。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-07-08T14:34:00Z',
    viewCount: 2706
  },
  {
    id: '7',
    title: '国家数据局：到2028年算力规模超过300 EFLOPS',
    content: '据新华网报道，2026-07-08，国家数据局正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析人士指出，此举将推动技术创新，预计行业将迎来新一轮发展机遇。',
    summary: '据新华网报道，2026-07-08，国家数据局正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-07-08T12:41:00Z',
    viewCount: 3840
  },
  {
    id: '8',
    title: '新政策支持算力产业，降低中小企业算力门槛',
    content: '据新华网报道，2026-07-07，网信办正式发布《算力基础设施建设指南》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将提升产业竞争力，预计到2026年底初见成效。',
    summary: '据新华网报道，2026-07-07，网信办正式发布《算力基础设施建设指南》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-07-07T10:42:00Z',
    viewCount: 8320
  },
  {
    id: '9',
    title: '边缘计算提供全栈解决方案，京东云布局{market}',
    content: '京东云今日宣布，产品价格调整通知。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖全国主要城市，预计未来三年将持续增长。',
    summary: '京东云今日宣布，产品价格调整通知。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖全国主要城市，预计未来三年将持续增长。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-07-06T08:42:00Z',
    viewCount: 4785
  },
  {
    id: '10',
    title: '算力市场正式开工，企业应优化算力使用策略',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，企业应优化算力使用策略。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，企业应优化算力使用策略。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-07-05T17:40:00Z',
    viewCount: 3991
  },
  {
    id: '11',
    title: '边缘计算实现秒级扩容，腾讯云布局{market}',
    content: '腾讯云今日宣布，新一代产品正式发布。新功能将实现秒级扩容，可促进区域协调发展。目前该服务已覆盖全国主要城市，预计未来三年将持续增长。',
    summary: '腾讯云今日宣布，新一代产品正式发布。新功能将实现秒级扩容，可促进区域协调发展。目前该服务已覆盖全国主要城市，预计未来三年将持续增长。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-07-05T08:50:00Z',
    viewCount: 6855
  },
  {
    id: '12',
    title: '边缘计算节点价格波动49%，推动技术创新',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-07-04T16:22:00Z',
    viewCount: 8718
  }
];

export const getNewsWithCategory = (): NewsItem[] => {
  return mockNews.map(news => ({
    ...news,
    category: categories.find(c => c.id === news.categoryId),
  }));
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

export const getNewsByCategory = (categorySlug: string): NewsItem[] => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];
  return getNewsWithCategory().filter(news => news.categoryId === category.id);
};

export const getNewsById = (id: string): NewsItem | undefined => {
  return getNewsWithCategory().find(news => news.id === id);
};

export const searchNews = (query: string): NewsItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return getNewsWithCategory().filter(
    news =>
      news.title.toLowerCase().includes(lowercaseQuery) ||
      news.summary.toLowerCase().includes(lowercaseQuery) ||
      news.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
