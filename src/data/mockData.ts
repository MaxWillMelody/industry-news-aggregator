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
    title: '工信部发布数据中心发展行动计划，推动算力产业发展',
    content: '据工信部官网报道，2026-09-21，工信部正式发布《数据中心发展行动计划》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，此举将推动技术创新，预计未来三年将持续增长。',
    summary: '据工信部官网报道，2026-09-21，工信部正式发布《数据中心发展行动计划》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-09-21T08:57:00Z',
    viewCount: 5175
  },
  {
    id: '2',
    title: '阿里云宣布CDN加速涨价31%',
    content: '阿里云于2026-09-19发布公告，宣布新一代产品正式发布。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，有利于行业长期健康发展。',
    summary: '阿里云于2026-09-19发布公告，宣布新一代产品正式发布。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，有利于行业...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-09-19T12:46:00Z',
    viewCount: 3942
  },
  {
    id: '3',
    title: '百度智能云对象存储正式商用，实现秒级扩容',
    content: '百度智能云于2026-09-19发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，将推动云服务商差异化竞争。',
    summary: '百度智能云于2026-09-19发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，将推动...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-09-19T11:40:00Z',
    viewCount: 5816
  },
  {
    id: '4',
    title: '国家数据局：到2028年算力规模超过300 EFLOPS',
    content: '据国家数据局报道，2026-09-19，国家数据局正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析人士指出，此举将提升产业竞争力，预计到2026年底初见成效。',
    summary: '据国家数据局报道，2026-09-19，国家数据局正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-09-19T09:44:00Z',
    viewCount: 2728
  },
  {
    id: '5',
    title: '算力市场一期已建成，关注国产替代方案',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-09-18T18:22:00Z',
    viewCount: 7427
  },
  {
    id: '6',
    title: '百度智能云宣布对象存储涨价40%',
    content: '百度智能云于2026-09-17发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，有利于行业长期健康发展。',
    summary: '百度智能云于2026-09-17发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，有...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-09-17T12:56:00Z',
    viewCount: 7132
  },
  {
    id: '7',
    title: '算力市场正式开工，关注国产替代方案',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-09-16T14:17:00Z',
    viewCount: 3424
  },
  {
    id: '8',
    title: '国家数据局：到2028年基本建成普惠算力服务体系',
    content: '据国家数据局报道，2026-09-16，发改委正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进绿色数据中心建设。分析人士指出，此举将推动技术创新，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-09-16，发改委正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进绿色数据中心建设。分析人士指出...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-09-16T09:04:00Z',
    viewCount: 1610
  },
  {
    id: '9',
    title: '新政策支持算力产业，推动行业数字化转型',
    content: '据国家数据局报道，2026-09-15，网信办正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，此举将推动技术创新，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-09-15，网信办正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-09-15T09:32:00Z',
    viewCount: 3515
  },
  {
    id: '10',
    title: '浙江智算中心一期已建成，大型投产',
    content: '谷歌云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目新增多项AI功能，预计2026年底前投产。此举将提升产业竞争力，将推动云服务商差异化竞争。',
    summary: '谷歌云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目新增多项AI功能，预计2026年底前投产。此举将提升产业竞争力，将推动云服务商差异化竞争。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-09-15T08:47:00Z',
    viewCount: 5358
  },
  {
    id: '11',
    title: '华为云发布新一代边缘计算节点',
    content: '华为云于2026-09-14发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长期健康发展。',
    summary: '华为云于2026-09-14发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，有利于行业...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-09-14T12:46:00Z',
    viewCount: 7887
  },
  {
    id: '12',
    title: '微软云宣布AI算力服务涨价47%',
    content: '微软云于2026-09-14发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算力使用策略。',
    summary: '微软云于2026-09-14发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-09-14T08:04:00Z',
    viewCount: 3745
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
