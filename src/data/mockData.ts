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
    title: '算力市场一期已建成，关注国产替代方案',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-04-19T14:26:00Z',
    viewCount: 7333
  },
  {
    id: '2',
    title: '百度智能云对象存储正式商用，实现秒级扩容',
    content: '百度智能云于2026-04-19发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，将推动云服务商差异化竞争。',
    summary: '百度智能云于2026-04-19发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，将推动...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-04-19T10:57:00Z',
    viewCount: 3520
  },
  {
    id: '3',
    title: 'AWS容器服务正式商用，支持智能调度',
    content: 'AWS于2026-04-19发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，企业需优化算力使用策略。',
    summary: 'AWS于2026-04-19发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，企业...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-04-19T10:01:00Z',
    viewCount: 4366
  },
  {
    id: '4',
    title: '百度智能云发布新一代对象存储',
    content: '百度智能云于2026-04-18发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，将推动云服务商差异化竞争。',
    summary: '百度智能云于2026-04-18发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，将推动云服...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-04-18T13:06:00Z',
    viewCount: 6556
  },
  {
    id: '5',
    title: '阿里云IDC支持智能调度，促进区域协调发展',
    content: '阿里云宣布与合作伙伴达成战略合作，计划新建3个数据中心区域。该项目性能提升40%以上，预计2026年底前投产。此举将推动技术创新，标志着行业进入涨价周期。',
    summary: '阿里云宣布与合作伙伴达成战略合作，计划新建3个数据中心区域。该项目性能提升40%以上，预计2026年底前投产。此举将推动技术创新，标志着行业进入涨价周期。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-04-18T10:58:00Z',
    viewCount: 3010
  },
  {
    id: '6',
    title: 'AWS数据中心PUE降至1.15，达到行业领先水平',
    content: '随着双碳目标推进，模块化成为数据中心建设标准配置。2026-04-17，AWS发布边缘计算节点，提供全栈解决方案。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，模块化成为数据中心建设标准配置。2026-04-17，AWS发布边缘计算节点，提供全栈解决方案。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-04-17T18:34:00Z',
    viewCount: 4930
  },
  {
    id: '7',
    title: '腾讯云新建超大规模数据中心，投资30亿美元',
    content: '腾讯云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将推动技术创新，标志着行业进入涨价周期。',
    summary: '腾讯云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将推动技术创新，标志着行业进入涨价周期。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-04-17T10:59:00Z',
    viewCount: 8287
  },
  {
    id: '8',
    title: '京东云数据中心PUE降至1.15，刷新行业记录',
    content: '随着双碳目标推进，模块化成为数据中心建设标准配置。2026-04-16，京东云发布容器服务，提供全栈解决方案。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，模块化成为数据中心建设标准配置。2026-04-16，京东云发布容器服务，提供全栈解决方案。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-04-16T13:07:00Z',
    viewCount: 4880
  },
  {
    id: '9',
    title: '阿里云新建大型数据中心，投资100亿元人民币',
    content: '阿里云宣布服务全面升级，计划扩建现有智算中心。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将显著降低运营成本，将推动云服务商差异化竞争。',
    summary: '阿里云宣布服务全面升级，计划扩建现有智算中心。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将显著降低运营成本，将推动云服务商差异化竞争。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-04-16T11:34:00Z',
    viewCount: 3070
  },
  {
    id: '10',
    title: '浙江发布新型数据中心发展指导意见，显著降低运营成本',
    content: '据新华网报道，2026-04-16，网信办正式发布《新型数据中心发展指导意见》。该政策明确提出基本建成普惠算力服务体系，将重点推进算力网络协同发展。分析人士指出，此举将显著降低运营成本，预计行业将迎来新一轮发展机遇。',
    summary: '据新华网报道，2026-04-16，网信办正式发布《新型数据中心发展指导意见》。该政策明确提出基本建成普惠算力服务体系，将重点推进算力网络协同发展。分析人士指出...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-04-16T08:25:00Z',
    viewCount: 2005
  },
  {
    id: '11',
    title: '数据中心全栈自研技术集成AI推理能力',
    content: '随着双碳目标推进，全栈自研成为数据中心运维效率提升关键。2026-04-15，谷歌云发布边缘计算节点，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着双碳目标推进，全栈自研成为数据中心运维效率提升关键。2026-04-15，谷歌云发布边缘计算节点，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-04-15T18:17:00Z',
    viewCount: 5570
  },
  {
    id: '12',
    title: '算力产业市场竞争白热化，显著降低运营成本',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-04-14T11:56:00Z',
    viewCount: 8680
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
