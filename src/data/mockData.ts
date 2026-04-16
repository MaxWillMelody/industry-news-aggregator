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
    title: '阿里云新建大型数据中心，投资30亿美元',
    content: '阿里云宣布与合作伙伴达成战略合作，计划新建3个数据中心区域。该项目价格上调5%-34%，预计未来两年逐步落地。此举将提升产业竞争力，企业需优化算力使用策略。',
    summary: '阿里云宣布与合作伙伴达成战略合作，计划新建3个数据中心区域。该项目价格上调5%-34%，预计未来两年逐步落地。此举将提升产业竞争力，企业需优化算力使用策略。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-04-16T16:52:00Z',
    viewCount: 4370
  },
  {
    id: '2',
    title: '边缘计算支持智能调度，微软云布局{market}',
    content: '微软云今日宣布，新一代产品正式发布。新功能将支持智能调度，可降低中小企业算力门槛。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。',
    summary: '微软云今日宣布，新一代产品正式发布。新功能将支持智能调度，可降低中小企业算力门槛。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-04-16T13:55:00Z',
    viewCount: 3234
  },
  {
    id: '3',
    title: '百度智能云CDN提供全栈解决方案，推动行业数字化转型',
    content: '百度智能云今日宣布，与合作伙伴达成战略合作。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖亚太地区核心节点，预计到2026年底初见成效。',
    summary: '百度智能云今日宣布，与合作伙伴达成战略合作。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖亚太地区核心节点，预计到2026年底初见成效。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-04-15T17:58:00Z',
    viewCount: 5669
  },
  {
    id: '4',
    title: '阿里云AI算力服务正式商用，实现秒级扩容',
    content: '阿里云于2026-04-14发布公告，宣布服务全面升级。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，全球AI算力需求激增。业内专家认为，将推动云服务商差异化竞争。',
    summary: '阿里云于2026-04-14发布公告，宣布服务全面升级。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，全球AI算力需求激增。业内专家认为，将推动云服务...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-04-14T16:29:00Z',
    viewCount: 7888
  },
  {
    id: '5',
    title: '工信部发布数据中心发展行动计划，推动云计算发展',
    content: '据新华网报道，2026-04-14，工信部正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出，此举将提升产业竞争力，预计行业将迎来新一轮发展机遇。',
    summary: '据新华网报道，2026-04-14，工信部正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出，此...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-04-14T15:45:00Z',
    viewCount: 7419
  },
  {
    id: '6',
    title: '谷歌云对象存储正式商用，实现秒级扩容',
    content: '谷歌云于2026-04-14发布公告，宣布新一代产品正式发布。此次调整涉及全线AI算力产品，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，企业需优化算力使用策略。',
    summary: '谷歌云于2026-04-14发布公告，宣布新一代产品正式发布。此次调整涉及全线AI算力产品，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，企...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-04-14T15:41:00Z',
    viewCount: 5703
  },
  {
    id: '7',
    title: '百度智能云数据中心PUE降至1.25，达到行业领先水平',
    content: '随着AI算力需求激增，液冷成为数据中心建设标准配置。2026-04-14，百度智能云发布容器服务，提供全栈解决方案。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，液冷成为数据中心建设标准配置。2026-04-14，百度智能云发布容器服务，提供全栈解决方案。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-04-14T10:47:00Z',
    viewCount: 7054
  },
  {
    id: '8',
    title: '华为云与{partner}达成{cooperation}',
    content: '华为云于2026-04-13发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，标志着行业进入涨价周期。',
    summary: '华为云于2026-04-13发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，标志着行业进入涨...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-04-13T18:36:00Z',
    viewCount: 1880
  },
  {
    id: '9',
    title: '云计算供需错配加剧，显著降低运营成本',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，企业应优化算力使用策略。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，企业应优化算力使用策略。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-04-13T16:51:00Z',
    viewCount: 8341
  },
  {
    id: '10',
    title: '华为云CDN集成AI推理能力，降低中小企业算力门槛',
    content: '华为云今日宣布，新一代产品正式发布。新功能将集成AI推理能力，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。',
    summary: '华为云今日宣布，新一代产品正式发布。新功能将集成AI推理能力，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-04-13T09:05:00Z',
    viewCount: 5971
  },
  {
    id: '11',
    title: '算力租赁提供全栈解决方案，华为云上涨',
    content: '华为云宣布服务全面升级，计划扩建现有智算中心。该项目覆盖全球主要区域，预计分三期建设完成。此举将显著降低运营成本，将推动云服务商差异化竞争。',
    summary: '华为云宣布服务全面升级，计划扩建现有智算中心。该项目覆盖全球主要区域，预计分三期建设完成。此举将显著降低运营成本，将推动云服务商差异化竞争。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-04-12T09:09:00Z',
    viewCount: 5278
  },
  {
    id: '12',
    title: '微软云CDN加速正式商用，实现秒级扩容',
    content: '微软云于2026-04-11发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，新增多项AI功能。公司表示，全球AI算力需求激增。业内专家认为，将推动云服务商差异化竞争。',
    summary: '微软云于2026-04-11发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，新增多项AI功能。公司表示，全球AI算力需求激增。业内专家认为，将推动云服...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-04-11T09:41:00Z',
    viewCount: 1840
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
