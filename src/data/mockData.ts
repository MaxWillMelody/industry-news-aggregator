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
    title: '微软云新建大型数据中心，投资50亿美元',
    content: '微软云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计2026年底前投产。此举将提升产业竞争力，企业需优化算力使用策略。',
    summary: '微软云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计2026年底前投产。此举将提升产业竞争力，企业需优化算力使用策略。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-10-26T17:02:00Z',
    viewCount: 1697
  },
  {
    id: '2',
    title: '京东云宣布CDN上涨，显著降低运营成本',
    content: '京东云今日宣布，服务全面升级。新功能将支持智能调度，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计到2026年底初见成效。',
    summary: '京东云今日宣布，服务全面升级。新功能将支持智能调度，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计到2026年底初见成效。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-10-25T14:17:00Z',
    viewCount: 6923
  },
  {
    id: '3',
    title: '国家数据局：到2028年实现数据中心绿色化转型',
    content: '据国家数据局报道，2026-10-24，国家数据局正式发布《数据中心发展行动计划》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-10-24，国家数据局正式发布《数据中心发展行动计划》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-10-24T15:50:00Z',
    viewCount: 7949
  },
  {
    id: '4',
    title: '数据中心模块化技术集成AI推理能力',
    content: '随着双碳目标推进，模块化成为数据中心运维效率提升关键。2026-10-24，腾讯云发布AI算力服务，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着双碳目标推进，模块化成为数据中心运维效率提升关键。2026-10-24，腾讯云发布AI算力服务，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-10-24T14:38:00Z',
    viewCount: 4796
  },
  {
    id: '5',
    title: '新政策支持IDC行业，促进区域协调发展',
    content: '据新华网报道，2026-10-24，网信办正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出，此举将提升产业竞争力，预计行业将迎来新一轮发展机遇。',
    summary: '据新华网报道，2026-10-24，网信办正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出，此...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-10-24T08:33:00Z',
    viewCount: 5654
  },
  {
    id: '6',
    title: '算力产业市场竞争白热化，提升产业竞争力',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-10-23T14:14:00Z',
    viewCount: 2960
  },
  {
    id: '7',
    title: '新政策支持数据中心，推动行业数字化转型',
    content: '据新华网报道，2026-10-22，工信部正式发布《算力基础设施建设指南》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将显著降低运营成本，预计行业将迎来新一轮发展机遇。',
    summary: '据新华网报道，2026-10-22，工信部正式发布《算力基础设施建设指南》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-10-22T17:51:00Z',
    viewCount: 2000
  },
  {
    id: '8',
    title: '边缘计算提供全栈解决方案，阿里云布局{market}',
    content: '阿里云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。',
    summary: '阿里云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-10-22T12:45:00Z',
    viewCount: 8560
  },
  {
    id: '9',
    title: '华为云新建超大规模数据中心，投资30亿美元',
    content: '华为云宣布服务全面升级，计划布局边缘计算节点。该项目新增多项AI功能，预计分三期建设完成。此举将推动技术创新，将推动云服务商差异化竞争。',
    summary: '华为云宣布服务全面升级，计划布局边缘计算节点。该项目新增多项AI功能，预计分三期建设完成。此举将推动技术创新，将推动云服务商差异化竞争。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-10-21T09:16:00Z',
    viewCount: 2884
  },
  {
    id: '10',
    title: '算力产业供需错配加剧，显著降低运营成本',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-10-19T18:45:00Z',
    viewCount: 3908
  },
  {
    id: '11',
    title: 'IDC行业供需错配加剧，提升产业竞争力',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-10-19T17:32:00Z',
    viewCount: 7928
  },
  {
    id: '12',
    title: '谷歌云数据中心PUE降至1.2，获得绿色数据中心认证',
    content: '随着数字化转型加速，AI智能运维成为数据中心建设标准配置。2026-10-19，谷歌云发布CDN加速，集成AI推理能力。业内预计，未来三年将持续增长。',
    summary: '随着数字化转型加速，AI智能运维成为数据中心建设标准配置。2026-10-19，谷歌云发布CDN加速，集成AI推理能力。业内预计，未来三年将持续增长。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-10-19T14:01:00Z',
    viewCount: 1606
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
