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
    title: 'AI算力服务价格下调48%，推动技术创新',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-10-31T10:36:00Z',
    viewCount: 6465
  },
  {
    id: '2',
    title: '新政策支持云计算，降低中小企业算力门槛',
    content: '据新华网报道，2026-10-30，发改委正式发布《云计算服务管理办法》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，此举将显著降低运营成本，预计未来三年将持续增长。',
    summary: '据新华网报道，2026-10-30，发改委正式发布《云计算服务管理办法》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，此举将...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-10-30T16:42:00Z',
    viewCount: 5518
  },
  {
    id: '3',
    title: '国家数据局：到2028年算力规模超过300 EFLOPS',
    content: '据工信部官网报道，2026-10-30，工信部正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将显著降低运营成本，预计到2026年底初见成效。',
    summary: '据工信部官网报道，2026-10-30，工信部正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-10-30T14:26:00Z',
    viewCount: 4847
  },
  {
    id: '4',
    title: '浙江发布数据中心发展行动计划，推动技术创新',
    content: '据国家数据局报道，2026-10-30，工信部正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进绿色数据中心建设。分析人士指出，此举将推动技术创新，预计行业将迎来新一轮发展机遇。',
    summary: '据国家数据局报道，2026-10-30，工信部正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进绿色数据中心建设。分析人士指出...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-10-30T09:50:00Z',
    viewCount: 6842
  },
  {
    id: '5',
    title: '微软云IDC集成AI推理能力，降低中小企业算力门槛',
    content: '微软云宣布产品价格调整通知，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计分三期建设完成。此举将提升产业竞争力，将推动云服务商差异化竞争。',
    summary: '微软云宣布产品价格调整通知，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计分三期建设完成。此举将提升产业竞争力，将推动云服务商差异化竞争。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-10-26T14:35:00Z',
    viewCount: 8894
  },
  {
    id: '6',
    title: '算力租赁实现秒级扩容，谷歌云波动',
    content: '谷歌云宣布产品价格调整通知，计划扩建现有智算中心。该项目覆盖全球主要区域，预计2026年底前投产。此举将提升产业竞争力，将推动云服务商差异化竞争。',
    summary: '谷歌云宣布产品价格调整通知，计划扩建现有智算中心。该项目覆盖全球主要区域，预计2026年底前投产。此举将提升产业竞争力，将推动云服务商差异化竞争。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-10-26T10:12:00Z',
    viewCount: 6615
  },
  {
    id: '7',
    title: '百度智能云宣布CDN下调，显著降低运营成本',
    content: '百度智能云今日宣布，服务全面升级。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。',
    summary: '百度智能云今日宣布，服务全面升级。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-10-26T09:11:00Z',
    viewCount: 6606
  },
  {
    id: '8',
    title: '算力租赁集成AI推理能力，AWS下调',
    content: 'AWS宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目性能提升40%以上，预计未来两年逐步落地。此举将显著降低运营成本，将推动云服务商差异化竞争。',
    summary: 'AWS宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目性能提升40%以上，预计未来两年逐步落地。此举将显著降低运营成本，将推动云服务商差异化竞争。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-10-25T18:06:00Z',
    viewCount: 8074
  },
  {
    id: '9',
    title: '中型数据中心一期已建成，采用模块化',
    content: '随着AI算力需求激增，模块化成为数据中心建设标准配置。2026-10-25，京东云发布CDN加速，支持智能调度。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，模块化成为数据中心建设标准配置。2026-10-25，京东云发布CDN加速，支持智能调度。业内预计，到2026年底初见成效。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-10-25T15:39:00Z',
    viewCount: 8054
  },
  {
    id: '10',
    title: '阿里云发布新一代CDN加速',
    content: '阿里云于2026-10-25发布公告，宣布服务全面升级。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，将推动云服务商差异化竞争。',
    summary: '阿里云于2026-10-25发布公告，宣布服务全面升级。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，将推动云服务商差异化...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-10-25T12:11:00Z',
    viewCount: 6331
  },
  {
    id: '11',
    title: '数据中心液冷技术实现秒级扩容',
    content: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-10-25，微软云发布容器服务，实现秒级扩容。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-10-25，微软云发布容器服务，实现秒级扩容。业内预计，到2026年底初见成效。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-10-25T11:53:00Z',
    viewCount: 2093
  },
  {
    id: '12',
    title: '百度智能云IDC支持智能调度，降低中小企业算力门槛',
    content: '百度智能云宣布与合作伙伴达成战略合作，计划新建3个数据中心区域。该项目性能提升40%以上，预计2026年底前投产。此举将提升产业竞争力，将推动云服务商差异化竞争。',
    summary: '百度智能云宣布与合作伙伴达成战略合作，计划新建3个数据中心区域。该项目性能提升40%以上，预计2026年底前投产。此举将提升产业竞争力，将推动云服务商差异化竞争...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-10-24T08:49:00Z',
    viewCount: 2860
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
