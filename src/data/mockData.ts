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
    title: '国家数据局：到2028年算力规模超过300 EFLOPS',
    content: '据工信部官网报道，2026-04-25，网信办正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将推动技术创新，预计到2026年底初见成效。',
    summary: '据工信部官网报道，2026-04-25，网信办正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-04-25T16:55:00Z',
    viewCount: 4493
  },
  {
    id: '2',
    title: '腾讯云宣布对象存储涨价42%',
    content: '腾讯云于2026-04-25发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，有利于行业长期健康发展。',
    summary: '腾讯云于2026-04-25发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，有利于...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-04-25T15:35:00Z',
    viewCount: 5277
  },
  {
    id: '3',
    title: '算力租赁提供全栈解决方案，华为云上涨',
    content: '华为云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目覆盖全球主要区域，预计2026年底前投产。此举将显著降低运营成本，企业需优化算力使用策略。',
    summary: '华为云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目覆盖全球主要区域，预计2026年底前投产。此举将显著降低运营成本，企业需优化算力使用策略。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-04-25T12:10:00Z',
    viewCount: 6215
  },
  {
    id: '4',
    title: '对象存储价格下调22%，显著降低运营成本',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-04-25T11:53:00Z',
    viewCount: 4530
  },
  {
    id: '5',
    title: '容器服务价格上涨28%，推动技术创新',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-04-25T10:48:00Z',
    viewCount: 7409
  },
  {
    id: '6',
    title: '微软云数据中心PUE降至1.2，获得绿色数据中心认证',
    content: '随着数字化转型加速，全栈自研成为数据中心运维效率提升关键。2026-04-25，微软云发布CDN加速，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着数字化转型加速，全栈自研成为数据中心运维效率提升关键。2026-04-25，微软云发布CDN加速，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-04-25T09:47:00Z',
    viewCount: 6045
  },
  {
    id: '7',
    title: '腾讯云宣布CDN上涨，提升产业竞争力',
    content: '腾讯云今日宣布，与合作伙伴达成战略合作。新功能将支持智能调度，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。',
    summary: '腾讯云今日宣布，与合作伙伴达成战略合作。新功能将支持智能调度，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-04-23T10:54:00Z',
    viewCount: 8276
  },
  {
    id: '8',
    title: '算力市场进入试运营阶段，关注国产替代方案',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-04-21T14:10:00Z',
    viewCount: 4550
  },
  {
    id: '9',
    title: '浙江发布算力基础设施建设指南，推动技术创新',
    content: '据国家数据局报道，2026-04-21，发改委正式发布《算力基础设施建设指南》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士指出，此举将推动技术创新，预计行业将迎来新一轮发展机遇。',
    summary: '据国家数据局报道，2026-04-21，发改委正式发布《算力基础设施建设指南》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-04-21T14:06:00Z',
    viewCount: 3513
  },
  {
    id: '10',
    title: '算力租赁实现秒级扩容，AWS波动',
    content: 'AWS宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计分三期建设完成。此举将显著降低运营成本，标志着行业进入涨价周期。',
    summary: 'AWS宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计分三期建设完成。此举将显著降低运营成本，标志着行业进入涨价周期。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-04-20T18:33:00Z',
    viewCount: 6184
  },
  {
    id: '11',
    title: '算力租赁集成AI推理能力，谷歌云上涨',
    content: '谷歌云宣布服务全面升级，计划新建3个数据中心区域。该项目新增多项AI功能，预计未来两年逐步落地。此举将提升产业竞争力，有利于行业长期健康发展。',
    summary: '谷歌云宣布服务全面升级，计划新建3个数据中心区域。该项目新增多项AI功能，预计未来两年逐步落地。此举将提升产业竞争力，有利于行业长期健康发展。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-04-20T13:27:00Z',
    viewCount: 2137
  },
  {
    id: '12',
    title: '工信部发布新型数据中心发展指导意见，推动云计算发展',
    content: '据工信部官网报道，2026-04-20，发改委正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将推动技术创新，预计到2026年底初见成效。',
    summary: '据工信部官网报道，2026-04-20，发改委正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-04-20T12:18:00Z',
    viewCount: 4524
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
