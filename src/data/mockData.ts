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
    title: '华为云AI算力服务正式商用，支持智能调度',
    content: '华为云于2026-09-01发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，企业需优化算力使用策略。',
    summary: '华为云于2026-09-01发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，企业...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-09-01T10:28:00Z',
    viewCount: 1541
  },
  {
    id: '2',
    title: '新政策支持云计算，推动行业数字化转型',
    content: '据新华网报道，2026-08-31，工信部正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此举将显著降低运营成本，预计行业将迎来新一轮发展机遇。',
    summary: '据新华网报道，2026-08-31，工信部正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此举...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-08-31T18:13:00Z',
    viewCount: 6837
  },
  {
    id: '3',
    title: '华为云IDC支持智能调度，推动行业数字化转型',
    content: '华为云宣布产品价格调整通知，计划新建3个数据中心区域。该项目价格上调5%-34%，预计分三期建设完成。此举将推动技术创新，标志着行业进入涨价周期。',
    summary: '华为云宣布产品价格调整通知，计划新建3个数据中心区域。该项目价格上调5%-34%，预计分三期建设完成。此举将推动技术创新，标志着行业进入涨价周期。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-08-31T12:37:00Z',
    viewCount: 5521
  },
  {
    id: '4',
    title: '数据中心全栈自研技术实现秒级扩容',
    content: '随着双碳目标推进，全栈自研成为数据中心散热主流方案。2026-08-30，AWS发布AI算力服务，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着双碳目标推进，全栈自研成为数据中心散热主流方案。2026-08-30，AWS发布AI算力服务，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-08-30T14:05:00Z',
    viewCount: 6566
  },
  {
    id: '5',
    title: '数据中心全栈自研技术集成AI推理能力',
    content: '随着双碳目标推进，全栈自研成为数据中心散热主流方案。2026-08-29，微软云发布边缘计算节点，集成AI推理能力。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，全栈自研成为数据中心散热主流方案。2026-08-29，微软云发布边缘计算节点，集成AI推理能力。业内预计，未来三年将持续增长。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-08-29T11:32:00Z',
    viewCount: 7532
  },
  {
    id: '6',
    title: '数据中心模块化技术实现秒级扩容',
    content: '随着双碳目标推进，模块化成为数据中心散热主流方案。2026-08-29，京东云发布边缘计算节点，实现秒级扩容。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，模块化成为数据中心散热主流方案。2026-08-29，京东云发布边缘计算节点，实现秒级扩容。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-08-29T09:07:00Z',
    viewCount: 2743
  },
  {
    id: '7',
    title: '阿里云发布新一代AI算力服务',
    content: '阿里云于2026-08-28发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，有利于行业长期健康发展。',
    summary: '阿里云于2026-08-28发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，有利于行业长期健...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-08-28T15:42:00Z',
    viewCount: 3611
  },
  {
    id: '8',
    title: '对象存储价格上涨19%，推动技术创新',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-08-28T09:01:00Z',
    viewCount: 4792
  },
  {
    id: '9',
    title: '边缘计算支持智能调度，微软云布局{market}',
    content: '微软云今日宣布，产品价格调整通知。新功能将支持智能调度，可降低中小企业算力门槛。目前该服务已覆盖全国主要城市，预计未来三年将持续增长。',
    summary: '微软云今日宣布，产品价格调整通知。新功能将支持智能调度，可降低中小企业算力门槛。目前该服务已覆盖全国主要城市，预计未来三年将持续增长。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-08-27T14:08:00Z',
    viewCount: 2413
  },
  {
    id: '10',
    title: '算力市场一期已建成，提前锁定长期合约',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-08-27T10:59:00Z',
    viewCount: 3833
  },
  {
    id: '11',
    title: 'AI算力服务价格上涨37%，显著降低运营成本',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-08-27T10:19:00Z',
    viewCount: 6456
  },
  {
    id: '12',
    title: '百度智能云CDN加速正式商用，集成AI推理能力',
    content: '百度智能云于2026-08-25发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，企业需优化算力使用策略。',
    summary: '百度智能云于2026-08-25发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，企业...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-08-25T12:17:00Z',
    viewCount: 8683
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
