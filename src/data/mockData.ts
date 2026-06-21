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
    title: 'AWS数据中心PUE降至1.15，达到行业领先水平',
    content: '随着数字化转型加速，液冷成为数据中心运维效率提升关键。2026-06-20，AWS发布边缘计算节点，提供全栈解决方案。业内预计，到2026年底初见成效。',
    summary: '随着数字化转型加速，液冷成为数据中心运维效率提升关键。2026-06-20，AWS发布边缘计算节点，提供全栈解决方案。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-06-20T16:48:00Z',
    viewCount: 8967
  },
  {
    id: '2',
    title: '谷歌云宣布CDN下调，显著降低运营成本',
    content: '谷歌云今日宣布，与合作伙伴达成战略合作。新功能将支持智能调度，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。',
    summary: '谷歌云今日宣布，与合作伙伴达成战略合作。新功能将支持智能调度，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-06-20T10:02:00Z',
    viewCount: 5788
  },
  {
    id: '3',
    title: '工信部发布算力基础设施建设指南，推动数据中心发展',
    content: '据国家数据局报道，2026-06-19，国家数据局正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，此举将推动技术创新，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-06-19，国家数据局正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-06-19T15:57:00Z',
    viewCount: 5668
  },
  {
    id: '4',
    title: '腾讯云IDC实现秒级扩容，推动行业数字化转型',
    content: '腾讯云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将提升产业竞争力，企业需优化算力使用策略。',
    summary: '腾讯云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将提升产业竞争力，企业需优化算力使用策略。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-06-18T12:02:00Z',
    viewCount: 5517
  },
  {
    id: '5',
    title: '腾讯云IDC提供全栈解决方案，促进区域协调发展',
    content: '腾讯云宣布新一代产品正式发布，计划扩建现有智算中心。该项目新增多项AI功能，预计未来两年逐步落地。此举将提升产业竞争力，有利于行业长期健康发展。',
    summary: '腾讯云宣布新一代产品正式发布，计划扩建现有智算中心。该项目新增多项AI功能，预计未来两年逐步落地。此举将提升产业竞争力，有利于行业长期健康发展。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-06-18T10:45:00Z',
    viewCount: 5952
  },
  {
    id: '6',
    title: '边缘计算实现秒级扩容，京东云布局{market}',
    content: '京东云今日宣布，与合作伙伴达成战略合作。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计到2026年底初见成效。',
    summary: '京东云今日宣布，与合作伙伴达成战略合作。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计到2026年底初见成效。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-06-18T10:20:00Z',
    viewCount: 6594
  },
  {
    id: '7',
    title: '百度智能云AI算力服务正式商用，提供全栈解决方案',
    content: '百度智能云于2026-06-18发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，标志着行业进入涨价周期。',
    summary: '百度智能云于2026-06-18发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，标志着行业进...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-06-18T09:13:00Z',
    viewCount: 6780
  },
  {
    id: '8',
    title: '算力租赁支持智能调度，阿里云上涨',
    content: '阿里云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目价格上调5%-34%，预计分三期建设完成。此举将推动技术创新，将推动云服务商差异化竞争。',
    summary: '阿里云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目价格上调5%-34%，预计分三期建设完成。此举将推动技术创新，将推动云服务商差异化竞争。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-06-17T11:01:00Z',
    viewCount: 1903
  },
  {
    id: '9',
    title: 'AWS对象存储正式商用，支持智能调度',
    content: 'AWS于2026-06-16发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，将推动云服务商差异化竞争。',
    summary: 'AWS于2026-06-16发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，将推动云...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-06-16T10:06:00Z',
    viewCount: 3138
  },
  {
    id: '10',
    title: '国家数据局：到2028年基本建成普惠算力服务体系',
    content: '据国家数据局报道，2026-06-16，网信办正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进绿色数据中心建设。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-06-16，网信办正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进绿色数据中心建设。分析人士指出...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-06-16T09:44:00Z',
    viewCount: 5042
  },
  {
    id: '11',
    title: '阿里云宣布CDN波动，显著降低运营成本',
    content: '阿里云今日宣布，服务全面升级。新功能将集成AI推理能力，可推动行业数字化转型。目前该服务已覆盖全球50+区域，预计到2026年底初见成效。',
    summary: '阿里云今日宣布，服务全面升级。新功能将集成AI推理能力，可推动行业数字化转型。目前该服务已覆盖全球50+区域，预计到2026年底初见成效。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-06-14T14:40:00Z',
    viewCount: 8998
  },
  {
    id: '12',
    title: 'AWSCDN提供全栈解决方案，降低中小企业算力门槛',
    content: 'AWS今日宣布，与合作伙伴达成战略合作。新功能将提供全栈解决方案，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计行业将迎来新一轮发展机遇。',
    summary: 'AWS今日宣布，与合作伙伴达成战略合作。新功能将提供全栈解决方案，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计行业将迎来新一轮发展机遇。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-06-14T08:25:00Z',
    viewCount: 6752
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
