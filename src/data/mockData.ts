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
    title: '腾讯云IDC提供全栈解决方案，降低中小企业算力门槛',
    content: '腾讯云宣布新一代产品正式发布，计划布局边缘计算节点。该项目价格上调5%-34%，预计分三期建设完成。此举将提升产业竞争力，标志着行业进入涨价周期。',
    summary: '腾讯云宣布新一代产品正式发布，计划布局边缘计算节点。该项目价格上调5%-34%，预计分三期建设完成。此举将提升产业竞争力，标志着行业进入涨价周期。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-11-01T08:48:00Z',
    viewCount: 2139
  },
  {
    id: '2',
    title: 'IDC行业市场竞争白热化，显著降低运营成本',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，提前锁定长期合约。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，提前锁定长期合约。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-10-31T18:49:00Z',
    viewCount: 4895
  },
  {
    id: '3',
    title: '微软云IDC支持智能调度，促进区域协调发展',
    content: '微软云宣布新一代产品正式发布，计划布局边缘计算节点。该项目覆盖全球主要区域，预计2026年底前投产。此举将提升产业竞争力，有利于行业长期健康发展。',
    summary: '微软云宣布新一代产品正式发布，计划布局边缘计算节点。该项目覆盖全球主要区域，预计2026年底前投产。此举将提升产业竞争力，有利于行业长期健康发展。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-10-31T09:15:00Z',
    viewCount: 7004
  },
  {
    id: '4',
    title: '华为云CDN实现秒级扩容，降低中小企业算力门槛',
    content: '华为云今日宣布，产品价格调整通知。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖全国主要城市，预计到2026年底初见成效。',
    summary: '华为云今日宣布，产品价格调整通知。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖全国主要城市，预计到2026年底初见成效。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-10-30T17:31:00Z',
    viewCount: 1933
  },
  {
    id: '5',
    title: '数据中心AI智能运维技术集成AI推理能力',
    content: '随着数字化转型加速，AI智能运维成为数据中心运维效率提升关键。2026-10-30，阿里云发布容器服务，集成AI推理能力。业内预计，到2026年底初见成效。',
    summary: '随着数字化转型加速，AI智能运维成为数据中心运维效率提升关键。2026-10-30，阿里云发布容器服务，集成AI推理能力。业内预计，到2026年底初见成效。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-10-30T09:45:00Z',
    viewCount: 2564
  },
  {
    id: '6',
    title: '工信部发布算力基础设施建设指南，推动IDC行业发展',
    content: '据工信部官网报道，2026-10-28，工信部正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此举将显著降低运营成本，预计未来三年将持续增长。',
    summary: '据工信部官网报道，2026-10-28，工信部正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-10-28T12:52:00Z',
    viewCount: 6729
  },
  {
    id: '7',
    title: '新政策支持IDC行业，促进区域协调发展',
    content: '据新华网报道，2026-10-27，工信部正式发布《云计算服务管理办法》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此举将提升产业竞争力，预计到2026年底初见成效。',
    summary: '据新华网报道，2026-10-27，工信部正式发布《云计算服务管理办法》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此举将...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-10-27T18:03:00Z',
    viewCount: 6799
  },
  {
    id: '8',
    title: 'AI算力服务价格下调29%，显著降低运营成本',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。...',
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
    publishedAt: '2026-10-27T16:02:00Z',
    viewCount: 5957
  },
  {
    id: '9',
    title: '云计算市场竞争白热化，提升产业竞争力',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。...',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-10-27T12:54:00Z',
    viewCount: 5153
  },
  {
    id: '10',
    title: '边缘计算集成AI推理能力，微软云布局{market}',
    content: '微软云今日宣布，服务全面升级。新功能将集成AI推理能力，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。',
    summary: '微软云今日宣布，服务全面升级。新功能将集成AI推理能力，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计未来三年将持续增长。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-10-26T17:33:00Z',
    viewCount: 2497
  },
  {
    id: '11',
    title: '阿里云与{partner}达成{cooperation}',
    content: '阿里云于2026-10-25发布公告，宣布服务全面升级。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨价周期。',
    summary: '阿里云于2026-10-25发布公告，宣布服务全面升级。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨价...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-10-25T09:37:00Z',
    viewCount: 6140
  },
  {
    id: '12',
    title: '百度智能云CDN支持智能调度，促进区域协调发展',
    content: '百度智能云今日宣布，与合作伙伴达成战略合作。新功能将支持智能调度，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计未来三年将持续增长。',
    summary: '百度智能云今日宣布，与合作伙伴达成战略合作。新功能将支持智能调度，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计未来三年将持续增长。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-10-25T08:44:00Z',
    viewCount: 7142
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
