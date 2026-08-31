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
    title: '工信部发布新型数据中心发展指导意见，推动IDC行业发展',
    content: '据工信部官网报道，2026-08-31，网信办正式发布《新型数据中心发展指导意见》。该政策明确提出基本建成普惠算力服务体系，将重点推进算力网络协同发展。分析人士指出，此举将显著降低运营成本，预计到2026年底初见成效。',
    summary: '据工信部官网报道，2026-08-31，网信办正式发布《新型数据中心发展指导意见》。该政策明确提出基本建成普惠算力服务体系，将重点推进算力网络协同发展。分析人士...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-08-31T11:04:00Z',
    viewCount: 7497
  },
  {
    id: '2',
    title: '谷歌云发布新一代AI算力服务',
    content: '谷歌云于2026-08-31发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，标志着行业进入涨价周期。',
    summary: '谷歌云于2026-08-31发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，标志着行业进入...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-08-31T09:22:00Z',
    viewCount: 6009
  },
  {
    id: '3',
    title: '超大规模数据中心进入试运营阶段，采用全栈自研',
    content: '随着AI算力需求激增，全栈自研成为数据中心运维效率提升关键。2026-08-29，阿里云发布对象存储，集成AI推理能力。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，全栈自研成为数据中心运维效率提升关键。2026-08-29，阿里云发布对象存储，集成AI推理能力。业内预计，未来三年将持续增长。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-08-29T15:59:00Z',
    viewCount: 4211
  },
  {
    id: '4',
    title: '数据中心液冷技术实现秒级扩容',
    content: '随着数字化转型加速，液冷成为数据中心运维效率提升关键。2026-08-29，谷歌云发布AI算力服务，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着数字化转型加速，液冷成为数据中心运维效率提升关键。2026-08-29，谷歌云发布AI算力服务，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。...',
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
    publishedAt: '2026-08-29T13:38:00Z',
    viewCount: 8376
  },
  {
    id: '5',
    title: '对象存储价格下调46%，显著降低运营成本',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-08-29T10:30:00Z',
    viewCount: 8336
  },
  {
    id: '6',
    title: '京东云宣布CDN下调，提升产业竞争力',
    content: '京东云今日宣布，产品价格调整通知。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计到2026年底初见成效。',
    summary: '京东云今日宣布，产品价格调整通知。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计到2026年底初见成效。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-08-28T16:44:00Z',
    viewCount: 8218
  },
  {
    id: '7',
    title: '微软云宣布对象存储涨价30%',
    content: '微软云于2026-08-27发布公告，宣布新一代产品正式发布。此次调整涉及核心云服务组件，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算力使用策略。',
    summary: '微软云于2026-08-27发布公告，宣布新一代产品正式发布。此次调整涉及核心云服务组件，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，企业需优...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-08-27T15:58:00Z',
    viewCount: 7079
  },
  {
    id: '8',
    title: '阿里云新建大型数据中心，投资100亿元人民币',
    content: '阿里云宣布产品价格调整通知，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计分三期建设完成。此举将显著降低运营成本，有利于行业长期健康发展。',
    summary: '阿里云宣布产品价格调整通知，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计分三期建设完成。此举将显著降低运营成本，有利于行业长期健康发展。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-08-27T15:01:00Z',
    viewCount: 2611
  },
  {
    id: '9',
    title: '百度智能云容器服务正式商用，提供全栈解决方案',
    content: '百度智能云于2026-08-27发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算力使用策略。',
    summary: '百度智能云于2026-08-27发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，企业...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-08-27T10:20:00Z',
    viewCount: 8532
  },
  {
    id: '10',
    title: '谷歌云与{partner}达成{cooperation}',
    content: '谷歌云于2026-08-27发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，企业需优化算力使用策略。',
    summary: '谷歌云于2026-08-27发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，企业需优化算力使...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-08-27T09:41:00Z',
    viewCount: 7909
  },
  {
    id: '11',
    title: '数据中心供需错配加剧，推动技术创新',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-08-26T08:29:00Z',
    viewCount: 6770
  },
  {
    id: '12',
    title: '华为云与{partner}达成{cooperation}',
    content: '华为云于2026-08-24发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，企业需优化算力使用策略。',
    summary: '华为云于2026-08-24发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，企业需优...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-08-24T17:26:00Z',
    viewCount: 4105
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
