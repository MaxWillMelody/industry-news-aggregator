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
    title: '微软云发布新一代对象存储',
    content: '微软云于2026-05-26发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，性能提升40%以上。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨价周期。',
    summary: '微软云于2026-05-26发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，性能提升40%以上。公司表示，为保障服务质量。业内专家认为，标志着行业进入...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-05-26T14:19:00Z',
    viewCount: 6047
  },
  {
    id: '2',
    title: '边缘计算集成AI推理能力，京东云布局{market}',
    content: '京东云今日宣布，与合作伙伴达成战略合作。新功能将集成AI推理能力，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。',
    summary: '京东云今日宣布，与合作伙伴达成战略合作。新功能将集成AI推理能力，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-05-26T10:49:00Z',
    viewCount: 6331
  },
  {
    id: '3',
    title: '阿里云CDN集成AI推理能力，促进区域协调发展',
    content: '阿里云今日宣布，服务全面升级。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。',
    summary: '阿里云今日宣布，服务全面升级。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-05-26T09:50:00Z',
    viewCount: 3338
  },
  {
    id: '4',
    title: '工信部发布数据中心发展行动计划，推动IDC行业发展',
    content: '据国家数据局报道，2026-05-24，发改委正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士指出，此举将显著降低运营成本，预计行业将迎来新一轮发展机遇。',
    summary: '据国家数据局报道，2026-05-24，发改委正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-05-24T14:03:00Z',
    viewCount: 8964
  },
  {
    id: '5',
    title: 'AWS宣布对象存储涨价19%',
    content: 'AWS于2026-05-24发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，将推动云服务商差异化竞争。',
    summary: 'AWS于2026-05-24发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，将推...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-05-24T08:08:00Z',
    viewCount: 7813
  },
  {
    id: '6',
    title: '京东云AI算力服务正式商用，支持智能调度',
    content: '京东云于2026-05-23发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，企业需优化算力使用策略。',
    summary: '京东云于2026-05-23发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，企业需...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-05-23T18:55:00Z',
    viewCount: 4636
  },
  {
    id: '7',
    title: '江苏发布新型数据中心发展指导意见，提升产业竞争力',
    content: '据国家数据局报道，2026-05-23，国家数据局正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-05-23，国家数据局正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-05-23T14:35:00Z',
    viewCount: 3073
  },
  {
    id: '8',
    title: '江苏智算中心进入试运营阶段，大型投产',
    content: '微软云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将提升产业竞争力，企业需优化算力使用策略。',
    summary: '微软云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将提升产业竞争力，企业需优化算力使用策略。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-05-23T13:52:00Z',
    viewCount: 5951
  },
  {
    id: '9',
    title: '国家数据局：到2028年算力规模超过300 EFLOPS',
    content: '据新华网报道，2026-05-23，国家数据局正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士指出，此举将提升产业竞争力，预计行业将迎来新一轮发展机遇。',
    summary: '据新华网报道，2026-05-23，国家数据局正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-05-23T11:15:00Z',
    viewCount: 4635
  },
  {
    id: '10',
    title: 'IDC行业供需错配加剧，提升产业竞争力',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-05-21T15:48:00Z',
    viewCount: 4257
  },
  {
    id: '11',
    title: '算力市场正式开工，关注国产替代方案',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-05-20T15:24:00Z',
    viewCount: 6281
  },
  {
    id: '12',
    title: '数据中心AI智能运维技术实现秒级扩容',
    content: '随着AI算力需求激增，AI智能运维成为数据中心运维效率提升关键。2026-05-20，微软云发布容器服务，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，AI智能运维成为数据中心运维效率提升关键。2026-05-20，微软云发布容器服务，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-05-20T10:24:00Z',
    viewCount: 6232
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
