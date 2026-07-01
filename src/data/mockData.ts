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
    title: '微软云IDC支持智能调度，降低中小企业算力门槛',
    content: '微软云宣布与合作伙伴达成战略合作，计划新建3个数据中心区域。该项目新增多项AI功能，预计2026年底前投产。此举将推动技术创新，标志着行业进入涨价周期。',
    summary: '微软云宣布与合作伙伴达成战略合作，计划新建3个数据中心区域。该项目新增多项AI功能，预计2026年底前投产。此举将推动技术创新，标志着行业进入涨价周期。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-07-01T14:47:00Z',
    viewCount: 6039
  },
  {
    id: '2',
    title: '数据中心全栈自研技术提供全栈解决方案',
    content: '随着数字化转型加速，全栈自研成为数据中心散热主流方案。2026-07-01，谷歌云发布边缘计算节点，提供全栈解决方案。业内预计，未来三年将持续增长。',
    summary: '随着数字化转型加速，全栈自研成为数据中心散热主流方案。2026-07-01，谷歌云发布边缘计算节点，提供全栈解决方案。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-07-01T12:38:00Z',
    viewCount: 7200
  },
  {
    id: '3',
    title: '对象存储价格下调49%，提升产业竞争力',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，企业应优化算力使用策略。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-06-30T11:35:00Z',
    viewCount: 8316
  },
  {
    id: '4',
    title: '算力市场进入试运营阶段，关注国产替代方案',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，将推动云服务商差异化竞争。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-06-30T09:33:00Z',
    viewCount: 3073
  },
  {
    id: '5',
    title: '谷歌云数据中心PUE降至1.15，获得绿色数据中心认证',
    content: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-06-29，谷歌云发布容器服务，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-06-29，谷歌云发布容器服务，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-06-29T11:15:00Z',
    viewCount: 6265
  },
  {
    id: '6',
    title: '新政策支持数据中心，降低中小企业算力门槛',
    content: '据新华网报道，2026-06-29，工信部正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析人士指出，此举将提升产业竞争力，预计未来三年将持续增长。',
    summary: '据新华网报道，2026-06-29，工信部正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进边缘计算节点部署。分析人士...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-06-29T10:39:00Z',
    viewCount: 5994
  },
  {
    id: '7',
    title: '边缘计算实现秒级扩容，谷歌云布局{market}',
    content: '谷歌云今日宣布，服务全面升级。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计到2026年底初见成效。',
    summary: '谷歌云今日宣布，服务全面升级。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖全球50+区域，预计到2026年底初见成效。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-06-28T13:16:00Z',
    viewCount: 8859
  },
  {
    id: '8',
    title: '云计算市场竞争白热化，显著降低运营成本',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，算力成本占企业支出比例上升至30%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: '财经网',
    sourceUrl: 'https://www.caijing.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价',
      '供需错配'
    ],
    publishedAt: '2026-06-27T15:51:00Z',
    viewCount: 2204
  },
  {
    id: '9',
    title: '工信部发布数据中心发展行动计划，推动IDC行业发展',
    content: '据国家数据局报道，2026-06-27，工信部正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出，此举将推动技术创新，预计未来三年将持续增长。',
    summary: '据国家数据局报道，2026-06-27，工信部正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-06-27T14:29:00Z',
    viewCount: 1919
  },
  {
    id: '10',
    title: '华为云发布新一代对象存储',
    content: '华为云于2026-06-25发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，企业需优化算力使用策略。',
    summary: '华为云于2026-06-25发布公告，宣布与合作伙伴达成战略合作。此次调整涉及核心云服务组件，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，企业需...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-06-25T14:12:00Z',
    viewCount: 2076
  },
  {
    id: '11',
    title: '京东云容器服务正式商用，支持智能调度',
    content: '京东云于2026-06-25发布公告，宣布服务全面升级。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨价周期。',
    summary: '京东云于2026-06-25发布公告，宣布服务全面升级。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨价...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-06-25T10:44:00Z',
    viewCount: 4251
  },
  {
    id: '12',
    title: '边缘计算提供全栈解决方案，京东云布局{market}',
    content: '京东云今日宣布，与合作伙伴达成战略合作。新功能将提供全栈解决方案，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计到2026年底初见成效。',
    summary: '京东云今日宣布，与合作伙伴达成战略合作。新功能将提供全栈解决方案，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计到2026年底初见成效。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-06-24T15:12:00Z',
    viewCount: 7184
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
