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
    title: '边缘计算提供全栈解决方案，华为云布局{market}',
    content: '华为云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。',
    summary: '华为云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-08-21T14:59:00Z',
    viewCount: 6436
  },
  {
    id: '2',
    title: '边缘计算实现秒级扩容，华为云布局{market}',
    content: '华为云今日宣布，产品价格调整通知。新功能将实现秒级扩容，可促进区域协调发展。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。',
    summary: '华为云今日宣布，产品价格调整通知。新功能将实现秒级扩容，可促进区域协调发展。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-08-21T11:35:00Z',
    viewCount: 3666
  },
  {
    id: '3',
    title: '微软云数据中心PUE降至1.2，刷新行业记录',
    content: '随着数字化转型加速，AI智能运维成为数据中心建设标准配置。2026-08-21，微软云发布容器服务，提供全栈解决方案。业内预计，到2026年底初见成效。',
    summary: '随着数字化转型加速，AI智能运维成为数据中心建设标准配置。2026-08-21，微软云发布容器服务，提供全栈解决方案。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-08-21T10:40:00Z',
    viewCount: 7120
  },
  {
    id: '4',
    title: '阿里云CDN加速正式商用，集成AI推理能力',
    content: '阿里云于2026-08-20发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，企业需优化算力使用策略。',
    summary: '阿里云于2026-08-20发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，企业需...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-08-20T17:08:00Z',
    viewCount: 6530
  },
  {
    id: '5',
    title: '京东云数据中心PUE降至1.25，获得绿色数据中心认证',
    content: '随着双碳目标推进，模块化成为数据中心运维效率提升关键。2026-08-20，京东云发布对象存储，集成AI推理能力。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，模块化成为数据中心运维效率提升关键。2026-08-20，京东云发布对象存储，集成AI推理能力。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-08-20T16:29:00Z',
    viewCount: 2962
  },
  {
    id: '6',
    title: '边缘计算实现秒级扩容，阿里云布局{market}',
    content: '阿里云今日宣布，与合作伙伴达成战略合作。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计到2026年底初见成效。',
    summary: '阿里云今日宣布，与合作伙伴达成战略合作。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计到2026年底初见成效。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-08-20T11:54:00Z',
    viewCount: 6316
  },
  {
    id: '7',
    title: '超大规模数据中心正式开工，采用模块化',
    content: '随着双碳目标推进，模块化成为数据中心运维效率提升关键。2026-08-19，微软云发布AI算力服务，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，模块化成为数据中心运维效率提升关键。2026-08-19，微软云发布AI算力服务，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-08-19T15:51:00Z',
    viewCount: 3470
  },
  {
    id: '8',
    title: '数据中心AI智能运维技术集成AI推理能力',
    content: '随着AI算力需求激增，AI智能运维成为数据中心建设标准配置。2026-08-19，腾讯云发布边缘计算节点，集成AI推理能力。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，AI智能运维成为数据中心建设标准配置。2026-08-19，腾讯云发布边缘计算节点，集成AI推理能力。业内预计，未来三年将持续增长。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-08-19T15:35:00Z',
    viewCount: 1539
  },
  {
    id: '9',
    title: '微软云宣布CDN下调，显著降低运营成本',
    content: '微软云今日宣布，产品价格调整通知。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。',
    summary: '微软云今日宣布，产品价格调整通知。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-08-17T09:02:00Z',
    viewCount: 8310
  },
  {
    id: '10',
    title: '京东云与{partner}达成{cooperation}',
    content: '京东云于2026-08-16发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长期健康发展。',
    summary: '京东云于2026-08-16发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-08-16T12:21:00Z',
    viewCount: 7451
  },
  {
    id: '11',
    title: '数据中心液冷技术集成AI推理能力',
    content: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-08-16，微软云发布CDN加速，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-08-16，微软云发布CDN加速，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。...',
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
    publishedAt: '2026-08-16T10:47:00Z',
    viewCount: 5331
  },
  {
    id: '12',
    title: '阿里云宣布CDN加速涨价13%',
    content: '阿里云于2026-08-15发布公告，宣布服务全面升级。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长期健康发展。',
    summary: '阿里云于2026-08-15发布公告，宣布服务全面升级。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长期健康...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-08-15T17:15:00Z',
    viewCount: 7803
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
