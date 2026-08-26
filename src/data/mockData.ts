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
    title: '谷歌云数据中心PUE降至1.25，刷新行业记录',
    content: '随着数字化转型加速，液冷成为数据中心散热主流方案。2026-08-26，谷歌云发布CDN加速，集成AI推理能力。业内预计，到2026年底初见成效。',
    summary: '随着数字化转型加速，液冷成为数据中心散热主流方案。2026-08-26，谷歌云发布CDN加速，集成AI推理能力。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-08-26T18:36:00Z',
    viewCount: 7194
  },
  {
    id: '2',
    title: '阿里云CDN集成AI推理能力，推动行业数字化转型',
    content: '阿里云今日宣布，新一代产品正式发布。新功能将集成AI推理能力，可推动行业数字化转型。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。',
    summary: '阿里云今日宣布，新一代产品正式发布。新功能将集成AI推理能力，可推动行业数字化转型。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-08-24T14:16:00Z',
    viewCount: 3060
  },
  {
    id: '3',
    title: '京东云发布新一代对象存储',
    content: '京东云于2026-08-24发布公告，宣布服务全面升级。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，标志着行业进入涨价周期。',
    summary: '京东云于2026-08-24发布公告，宣布服务全面升级。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，标志着行业进入涨价...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-08-24T11:55:00Z',
    viewCount: 8524
  },
  {
    id: '4',
    title: '微软云与{partner}达成{cooperation}',
    content: '微软云于2026-08-23发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，将推动云服务商差异化竞争。',
    summary: '微软云于2026-08-23发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，将...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-08-23T17:05:00Z',
    viewCount: 7079
  },
  {
    id: '5',
    title: '腾讯云宣布CDN下调，推动技术创新',
    content: '腾讯云今日宣布，服务全面升级。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计未来三年将持续增长。',
    summary: '腾讯云今日宣布，服务全面升级。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计未来三年将持续增长。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-08-23T12:44:00Z',
    viewCount: 2686
  },
  {
    id: '6',
    title: '谷歌云与{partner}达成{cooperation}',
    content: '谷歌云于2026-08-22发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算力使用策略。',
    summary: '谷歌云于2026-08-22发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-08-22T12:47:00Z',
    viewCount: 3389
  },
  {
    id: '7',
    title: '广东发布新型数据中心发展指导意见，显著降低运营成本',
    content: '据新华网报道，2026-08-21，工信部正式发布《新型数据中心发展指导意见》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此举将显著降低运营成本，预计行业将迎来新一轮发展机遇。',
    summary: '据新华网报道，2026-08-21，工信部正式发布《新型数据中心发展指导意见》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-08-21T18:28:00Z',
    viewCount: 8087
  },
  {
    id: '8',
    title: '超大规模数据中心正式开工，采用全栈自研',
    content: '随着AI算力需求激增，全栈自研成为数据中心运维效率提升关键。2026-08-21，阿里云发布AI算力服务，支持智能调度。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，全栈自研成为数据中心运维效率提升关键。2026-08-21，阿里云发布AI算力服务，支持智能调度。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-08-21T15:02:00Z',
    viewCount: 2456
  },
  {
    id: '9',
    title: '大型数据中心进入试运营阶段，采用AI智能运维',
    content: '随着AI算力需求激增，AI智能运维成为数据中心建设标准配置。2026-08-21，腾讯云发布容器服务，实现秒级扩容。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，AI智能运维成为数据中心建设标准配置。2026-08-21，腾讯云发布容器服务，实现秒级扩容。业内预计，到2026年底初见成效。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-08-21T13:50:00Z',
    viewCount: 5561
  },
  {
    id: '10',
    title: '算力市场进入试运营阶段，关注国产替代方案',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-08-21T13:06:00Z',
    viewCount: 2283
  },
  {
    id: '11',
    title: '京东云CDN加速正式商用，实现秒级扩容',
    content: '京东云于2026-08-21发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，企业需优化算力使用策略。',
    summary: '京东云于2026-08-21发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，企业需优...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-08-21T12:45:00Z',
    viewCount: 4206
  },
  {
    id: '12',
    title: '广东发布新型数据中心发展指导意见，推动技术创新',
    content: '据新华网报道，2026-08-19，发改委正式发布《新型数据中心发展指导意见》。该政策明确提出基本建成普惠算力服务体系，将重点推进绿色数据中心建设。分析人士指出，此举将推动技术创新，预计未来三年将持续增长。',
    summary: '据新华网报道，2026-08-19，发改委正式发布《新型数据中心发展指导意见》。该政策明确提出基本建成普惠算力服务体系，将重点推进绿色数据中心建设。分析人士指出...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-08-19T08:28:00Z',
    viewCount: 3874
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
