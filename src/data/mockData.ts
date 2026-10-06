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
    content: '据新华网报道，2026-10-06，发改委正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士指出，此举将提升产业竞争力，预计到2026年底初见成效。',
    summary: '据新华网报道，2026-10-06，发改委正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-10-06T17:13:00Z',
    viewCount: 4235
  },
  {
    id: '2',
    title: '京东云CDN支持智能调度，推动行业数字化转型',
    content: '京东云今日宣布，新一代产品正式发布。新功能将支持智能调度，可推动行业数字化转型。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。',
    summary: '京东云今日宣布，新一代产品正式发布。新功能将支持智能调度，可推动行业数字化转型。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-10-06T16:56:00Z',
    viewCount: 6656
  },
  {
    id: '3',
    title: '国家数据局：到2028年算力规模超过300 EFLOPS',
    content: '据工信部官网报道，2026-10-06，国家数据局正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析人士指出，此举将提升产业竞争力，预计行业将迎来新一轮发展机遇。',
    summary: '据工信部官网报道，2026-10-06，国家数据局正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-10-06T16:16:00Z',
    viewCount: 2965
  },
  {
    id: '4',
    title: '算力市场正式开工，关注国产替代方案',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-10-06T16:00:00Z',
    viewCount: 8009
  },
  {
    id: '5',
    title: '华为云数据中心PUE降至1.25，达到行业领先水平',
    content: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-10-06，华为云发布CDN加速，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-10-06，华为云发布CDN加速，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-10-06T11:09:00Z',
    viewCount: 2683
  },
  {
    id: '6',
    title: '京东云容器服务正式商用，实现秒级扩容',
    content: '京东云于2026-10-05发布公告，宣布服务全面升级。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，企业需优化算力使用策略。',
    summary: '京东云于2026-10-05发布公告，宣布服务全面升级。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，企业需优化算力使用...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-10-05T15:25:00Z',
    viewCount: 3230
  },
  {
    id: '7',
    title: 'CDN加速价格上涨35%，显著降低运营成本',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-10-04T18:34:00Z',
    viewCount: 1861
  },
  {
    id: '8',
    title: '国家数据局：到2028年基本建成普惠算力服务体系',
    content: '据工信部官网报道，2026-10-03，工信部正式发布《算力基础设施建设指南》。该政策明确提出基本建成普惠算力服务体系，将重点推进算力网络协同发展。分析人士指出，此举将显著降低运营成本，预计未来三年将持续增长。',
    summary: '据工信部官网报道，2026-10-03，工信部正式发布《算力基础设施建设指南》。该政策明确提出基本建成普惠算力服务体系，将重点推进算力网络协同发展。分析人士指出...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-10-03T12:26:00Z',
    viewCount: 5176
  },
  {
    id: '9',
    title: '阿里云与{partner}达成{cooperation}',
    content: '阿里云于2026-10-02发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，新增多项AI功能。公司表示，为保障服务质量。业内专家认为，企业需优化算力使用策略。',
    summary: '阿里云于2026-10-02发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，新增多项AI功能。公司表示，为保障服务质量。业内专家认为，企业需优化算...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-10-02T16:59:00Z',
    viewCount: 5113
  },
  {
    id: '10',
    title: '算力租赁提供全栈解决方案，华为云上涨',
    content: '华为云宣布新一代产品正式发布，计划布局边缘计算节点。该项目覆盖全球主要区域，预计2026年底前投产。此举将显著降低运营成本，标志着行业进入涨价周期。',
    summary: '华为云宣布新一代产品正式发布，计划布局边缘计算节点。该项目覆盖全球主要区域，预计2026年底前投产。此举将显著降低运营成本，标志着行业进入涨价周期。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-10-01T08:15:00Z',
    viewCount: 3241
  },
  {
    id: '11',
    title: '算力产业成本压力传导，推动技术创新',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，标志着行业进入涨价周期。专家建议，企业应优化算力使用策略。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，标志着行业进入涨价周期。专家建议，企业应优化算力使用策略。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-09-29T12:20:00Z',
    viewCount: 3057
  },
  {
    id: '12',
    title: '百度智能云新建大型数据中心，投资50亿美元',
    content: '百度智能云宣布服务全面升级，计划扩建现有智算中心。该项目覆盖全球主要区域，预计分三期建设完成。此举将显著降低运营成本，标志着行业进入涨价周期。',
    summary: '百度智能云宣布服务全面升级，计划扩建现有智算中心。该项目覆盖全球主要区域，预计分三期建设完成。此举将显著降低运营成本，标志着行业进入涨价周期。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-09-29T11:44:00Z',
    viewCount: 3415
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
