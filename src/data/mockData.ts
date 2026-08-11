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
    content: '据工信部官网报道，2026-08-11，发改委正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将推动技术创新，预计行业将迎来新一轮发展机遇。',
    summary: '据工信部官网报道，2026-08-11，发改委正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-08-11T12:11:00Z',
    viewCount: 6675
  },
  {
    id: '2',
    title: '新政策支持算力产业，推动行业数字化转型',
    content: '据工信部官网报道，2026-08-11，国家数据局正式发布《新型数据中心发展指导意见》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出，此举将推动技术创新，预计行业将迎来新一轮发展机遇。',
    summary: '据工信部官网报道，2026-08-11，国家数据局正式发布《新型数据中心发展指导意见》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-08-11T10:51:00Z',
    viewCount: 6242
  },
  {
    id: '3',
    title: '京东云边缘计算节点正式商用，实现秒级扩容',
    content: '京东云于2026-08-10发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，新增多项AI功能。公司表示，全球AI算力需求激增。业内专家认为，企业需优化算力使用策略。',
    summary: '京东云于2026-08-10发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，新增多项AI功能。公司表示，全球AI算力需求激增。业内专家认为，企业需优化...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-08-10T18:01:00Z',
    viewCount: 6283
  },
  {
    id: '4',
    title: 'IDC行业市场竞争白热化，提升产业竞争力',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。...',
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
    publishedAt: '2026-08-09T18:32:00Z',
    viewCount: 8603
  },
  {
    id: '5',
    title: '百度智能云宣布CDN加速涨价46%',
    content: '百度智能云于2026-08-09发布公告，宣布新一代产品正式发布。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，企业需优化算力使用策略。',
    summary: '百度智能云于2026-08-09发布公告，宣布新一代产品正式发布。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，企业需优...',
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
    publishedAt: '2026-08-09T12:55:00Z',
    viewCount: 8380
  },
  {
    id: '6',
    title: '数据中心模块化技术支持智能调度',
    content: '随着AI算力需求激增，模块化成为数据中心建设标准配置。2026-08-08，谷歌云发布容器服务，支持智能调度。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，模块化成为数据中心建设标准配置。2026-08-08，谷歌云发布容器服务，支持智能调度。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-08-08T17:55:00Z',
    viewCount: 4549
  },
  {
    id: '7',
    title: 'CDN加速价格上涨24%，推动技术创新',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-08-08T10:42:00Z',
    viewCount: 4908
  },
  {
    id: '8',
    title: '华为云宣布CDN下调，显著降低运营成本',
    content: '华为云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。',
    summary: '华为云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-08-05T16:00:00Z',
    viewCount: 4101
  },
  {
    id: '9',
    title: '新政策支持数据中心，降低中小企业算力门槛',
    content: '据国家数据局报道，2026-08-04，网信办正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进绿色数据中心建设。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-08-04，网信办正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进绿色数据中心建设。分析人士指出...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-08-04T15:18:00Z',
    viewCount: 7867
  },
  {
    id: '10',
    title: '华为云CDN实现秒级扩容，降低中小企业算力门槛',
    content: '华为云今日宣布，服务全面升级。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计到2026年底初见成效。',
    summary: '华为云今日宣布，服务全面升级。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计到2026年底初见成效。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-08-04T12:33:00Z',
    viewCount: 2621
  },
  {
    id: '11',
    title: '江苏智算中心一期已建成，大型投产',
    content: '腾讯云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目价格上调5%-34%，预计分三期建设完成。此举将推动技术创新，标志着行业进入涨价周期。',
    summary: '腾讯云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目价格上调5%-34%，预计分三期建设完成。此举将推动技术创新，标志着行业进入涨价周期。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-08-04T08:52:00Z',
    viewCount: 6358
  },
  {
    id: '12',
    title: '谷歌云宣布CDN加速涨价29%',
    content: '谷歌云于2026-08-04发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，标志着行业进入涨价周期。',
    summary: '谷歌云于2026-08-04发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，标志着行业...',
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
    publishedAt: '2026-08-04T08:07:00Z',
    viewCount: 7383
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
