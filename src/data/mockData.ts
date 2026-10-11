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
    title: '微软云宣布对象存储涨价29%',
    content: '微软云于2026-10-10发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，将推动云服务商差异化竞争。',
    summary: '微软云于2026-10-10发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，将推动云...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-10-10T09:53:00Z',
    viewCount: 6790
  },
  {
    id: '2',
    title: '谷歌云发布新一代对象存储',
    content: '谷歌云于2026-10-10发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，有利于行业长期健康发展。',
    summary: '谷歌云于2026-10-10发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，有利于行...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-10-10T08:13:00Z',
    viewCount: 1558
  },
  {
    id: '3',
    title: '百度智能云对象存储正式商用，提供全栈解决方案',
    content: '百度智能云于2026-10-09发布公告，宣布服务全面升级。此次调整涉及核心云服务组件，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，标志着行业进入涨价周期。',
    summary: '百度智能云于2026-10-09发布公告，宣布服务全面升级。此次调整涉及核心云服务组件，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，标志...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-10-09T13:13:00Z',
    viewCount: 4995
  },
  {
    id: '4',
    title: '谷歌云数据中心PUE降至1.25，刷新行业记录',
    content: '随着数字化转型加速，全栈自研成为数据中心建设标准配置。2026-10-09，谷歌云发布对象存储，支持智能调度。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着数字化转型加速，全栈自研成为数据中心建设标准配置。2026-10-09，谷歌云发布对象存储，支持智能调度。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-10-09T12:34:00Z',
    viewCount: 7984
  },
  {
    id: '5',
    title: '工信部发布云计算服务管理办法，推动算力产业发展',
    content: '据国家数据局报道，2026-10-08，工信部正式发布《云计算服务管理办法》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，此举将提升产业竞争力，预计到2026年底初见成效。',
    summary: '据国家数据局报道，2026-10-08，工信部正式发布《云计算服务管理办法》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，此...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-10-08T12:12:00Z',
    viewCount: 8939
  },
  {
    id: '6',
    title: '算力市场正式开工，关注国产替代方案',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-10-07T14:13:00Z',
    viewCount: 8847
  },
  {
    id: '7',
    title: 'IDC行业成本压力传导，显著降低运营成本',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-10-07T13:53:00Z',
    viewCount: 7971
  },
  {
    id: '8',
    title: '新政策支持云计算，促进区域协调发展',
    content: '据工信部官网报道，2026-10-07，网信办正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析人士指出，此举将显著降低运营成本，预计到2026年底初见成效。',
    summary: '据工信部官网报道，2026-10-07，网信办正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。...',
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
    publishedAt: '2026-10-07T11:13:00Z',
    viewCount: 7591
  },
  {
    id: '9',
    title: '北京发布数据中心发展行动计划，推动技术创新',
    content: '据新华网报道，2026-10-06，工信部正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将推动技术创新，预计到2026年底初见成效。',
    summary: '据新华网报道，2026-10-06，工信部正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-10-06T12:56:00Z',
    viewCount: 8791
  },
  {
    id: '10',
    title: '北京发布算力基础设施建设指南，提升产业竞争力',
    content: '据国家数据局报道，2026-10-05，工信部正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-10-05，工信部正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，...',
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
    publishedAt: '2026-10-05T11:13:00Z',
    viewCount: 8359
  },
  {
    id: '11',
    title: '阿里云IDC集成AI推理能力，降低中小企业算力门槛',
    content: '阿里云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计2026年底前投产。此举将显著降低运营成本，将推动云服务商差异化竞争。',
    summary: '阿里云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计2026年底前投产。此举将显著降低运营成本，将推动云服务商差异化竞争。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-10-04T18:11:00Z',
    viewCount: 8677
  },
  {
    id: '12',
    title: '容器服务价格波动9%，推动技术创新',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，标志着行业进入涨价周期。专家建议，提前锁定长期合约。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-10-04T13:47:00Z',
    viewCount: 4756
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
