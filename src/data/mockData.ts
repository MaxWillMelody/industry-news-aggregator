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
    title: '百度智能云对象存储正式商用，支持智能调度',
    content: '百度智能云于2026-06-11发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，有利于行业长期健康发展。',
    summary: '百度智能云于2026-06-11发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-06-11T17:11:00Z',
    viewCount: 6318
  },
  {
    id: '2',
    title: '谷歌云宣布CDN下调，推动技术创新',
    content: '谷歌云今日宣布，新一代产品正式发布。新功能将实现秒级扩容，可推动行业数字化转型。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。',
    summary: '谷歌云今日宣布，新一代产品正式发布。新功能将实现秒级扩容，可推动行业数字化转型。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-06-11T13:18:00Z',
    viewCount: 3456
  },
  {
    id: '3',
    title: '数据中心AI智能运维技术集成AI推理能力',
    content: '随着双碳目标推进，AI智能运维成为数据中心运维效率提升关键。2026-06-10，百度智能云发布对象存储，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着双碳目标推进，AI智能运维成为数据中心运维效率提升关键。2026-06-10，百度智能云发布对象存储，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-06-10T12:29:00Z',
    viewCount: 7260
  },
  {
    id: '4',
    title: '京东云新建大型数据中心，投资30亿美元',
    content: '京东云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目覆盖全球主要区域，预计分三期建设完成。此举将推动技术创新，有利于行业长期健康发展。',
    summary: '京东云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目覆盖全球主要区域，预计分三期建设完成。此举将推动技术创新，有利于行业长期健康发展。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-06-09T09:40:00Z',
    viewCount: 2040
  },
  {
    id: '5',
    title: 'IDC行业供需错配加剧，提升产业竞争力',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-06-08T08:17:00Z',
    viewCount: 3031
  },
  {
    id: '6',
    title: '腾讯云宣布对象存储涨价13%',
    content: '腾讯云于2026-06-07发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，将推动云服务商差异化竞争。',
    summary: '腾讯云于2026-06-07发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，将推动云服...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-06-07T16:12:00Z',
    viewCount: 2124
  },
  {
    id: '7',
    title: '数据中心液冷技术集成AI推理能力',
    content: '随着双碳目标推进，液冷成为数据中心运维效率提升关键。2026-06-06，谷歌云发布边缘计算节点，集成AI推理能力。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，液冷成为数据中心运维效率提升关键。2026-06-06，谷歌云发布边缘计算节点，集成AI推理能力。业内预计，到2026年底初见成效。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-06-06T13:49:00Z',
    viewCount: 4338
  },
  {
    id: '8',
    title: '百度智能云宣布CDN下调，推动技术创新',
    content: '百度智能云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计到2026年底初见成效。',
    summary: '百度智能云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计到2026年底初见成效。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-06-06T13:35:00Z',
    viewCount: 8475
  },
  {
    id: '9',
    title: '谷歌云新建超大规模数据中心，投资30亿美元',
    content: '谷歌云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目覆盖全球主要区域，预计2026年底前投产。此举将推动技术创新，企业需优化算力使用策略。',
    summary: '谷歌云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目覆盖全球主要区域，预计2026年底前投产。此举将推动技术创新，企业需优化算力使用策略。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-06-05T17:57:00Z',
    viewCount: 5270
  },
  {
    id: '10',
    title: '京东云宣布边缘计算节点涨价46%',
    content: '京东云于2026-06-04发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，将推动云服务商差异化竞争。',
    summary: '京东云于2026-06-04发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，将推动云服...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-06-04T18:02:00Z',
    viewCount: 7298
  },
  {
    id: '11',
    title: '微软云CDN集成AI推理能力，降低中小企业算力门槛',
    content: '微软云今日宣布，服务全面升级。新功能将集成AI推理能力，可降低中小企业算力门槛。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。',
    summary: '微软云今日宣布，服务全面升级。新功能将集成AI推理能力，可降低中小企业算力门槛。目前该服务已覆盖一带一路沿线国家，预计未来三年将持续增长。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-06-04T15:46:00Z',
    viewCount: 4560
  },
  {
    id: '12',
    title: '新政策支持IDC行业，推动行业数字化转型',
    content: '据工信部官网报道，2026-06-04，网信办正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，此举将显著降低运营成本，预计到2026年底初见成效。',
    summary: '据工信部官网报道，2026-06-04，网信办正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-06-04T11:28:00Z',
    viewCount: 4395
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
