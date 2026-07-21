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
    title: '数据中心模块化技术实现秒级扩容',
    content: '随着AI算力需求激增，模块化成为数据中心散热主流方案。2026-07-21，AWS发布CDN加速，实现秒级扩容。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，模块化成为数据中心散热主流方案。2026-07-21，AWS发布CDN加速，实现秒级扩容。业内预计，到2026年底初见成效。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-07-21T10:22:00Z',
    viewCount: 1582
  },
  {
    id: '2',
    title: '数据中心全栈自研技术集成AI推理能力',
    content: '随着数字化转型加速，全栈自研成为数据中心运维效率提升关键。2026-07-20，AWS发布对象存储，集成AI推理能力。业内预计，到2026年底初见成效。',
    summary: '随着数字化转型加速，全栈自研成为数据中心运维效率提升关键。2026-07-20，AWS发布对象存储，集成AI推理能力。业内预计，到2026年底初见成效。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-07-20T18:38:00Z',
    viewCount: 7772
  },
  {
    id: '3',
    title: '算力租赁支持智能调度，谷歌云下调',
    content: '谷歌云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目覆盖全球主要区域，预计分三期建设完成。此举将推动技术创新，企业需优化算力使用策略。',
    summary: '谷歌云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目覆盖全球主要区域，预计分三期建设完成。此举将推动技术创新，企业需优化算力使用策略。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-07-20T15:37:00Z',
    viewCount: 3319
  },
  {
    id: '4',
    title: '百度智能云IDC集成AI推理能力，推动行业数字化转型',
    content: '百度智能云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目价格上调5%-34%，预计分三期建设完成。此举将提升产业竞争力，企业需优化算力使用策略。',
    summary: '百度智能云宣布新一代产品正式发布，计划新建3个数据中心区域。该项目价格上调5%-34%，预计分三期建设完成。此举将提升产业竞争力，企业需优化算力使用策略。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-07-19T17:48:00Z',
    viewCount: 6159
  },
  {
    id: '5',
    title: '腾讯云数据中心PUE降至1.15，达到行业领先水平',
    content: '随着AI算力需求激增，全栈自研成为数据中心运维效率提升关键。2026-07-19，腾讯云发布边缘计算节点，支持智能调度。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，全栈自研成为数据中心运维效率提升关键。2026-07-19，腾讯云发布边缘计算节点，支持智能调度。业内预计，到2026年底初见成效。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-07-19T14:04:00Z',
    viewCount: 4832
  },
  {
    id: '6',
    title: '工信部发布云计算服务管理办法，推动算力产业发展',
    content: '据新华网报道，2026-07-19，发改委正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指出，此举将推动技术创新，预计未来三年将持续增长。',
    summary: '据新华网报道，2026-07-19，发改委正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进绿色数据中心建设。分析人士指...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-07-19T09:24:00Z',
    viewCount: 8414
  },
  {
    id: '7',
    title: '谷歌云容器服务正式商用，支持智能调度',
    content: '谷歌云于2026-07-18发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，新增多项AI功能。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨价周期。',
    summary: '谷歌云于2026-07-18发布公告，宣布产品价格调整通知。此次调整涉及网络加速产品，新增多项AI功能。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-07-18T17:45:00Z',
    viewCount: 2823
  },
  {
    id: '8',
    title: '微软云IDC集成AI推理能力，推动行业数字化转型',
    content: '微软云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目价格上调5%-34%，预计未来两年逐步落地。此举将显著降低运营成本，将推动云服务商差异化竞争。',
    summary: '微软云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目价格上调5%-34%，预计未来两年逐步落地。此举将显著降低运营成本，将推动云服务商差异化竞争。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-07-17T17:27:00Z',
    viewCount: 5863
  },
  {
    id: '9',
    title: '国家数据局：到2028年算力规模超过300 EFLOPS',
    content: '据国家数据局报道，2026-07-17，发改委正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士指出，此举将推动技术创新，预计到2026年底初见成效。',
    summary: '据国家数据局报道，2026-07-17，发改委正式发布《数据中心发展行动计划》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析...',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-07-17T11:49:00Z',
    viewCount: 7522
  },
  {
    id: '10',
    title: '江苏智算中心正式开工，中型投产',
    content: '京东云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目新增多项AI功能，预计2026年底前投产。此举将显著降低运营成本，有利于行业长期健康发展。',
    summary: '京东云宣布与合作伙伴达成战略合作，计划布局边缘计算节点。该项目新增多项AI功能，预计2026年底前投产。此举将显著降低运营成本，有利于行业长期健康发展。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-07-17T09:35:00Z',
    viewCount: 3798
  },
  {
    id: '11',
    title: '百度智能云与{partner}达成{cooperation}',
    content: '百度智能云于2026-07-16发布公告，宣布服务全面升级。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨价周期。',
    summary: '百度智能云于2026-07-16发布公告，宣布服务全面升级。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，为保障服务质量。业内专家认为，标志着行业进入涨...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-07-16T16:07:00Z',
    viewCount: 5358
  },
  {
    id: '12',
    title: '算力租赁提供全栈解决方案，AWS波动',
    content: 'AWS宣布服务全面升级，计划布局边缘计算节点。该项目性能提升40%以上，预计未来两年逐步落地。此举将推动技术创新，有利于行业长期健康发展。',
    summary: 'AWS宣布服务全面升级，计划布局边缘计算节点。该项目性能提升40%以上，预计未来两年逐步落地。此举将推动技术创新，有利于行业长期健康发展。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-07-16T13:49:00Z',
    viewCount: 1594
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
