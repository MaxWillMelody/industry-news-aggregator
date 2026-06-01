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
    title: '新政策支持IDC行业，推动行业数字化转型',
    content: '据国家数据局报道，2026-06-01，工信部正式发布《新型数据中心发展指导意见》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，此举将推动技术创新，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-06-01，工信部正式发布《新型数据中心发展指导意见》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-06-01T08:30:00Z',
    viewCount: 5572
  },
  {
    id: '2',
    title: '腾讯云CDN支持智能调度，促进区域协调发展',
    content: '腾讯云今日宣布，产品价格调整通知。新功能将支持智能调度，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计到2026年底初见成效。',
    summary: '腾讯云今日宣布，产品价格调整通知。新功能将支持智能调度，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计到2026年底初见成效。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-05-31T09:11:00Z',
    viewCount: 7093
  },
  {
    id: '3',
    title: '京东云发布新一代AI算力服务',
    content: '京东云于2026-05-30发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，企业需优化算力使用策略。',
    summary: '京东云于2026-05-30发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-05-30T17:33:00Z',
    viewCount: 8226
  },
  {
    id: '4',
    title: '京东云IDC支持智能调度，降低中小企业算力门槛',
    content: '京东云宣布产品价格调整通知，计划布局边缘计算节点。该项目价格上调5%-34%，预计未来两年逐步落地。此举将推动技术创新，标志着行业进入涨价周期。',
    summary: '京东云宣布产品价格调整通知，计划布局边缘计算节点。该项目价格上调5%-34%，预计未来两年逐步落地。此举将推动技术创新，标志着行业进入涨价周期。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-05-30T12:07:00Z',
    viewCount: 7582
  },
  {
    id: '5',
    title: '京东云宣布对象存储涨价15%',
    content: '京东云于2026-05-30发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，有利于行业长期健康发展。',
    summary: '京东云于2026-05-30发布公告，宣布服务全面升级。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，有利于行业长...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-05-30T10:41:00Z',
    viewCount: 3816
  },
  {
    id: '6',
    title: '上海发布云计算服务管理办法，推动技术创新',
    content: '据工信部官网报道，2026-05-30，国家数据局正式发布《云计算服务管理办法》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，此举将推动技术创新，预计未来三年将持续增长。',
    summary: '据工信部官网报道，2026-05-30，国家数据局正式发布《云计算服务管理办法》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-05-30T08:01:00Z',
    viewCount: 3370
  },
  {
    id: '7',
    title: '新政策支持云计算，推动行业数字化转型',
    content: '据国家数据局报道，2026-05-29，工信部正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进绿色数据中心建设。分析人士指出，此举将显著降低运营成本，预计到2026年底初见成效。',
    summary: '据国家数据局报道，2026-05-29，工信部正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进绿色数据中心建设。分析人士指出...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-05-29T18:25:00Z',
    viewCount: 7181
  },
  {
    id: '8',
    title: '阿里云新建中型数据中心，投资50亿美元',
    content: '阿里云宣布新一代产品正式发布，计划扩建现有智算中心。该项目覆盖全球主要区域，预计分三期建设完成。此举将显著降低运营成本，将推动云服务商差异化竞争。',
    summary: '阿里云宣布新一代产品正式发布，计划扩建现有智算中心。该项目覆盖全球主要区域，预计分三期建设完成。此举将显著降低运营成本，将推动云服务商差异化竞争。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-05-29T12:47:00Z',
    viewCount: 5364
  },
  {
    id: '9',
    title: '对象存储价格上涨47%，推动技术创新',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，提前锁定长期合约。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，提前锁定长期合约。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-05-28T18:09:00Z',
    viewCount: 2079
  },
  {
    id: '10',
    title: '国家数据局：到2028年实现数据中心绿色化转型',
    content: '据国家数据局报道，2026-05-27，发改委正式发布《数据中心发展行动计划》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此举将推动技术创新，预计行业将迎来新一轮发展机遇。',
    summary: '据国家数据局报道，2026-05-27，发改委正式发布《数据中心发展行动计划》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-05-27T09:38:00Z',
    viewCount: 6944
  },
  {
    id: '11',
    title: '腾讯云CDN实现秒级扩容，推动行业数字化转型',
    content: '腾讯云今日宣布，产品价格调整通知。新功能将实现秒级扩容，可推动行业数字化转型。目前该服务已覆盖全球50+区域，预计行业将迎来新一轮发展机遇。',
    summary: '腾讯云今日宣布，产品价格调整通知。新功能将实现秒级扩容，可推动行业数字化转型。目前该服务已覆盖全球50+区域，预计行业将迎来新一轮发展机遇。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-05-26T08:16:00Z',
    viewCount: 3829
  },
  {
    id: '12',
    title: '谷歌云与{partner}达成{cooperation}',
    content: '谷歌云于2026-05-25发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，企业需优化算力使用策略。',
    summary: '谷歌云于2026-05-25发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，性能提升40%以上。公司表示，全球AI算力需求激增。业内专家认为，企...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-05-25T09:17:00Z',
    viewCount: 2312
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
