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
    title: '边缘计算节点价格波动47%，提升产业竞争力',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-04-30T18:50:00Z',
    viewCount: 7130
  },
  {
    id: '2',
    title: '工信部发布云计算服务管理办法，推动IDC行业发展',
    content: '据工信部官网报道，2026-04-29，网信办正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将显著降低运营成本，预计行业将迎来新一轮发展机遇。',
    summary: '据工信部官网报道，2026-04-29，网信办正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-04-29T10:45:00Z',
    viewCount: 8384
  },
  {
    id: '3',
    title: '上海智算中心正式开工，大型投产',
    content: '微软云宣布服务全面升级，计划布局边缘计算节点。该项目价格上调5%-34%，预计分三期建设完成。此举将提升产业竞争力，将推动云服务商差异化竞争。',
    summary: '微软云宣布服务全面升级，计划布局边缘计算节点。该项目价格上调5%-34%，预计分三期建设完成。此举将提升产业竞争力，将推动云服务商差异化竞争。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-04-28T15:12:00Z',
    viewCount: 7456
  },
  {
    id: '4',
    title: '边缘计算提供全栈解决方案，谷歌云布局{market}',
    content: '谷歌云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。',
    summary: '谷歌云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计行业将迎来新一轮发展机遇。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-04-28T14:39:00Z',
    viewCount: 8177
  },
  {
    id: '5',
    title: '数据中心AI智能运维技术实现秒级扩容',
    content: '随着双碳目标推进，AI智能运维成为数据中心建设标准配置。2026-04-28，阿里云发布对象存储，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，AI智能运维成为数据中心建设标准配置。2026-04-28，阿里云发布对象存储，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-04-28T12:51:00Z',
    viewCount: 2998
  },
  {
    id: '6',
    title: '腾讯云IDC支持智能调度，推动行业数字化转型',
    content: '腾讯云宣布产品价格调整通知，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计分三期建设完成。此举将推动技术创新，有利于行业长期健康发展。',
    summary: '腾讯云宣布产品价格调整通知，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计分三期建设完成。此举将推动技术创新，有利于行业长期健康发展。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-04-28T11:28:00Z',
    viewCount: 7012
  },
  {
    id: '7',
    title: '百度智能云宣布CDN下调，提升产业竞争力',
    content: '百度智能云今日宣布，服务全面升级。新功能将实现秒级扩容，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计到2026年底初见成效。',
    summary: '百度智能云今日宣布，服务全面升级。新功能将实现秒级扩容，可推动行业数字化转型。目前该服务已覆盖一带一路沿线国家，预计到2026年底初见成效。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-04-27T10:11:00Z',
    viewCount: 4004
  },
  {
    id: '8',
    title: '国家数据局：到2028年实现数据中心绿色化转型',
    content: '据工信部官网报道，2026-04-26，国家数据局正式发布《数据中心发展行动计划》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此举将提升产业竞争力，预计行业将迎来新一轮发展机遇。',
    summary: '据工信部官网报道，2026-04-26，国家数据局正式发布《数据中心发展行动计划》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-04-26T15:45:00Z',
    viewCount: 5986
  },
  {
    id: '9',
    title: '数据中心全栈自研技术支持智能调度',
    content: '随着AI算力需求激增，全栈自研成为数据中心散热主流方案。2026-04-26，阿里云发布AI算力服务，支持智能调度。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，全栈自研成为数据中心散热主流方案。2026-04-26，阿里云发布AI算力服务，支持智能调度。业内预计，未来三年将持续增长。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-04-26T09:46:00Z',
    viewCount: 7134
  },
  {
    id: '10',
    title: '阿里云数据中心PUE降至1.15，刷新行业记录',
    content: '随着数字化转型加速，AI智能运维成为数据中心运维效率提升关键。2026-04-25，阿里云发布对象存储，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着数字化转型加速，AI智能运维成为数据中心运维效率提升关键。2026-04-25，阿里云发布对象存储，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-04-25T16:49:00Z',
    viewCount: 4140
  },
  {
    id: '11',
    title: '百度智能云边缘计算节点正式商用，实现秒级扩容',
    content: '百度智能云于2026-04-25发布公告，宣布服务全面升级。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，为保障服务质量。业内专家认为，将推动云服务商差异化竞争。',
    summary: '百度智能云于2026-04-25发布公告，宣布服务全面升级。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，为保障服务质量。业内专家认为，将推动云服务商...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-04-25T13:14:00Z',
    viewCount: 7304
  },
  {
    id: '12',
    title: '百度智能云发布新一代边缘计算节点',
    content: '百度智能云于2026-04-24发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，将推动云服务商差异化竞争。',
    summary: '百度智能云于2026-04-24发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-04-24T08:03:00Z',
    viewCount: 5869
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
