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
    title: '数据中心AI智能运维技术实现秒级扩容',
    content: '随着数字化转型加速，AI智能运维成为数据中心散热主流方案。2026-05-21，百度智能云发布容器服务，实现秒级扩容。业内预计，到2026年底初见成效。',
    summary: '随着数字化转型加速，AI智能运维成为数据中心散热主流方案。2026-05-21，百度智能云发布容器服务，实现秒级扩容。业内预计，到2026年底初见成效。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-05-21T08:34:00Z',
    viewCount: 5666
  },
  {
    id: '2',
    title: '大型数据中心进入试运营阶段，采用全栈自研',
    content: '随着AI算力需求激增，全栈自研成为数据中心散热主流方案。2026-05-20，谷歌云发布对象存储，提供全栈解决方案。业内预计，未来三年将持续增长。',
    summary: '随着AI算力需求激增，全栈自研成为数据中心散热主流方案。2026-05-20，谷歌云发布对象存储，提供全栈解决方案。业内预计，未来三年将持续增长。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷'
    ],
    publishedAt: '2026-05-20T13:55:00Z',
    viewCount: 8645
  },
  {
    id: '3',
    title: '中型数据中心正式开工，采用液冷',
    content: '随着双碳目标推进，液冷成为数据中心建设标准配置。2026-05-20，百度智能云发布容器服务，实现秒级扩容。业内预计，未来三年将持续增长。',
    summary: '随着双碳目标推进，液冷成为数据中心建设标准配置。2026-05-20，百度智能云发布容器服务，实现秒级扩容。业内预计，未来三年将持续增长。...',
    source: 'TechWeb',
    sourceUrl: 'https://www.techweb.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-05-20T09:17:00Z',
    viewCount: 4470
  },
  {
    id: '4',
    title: '微软云宣布边缘计算节点涨价7%',
    content: '微软云于2026-05-20发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长期健康发展。',
    summary: '微软云于2026-05-20发布公告，宣布新一代产品正式发布。此次调整涉及网络加速产品，覆盖全球主要区域。公司表示，核心硬件成本上涨。业内专家认为，有利于行业长...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-05-20T08:40:00Z',
    viewCount: 2952
  },
  {
    id: '5',
    title: '边缘计算实现秒级扩容，谷歌云布局{market}',
    content: '谷歌云今日宣布，与合作伙伴达成战略合作。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。',
    summary: '谷歌云今日宣布，与合作伙伴达成战略合作。新功能将实现秒级扩容，可降低中小企业算力门槛。目前该服务已覆盖亚太地区核心节点，预计行业将迎来新一轮发展机遇。...',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-05-19T18:20:00Z',
    viewCount: 2901
  },
  {
    id: '6',
    title: '大型数据中心一期已建成，采用液冷',
    content: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-05-18，百度智能云发布边缘计算节点，支持智能调度。业内预计，到2026年底初见成效。',
    summary: '随着AI算力需求激增，液冷成为数据中心运维效率提升关键。2026-05-18，百度智能云发布边缘计算节点，支持智能调度。业内预计，到2026年底初见成效。...',
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
    publishedAt: '2026-05-18T15:12:00Z',
    viewCount: 7977
  },
  {
    id: '7',
    title: '百度智能云发布新一代AI算力服务',
    content: '百度智能云于2026-05-18发布公告，宣布与合作伙伴达成战略合作。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为，有利于行业长期健康发展。',
    summary: '百度智能云于2026-05-18发布公告，宣布与合作伙伴达成战略合作。此次调整涉及存储与计算服务，价格上调5%-34%。公司表示，持续投入技术研发。业内专家认为...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-05-18T09:34:00Z',
    viewCount: 7477
  },
  {
    id: '8',
    title: '边缘计算集成AI推理能力，微软云布局{market}',
    content: '微软云今日宣布，与合作伙伴达成战略合作。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计到2026年底初见成效。',
    summary: '微软云今日宣布，与合作伙伴达成战略合作。新功能将集成AI推理能力，可促进区域协调发展。目前该服务已覆盖亚太地区核心节点，预计到2026年底初见成效。...',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技'
    ],
    publishedAt: '2026-05-18T09:12:00Z',
    viewCount: 6775
  },
  {
    id: '9',
    title: '数据中心AI智能运维技术实现秒级扩容',
    content: '随着双碳目标推进，AI智能运维成为数据中心运维效率提升关键。2026-05-18，阿里云发布对象存储，实现秒级扩容。业内预计，到2026年底初见成效。',
    summary: '随着双碳目标推进，AI智能运维成为数据中心运维效率提升关键。2026-05-18，阿里云发布对象存储，实现秒级扩容。业内预计，到2026年底初见成效。...',
    source: '数据中心世界',
    sourceUrl: 'https://www.dcw.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: [
      '数据中心',
      '液冷',
      'PUE'
    ],
    publishedAt: '2026-05-18T09:08:00Z',
    viewCount: 5298
  },
  {
    id: '10',
    title: '百度智能云新建超大规模数据中心，投资100亿元人民币',
    content: '百度智能云宣布产品价格调整通知，计划扩建现有智算中心。该项目覆盖全球主要区域，预计2026年底前投产。此举将推动技术创新，有利于行业长期健康发展。',
    summary: '百度智能云宣布产品价格调整通知，计划扩建现有智算中心。该项目覆盖全球主要区域，预计2026年底前投产。此举将推动技术创新，有利于行业长期健康发展。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-05-17T18:16:00Z',
    viewCount: 8384
  },
  {
    id: '11',
    title: 'IDC行业市场竞争白热化，提升产业竞争力',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，有利于行业长期健康发展。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-05-14T13:16:00Z',
    viewCount: 2941
  },
  {
    id: '12',
    title: 'IDC行业供需错配加剧，推动技术创新',
    content: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，有利于行业长期健康发展。专家建议，提前锁定长期合约。',
    summary: '近期，算力租赁价格持续上涨，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，有利于行业长期健康发展。专家建议，提前锁定长期合约。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁',
      '涨价'
    ],
    publishedAt: '2026-05-14T08:54:00Z',
    viewCount: 5010
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
