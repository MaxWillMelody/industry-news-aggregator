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
    title: '数据中心液冷技术实现秒级扩容',
    content: '随着数字化转型加速，液冷成为数据中心建设标准配置。2026-09-16，华为云发布边缘计算节点，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着数字化转型加速，液冷成为数据中心建设标准配置。2026-09-16，华为云发布边缘计算节点，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-09-16T13:16:00Z',
    viewCount: 2799
  },
  {
    id: '2',
    title: '北京智算中心一期已建成，超大规模投产',
    content: '谷歌云宣布产品价格调整通知，计划布局边缘计算节点。该项目覆盖全球主要区域，预计2026年底前投产。此举将显著降低运营成本，企业需优化算力使用策略。',
    summary: '谷歌云宣布产品价格调整通知，计划布局边缘计算节点。该项目覆盖全球主要区域，预计2026年底前投产。此举将显著降低运营成本，企业需优化算力使用策略。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-09-15T18:33:00Z',
    viewCount: 7118
  },
  {
    id: '3',
    title: '微软云与{partner}达成{cooperation}',
    content: '微软云于2026-09-15发布公告，宣布新一代产品正式发布。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，标志着行业进入涨价周期。',
    summary: '微软云于2026-09-15发布公告，宣布新一代产品正式发布。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，标志着...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-09-15T16:11:00Z',
    viewCount: 5948
  },
  {
    id: '4',
    title: '谷歌云数据中心PUE降至1.15，刷新行业记录',
    content: '随着AI算力需求激增，模块化成为数据中心建设标准配置。2026-09-15，谷歌云发布边缘计算节点，提供全栈解决方案。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，模块化成为数据中心建设标准配置。2026-09-15，谷歌云发布边缘计算节点，提供全栈解决方案。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-09-15T14:28:00Z',
    viewCount: 3093
  },
  {
    id: '5',
    title: '工信部发布新型数据中心发展指导意见，推动数据中心发展',
    content: '据工信部官网报道，2026-09-13，网信办正式发布《新型数据中心发展指导意见》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，此举将显著降低运营成本，预计行业将迎来新一轮发展机遇。',
    summary: '据工信部官网报道，2026-09-13，网信办正式发布《新型数据中心发展指导意见》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-09-13T08:44:00Z',
    viewCount: 4648
  },
  {
    id: '6',
    title: 'AWS与{partner}达成{cooperation}',
    content: 'AWS于2026-09-12发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，企业需优化算力使用策略。',
    summary: 'AWS于2026-09-12发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，企业需优化算力...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-09-12T10:35:00Z',
    viewCount: 6861
  },
  {
    id: '7',
    title: '广东智算中心进入试运营阶段，中型投产',
    content: '谷歌云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目价格上调5%-34%，预计2026年底前投产。此举将显著降低运营成本，有利于行业长期健康发展。',
    summary: '谷歌云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目价格上调5%-34%，预计2026年底前投产。此举将显著降低运营成本，有利于行业长期健康发展。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-09-11T17:37:00Z',
    viewCount: 6249
  },
  {
    id: '8',
    title: '算力产业供需错配加剧，提升产业竞争力',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-09-11T10:59:00Z',
    viewCount: 8586
  },
  {
    id: '9',
    title: '京东云新建大型数据中心，投资100亿元人民币',
    content: '京东云宣布产品价格调整通知，计划新建3个数据中心区域。该项目新增多项AI功能，预计2026年底前投产。此举将提升产业竞争力，企业需优化算力使用策略。',
    summary: '京东云宣布产品价格调整通知，计划新建3个数据中心区域。该项目新增多项AI功能，预计2026年底前投产。此举将提升产业竞争力，企业需优化算力使用策略。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-09-10T11:29:00Z',
    viewCount: 2717
  },
  {
    id: '10',
    title: '算力租赁实现秒级扩容，AWS波动',
    content: 'AWS宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计分三期建设完成。此举将提升产业竞争力，将推动云服务商差异化竞争。',
    summary: 'AWS宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计分三期建设完成。此举将提升产业竞争力，将推动云服务商差异化竞争。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-09-10T09:04:00Z',
    viewCount: 2822
  },
  {
    id: '11',
    title: '腾讯云发布新一代CDN加速',
    content: '腾讯云于2026-09-09发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，企业需优化算力使用策略。',
    summary: '腾讯云于2026-09-09发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，企业需优化...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-09-09T16:35:00Z',
    viewCount: 7958
  },
  {
    id: '12',
    title: '百度智能云宣布CDN下调，推动技术创新',
    content: '百度智能云今日宣布，服务全面升级。新功能将集成AI推理能力，可降低中小企业算力门槛。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。',
    summary: '百度智能云今日宣布，服务全面升级。新功能将集成AI推理能力，可降低中小企业算力门槛。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-09-09T12:03:00Z',
    viewCount: 6377
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
