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
    title: '超大规模数据中心一期已建成，采用液冷',
    content: '随着双碳目标推进，液冷成为数据中心散热主流方案。2026-06-25，百度智能云发布对象存储，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，液冷成为数据中心散热主流方案。2026-06-25，百度智能云发布对象存储，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-06-25T10:09:00Z',
    viewCount: 6845
  },
  {
    id: '2',
    title: '京东云宣布AI算力服务涨价40%',
    content: '京东云于2026-06-24发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算力使用策略。',
    summary: '京东云于2026-06-24发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，企业需...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-06-24T17:38:00Z',
    viewCount: 6799
  },
  {
    id: '3',
    title: '算力市场一期已建成，关注国产替代方案',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-06-24T17:03:00Z',
    viewCount: 3048
  },
  {
    id: '4',
    title: '广东发布算力基础设施建设指南，显著降低运营成本',
    content: '据新华网报道，2026-06-24，发改委正式发布《算力基础设施建设指南》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将显著降低运营成本，预计未来三年将持续增长。',
    summary: '据新华网报道，2026-06-24，发改委正式发布《算力基础设施建设指南》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-06-24T11:05:00Z',
    viewCount: 3808
  },
  {
    id: '5',
    title: '谷歌云与{partner}达成{cooperation}',
    content: '谷歌云于2026-06-23发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，将推动云服务商差异化竞争。',
    summary: '谷歌云于2026-06-23发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，将推动云...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-06-23T15:11:00Z',
    viewCount: 2970
  },
  {
    id: '6',
    title: '华为云边缘计算节点正式商用，集成AI推理能力',
    content: '华为云于2026-06-23发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，有利于行业长期健康发展。',
    summary: '华为云于2026-06-23发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，有...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-06-23T11:39:00Z',
    viewCount: 7593
  },
  {
    id: '7',
    title: '数据中心AI智能运维技术支持智能调度',
    content: '随着AI算力需求激增，AI智能运维成为数据中心运维效率提升关键。2026-06-23，阿里云发布CDN加速，支持智能调度。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，AI智能运维成为数据中心运维效率提升关键。2026-06-23，阿里云发布CDN加速，支持智能调度。业内预计，未来三年将持续增长。...',
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
    publishedAt: '2026-06-23T09:45:00Z',
    viewCount: 4645
  },
  {
    id: '8',
    title: '数据中心全栈自研技术提供全栈解决方案',
    content: '随着AI算力需求激增，全栈自研成为数据中心建设标准配置。2026-06-23，华为云发布边缘计算节点，提供全栈解决方案。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，全栈自研成为数据中心建设标准配置。2026-06-23，华为云发布边缘计算节点，提供全栈解决方案。业内预计，到2026年底初见成效。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-06-23T08:19:00Z',
    viewCount: 5748
  },
  {
    id: '9',
    title: '国家数据局：到2028年算力规模超过300 EFLOPS',
    content: '据新华网报道，2026-06-22，工信部正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析人士指出，此举将显著降低运营成本，预计到2026年底初见成效。',
    summary: '据新华网报道，2026-06-22，工信部正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-06-22T13:23:00Z',
    viewCount: 3500
  },
  {
    id: '10',
    title: '算力市场正式开工，关注国产替代方案',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-06-22T10:51:00Z',
    viewCount: 8494
  },
  {
    id: '11',
    title: '京东云数据中心PUE降至1.15，刷新行业记录',
    content: '随着数字化转型加速，全栈自研成为数据中心建设标准配置。2026-06-20，京东云发布对象存储，支持智能调度。业内预计，未来三年将持续增长。',
    summary: '随着数字化转型加速，全栈自研成为数据中心建设标准配置。2026-06-20，京东云发布对象存储，支持智能调度。业内预计，未来三年将持续增长。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-06-20T12:12:00Z',
    viewCount: 8428
  },
  {
    id: '12',
    title: '微软云与{partner}达成{cooperation}',
    content: '微软云于2026-06-19发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，企业需优化算力使用策略。',
    summary: '微软云于2026-06-19发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，企业需优化...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-06-19T17:00:00Z',
    viewCount: 4408
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
