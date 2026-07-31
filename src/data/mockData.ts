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
    title: '浙江发布新型数据中心发展指导意见，提升产业竞争力',
    content: '据工信部官网报道，2026-07-30，发改委正式发布《新型数据中心发展指导意见》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据工信部官网报道，2026-07-30，发改委正式发布《新型数据中心发展指导意见》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-07-30T13:31:00Z',
    viewCount: 4271
  },
  {
    id: '2',
    title: '阿里云IDC实现秒级扩容，推动行业数字化转型',
    content: '阿里云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目价格上调5%-34%，预计分三期建设完成。此举将提升产业竞争力，企业需优化算力使用策略。',
    summary: '阿里云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目价格上调5%-34%，预计分三期建设完成。此举将提升产业竞争力，企业需优化算力使用策略。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-07-29T17:56:00Z',
    viewCount: 2993
  },
  {
    id: '3',
    title: '新政策支持算力产业，降低中小企业算力门槛',
    content: '据国家数据局报道，2026-07-29，网信办正式发布《数据中心发展行动计划》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-07-29，网信办正式发布《数据中心发展行动计划》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-07-29T11:30:00Z',
    viewCount: 1527
  },
  {
    id: '4',
    title: '谷歌云与{partner}达成{cooperation}',
    content: '谷歌云于2026-07-28发布公告，宣布服务全面升级。此次调整涉及网络加速产品，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，将推动云服务商差异化竞争。',
    summary: '谷歌云于2026-07-28发布公告，宣布服务全面升级。此次调整涉及网络加速产品，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，将推动云服务商差...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-07-28T12:50:00Z',
    viewCount: 7670
  },
  {
    id: '5',
    title: '数据中心液冷技术提供全栈解决方案',
    content: '随着数字化转型加速，液冷成为数据中心散热主流方案。2026-07-28，阿里云发布边缘计算节点，提供全栈解决方案。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着数字化转型加速，液冷成为数据中心散热主流方案。2026-07-28，阿里云发布边缘计算节点，提供全栈解决方案。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-07-28T09:11:00Z',
    viewCount: 3648
  },
  {
    id: '6',
    title: '边缘计算支持智能调度，微软云布局{market}',
    content: '微软云今日宣布，新一代产品正式发布。新功能将支持智能调度，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。',
    summary: '微软云今日宣布，新一代产品正式发布。新功能将支持智能调度，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-07-28T08:51:00Z',
    viewCount: 6031
  },
  {
    id: '7',
    title: 'AWS宣布CDN下调，显著降低运营成本',
    content: 'AWS今日宣布，与合作伙伴达成战略合作。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖一带一路沿线国家，预计到2026年底初见成效。',
    summary: 'AWS今日宣布，与合作伙伴达成战略合作。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖一带一路沿线国家，预计到2026年底初见成效。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-07-27T17:25:00Z',
    viewCount: 1769
  },
  {
    id: '8',
    title: '算力产业成本压力传导，提升产业竞争力',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-07-27T16:38:00Z',
    viewCount: 4355
  },
  {
    id: '9',
    title: '算力产业市场竞争白热化，提升产业竞争力',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-07-25T14:54:00Z',
    viewCount: 4397
  },
  {
    id: '10',
    title: '中型数据中心正式开工，采用液冷',
    content: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-07-24，阿里云发布边缘计算节点，集成AI推理能力。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-07-24，阿里云发布边缘计算节点，集成AI推理能力。业内预计，未来三年将持续增长。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-07-24T17:42:00Z',
    viewCount: 3384
  },
  {
    id: '11',
    title: '超大规模数据中心一期已建成，采用模块化',
    content: '随着双碳目标推进，模块化成为数据中心建设标准配置。2026-07-24，微软云发布CDN加速，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着双碳目标推进，模块化成为数据中心建设标准配置。2026-07-24，微软云发布CDN加速，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-07-24T17:00:00Z',
    viewCount: 1748
  },
  {
    id: '12',
    title: 'AWS发布新一代容器服务',
    content: 'AWS于2026-07-24发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，将推动云服务商差异化竞争。',
    summary: 'AWS于2026-07-24发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，将推动云服务...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-07-24T13:36:00Z',
    viewCount: 3879
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
