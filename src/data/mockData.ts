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
    title: '华为云宣布CDN加速涨价20%',
    content: '华为云于2026-04-12发布公告，宣布服务全面升级。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨价周期。',
    summary: '华为云于2026-04-12发布公告，宣布服务全面升级。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-04-12T17:07:00Z',
    viewCount: 3450
  },
  {
    id: '2',
    title: '微软云数据中心PUE降至1.25，达到行业领先水平',
    content: '随着数字化转型加速，模块化成为数据中心运维效率提升关键。2026-04-11，微软云发布边缘计算节点，提供全栈解决方案。业内预计，未来三年将持续增长。',
    summary: '随着数字化转型加速，模块化成为数据中心运维效率提升关键。2026-04-11，微软云发布边缘计算节点，提供全栈解决方案。业内预计，未来三年将持续增长。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-04-11T14:39:00Z',
    viewCount: 3710
  },
  {
    id: '3',
    title: '微软云数据中心PUE降至1.2，刷新行业记录',
    content: '随着双碳目标推进，全栈自研成为数据中心建设标准配置。2026-04-11，微软云发布AI算力服务，集成AI推理能力。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，全栈自研成为数据中心建设标准配置。2026-04-11，微软云发布AI算力服务，集成AI推理能力。业内预计，到2026年底初见成效。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-04-11T12:54:00Z',
    viewCount: 4312
  },
  {
    id: '4',
    title: '大型数据中心一期已建成，采用液冷',
    content: '随着AI算力需求激增，液冷成为数据中心建设标准配置。2026-04-11，AWS发布容器服务，提供全栈解决方案。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，液冷成为数据中心建设标准配置。2026-04-11，AWS发布容器服务，提供全栈解决方案。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-04-11T11:40:00Z',
    viewCount: 8816
  },
  {
    id: '5',
    title: '中型数据中心进入试运营阶段，采用模块化',
    content: '随着AI算力需求激增，模块化成为数据中心建设标准配置。2026-04-11，谷歌云发布CDN加速，支持智能调度。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，模块化成为数据中心建设标准配置。2026-04-11，谷歌云发布CDN加速，支持智能调度。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-04-11T10:07:00Z',
    viewCount: 5082
  },
  {
    id: '6',
    title: 'AWS发布新一代容器服务',
    content: 'AWS于2026-04-09发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，企业需优化算力使用策略。',
    summary: 'AWS于2026-04-09发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，企业需优化算...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-04-09T14:04:00Z',
    viewCount: 8802
  },
  {
    id: '7',
    title: '国家数据局：到2028年实现数据中心绿色化转型',
    content: '据新华网报道，2026-04-09，网信办正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，此举将推动技术创新，预计到2026年底初见成效。',
    summary: '据新华网报道，2026-04-09，网信办正式发布《算力基础设施建设指南》。该政策明确提出实现数据中心绿色化转型，将重点推进边缘计算节点部署。分析人士指出，此举...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-04-09T14:01:00Z',
    viewCount: 8198
  },
  {
    id: '8',
    title: '腾讯云发布新一代CDN加速',
    content: '腾讯云于2026-04-09发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，将推动云服务商差异化竞争。',
    summary: '腾讯云于2026-04-09发布公告，宣布服务全面升级。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，将推动云服务商差异...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-04-09T09:12:00Z',
    viewCount: 6952
  },
  {
    id: '9',
    title: '广东智算中心进入试运营阶段，中型投产',
    content: 'AWS宣布新一代产品正式发布，计划扩建现有智算中心。该项目价格上调5%-34%，预计2026年底前投产。此举将推动技术创新，企业需优化算力使用策略。',
    summary: 'AWS宣布新一代产品正式发布，计划扩建现有智算中心。该项目价格上调5%-34%，预计2026年底前投产。此举将推动技术创新，企业需优化算力使用策略。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-04-08T17:28:00Z',
    viewCount: 5862
  },
  {
    id: '10',
    title: '阿里云宣布边缘计算节点涨价35%',
    content: '阿里云于2026-04-08发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，标志着行业进入涨价周期。',
    summary: '阿里云于2026-04-08发布公告，宣布新一代产品正式发布。此次调整涉及存储与计算服务，覆盖全球主要区域。公司表示，全球AI算力需求激增。业内专家认为，标志着...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-04-08T17:26:00Z',
    viewCount: 3214
  },
  {
    id: '11',
    title: '谷歌云新建超大规模数据中心，投资100亿元人民币',
    content: '谷歌云宣布产品价格调整通知，计划扩建现有智算中心。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将提升产业竞争力，标志着行业进入涨价周期。',
    summary: '谷歌云宣布产品价格调整通知，计划扩建现有智算中心。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将提升产业竞争力，标志着行业进入涨价周期。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-04-08T15:40:00Z',
    viewCount: 5765
  },
  {
    id: '12',
    title: '谷歌云CDN实现秒级扩容，推动行业数字化转型',
    content: '谷歌云今日宣布，服务全面升级。新功能将实现秒级扩容，可推动行业数字化转型。目前该服务已覆盖全国主要城市，预计行业将迎来新一轮发展机遇。',
    summary: '谷歌云今日宣布，服务全面升级。新功能将实现秒级扩容，可推动行业数字化转型。目前该服务已覆盖全国主要城市，预计行业将迎来新一轮发展机遇。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算'
    ],
    publishedAt: '2026-04-07T18:13:00Z',
    viewCount: 1725
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
