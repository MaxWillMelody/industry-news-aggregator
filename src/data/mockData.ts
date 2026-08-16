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
    title: '算力市场进入试运营阶段，提前锁定长期合约',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，有利于行业长期健康发展。专家建议，提前锁定长期合约。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，有利于行业长期健康发展。专家建议，提前锁定长期合约。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-08-14T18:49:00Z',
    viewCount: 5995
  },
  {
    id: '2',
    title: '上海发布新型数据中心发展指导意见，推动技术创新',
    content: '据新华网报道，2026-08-14，工信部正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将推动技术创新，预计到2026年底初见成效。',
    summary: '据新华网报道，2026-08-14，工信部正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-08-14T09:48:00Z',
    viewCount: 4593
  },
  {
    id: '3',
    title: '对象存储价格波动31%，提升产业竞争力',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-08-13T17:45:00Z',
    viewCount: 5073
  },
  {
    id: '4',
    title: '大型数据中心一期已建成，采用全栈自研',
    content: '随着双碳目标推进，全栈自研成为数据中心运维效率提升关键。2026-08-13，腾讯云发布CDN加速，集成AI推理能力。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，全栈自研成为数据中心运维效率提升关键。2026-08-13，腾讯云发布CDN加速，集成AI推理能力。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-08-13T15:11:00Z',
    viewCount: 2847
  },
  {
    id: '5',
    title: '国家数据局：到2028年实现数据中心绿色化转型',
    content: '据新华网报道，2026-08-12，发改委正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据新华网报道，2026-08-12，发改委正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此举...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-08-12T16:38:00Z',
    viewCount: 4801
  },
  {
    id: '6',
    title: '工信部发布算力基础设施建设指南，推动IDC行业发展',
    content: '据国家数据局报道，2026-08-11，工信部正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，此举将提升产业竞争力，预计到2026年底初见成效。',
    summary: '据国家数据局报道，2026-08-11，工信部正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-08-11T16:24:00Z',
    viewCount: 4923
  },
  {
    id: '7',
    title: '上海智算中心正式开工，超大规模投产',
    content: '华为云宣布新一代产品正式发布，计划布局边缘计算节点。该项目新增多项AI功能，预计2026年底前投产。此举将提升产业竞争力，标志着行业进入涨价周期。',
    summary: '华为云宣布新一代产品正式发布，计划布局边缘计算节点。该项目新增多项AI功能，预计2026年底前投产。此举将提升产业竞争力，标志着行业进入涨价周期。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-08-11T16:14:00Z',
    viewCount: 8798
  },
  {
    id: '8',
    title: '算力市场正式开工，提前锁定长期合约',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-08-10T14:32:00Z',
    viewCount: 8668
  },
  {
    id: '9',
    title: '算力市场正式开工，提前锁定长期合约',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-08-09T18:47:00Z',
    viewCount: 5135
  },
  {
    id: '10',
    title: 'IDC行业成本压力传导，推动技术创新',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-08-09T15:30:00Z',
    viewCount: 6390
  },
  {
    id: '11',
    title: '华为云数据中心PUE降至1.25，达到行业领先水平',
    content: '随着AI算力需求激增，AI智能运维成为数据中心运维效率提升关键。2026-08-09，华为云发布容器服务，实现秒级扩容。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，AI智能运维成为数据中心运维效率提升关键。2026-08-09，华为云发布容器服务，实现秒级扩容。业内预计，到2026年底初见成效。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-08-09T11:55:00Z',
    viewCount: 2925
  },
  {
    id: '12',
    title: '大型数据中心一期已建成，采用液冷',
    content: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-08-09，京东云发布容器服务，支持智能调度。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-08-09，京东云发布容器服务，支持智能调度。业内预计，到2026年底初见成效。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-08-09T09:27:00Z',
    viewCount: 2045
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
