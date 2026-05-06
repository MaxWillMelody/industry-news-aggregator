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
    title: '北京发布数据中心发展行动计划，提升产业竞争力',
    content: '据工信部官网报道，2026-05-06，发改委正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据工信部官网报道，2026-05-06，发改委正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-05-06T17:33:00Z',
    viewCount: 6276
  },
  {
    id: '2',
    title: '腾讯云IDC支持智能调度，降低中小企业算力门槛',
    content: '腾讯云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目价格上调5%-34%，预计分三期建设完成。此举将提升产业竞争力，将推动云服务商差异化竞争。',
    summary: '腾讯云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目价格上调5%-34%，预计分三期建设完成。此举将提升产业竞争力，将推动云服务商差异化竞争。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-05-05T16:33:00Z',
    viewCount: 3177
  },
  {
    id: '3',
    title: '算力租赁实现秒级扩容，谷歌云波动',
    content: '谷歌云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目覆盖全球主要区域，预计分三期建设完成。此举将推动技术创新，将推动云服务商差异化竞争。',
    summary: '谷歌云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目覆盖全球主要区域，预计分三期建设完成。此举将推动技术创新，将推动云服务商差异化竞争。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-05-05T13:06:00Z',
    viewCount: 6255
  },
  {
    id: '4',
    title: '阿里云容器服务正式商用，提供全栈解决方案',
    content: '阿里云于2026-05-05发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，有利于行业长期健康发展。',
    summary: '阿里云于2026-05-05发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，有利...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-05-05T09:57:00Z',
    viewCount: 8727
  },
  {
    id: '5',
    title: '对象存储价格波动42%，显著降低运营成本',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，标志着行业进入涨价周期。专家建议，企业应优化算力使用策略。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，标志着行业进入涨价周期。专家建议，企业应优化算力使用策略。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-05-04T16:39:00Z',
    viewCount: 8626
  },
  {
    id: '6',
    title: '腾讯云新建中型数据中心，投资30亿美元',
    content: '腾讯云宣布服务全面升级，计划布局边缘计算节点。该项目新增多项AI功能，预计2026年底前投产。此举将提升产业竞争力，标志着行业进入涨价周期。',
    summary: '腾讯云宣布服务全面升级，计划布局边缘计算节点。该项目新增多项AI功能，预计2026年底前投产。此举将提升产业竞争力，标志着行业进入涨价周期。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-05-04T15:11:00Z',
    viewCount: 2451
  },
  {
    id: '7',
    title: '百度智能云边缘计算节点正式商用，提供全栈解决方案',
    content: '百度智能云于2026-05-03发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，全球AI算力需求激增。业内专家认为，将推动云服务商差异化竞争。',
    summary: '百度智能云于2026-05-03发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，全球AI算力需求激增。业内专家认为，将推...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-05-03T13:26:00Z',
    viewCount: 6620
  },
  {
    id: '8',
    title: '阿里云与{partner}达成{cooperation}',
    content: '阿里云于2026-05-03发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，企业需优化算力使用策略。',
    summary: '阿里云于2026-05-03发布公告，宣布产品价格调整通知。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，企业需优化算...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-05-03T12:52:00Z',
    viewCount: 2713
  },
  {
    id: '9',
    title: '微软云AI算力服务正式商用，实现秒级扩容',
    content: '微软云于2026-05-03发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算力使用策略。',
    summary: '微软云于2026-05-03发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算力...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-05-03T11:28:00Z',
    viewCount: 6182
  },
  {
    id: '10',
    title: '上海智算中心进入试运营阶段，超大规模投产',
    content: '谷歌云宣布产品价格调整通知，计划新建3个数据中心区域。该项目价格上调5%-34%，预计未来两年逐步落地。此举将提升产业竞争力，企业需优化算力使用策略。',
    summary: '谷歌云宣布产品价格调整通知，计划新建3个数据中心区域。该项目价格上调5%-34%，预计未来两年逐步落地。此举将提升产业竞争力，企业需优化算力使用策略。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-05-02T18:38:00Z',
    viewCount: 3195
  },
  {
    id: '11',
    title: '算力租赁支持智能调度，腾讯云下调',
    content: '腾讯云宣布服务全面升级，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计2026年底前投产。此举将推动技术创新，标志着行业进入涨价周期。',
    summary: '腾讯云宣布服务全面升级，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计2026年底前投产。此举将推动技术创新，标志着行业进入涨价周期。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-05-02T09:58:00Z',
    viewCount: 4223
  },
  {
    id: '12',
    title: '谷歌云宣布CDN加速涨价40%',
    content: '谷歌云于2026-04-29发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，有利于行业长期健康发展。',
    summary: '谷歌云于2026-04-29发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，有利...',
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
    publishedAt: '2026-04-29T10:47:00Z',
    viewCount: 3325
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
