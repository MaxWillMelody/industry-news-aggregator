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
    title: '微软云IDC提供全栈解决方案，促进区域协调发展',
    content: '微软云宣布新一代产品正式发布，计划扩建现有智算中心。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将推动技术创新，有利于行业长期健康发展。',
    summary: '微软云宣布新一代产品正式发布，计划扩建现有智算中心。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将推动技术创新，有利于行业长期健康发展。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-10-16T15:53:00Z',
    viewCount: 2165
  },
  {
    id: '2',
    title: '阿里云与{partner}达成{cooperation}',
    content: '阿里云于2026-10-16发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，将推动云服务商差异化竞争。',
    summary: '阿里云于2026-10-16发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，将推动云...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-10-16T15:26:00Z',
    viewCount: 4169
  },
  {
    id: '3',
    title: '国家数据局：到2028年算力规模超过300 EFLOPS',
    content: '据国家数据局报道，2026-10-16，网信办正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析人士指出，此举将显著降低运营成本，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-10-16，网信办正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-10-16T09:44:00Z',
    viewCount: 4068
  },
  {
    id: '4',
    title: '腾讯云宣布CDN波动，显著降低运营成本',
    content: '腾讯云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计行业将迎来新一轮发展机遇。',
    summary: '腾讯云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计行业将迎来新一轮发展机遇。...',
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
    publishedAt: '2026-10-14T15:03:00Z',
    viewCount: 2667
  },
  {
    id: '5',
    title: '数据中心市场竞争白热化，显著降低运营成本',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-10-14T09:57:00Z',
    viewCount: 7153
  },
  {
    id: '6',
    title: '谷歌云发布新一代容器服务',
    content: '谷歌云于2026-10-13发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，有利于行业长期健康发展。',
    summary: '谷歌云于2026-10-13发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，有利于...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-10-13T15:10:00Z',
    viewCount: 2755
  },
  {
    id: '7',
    title: '数据中心成本压力传导，显著降低运营成本',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，提前锁定长期合约。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-10-12T16:50:00Z',
    viewCount: 5912
  },
  {
    id: '8',
    title: '腾讯云数据中心PUE降至1.15，刷新行业记录',
    content: '随着数字化转型加速，AI智能运维成为数据中心建设标准配置。2026-10-11，腾讯云发布容器服务，实现秒级扩容。业内预计，到2026年底初见成效。',
    summary: '随着数字化转型加速，AI智能运维成为数据中心建设标准配置。2026-10-11，腾讯云发布容器服务，实现秒级扩容。业内预计，到2026年底初见成效。...',
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
    publishedAt: '2026-10-11T13:54:00Z',
    viewCount: 8889
  },
  {
    id: '9',
    title: '数据中心液冷技术实现秒级扩容',
    content: '随着双碳目标推进，液冷成为数据中心散热主流方案。2026-10-11，谷歌云发布AI算力服务，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着双碳目标推进，液冷成为数据中心散热主流方案。2026-10-11，谷歌云发布AI算力服务，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-10-11T09:43:00Z',
    viewCount: 7192
  },
  {
    id: '10',
    title: '算力租赁提供全栈解决方案，京东云上涨',
    content: '京东云宣布新一代产品正式发布，计划扩建现有智算中心。该项目价格上调5%-34%，预计未来两年逐步落地。此举将提升产业竞争力，标志着行业进入涨价周期。',
    summary: '京东云宣布新一代产品正式发布，计划扩建现有智算中心。该项目价格上调5%-34%，预计未来两年逐步落地。此举将提升产业竞争力，标志着行业进入涨价周期。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-10-10T08:26:00Z',
    viewCount: 3766
  },
  {
    id: '11',
    title: '上海发布数据中心发展行动计划，显著降低运营成本',
    content: '据工信部官网报道，2026-10-09，发改委正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士指出，此举将显著降低运营成本，预计到2026年底初见成效。',
    summary: '据工信部官网报道，2026-10-09，发改委正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-10-09T09:42:00Z',
    viewCount: 3770
  },
  {
    id: '12',
    title: '边缘计算集成AI推理能力，京东云布局{market}',
    content: '京东云今日宣布，新一代产品正式发布。新功能将集成AI推理能力，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计未来三年将持续增长。',
    summary: '京东云今日宣布，新一代产品正式发布。新功能将集成AI推理能力，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计未来三年将持续增长。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-10-09T08:20:00Z',
    viewCount: 5682
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
