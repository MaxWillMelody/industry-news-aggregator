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
    title: '中型数据中心正式开工，采用模块化',
    content: '随着数字化转型加速，模块化成为数据中心散热主流方案。2026-09-06，华为云发布容器服务，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着数字化转型加速，模块化成为数据中心散热主流方案。2026-09-06，华为云发布容器服务，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-09-06T17:49:00Z',
    viewCount: 6448
  },
  {
    id: '2',
    title: '浙江发布云计算服务管理办法，提升产业竞争力',
    content: '据工信部官网报道，2026-09-05，网信办正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据工信部官网报道，2026-09-05，网信办正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-09-05T18:31:00Z',
    viewCount: 7414
  },
  {
    id: '3',
    title: '云计算成本压力传导，推动技术创新',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-09-05T16:09:00Z',
    viewCount: 6977
  },
  {
    id: '4',
    title: '国家数据局：到2028年算力规模超过300 EFLOPS',
    content: '据新华网报道，2026-09-05，发改委正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据新华网报道，2026-09-05，发改委正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士指...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-09-05T12:10:00Z',
    viewCount: 4740
  },
  {
    id: '5',
    title: '对象存储价格下调49%，推动技术创新',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-09-03T15:56:00Z',
    viewCount: 3280
  },
  {
    id: '6',
    title: '超大规模数据中心一期已建成，采用模块化',
    content: '随着数字化转型加速，模块化成为数据中心运维效率提升关键。2026-09-03，阿里云发布对象存储，实现秒级扩容。业内预计，到2026年底初见成效。',
    summary: '随着数字化转型加速，模块化成为数据中心运维效率提升关键。2026-09-03，阿里云发布对象存储，实现秒级扩容。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-09-03T11:33:00Z',
    viewCount: 8400
  },
  {
    id: '7',
    title: '边缘计算节点价格上涨39%，提升产业竞争力',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-09-03T09:42:00Z',
    viewCount: 2914
  },
  {
    id: '8',
    title: '国家数据局：到2028年实现数据中心绿色化转型',
    content: '据工信部官网报道，2026-09-02，工信部正式发布《数据中心发展行动计划》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，此举将推动技术创新，预计未来三年将持续增长。',
    summary: '据工信部官网报道，2026-09-02，工信部正式发布《数据中心发展行动计划》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-09-02T12:22:00Z',
    viewCount: 3398
  },
  {
    id: '9',
    title: '大型数据中心正式开工，采用模块化',
    content: '随着AI算力需求激增，模块化成为数据中心运维效率提升关键。2026-09-02，AWS发布容器服务，提供全栈解决方案。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着AI算力需求激增，模块化成为数据中心运维效率提升关键。2026-09-02，AWS发布容器服务，提供全栈解决方案。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-09-02T10:27:00Z',
    viewCount: 7684
  },
  {
    id: '10',
    title: '数据中心模块化技术支持智能调度',
    content: '随着双碳目标推进，模块化成为数据中心建设标准配置。2026-09-02，谷歌云发布容器服务，支持智能调度。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着双碳目标推进，模块化成为数据中心建设标准配置。2026-09-02，谷歌云发布容器服务，支持智能调度。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-09-02T09:29:00Z',
    viewCount: 6862
  },
  {
    id: '11',
    title: '对象存储价格波动36%，显著降低运营成本',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，企业应优化算力使用策略。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，企业应优化算力使用策略。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-08-31T18:55:00Z',
    viewCount: 5963
  },
  {
    id: '12',
    title: 'CDN加速价格波动46%，显著降低运营成本',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，企业应优化算力使用策略。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，企业应优化算力使用策略。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-08-30T17:08:00Z',
    viewCount: 2280
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
