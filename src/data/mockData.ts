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
    title: '超大规模数据中心进入试运营阶段，采用液冷',
    content: '随着数字化转型加速，液冷成为数据中心散热主流方案。2026-08-06，京东云发布容器服务，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着数字化转型加速，液冷成为数据中心散热主流方案。2026-08-06，京东云发布容器服务，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-08-06T18:33:00Z',
    viewCount: 6636
  },
  {
    id: '2',
    title: '华为云IDC提供全栈解决方案，推动行业数字化转型',
    content: '华为云宣布产品价格调整通知，计划扩建现有智算中心。该项目价格上调5%-34%，预计分三期建设完成。此举将显著降低运营成本，标志着行业进入涨价周期。',
    summary: '华为云宣布产品价格调整通知，计划扩建现有智算中心。该项目价格上调5%-34%，预计分三期建设完成。此举将显著降低运营成本，标志着行业进入涨价周期。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-08-05T18:43:00Z',
    viewCount: 5015
  },
  {
    id: '3',
    title: '对象存储价格上涨34%，推动技术创新',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，提前锁定长期合约。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，提前锁定长期合约。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-08-04T17:20:00Z',
    viewCount: 8271
  },
  {
    id: '4',
    title: 'AI算力服务价格上涨10%，显著降低运营成本',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，将推动云服务商差异化竞争。专家建议，提前锁定长期合约。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，将推动云服务商差异化竞争。专家建议，提前锁定长期合约。...',
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
    publishedAt: '2026-08-04T15:01:00Z',
    viewCount: 2481
  },
  {
    id: '5',
    title: 'AI算力服务价格下调8%，推动技术创新',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-08-04T14:56:00Z',
    viewCount: 8782
  },
  {
    id: '6',
    title: '百度智能云发布新一代边缘计算节点',
    content: '百度智能云于2026-08-02发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，新增多项AI功能。公司表示，持续投入技术研发。业内专家认为，企业需优化算力使用策略。',
    summary: '百度智能云于2026-08-02发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，新增多项AI功能。公司表示，持续投入技术研发。业内专家认为，企业需优化...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-08-02T11:05:00Z',
    viewCount: 4537
  },
  {
    id: '7',
    title: '算力市场一期已建成，企业应优化算力使用策略',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-08-02T09:52:00Z',
    viewCount: 2639
  },
  {
    id: '8',
    title: '广东发布算力基础设施建设指南，提升产业竞争力',
    content: '据国家数据局报道，2026-08-01，工信部正式发布《算力基础设施建设指南》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将提升产业竞争力，预计到2026年底初见成效。',
    summary: '据国家数据局报道，2026-08-01，工信部正式发布《算力基础设施建设指南》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-08-01T10:37:00Z',
    viewCount: 8629
  },
  {
    id: '9',
    title: '华为云CDN实现秒级扩容，降低中小企业算力门槛',
    content: '华为云今日宣布，产品价格调整通知。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。',
    summary: '华为云今日宣布，产品价格调整通知。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-08-01T09:49:00Z',
    viewCount: 5560
  },
  {
    id: '10',
    title: '微软云与{partner}达成{cooperation}',
    content: '微软云于2026-07-31发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，企业需优化算力使用策略。',
    summary: '微软云于2026-07-31发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，企业需优化...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-07-31T18:33:00Z',
    viewCount: 5077
  },
  {
    id: '11',
    title: '华为云宣布对象存储涨价27%',
    content: '华为云于2026-07-30发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨价周期。',
    summary: '华为云于2026-07-30发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，标志着行业...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-07-30T16:08:00Z',
    viewCount: 4788
  },
  {
    id: '12',
    title: '京东云AI算力服务正式商用，支持智能调度',
    content: '京东云于2026-07-30发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，性能提升40%以上。公司表示，为保障服务质量。业内专家认为，有利于行业长期健康发展。',
    summary: '京东云于2026-07-30发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，性能提升40%以上。公司表示，为保障服务质量。业内专家认为，有利于行业长...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-07-30T11:46:00Z',
    viewCount: 8641
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
