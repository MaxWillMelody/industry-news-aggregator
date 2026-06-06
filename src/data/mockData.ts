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
    title: 'AWSIDC实现秒级扩容，降低中小企业算力门槛',
    content: 'AWS宣布产品价格调整通知，计划扩建现有智算中心。该项目新增多项AI功能，预计2026年底前投产。此举将提升产业竞争力，有利于行业长期健康发展。',
    summary: 'AWS宣布产品价格调整通知，计划扩建现有智算中心。该项目新增多项AI功能，预计2026年底前投产。此举将提升产业竞争力，有利于行业长期健康发展。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-06-06T18:49:00Z',
    viewCount: 4344
  },
  {
    id: '2',
    title: '百度智能云宣布容器服务涨价20%',
    content: '百度智能云于2026-06-06发布公告，宣布新一代产品正式发布。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算力使用策略。',
    summary: '百度智能云于2026-06-06发布公告，宣布新一代产品正式发布。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，核心硬件成本上涨。业内专家认为，...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-06-06T08:42:00Z',
    viewCount: 5776
  },
  {
    id: '3',
    title: '微软云宣布CDN下调，显著降低运营成本',
    content: '微软云今日宣布，与合作伙伴达成战略合作。新功能将实现秒级扩容，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计到2026年底初见成效。',
    summary: '微软云今日宣布，与合作伙伴达成战略合作。新功能将实现秒级扩容，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计到2026年底初见成效。...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-06-05T14:23:00Z',
    viewCount: 2804
  },
  {
    id: '4',
    title: '中型数据中心进入试运营阶段，采用全栈自研',
    content: '随着数字化转型加速，全栈自研成为数据中心散热主流方案。2026-06-04，百度智能云发布对象存储，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着数字化转型加速，全栈自研成为数据中心散热主流方案。2026-06-04，百度智能云发布对象存储，集成AI推理能力。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-06-04T18:18:00Z',
    viewCount: 4461
  },
  {
    id: '5',
    title: '京东云新建中型数据中心，投资100亿元人民币',
    content: '京东云宣布服务全面升级，计划布局边缘计算节点。该项目新增多项AI功能，预计分三期建设完成。此举将推动技术创新，标志着行业进入涨价周期。',
    summary: '京东云宣布服务全面升级，计划布局边缘计算节点。该项目新增多项AI功能，预计分三期建设完成。此举将推动技术创新，标志着行业进入涨价周期。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-06-03T09:51:00Z',
    viewCount: 3264
  },
  {
    id: '6',
    title: '阿里云发布新一代CDN加速',
    content: '阿里云于2026-06-02发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，新增多项AI功能。公司表示，全球AI算力需求激增。业内专家认为，有利于行业长期健康发展。',
    summary: '阿里云于2026-06-02发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，新增多项AI功能。公司表示，全球AI算力需求激增。业内专家认为，有利于...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-06-02T14:12:00Z',
    viewCount: 4073
  },
  {
    id: '7',
    title: '京东云数据中心PUE降至1.15，刷新行业记录',
    content: '随着双碳目标推进，液冷成为数据中心运维效率提升关键。2026-06-02，京东云发布对象存储，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着双碳目标推进，液冷成为数据中心运维效率提升关键。2026-06-02，京东云发布对象存储，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-06-02T13:38:00Z',
    viewCount: 4032
  },
  {
    id: '8',
    title: '微软云IDC支持智能调度，降低中小企业算力门槛',
    content: '微软云宣布服务全面升级，计划布局边缘计算节点。该项目新增多项AI功能，预计未来两年逐步落地。此举将推动技术创新，企业需优化算力使用策略。',
    summary: '微软云宣布服务全面升级，计划布局边缘计算节点。该项目新增多项AI功能，预计未来两年逐步落地。此举将推动技术创新，企业需优化算力使用策略。...',
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
    publishedAt: '2026-06-02T08:51:00Z',
    viewCount: 8720
  },
  {
    id: '9',
    title: '工信部发布新型数据中心发展指导意见，推动IDC行业发展',
    content: '据工信部官网报道，2026-06-01，发改委正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士指出，此举将显著降低运营成本，预计未来三年将持续增长。',
    summary: '据工信部官网报道，2026-06-01，发改委正式发布《新型数据中心发展指导意见》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-06-01T16:41:00Z',
    viewCount: 7835
  },
  {
    id: '10',
    title: '数据中心AI智能运维技术支持智能调度',
    content: '随着双碳目标推进，AI智能运维成为数据中心散热主流方案。2026-06-01，腾讯云发布CDN加速，支持智能调度。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，AI智能运维成为数据中心散热主流方案。2026-06-01，腾讯云发布CDN加速，支持智能调度。业内预计，到2026年底初见成效。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-06-01T12:12:00Z',
    viewCount: 2815
  },
  {
    id: '11',
    title: '数据中心液冷技术实现秒级扩容',
    content: '随着数字化转型加速，液冷成为数据中心散热主流方案。2026-05-31，微软云发布CDN加速，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。',
    summary: '随着数字化转型加速，液冷成为数据中心散热主流方案。2026-05-31，微软云发布CDN加速，实现秒级扩容。业内预计，行业将迎来新一轮发展机遇。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE',
      '绿色数据中心'
    ],
    publishedAt: '2026-05-31T10:01:00Z',
    viewCount: 1709
  },
  {
    id: '12',
    title: '国家数据局：到2028年实现数据中心绿色化转型',
    content: '据工信部官网报道，2026-05-31，工信部正式发布《云计算服务管理办法》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此举将显著降低运营成本，预计到2026年底初见成效。',
    summary: '据工信部官网报道，2026-05-31，工信部正式发布《云计算服务管理办法》。该政策明确提出实现数据中心绿色化转型，将重点推进绿色数据中心建设。分析人士指出，此...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-05-31T09:43:00Z',
    viewCount: 8891
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
