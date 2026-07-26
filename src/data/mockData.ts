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
    title: '腾讯云宣布CDN加速涨价48%',
    content: '腾讯云于2026-07-26发布公告，宣布与合作伙伴达成战略合作。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，有利于行业长期健康发展。',
    summary: '腾讯云于2026-07-26发布公告，宣布与合作伙伴达成战略合作。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，有...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-07-26T17:00:00Z',
    viewCount: 7095
  },
  {
    id: '2',
    title: '腾讯云发布新一代AI算力服务',
    content: '腾讯云于2026-07-26发布公告，宣布新一代产品正式发布。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，有利于行业长期健康发展。',
    summary: '腾讯云于2026-07-26发布公告，宣布新一代产品正式发布。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-07-26T13:43:00Z',
    viewCount: 7777
  },
  {
    id: '3',
    title: '算力市场一期已建成，关注国产替代方案',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，企业需优化算力使用策略。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-07-26T10:51:00Z',
    viewCount: 5980
  },
  {
    id: '4',
    title: 'IDC行业成本压力传导，显著降低运营成本',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，企业应优化算力使用策略。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，日均Token调用量突破140万亿。分析指出，将推动云服务商差异化竞争。专家建议，企业应优化算力使用策略。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-07-25T12:23:00Z',
    viewCount: 5069
  },
  {
    id: '5',
    title: '百度智能云IDC集成AI推理能力，降低中小企业算力门槛',
    content: '百度智能云宣布新一代产品正式发布，计划布局边缘计算节点。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将显著降低运营成本，标志着行业进入涨价周期。',
    summary: '百度智能云宣布新一代产品正式发布，计划布局边缘计算节点。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将显著降低运营成本，标志着行业进入涨价周期。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-07-25T10:22:00Z',
    viewCount: 3606
  },
  {
    id: '6',
    title: '算力市场一期已建成，提前锁定长期合约',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，提前锁定长期合约。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，将推动云服务商差异化竞争。专家建议，提前锁定长期合约。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-07-25T08:48:00Z',
    viewCount: 8759
  },
  {
    id: '7',
    title: '超大规模数据中心一期已建成，采用全栈自研',
    content: '随着AI算力需求激增，全栈自研成为数据中心运维效率提升关键。2026-07-23，华为云发布AI算力服务，集成AI推理能力。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，全栈自研成为数据中心运维效率提升关键。2026-07-23，华为云发布AI算力服务，集成AI推理能力。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-07-23T14:05:00Z',
    viewCount: 4605
  },
  {
    id: '8',
    title: '百度智能云CDN支持智能调度，降低中小企业算力门槛',
    content: '百度智能云今日宣布，与合作伙伴达成战略合作。新功能将支持智能调度，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。',
    summary: '百度智能云今日宣布，与合作伙伴达成战略合作。新功能将支持智能调度，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-07-22T17:46:00Z',
    viewCount: 8946
  },
  {
    id: '9',
    title: '华为云宣布CDN加速涨价5%',
    content: '华为云于2026-07-22发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长期健康发展。',
    summary: '华为云于2026-07-22发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-07-22T11:19:00Z',
    viewCount: 7280
  },
  {
    id: '10',
    title: '浙江发布算力基础设施建设指南，显著降低运营成本',
    content: '据新华网报道，2026-07-21，国家数据局正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，此举将显著降低运营成本，预计行业将迎来新一轮发展机遇。',
    summary: '据新华网报道，2026-07-21，国家数据局正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-07-21T18:59:00Z',
    viewCount: 3179
  },
  {
    id: '11',
    title: '微软云数据中心PUE降至1.15，获得绿色数据中心认证',
    content: '随着双碳目标推进，液冷成为数据中心运维效率提升关键。2026-07-19，微软云发布CDN加速，实现秒级扩容。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，液冷成为数据中心运维效率提升关键。2026-07-19，微软云发布CDN加速，实现秒级扩容。业内预计，到2026年底初见成效。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-07-19T18:14:00Z',
    viewCount: 2950
  },
  {
    id: '12',
    title: '京东云宣布对象存储涨价21%',
    content: '京东云于2026-07-19发布公告，宣布与合作伙伴达成战略合作。此次调整涉及全线AI算力产品，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，将推动云服务商差异化竞争。',
    summary: '京东云于2026-07-19发布公告，宣布与合作伙伴达成战略合作。此次调整涉及全线AI算力产品，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，将...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-07-19T16:54:00Z',
    viewCount: 5453
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
