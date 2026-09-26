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
    title: '数据中心全栈自研技术提供全栈解决方案',
    content: '随着双碳目标推进，全栈自研成为数据中心建设标准配置。2026-09-26，微软云发布容器服务，提供全栈解决方案。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，全栈自研成为数据中心建设标准配置。2026-09-26，微软云发布容器服务，提供全栈解决方案。业内预计，到2026年底初见成效。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-09-26T17:23:00Z',
    viewCount: 8409
  },
  {
    id: '2',
    title: '数据中心模块化技术集成AI推理能力',
    content: '随着AI算力需求激增，模块化成为数据中心散热主流方案。2026-09-26，百度智能云发布边缘计算节点，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着AI算力需求激增，模块化成为数据中心散热主流方案。2026-09-26，百度智能云发布边缘计算节点，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-09-26T14:35:00Z',
    viewCount: 3496
  },
  {
    id: '3',
    title: '北京智算中心进入试运营阶段，超大规模投产',
    content: '百度智能云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目覆盖全球主要区域，预计2026年底前投产。此举将推动技术创新，企业需优化算力使用策略。',
    summary: '百度智能云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目覆盖全球主要区域，预计2026年底前投产。此举将推动技术创新，企业需优化算力使用策略。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-09-25T15:18:00Z',
    viewCount: 3560
  },
  {
    id: '4',
    title: '腾讯云宣布CDN下调，显著降低运营成本',
    content: '腾讯云今日宣布，产品价格调整通知。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖全球50+区域，预计行业将迎来新一轮发展机遇。',
    summary: '腾讯云今日宣布，产品价格调整通知。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖全球50+区域，预计行业将迎来新一轮发展机遇。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-09-24T17:29:00Z',
    viewCount: 3738
  },
  {
    id: '5',
    title: '数据中心模块化技术实现秒级扩容',
    content: '随着数字化转型加速，模块化成为数据中心运维效率提升关键。2026-09-24，谷歌云发布对象存储，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着数字化转型加速，模块化成为数据中心运维效率提升关键。2026-09-24，谷歌云发布对象存储，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-09-24T09:11:00Z',
    viewCount: 6062
  },
  {
    id: '6',
    title: '算力产业供需错配加剧，推动技术创新',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-09-24T08:12:00Z',
    viewCount: 1678
  },
  {
    id: '7',
    title: '腾讯云新建中型数据中心，投资100亿元人民币',
    content: '腾讯云宣布服务全面升级，计划扩建现有智算中心。该项目价格上调5%-34%，预计2026年底前投产。此举将推动技术创新，有利于行业长期健康发展。',
    summary: '腾讯云宣布服务全面升级，计划扩建现有智算中心。该项目价格上调5%-34%，预计2026年底前投产。此举将推动技术创新，有利于行业长期健康发展。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-09-21T14:58:00Z',
    viewCount: 6724
  },
  {
    id: '8',
    title: '广东智算中心正式开工，中型投产',
    content: '阿里云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目新增多项AI功能，预计未来两年逐步落地。此举将显著降低运营成本，标志着行业进入涨价周期。',
    summary: '阿里云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目新增多项AI功能，预计未来两年逐步落地。此举将显著降低运营成本，标志着行业进入涨价周期。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-09-21T12:19:00Z',
    viewCount: 7273
  },
  {
    id: '9',
    title: '百度智能云与{partner}达成{cooperation}',
    content: '百度智能云于2026-09-19发布公告，宣布服务全面升级。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，将推动云服务商差异化竞争。',
    summary: '百度智能云于2026-09-19发布公告，宣布服务全面升级。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，将推动云服务...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-09-19T16:54:00Z',
    viewCount: 6267
  },
  {
    id: '10',
    title: '百度智能云AI算力服务正式商用，支持智能调度',
    content: '百度智能云于2026-09-19发布公告，宣布新一代产品正式发布。此次调整涉及全线AI算力产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，将推动云服务商差异化竞争。',
    summary: '百度智能云于2026-09-19发布公告，宣布新一代产品正式发布。此次调整涉及全线AI算力产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，将推动...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-09-19T13:16:00Z',
    viewCount: 1924
  },
  {
    id: '11',
    title: '中型数据中心正式开工，采用全栈自研',
    content: '随着双碳目标推进，全栈自研成为数据中心散热主流方案。2026-09-19，百度智能云发布CDN加速，集成AI推理能力。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，全栈自研成为数据中心散热主流方案。2026-09-19，百度智能云发布CDN加速，集成AI推理能力。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-09-19T11:24:00Z',
    viewCount: 8186
  },
  {
    id: '12',
    title: '工信部发布新型数据中心发展指导意见，推动算力产业发展',
    content: '据国家数据局报道，2026-09-19，发改委正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将显著降低运营成本，预计行业将迎来新一轮发展机遇。',
    summary: '据国家数据局报道，2026-09-19，发改委正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-09-19T10:34:00Z',
    viewCount: 8179
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
