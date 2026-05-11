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
    title: '对象存储价格上涨47%，显著降低运营成本',
    content: '近期，高端GPU供应紧张，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。',
    summary: '近期，高端GPU供应紧张，引发市场关注。数据显示，H100租赁价格5个月涨40%。分析指出，标志着行业进入涨价周期。专家建议，关注国产替代方案。...',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '6',
    tags: [
      '风险提示',
      '算力租赁'
    ],
    publishedAt: '2026-05-11T17:16:00Z',
    viewCount: 4713
  },
  {
    id: '2',
    title: '算力租赁提供全栈解决方案，谷歌云上涨',
    content: '谷歌云宣布服务全面升级，计划新建3个数据中心区域。该项目新增多项AI功能，预计未来两年逐步落地。此举将推动技术创新，将推动云服务商差异化竞争。',
    summary: '谷歌云宣布服务全面升级，计划新建3个数据中心区域。该项目新增多项AI功能，预计未来两年逐步落地。此举将推动技术创新，将推动云服务商差异化竞争。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁',
      '智算中心'
    ],
    publishedAt: '2026-05-11T15:36:00Z',
    viewCount: 1687
  },
  {
    id: '3',
    title: '江苏智算中心一期已建成，大型投产',
    content: 'AWS宣布与合作伙伴达成战略合作，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将提升产业竞争力，标志着行业进入涨价周期。',
    summary: 'AWS宣布与合作伙伴达成战略合作，计划新建3个数据中心区域。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将提升产业竞争力，标志着行业进入涨价周期。...',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-05-10T13:25:00Z',
    viewCount: 2265
  },
  {
    id: '4',
    title: '百度智能云发布新一代边缘计算节点',
    content: '百度智能云于2026-05-09发布公告，宣布与合作伙伴达成战略合作。此次调整涉及全线AI算力产品，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算力使用策略。',
    summary: '百度智能云于2026-05-09发布公告，宣布与合作伙伴达成战略合作。此次调整涉及全线AI算力产品，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，...',
    source: '华为云',
    sourceUrl: 'https://www.huaweicloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-05-09T17:27:00Z',
    viewCount: 2074
  },
  {
    id: '5',
    title: '腾讯云边缘计算节点正式商用，提供全栈解决方案',
    content: '腾讯云于2026-05-09发布公告，宣布服务全面升级。此次调整涉及网络加速产品，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，标志着行业进入涨价周期。',
    summary: '腾讯云于2026-05-09发布公告，宣布服务全面升级。此次调整涉及网络加速产品，性能提升40%以上。公司表示，持续投入技术研发。业内专家认为，标志着行业进入涨...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云'
    ],
    publishedAt: '2026-05-09T12:17:00Z',
    viewCount: 4707
  },
  {
    id: '6',
    title: '算力租赁集成AI推理能力，华为云上涨',
    content: '华为云宣布新一代产品正式发布，计划布局边缘计算节点。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将推动技术创新，企业需优化算力使用策略。',
    summary: '华为云宣布新一代产品正式发布，计划布局边缘计算节点。该项目覆盖全球主要区域，预计未来两年逐步落地。此举将推动技术创新，企业需优化算力使用策略。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心'
    ],
    publishedAt: '2026-05-08T14:19:00Z',
    viewCount: 3342
  },
  {
    id: '7',
    title: '边缘计算提供全栈解决方案，腾讯云布局{market}',
    content: '腾讯云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计行业将迎来新一轮发展机遇。',
    summary: '腾讯云今日宣布，新一代产品正式发布。新功能将提供全栈解决方案，可促进区域协调发展。目前该服务已覆盖全球50+区域，预计行业将迎来新一轮发展机遇。...',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    categoryId: '3',
    tags: [
      'CDN',
      '边缘计算',
      '网宿科技',
      '加速'
    ],
    publishedAt: '2026-05-07T18:12:00Z',
    viewCount: 6462
  },
  {
    id: '8',
    title: '谷歌云与{partner}达成{cooperation}',
    content: '谷歌云于2026-05-07发布公告，宣布服务全面升级。此次调整涉及网络加速产品，新增多项AI功能。公司表示，持续投入技术研发。业内专家认为，标志着行业进入涨价周期。',
    summary: '谷歌云于2026-05-07发布公告，宣布服务全面升级。此次调整涉及网络加速产品，新增多项AI功能。公司表示，持续投入技术研发。业内专家认为，标志着行业进入涨价...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-05-07T17:04:00Z',
    viewCount: 4794
  },
  {
    id: '9',
    title: '阿里云宣布CDN加速涨价33%',
    content: '阿里云于2026-05-06发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算力使用策略。',
    summary: '阿里云于2026-05-06发布公告，宣布产品价格调整通知。此次调整涉及核心云服务组件，新增多项AI功能。公司表示，核心硬件成本上涨。业内专家认为，企业需优化算...',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-05-06T15:51:00Z',
    viewCount: 8674
  },
  {
    id: '10',
    title: '京东云IDC集成AI推理能力，促进区域协调发展',
    content: '京东云宣布产品价格调整通知，计划布局边缘计算节点。该项目新增多项AI功能，预计分三期建设完成。此举将提升产业竞争力，标志着行业进入涨价周期。',
    summary: '京东云宣布产品价格调整通知，计划布局边缘计算节点。该项目新增多项AI功能，预计分三期建设完成。此举将提升产业竞争力，标志着行业进入涨价周期。...',
    source: 'IDC圈',
    sourceUrl: 'https://www.idcquan.com/',
    categoryId: '2',
    tags: [
      'IDC',
      '数据中心',
      '算力租赁'
    ],
    publishedAt: '2026-05-06T14:12:00Z',
    viewCount: 8444
  },
  {
    id: '11',
    title: '阿里云发布新一代边缘计算节点',
    content: '阿里云于2026-05-05发布公告，宣布服务全面升级。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，标志着行业进入涨价周期。',
    summary: '阿里云于2026-05-05发布公告，宣布服务全面升级。此次调整涉及网络加速产品，价格上调5%-34%。公司表示，全球AI算力需求激增。业内专家认为，标志着行业...',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商',
      'AI算力'
    ],
    publishedAt: '2026-05-05T14:58:00Z',
    viewCount: 4294
  },
  {
    id: '12',
    title: 'AWS边缘计算节点正式商用，集成AI推理能力',
    content: 'AWS于2026-05-04发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，标志着行业进入涨价周期。',
    summary: 'AWS于2026-05-04发布公告，宣布产品价格调整通知。此次调整涉及全线AI算力产品，覆盖全球主要区域。公司表示，持续投入技术研发。业内专家认为，标志着行业...',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: [
      '阿里云',
      '腾讯云',
      '云厂商'
    ],
    publishedAt: '2026-05-04T09:10:00Z',
    viewCount: 5450
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
