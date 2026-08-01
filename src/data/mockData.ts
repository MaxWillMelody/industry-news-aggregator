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
    title: '中型数据中心进入试运营阶段，采用液冷',
    content: '随着双碳目标推进，液冷成为数据中心散热主流方案。2026-08-01，百度智能云发布AI算力服务，支持智能调度。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，液冷成为数据中心散热主流方案。2026-08-01，百度智能云发布AI算力服务，支持智能调度。业内预计，未来三年将持续增长。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-08-01T10:56:00Z',
    viewCount: 4673
  },
  {
    id: '2',
    title: '百度智能云宣布边缘计算节点涨价22%',
    content: '百度智能云于2026-07-31发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，核心硬件成本上涨。业内专家认为，将推动云服务商差异化竞争。',
    summary: '百度智能云于2026-07-31发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，核心硬件成本上涨。业内专家认为，将推动云...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-07-31T10:49:00Z',
    viewCount: 5179
  },
  {
    id: '3',
    title: 'AWSIDC支持智能调度，降低中小企业算力门槛',
    content: 'AWS宣布产品价格调整通知，计划布局边缘计算节点。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将推动技术创新，企业需优化算力使用策略。',
    summary: 'AWS宣布产品价格调整通知，计划布局边缘计算节点。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将推动技术创新，企业需优化算力使用策略。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-07-30T16:22:00Z',
    viewCount: 4269
  },
  {
    id: '4',
    title: '阿里云与{partner}达成{cooperation}',
    content: '阿里云于2026-07-28发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，将推动云服务商差异化竞争。',
    summary: '阿里云于2026-07-28发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，将推动云服务...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-07-28T12:37:00Z',
    viewCount: 7079
  },
  {
    id: '5',
    title: '边缘计算实现秒级扩容，AWS布局{market}',
    content: 'AWS今日宣布，新一代产品正式发布。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖全国主要城市，预计未来三年将持续增长。',
    summary: 'AWS今日宣布，新一代产品正式发布。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖全国主要城市，预计未来三年将持续增长。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-07-28T11:30:00Z',
    viewCount: 1671
  },
  {
    id: '6',
    title: '京东云宣布容器服务涨价40%',
    content: '京东云于2026-07-28发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，将推动云服务商差异化竞争。',
    summary: '京东云于2026-07-28发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，将推动...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-07-28T08:07:00Z',
    viewCount: 7760
  },
  {
    id: '7',
    title: '上海智算中心进入试运营阶段，中型投产',
    content: '华为云宣布新一代产品正式发布，计划扩建现有智算中心。该项目价格上调5%-34%，预计分三期建设完成。此举将显著降低运营成本，企业需优化算力使用策略。',
    summary: '华为云宣布新一代产品正式发布，计划扩建现有智算中心。该项目价格上调5%-34%，预计分三期建设完成。此举将显著降低运营成本，企业需优化算力使用策略。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-07-27T14:47:00Z',
    viewCount: 8571
  },
  {
    id: '8',
    title: 'AWS新建超大规模数据中心，投资50亿美元',
    content: 'AWS宣布服务全面升级，计划扩建现有智算中心。该项目新增多项AI功能，预计未来两年逐步落地。此举将显著降低运营成本，将推动云服务商差异化竞争。',
    summary: 'AWS宣布服务全面升级，计划扩建现有智算中心。该项目新增多项AI功能，预计未来两年逐步落地。此举将显著降低运营成本，将推动云服务商差异化竞争。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-07-27T13:25:00Z',
    viewCount: 4393
  },
  {
    id: '9',
    title: '阿里云CDN集成AI推理能力，促进区域协调发展',
    content: '阿里云今日宣布，服务全面升级。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计未来三年将持续增长。',
    summary: '阿里云今日宣布，服务全面升级。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计未来三年将持续增长。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-07-27T10:27:00Z',
    viewCount: 5385
  },
  {
    id: '10',
    title: '算力租赁实现秒级扩容，百度智能云波动',
    content: '百度智能云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将提升产业竞争力，有利于行业长期健康发展。',
    summary: '百度智能云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将提升产业竞争力，有利于行业长期健康发展。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-07-26T12:12:00Z',
    viewCount: 5541
  },
  {
    id: '11',
    title: '国家数据局：到2028年基本建成普惠算力服务体系',
    content: '据新华网报道，2026-07-25，工信部正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进算力网络协同发展。分析人士指出，此举将推动技术创新，预计行业将迎来新一轮发展机遇。',
    summary: '据新华网报道，2026-07-25，工信部正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进算力网络协同发展。分析人士指出，此...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-07-25T18:29:00Z',
    viewCount: 7608
  },
  {
    id: '12',
    title: '边缘计算支持智能调度，阿里云布局{market}',
    content: '阿里云今日宣布，产品价格调整通知。新功能将支持智能调度，可推动行业数字化转型。目前该服务已覆盖全国主要城市，预计行业将迎来新一轮发展机遇。',
    summary: '阿里云今日宣布，产品价格调整通知。新功能将支持智能调度，可推动行业数字化转型。目前该服务已覆盖全国主要城市，预计行业将迎来新一轮发展机遇。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-07-25T09:49:00Z',
    viewCount: 7261
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
