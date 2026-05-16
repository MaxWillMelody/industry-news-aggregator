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
    title: '江苏发布数据中心发展行动计划，显著降低运营成本',
    content: '据国家数据局报道，2026-05-15，工信部正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析人士指出，此举将显著降低运营成本，预计到2026年底初见成效。',
    summary: '据国家数据局报道，2026-05-15，工信部正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-05-15T08:14:00Z',
    viewCount: 6749
  },
  {
    id: '2',
    title: '数据中心模块化技术支持智能调度',
    content: '随着AI算力需求激增，模块化成为数据中心建设标准配置。2026-05-14，微软云发布CDN加速，支持智能调度。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，模块化成为数据中心建设标准配置。2026-05-14，微软云发布CDN加速，支持智能调度。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-05-14T15:04:00Z',
    viewCount: 3578
  },
  {
    id: '3',
    title: '阿里云宣布CDN下调，推动技术创新',
    content: '阿里云今日宣布，与合作伙伴达成战略合作。新功能将支持智能调度，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。',
    summary: '阿里云今日宣布，与合作伙伴达成战略合作。新功能将支持智能调度，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-05-14T13:15:00Z',
    viewCount: 6287
  },
  {
    id: '4',
    title: '数据中心AI智能运维技术支持智能调度',
    content: '随着双碳目标推进，AI智能运维成为数据中心运维效率提升关键。2026-05-13，阿里云发布AI算力服务，支持智能调度。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，AI智能运维成为数据中心运维效率提升关键。2026-05-13，阿里云发布AI算力服务，支持智能调度。业内预计，到2026年底初见成效。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-05-13T16:47:00Z',
    viewCount: 6245
  },
  {
    id: '5',
    title: '数据中心模块化技术集成AI推理能力',
    content: '随着双碳目标推进，模块化成为数据中心散热主流方案。2026-05-13，谷歌云发布CDN加速，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着双碳目标推进，模块化成为数据中心散热主流方案。2026-05-13，谷歌云发布CDN加速，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-05-13T11:53:00Z',
    viewCount: 7202
  },
  {
    id: '6',
    title: '阿里云边缘计算节点正式商用，提供全栈解决方案',
    content: '阿里云于2026-05-12发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长期健康发展。',
    summary: '阿里云于2026-05-12发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，有利于...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-05-12T18:52:00Z',
    viewCount: 3457
  },
  {
    id: '7',
    title: '超大规模数据中心一期已建成，采用全栈自研',
    content: '随着AI算力需求激增，全栈自研成为数据中心建设标准配置。2026-05-12，阿里云发布容器服务，支持智能调度。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着AI算力需求激增，全栈自研成为数据中心建设标准配置。2026-05-12，阿里云发布容器服务，支持智能调度。业内预计，行业将迎来新一轮发展机遇。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-05-12T10:44:00Z',
    viewCount: 7541
  },
  {
    id: '8',
    title: 'CDN加速价格下调20%，显著降低运营成本',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-05-11T17:01:00Z',
    viewCount: 6484
  },
  {
    id: '9',
    title: '数据中心全栈自研技术集成AI推理能力',
    content: '随着双碳目标推进，全栈自研成为数据中心运维效率提升关键。2026-05-11，华为云发布边缘计算节点，集成AI推理能力。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，全栈自研成为数据中心运维效率提升关键。2026-05-11，华为云发布边缘计算节点，集成AI推理能力。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-05-11T12:31:00Z',
    viewCount: 8382
  },
  {
    id: '10',
    title: '百度智能云数据中心PUE降至1.15，获得绿色数据中心认证',
    content: '随着双碳目标推进，AI智能运维成为数据中心散热主流方案。2026-05-10，百度智能云发布容器服务，集成AI推理能力。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，AI智能运维成为数据中心散热主流方案。2026-05-10，百度智能云发布容器服务，集成AI推理能力。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-05-10T10:57:00Z',
    viewCount: 2116
  },
  {
    id: '11',
    title: '京东云数据中心PUE降至1.25，刷新行业记录',
    content: '随着数字化转型加速，模块化成为数据中心运维效率提升关键。2026-05-09，京东云发布容器服务，集成AI推理能力。业内预计，到2026年底初见成效。',
    summary: '随着数字化转型加速，模块化成为数据中心运维效率提升关键。2026-05-09，京东云发布容器服务，集成AI推理能力。业内预计，到2026年底初见成效。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-05-09T18:27:00Z',
    viewCount: 8866
  },
  {
    id: '12',
    title: '微软云新建大型数据中心，投资100亿元人民币',
    content: '微软云宣布新一代产品正式发布，计划扩建现有智算中心。该项目新增多项AI功能，预计未来两年逐步落地。此举将提升产业竞争力，有利于行业长期健康发展。',
    summary: '微软云宣布新一代产品正式发布，计划扩建现有智算中心。该项目新增多项AI功能，预计未来两年逐步落地。此举将提升产业竞争力，有利于行业长期健康发展。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-05-09T15:57:00Z',
    viewCount: 7547
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
