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
    title: '谷歌云数据中心PUE降至1.25，获得绿色数据中心认证',
    content: '随着AI算力需求激增，模块化成为数据中心运维效率提升关键。2026-07-16，谷歌云发布容器服务，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，模块化成为数据中心运维效率提升关键。2026-07-16，谷歌云发布容器服务，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-07-16T14:47:00Z',
    viewCount: 6129
  },
  {
    id: '2',
    title: '阿里云宣布CDN下调，显著降低运营成本',
    content: '阿里云今日宣布，服务全面升级。新功能将实现秒级扩容，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。',
    summary: '阿里云今日宣布，服务全面升级。新功能将实现秒级扩容，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-07-16T14:30:00Z',
    viewCount: 5262
  },
  {
    id: '3',
    title: '浙江智算中心一期已建成，中型投产',
    content: '谷歌云宣布新一代产品正式发布，计划布局边缘计算节点。该项目性能提升40%以上，预计未来两年逐步落地。此举将显著降低运营成本，将推动云服务商差异化竞争。',
    summary: '谷歌云宣布新一代产品正式发布，计划布局边缘计算节点。该项目性能提升40%以上，预计未来两年逐步落地。此举将显著降低运营成本，将推动云服务商差异化竞争。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-07-15T14:32:00Z',
    viewCount: 7024
  },
  {
    id: '4',
    title: '超大规模数据中心一期已建成，采用模块化',
    content: '随着数字化转型加速，模块化成为数据中心散热主流方案。2026-07-15，阿里云发布容器服务，支持智能调度。业内预计，到2026年底初见成效。',
    summary: '随着数字化转型加速，模块化成为数据中心散热主流方案。2026-07-15，阿里云发布容器服务，支持智能调度。业内预计，到2026年底初见成效。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-07-15T13:07:00Z',
    viewCount: 4044
  },
  {
    id: '5',
    title: '算力租赁实现秒级扩容，微软云下调',
    content: '微软云宣布新一代产品正式发布，计划扩建现有智算中心。该项目价格上调5%-34%，预计2026年底前投产。此举将显著降低运营成本，有利于行业长期健康发展。',
    summary: '微软云宣布新一代产品正式发布，计划扩建现有智算中心。该项目价格上调5%-34%，预计2026年底前投产。此举将显著降低运营成本，有利于行业长期健康发展。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-07-14T10:10:00Z',
    viewCount: 7214
  },
  {
    id: '6',
    title: '微软云数据中心PUE降至1.15，刷新行业记录',
    content: '随着双碳目标推进，AI智能运维成为数据中心散热主流方案。2026-07-13，微软云发布边缘计算节点，提供全栈解决方案。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着双碳目标推进，AI智能运维成为数据中心散热主流方案。2026-07-13，微软云发布边缘计算节点，提供全栈解决方案。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-07-13T17:52:00Z',
    viewCount: 6883
  },
  {
    id: '7',
    title: '超大规模数据中心正式开工，采用全栈自研',
    content: '随着AI算力需求激增，全栈自研成为数据中心运维效率提升关键。2026-07-13，微软云发布AI算力服务，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着AI算力需求激增，全栈自研成为数据中心运维效率提升关键。2026-07-13，微软云发布AI算力服务，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-07-13T13:07:00Z',
    viewCount: 8995
  },
  {
    id: '8',
    title: '华为云CDN实现秒级扩容，促进区域协调发展',
    content: '华为云今日宣布，新一代产品正式发布。新功能将实现秒级扩容，可促进区域协调发展。目前该服务已覆盖全国主要城市，预计到2026年底初见成效。',
    summary: '华为云今日宣布，新一代产品正式发布。新功能将实现秒级扩容，可促进区域协调发展。目前该服务已覆盖全国主要城市，预计到2026年底初见成效。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-07-13T08:28:00Z',
    viewCount: 4477
  },
  {
    id: '9',
    title: '阿里云对象存储正式商用，实现秒级扩容',
    content: '阿里云于2026-07-12发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，价格上调5%-34%。公司表示，核心硬件成本上涨。业内专家认为，将推动云服务商差异化竞争。',
    summary: '阿里云于2026-07-12发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，价格上调5%-34%。公司表示，核心硬件成本上涨。业内专家认为，将...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-07-12T18:51:00Z',
    viewCount: 5321
  },
  {
    id: '10',
    title: '超大规模数据中心正式开工，采用AI智能运维',
    content: '随着数字化转型加速，AI智能运维成为数据中心散热主流方案。2026-07-12，谷歌云发布容器服务，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着数字化转型加速，AI智能运维成为数据中心散热主流方案。2026-07-12，谷歌云发布容器服务，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-07-12T08:18:00Z',
    viewCount: 2407
  },
  {
    id: '11',
    title: '数据中心全栈自研技术集成AI推理能力',
    content: '随着数字化转型加速，全栈自研成为数据中心建设标准配置。2026-07-11，百度智能云发布CDN加速，集成AI推理能力。业内预计，未来三年将持续增长。',
    summary: '随着数字化转型加速，全栈自研成为数据中心建设标准配置。2026-07-11，百度智能云发布CDN加速，集成AI推理能力。业内预计，未来三年将持续增长。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-07-11T18:16:00Z',
    viewCount: 3780
  },
  {
    id: '12',
    title: '容器服务价格下调37%，提升产业竞争力',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-07-10T14:05:00Z',
    viewCount: 7519
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
