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
    title: '阿里云IDC实现秒级扩容，降低中小企业算力门槛',
    content: '阿里云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将推动技术创新，企业需优化算力使用策略。',
    summary: '阿里云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将推动技术创新，企业需优化算力使用策略。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-11-05T08:35:00Z',
    viewCount: 7137
  },
  {
    id: '2',
    title: '算力租赁实现秒级扩容，谷歌云波动',
    content: '谷歌云宣布服务全面升级，计划新建3个数据中心区域。该项目价格上调5%-34%，预计2026年底前投产。此举将显著降低运营成本，有利于行业长期健康发展。',
    summary: '谷歌云宣布服务全面升级，计划新建3个数据中心区域。该项目价格上调5%-34%，预计2026年底前投产。此举将显著降低运营成本，有利于行业长期健康发展。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-11-05T08:26:00Z',
    viewCount: 4091
  },
  {
    id: '3',
    title: '边缘计算节点价格下调25%，提升产业竞争力',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-11-04T15:26:00Z',
    viewCount: 7770
  },
  {
    id: '4',
    title: '腾讯云与{partner}达成{cooperation}',
    content: '腾讯云于2026-11-03发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，企业需优化算力使用策略。',
    summary: '腾讯云于2026-11-03发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，企业需...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-11-03T15:33:00Z',
    viewCount: 7318
  },
  {
    id: '5',
    title: '数据中心成本压力传导，推动技术创新',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-11-03T08:41:00Z',
    viewCount: 8445
  },
  {
    id: '6',
    title: '京东云数据中心PUE降至1.25，获得绿色数据中心认证',
    content: '随着双碳目标推进，液冷成为数据中心运维效率提升关键。2026-11-02，京东云发布对象存储，集成AI推理能力。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，液冷成为数据中心运维效率提升关键。2026-11-02，京东云发布对象存储，集成AI推理能力。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-11-02T18:53:00Z',
    viewCount: 7515
  },
  {
    id: '7',
    title: '华为云CDN集成AI推理能力，促进区域协调发展',
    content: '华为云今日宣布，与合作伙伴达成战略合作。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。',
    summary: '华为云今日宣布，与合作伙伴达成战略合作。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-11-02T08:32:00Z',
    viewCount: 4046
  },
  {
    id: '8',
    title: '江苏智算中心正式开工，超大规模投产',
    content: '谷歌云宣布产品价格调整通知，计划布局边缘计算节点。该项目价格上调5%-34%，预计分三期建设完成。此举将显著降低运营成本，有利于行业长期健康发展。',
    summary: '谷歌云宣布产品价格调整通知，计划布局边缘计算节点。该项目价格上调5%-34%，预计分三期建设完成。此举将显著降低运营成本，有利于行业长期健康发展。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-11-02T08:21:00Z',
    viewCount: 6176
  },
  {
    id: '9',
    title: '中型数据中心一期已建成，采用模块化',
    content: '随着AI算力需求激增，模块化成为数据中心散热主流方案。2026-11-01，微软云发布AI算力服务，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，模块化成为数据中心散热主流方案。2026-11-01，微软云发布AI算力服务，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-11-01T11:06:00Z',
    viewCount: 2676
  },
  {
    id: '10',
    title: '谷歌云发布新一代边缘计算节点',
    content: '谷歌云于2026-10-30发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨价周期。',
    summary: '谷歌云于2026-10-30发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，标志着行业...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-10-30T18:44:00Z',
    viewCount: 2886
  },
  {
    id: '11',
    title: '算力市场正式开工，企业应优化算力使用策略',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，企业应优化算力使用策略。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，企业应优化算力使用策略。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-10-30T10:43:00Z',
    viewCount: 4213
  },
  {
    id: '12',
    title: '对象存储价格波动44%，显著降低运营成本',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-10-30T08:57:00Z',
    viewCount: 2541
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
