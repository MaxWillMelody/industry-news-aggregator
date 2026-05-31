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
    title: 'IDC行业市场竞争白热化，提升产业竞争力',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-05-30T15:12:00Z',
    viewCount: 4228
  },
  {
    id: '2',
    title: '算力产业供需错配加剧，提升产业竞争力',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，企业应优化算力使用策略。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，企业应优化算力使用策略。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-05-30T13:55:00Z',
    viewCount: 7605
  },
  {
    id: '3',
    title: '数据中心液冷技术提供全栈解决方案',
    content: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-05-30，京东云发布对象存储，提供全栈解决方案。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-05-30，京东云发布对象存储，提供全栈解决方案。业内预计，到2026年底初见成效。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-05-30T13:23:00Z',
    viewCount: 8101
  },
  {
    id: '4',
    title: 'AWS数据中心PUE降至1.25，刷新行业记录',
    content: '随着AI算力需求激增，全栈自研成为数据中心运维效率提升关键。2026-05-29，AWS发布容器服务，提供全栈解决方案。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着AI算力需求激增，全栈自研成为数据中心运维效率提升关键。2026-05-29，AWS发布容器服务，提供全栈解决方案。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-05-29T12:16:00Z',
    viewCount: 6913
  },
  {
    id: '5',
    title: '中型数据中心进入试运营阶段，采用液冷',
    content: '随着双碳目标推进，液冷成为数据中心散热主流方案。2026-05-28，AWS发布AI算力服务，集成AI推理能力。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，液冷成为数据中心散热主流方案。2026-05-28，AWS发布AI算力服务，集成AI推理能力。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-05-28T18:21:00Z',
    viewCount: 8687
  },
  {
    id: '6',
    title: '华为云CDN支持智能调度，促进区域协调发展',
    content: '华为云今日宣布，产品价格调整通知。新功能将支持智能调度，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。',
    summary: '华为云今日宣布，产品价格调整通知。新功能将支持智能调度，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-05-28T14:33:00Z',
    viewCount: 7786
  },
  {
    id: '7',
    title: '阿里云发布新一代CDN加速',
    content: '阿里云于2026-05-28发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，将推动云服务商差异化竞争。',
    summary: '阿里云于2026-05-28发布公告，宣布与合作伙伴达成战略合作。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，将推动...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-05-28T13:23:00Z',
    viewCount: 2673
  },
  {
    id: '8',
    title: '国家数据局：到2028年算力规模超过300 EFLOPS',
    content: '据国家数据局报道，2026-05-26，发改委正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将显著降低运营成本，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-05-26，发改委正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-05-26T16:13:00Z',
    viewCount: 2736
  },
  {
    id: '9',
    title: '江苏智算中心正式开工，超大规模投产',
    content: '华为云宣布产品价格调整通知，计划新建3个数据中心区域。该项目新增多项AI功能，预计未来两年逐步落地。此举将推动技术创新，将推动云服务商差异化竞争。',
    summary: '华为云宣布产品价格调整通知，计划新建3个数据中心区域。该项目新增多项AI功能，预计未来两年逐步落地。此举将推动技术创新，将推动云服务商差异化竞争。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-05-26T15:55:00Z',
    viewCount: 2392
  },
  {
    id: '10',
    title: '数据中心AI智能运维技术实现秒级扩容',
    content: '随着双碳目标推进，AI智能运维成为数据中心散热主流方案。2026-05-26，华为云发布AI算力服务，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，AI智能运维成为数据中心散热主流方案。2026-05-26，华为云发布AI算力服务，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-05-26T12:49:00Z',
    viewCount: 7176
  },
  {
    id: '11',
    title: '阿里云对象存储正式商用，支持智能调度',
    content: '阿里云于2026-05-24发布公告，宣布新一代产品正式发布。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，将推动云服务商差异化竞争。',
    summary: '阿里云于2026-05-24发布公告，宣布新一代产品正式发布。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，将推动云服...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-05-24T10:57:00Z',
    viewCount: 6252
  },
  {
    id: '12',
    title: '边缘计算节点价格波动8%，推动技术创新',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-05-24T08:08:00Z',
    viewCount: 6472
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
