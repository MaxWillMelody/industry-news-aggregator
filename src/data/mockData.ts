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
    title: '广东发布算力基础设施建设指南，显著降低运营成本',
    content: '据工信部官网报道，2026-10-21，工信部正式发布《算力基础设施建设指南》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士指出，此举将显著降低运营成本，预计行业将迎来新一轮发展机遇。',
    summary: '据工信部官网报道，2026-10-21，工信部正式发布《算力基础设施建设指南》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-10-21T16:34:00Z',
    viewCount: 5372
  },
  {
    id: '2',
    title: '数据中心全栈自研技术提供全栈解决方案',
    content: '随着双碳目标推进，全栈自研成为数据中心散热主流方案。2026-10-21，华为云发布容器服务，提供全栈解决方案。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，全栈自研成为数据中心散热主流方案。2026-10-21，华为云发布容器服务，提供全栈解决方案。业内预计，到2026年底初见成效。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-10-21T15:59:00Z',
    viewCount: 1700
  },
  {
    id: '3',
    title: '谷歌云与{partner}达成{cooperation}',
    content: '谷歌云于2026-10-21发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，新增多项AI功能。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨价周期。',
    summary: '谷歌云于2026-10-21发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，新增多项AI功能。公司表示，为保障服务质量。业内专家认为，标志着行业进入...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-10-21T15:11:00Z',
    viewCount: 7076
  },
  {
    id: '4',
    title: '阿里云新建大型数据中心，投资100亿元人民币',
    content: '阿里云宣布服务全面升级，计划扩建现有智算中心。该项目性能提升40%以上，预计未来两年逐步落地。此举将显著降低运营成本，有利于行业长期健康发展。',
    summary: '阿里云宣布服务全面升级，计划扩建现有智算中心。该项目性能提升40%以上，预计未来两年逐步落地。此举将显著降低运营成本，有利于行业长期健康发展。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-10-20T18:44:00Z',
    viewCount: 7601
  },
  {
    id: '5',
    title: '云计算成本压力传导，推动技术创新',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，提前锁定长期合约。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，提前锁定长期合约。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-10-20T16:31:00Z',
    viewCount: 1979
  },
  {
    id: '6',
    title: '数据中心市场竞争白热化，推动技术创新',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-10-20T09:14:00Z',
    viewCount: 3765
  },
  {
    id: '7',
    title: '数据中心液冷技术实现秒级扩容',
    content: '随着双碳目标推进，液冷成为数据中心建设标准配置。2026-10-19，腾讯云发布对象存储，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，液冷成为数据中心建设标准配置。2026-10-19，腾讯云发布对象存储，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-10-19T14:39:00Z',
    viewCount: 5338
  },
  {
    id: '8',
    title: '谷歌云IDC提供全栈解决方案，降低中小企业算力门槛',
    content: '谷歌云宣布服务全面升级，计划布局边缘计算节点。该项目性能提升40%以上，预计2026年底前投产。此举将显著降低运营成本，企业需优化算力使用策略。',
    summary: '谷歌云宣布服务全面升级，计划布局边缘计算节点。该项目性能提升40%以上，预计2026年底前投产。此举将显著降低运营成本，企业需优化算力使用策略。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-10-17T11:58:00Z',
    viewCount: 7759
  },
  {
    id: '9',
    title: '京东云IDC支持智能调度，降低中小企业算力门槛',
    content: '京东云宣布新一代产品正式发布，计划布局边缘计算节点。该项目覆盖全球主要区域，预计2026年底前投产。此举将显著降低运营成本，将推动云服务商差异化竞争。',
    summary: '京东云宣布新一代产品正式发布，计划布局边缘计算节点。该项目覆盖全球主要区域，预计2026年底前投产。此举将显著降低运营成本，将推动云服务商差异化竞争。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-10-16T10:31:00Z',
    viewCount: 2528
  },
  {
    id: '10',
    title: '算力市场进入试运营阶段，提前锁定长期合约',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，提前锁定长期合约。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，提前锁定长期合约。...',
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
    publishedAt: '2026-10-15T18:13:00Z',
    viewCount: 4301
  },
  {
    id: '11',
    title: '算力租赁提供全栈解决方案，阿里云上涨',
    content: '阿里云宣布产品价格调整通知，计划扩建现有智算中心。该项目新增多项AI功能，预计未来两年逐步落地。此举将显著降低运营成本，有利于行业长期健康发展。',
    summary: '阿里云宣布产品价格调整通知，计划扩建现有智算中心。该项目新增多项AI功能，预计未来两年逐步落地。此举将显著降低运营成本，有利于行业长期健康发展。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-10-14T14:03:00Z',
    viewCount: 6931
  },
  {
    id: '12',
    title: 'CDN加速价格波动13%，提升产业竞争力',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
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
    publishedAt: '2026-10-14T09:28:00Z',
    viewCount: 1726
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
