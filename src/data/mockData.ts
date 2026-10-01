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
    title: '微软云IDC提供全栈解决方案，降低中小企业算力门槛',
    content: '微软云宣布新一代产品正式发布，计划扩建现有智算中心。该项目性能提升40%以上，预计分三期建设完成。此举将提升产业竞争力，企业需优化算力使用策略。',
    summary: '微软云宣布新一代产品正式发布，计划扩建现有智算中心。该项目性能提升40%以上，预计分三期建设完成。此举将提升产业竞争力，企业需优化算力使用策略。...',
    source: '润泽科技',
    sourceUrl: 'https://www.zeroidc.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-10-01T18:23:00Z',
    viewCount: 7722
  },
  {
    id: '2',
    title: '国家数据局：到2028年基本建成普惠算力服务体系',
    content: '据工信部官网报道，2026-09-30，发改委正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出，此举将显著降低运营成本，预计未来三年将持续增长。',
    summary: '据工信部官网报道，2026-09-30，发改委正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-09-30T15:44:00Z',
    viewCount: 7899
  },
  {
    id: '3',
    title: '腾讯云IDC支持智能调度，降低中小企业算力门槛',
    content: '腾讯云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计2026年底前投产。此举将显著降低运营成本，企业需优化算力使用策略。',
    summary: '腾讯云宣布与合作伙伴达成战略合作，计划扩建现有智算中心。该项目性能提升40%以上，预计2026年底前投产。此举将显著降低运营成本，企业需优化算力使用策略。...',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-09-29T16:50:00Z',
    viewCount: 8551
  },
  {
    id: '4',
    title: 'AWS宣布AI算力服务涨价8%',
    content: 'AWS于2026-09-29发布公告，宣布与合作伙伴达成战略合作。此次调整涉及全线AI算力产品，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长期健康发展。',
    summary: 'AWS于2026-09-29发布公告，宣布与合作伙伴达成战略合作。此次调整涉及全线AI算力产品，性能提升40%以上。公司表示，核心硬件成本上涨。业内专家认为，有...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-09-29T12:05:00Z',
    viewCount: 8690
  },
  {
    id: '5',
    title: '腾讯云新建中型数据中心，投资100亿元人民币',
    content: '腾讯云宣布新一代产品正式发布，计划布局边缘计算节点。该项目价格上调5%-34%，预计分三期建设完成。此举将推动技术创新，将推动云服务商差异化竞争。',
    summary: '腾讯云宣布新一代产品正式发布，计划布局边缘计算节点。该项目价格上调5%-34%，预计分三期建设完成。此举将推动技术创新，将推动云服务商差异化竞争。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-09-28T15:49:00Z',
    viewCount: 6169
  },
  {
    id: '6',
    title: '工信部发布数据中心发展行动计划，推动IDC行业发展',
    content: '据工信部官网报道，2026-09-28，工信部正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出，此举将提升产业竞争力，预计到2026年底初见成效。',
    summary: '据工信部官网报道，2026-09-28，工信部正式发布《数据中心发展行动计划》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-09-28T11:52:00Z',
    viewCount: 1945
  },
  {
    id: '7',
    title: '工信部发布云计算服务管理办法，推动算力产业发展',
    content: '据工信部官网报道，2026-09-27，国家数据局正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分析人士指出，此举将显著降低运营成本，预计未来三年将持续增长。',
    summary: '据工信部官网报道，2026-09-27，国家数据局正式发布《云计算服务管理办法》。该政策明确提出算力规模超过300 EFLOPS，将重点推进算力网络协同发展。分...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-09-27T17:11:00Z',
    viewCount: 4790
  },
  {
    id: '8',
    title: '微软云边缘计算节点正式商用，集成AI推理能力',
    content: '微软云于2026-09-27发布公告，宣布与合作伙伴达成战略合作。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，将推动云服务商差异化竞争。',
    summary: '微软云于2026-09-27发布公告，宣布与合作伙伴达成战略合作。此次调整涉及全线AI算力产品，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-09-27T16:40:00Z',
    viewCount: 1680
  },
  {
    id: '9',
    title: '工信部发布新型数据中心发展指导意见，推动数据中心发展',
    content: '据新华网报道，2026-09-26，国家数据局正式发布《新型数据中心发展指导意见》。该政策明确提出基本建成普惠算力服务体系，将重点推进算力网络协同发展。分析人士指出，此举将显著降低运营成本，预计行业将迎来新一轮发展机遇。',
    summary: '据新华网报道，2026-09-26，国家数据局正式发布《新型数据中心发展指导意见》。该政策明确提出基本建成普惠算力服务体系，将重点推进算力网络协同发展。分析人士...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力'
    ],
    publishedAt: '2026-09-26T10:33:00Z',
    viewCount: 6021
  },
  {
    id: '10',
    title: '上海发布新型数据中心发展指导意见，推动技术创新',
    content: '据工信部官网报道，2026-09-25，网信办正式发布《新型数据中心发展指导意见》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指出，此举将推动技术创新，预计行业将迎来新一轮发展机遇。',
    summary: '据工信部官网报道，2026-09-25，网信办正式发布《新型数据中心发展指导意见》。该政策明确提出实现数据中心绿色化转型，将重点推进算力网络协同发展。分析人士指...',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: [
      '政策',
      '工信部'
    ],
    publishedAt: '2026-09-25T15:12:00Z',
    viewCount: 7778
  },
  {
    id: '11',
    title: '算力产业市场竞争白热化，显著降低运营成本',
    content: '近期，云厂商集体调价，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，企业需优化算力使用策略。专家建议，企业应优化算力使用策略。',
    summary: '近期，云厂商集体调价，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，企业需优化算力使用策略。专家建议，企业应优化算力使用策略。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-09-24T16:58:00Z',
    viewCount: 3386
  },
  {
    id: '12',
    title: '新政策支持IDC行业，推动行业数字化转型',
    content: '据新华网报道，2026-09-24，发改委正式发布《算力基础设施建设指南》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出，此举将推动技术创新，预计未来三年将持续增长。',
    summary: '据新华网报道，2026-09-24，发改委正式发布《算力基础设施建设指南》。该政策明确提出基本建成普惠算力服务体系，将重点推进边缘计算节点部署。分析人士指出，此...',
    source: '新华网',
    sourceUrl: 'http://www.xinhuanet.com/',
    categoryId: '5',
    tags: [
      '政策',
      '工信部',
      '算力',
      '数据中心'
    ],
    publishedAt: '2026-09-24T14:37:00Z',
    viewCount: 2415
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
