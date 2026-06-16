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
    title: '北京智算中心正式开工，中型投产',
    content: '华为云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计2026年底前投产。此举将推动技术创新，企业需优化算力使用策略。',
    summary: '华为云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计2026年底前投产。此举将推动技术创新，企业需优化算力使用策略。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-06-16T17:16:00Z',
    viewCount: 6361
  },
  {
    id: '2',
    title: '百度智能云与{partner}达成{cooperation}',
    content: '百度智能云于2026-06-16发布公告，宣布与合作伙伴达成战略合作。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算力使用策略。',
    summary: '百度智能云于2026-06-16发布公告，宣布与合作伙伴达成战略合作。此次调整涉及存储与计算服务，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-06-16T15:07:00Z',
    viewCount: 4807
  },
  {
    id: '3',
    title: '阿里云新建超大规模数据中心，投资100亿元人民币',
    content: '阿里云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计2026年底前投产。此举将显著降低运营成本，将推动云服务商差异化竞争。',
    summary: '阿里云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计2026年底前投产。此举将显著降低运营成本，将推动云服务商差异化竞争。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-06-15T16:05:00Z',
    viewCount: 8628
  },
  {
    id: '4',
    title: '大型数据中心正式开工，采用全栈自研',
    content: '随着双碳目标推进，全栈自研成为数据中心运维效率提升关键。2026-06-14，阿里云发布对象存储，提供全栈解决方案。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着双碳目标推进，全栈自研成为数据中心运维效率提升关键。2026-06-14，阿里云发布对象存储，提供全栈解决方案。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-06-14T13:47:00Z',
    viewCount: 8351
  },
  {
    id: '5',
    title: '边缘计算集成AI推理能力，谷歌云布局{market}',
    content: '谷歌云今日宣布，产品价格调整通知。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计行业将迎来新一轮发展机遇。',
    summary: '谷歌云今日宣布，产品价格调整通知。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计行业将迎来新一轮发展机遇。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-06-13T12:31:00Z',
    viewCount: 7528
  },
  {
    id: '6',
    title: '算力市场进入试运营阶段，关注国产替代方案',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-06-13T10:28:00Z',
    viewCount: 8424
  },
  {
    id: '7',
    title: '工信部发布云计算服务管理办法，推动数据中心发展',
    content: '据工信部官网报道，2026-06-12，发改委正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据工信部官网报道，2026-06-12，发改委正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-06-12T18:34:00Z',
    viewCount: 8966
  },
  {
    id: '8',
    title: '国家数据局：到2028年实现数据中心绿色化转型',
    content: '据工信部官网报道，2026-06-11，工信部正式发布《云计算服务管理办法》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，此举将显著降低运营成本，预计到2026年底初见成效。',
    summary: '据工信部官网报道，2026-06-11，工信部正式发布《云计算服务管理办法》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，此...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-06-11T18:52:00Z',
    viewCount: 2493
  },
  {
    id: '9',
    title: '阿里云宣布AI算力服务涨价16%',
    content: '阿里云于2026-06-11发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，将推动云服务商差异化竞争。',
    summary: '阿里云于2026-06-11发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，将推动云...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-06-11T14:54:00Z',
    viewCount: 4841
  },
  {
    id: '10',
    title: '阿里云CDN加速正式商用，实现秒级扩容',
    content: '阿里云于2026-06-11发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，标志着行业进入涨价周期。',
    summary: '阿里云于2026-06-11发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，标志着...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-06-11T14:18:00Z',
    viewCount: 1997
  },
  {
    id: '11',
    title: '算力租赁支持智能调度，AWS上涨',
    content: 'AWS宣布服务全面升级，计划新建3个数据中心区域。该项目新增多项AI功能，预计分三期建设完成。此举将显著降低运营成本，将推动云服务商差异化竞争。',
    summary: 'AWS宣布服务全面升级，计划新建3个数据中心区域。该项目新增多项AI功能，预计分三期建设完成。此举将显著降低运营成本，将推动云服务商差异化竞争。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-06-11T13:37:00Z',
    viewCount: 2187
  },
  {
    id: '12',
    title: '百度智能云宣布CDN波动，提升产业竞争力',
    content: '百度智能云今日宣布，产品价格调整通知。新功能将支持智能调度，可促进区域协调发展。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。',
    summary: '百度智能云今日宣布，产品价格调整通知。新功能将支持智能调度，可促进区域协调发展。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-06-09T15:13:00Z',
    viewCount: 2949
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
