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
    title: '边缘计算实现秒级扩容，腾讯云布局{market}',
    content: '腾讯云今日宣布，与合作伙伴达成战略合作。新功能将实现秒级扩容，可推动行业数字化转型。目前该服务已覆盖全国主要城市，预计行业将迎来新一轮发展机遇。',
    summary: '腾讯云今日宣布，与合作伙伴达成战略合作。新功能将实现秒级扩容，可推动行业数字化转型。目前该服务已覆盖全国主要城市，预计行业将迎来新一轮发展机遇。...',
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
    publishedAt: '2026-09-11T12:50:00Z',
    viewCount: 8818
  },
  {
    id: '2',
    title: '新政策支持IDC行业，促进区域协调发展',
    content: '据新华网报道，2026-09-10，国家数据局正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士指出，此举将推动技术创新，预计行业将迎来新一轮发展机遇。',
    summary: '据新华网报道，2026-09-10，国家数据局正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-09-10T14:09:00Z',
    viewCount: 3296
  },
  {
    id: '3',
    title: '数据中心液冷技术集成AI推理能力',
    content: '随着AI算力需求激增，液冷成为数据中心散热主流方案。2026-09-08，腾讯云发布CDN加速，集成AI推理能力。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，液冷成为数据中心散热主流方案。2026-09-08，腾讯云发布CDN加速，集成AI推理能力。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-09-08T18:52:00Z',
    viewCount: 2520
  },
  {
    id: '4',
    title: '华为云IDC支持智能调度，推动行业数字化转型',
    content: '华为云宣布服务全面升级，计划新建3个数据中心区域。该项目价格上调5%-34%，预计分三期建设完成。此举将提升产业竞争力，企业需优化算力使用策略。',
    summary: '华为云宣布服务全面升级，计划新建3个数据中心区域。该项目价格上调5%-34%，预计分三期建设完成。此举将提升产业竞争力，企业需优化算力使用策略。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-09-08T17:39:00Z',
    viewCount: 4607
  },
  {
    id: '5',
    title: '边缘计算节点价格上涨36%，推动技术创新',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-09-07T10:31:00Z',
    viewCount: 5291
  },
  {
    id: '6',
    title: '阿里云与{partner}达成{cooperation}',
    content: '阿里云于2026-09-06发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，企业需优化算力使用策略。',
    summary: '阿里云于2026-09-06发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，企业需优化...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-09-06T16:16:00Z',
    viewCount: 3798
  },
  {
    id: '7',
    title: '国家数据局：到2028年算力规模超过300 EFLOPS',
    content: '据工信部官网报道，2026-09-06，发改委正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将提升产业竞争力，预计到2026年底初见成效。',
    summary: '据工信部官网报道，2026-09-06，发改委正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-09-06T15:21:00Z',
    viewCount: 2050
  },
  {
    id: '8',
    title: '算力租赁提供全栈解决方案，阿里云波动',
    content: '阿里云宣布新一代产品正式发布，计划扩建现有智算中心。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将显著降低运营成本，企业需优化算力使用策略。',
    summary: '阿里云宣布新一代产品正式发布，计划扩建现有智算中心。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将显著降低运营成本，企业需优化算力使用策略。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-09-05T16:14:00Z',
    viewCount: 4075
  },
  {
    id: '9',
    title: 'IDC行业市场竞争白热化，显著降低运营成本',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-09-05T11:09:00Z',
    viewCount: 6249
  },
  {
    id: '10',
    title: '京东云与{partner}达成{cooperation}',
    content: '京东云于2026-09-04发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，标志着行业进入涨价周期。',
    summary: '京东云于2026-09-04发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，标志着行...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-09-04T14:13:00Z',
    viewCount: 6188
  },
  {
    id: '11',
    title: '阿里云IDC集成AI推理能力，推动行业数字化转型',
    content: '阿里云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计2026年底前投产。此举将显著降低运营成本，有利于行业长期健康发展。',
    summary: '阿里云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计2026年底前投产。此举将显著降低运营成本，有利于行业长期健康发展。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-09-04T09:04:00Z',
    viewCount: 6666
  },
  {
    id: '12',
    title: '微软云CDN提供全栈解决方案，推动行业数字化转型',
    content: '微软云今日宣布，服务全面升级。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。',
    summary: '微软云今日宣布，服务全面升级。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-09-04T08:03:00Z',
    viewCount: 2993
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
