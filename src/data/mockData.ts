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
    title: '2024年全球数据中心市场规模突破3000亿美元',
    content: '根据最新市场研究报告，2024年全球数据中心市场规模预计将达到3120亿美元，同比增长15.2%。亚太地区成为增长最快的市场，中国、印度和东南亚国家贡献了主要增长动力。超大规模数据中心建设持续加速，AI算力需求成为核心驱动力。',
    summary: '全球数据中心市场持续高速增长，亚太地区成为主要增长引擎，AI算力需求推动超大规模数据中心建设。',
    source: 'IDC圈',
    sourceUrl: 'https://example.com/news/1',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: ['数据中心', '市场规模', 'AI算力'],
    publishedAt: '2024-04-10T08:30:00Z',
    viewCount: 2580,
  },
  {
    id: '2',
    title: '工信部发布《新型数据中心发展三年行动计划》',
    content: '工业和信息化部正式发布《新型数据中心发展三年行动计划（2024-2026年）》，明确提出到2026年，全国数据中心机架规模年均增速保持在20%左右，平均利用率力争提升到60%以上。行动计划重点推进绿色数据中心建设，要求新建大型数据中心PUE值不高于1.3。',
    summary: '工信部发布新型数据中心发展行动计划，提出机架规模年均增速20%目标，强调绿色数据中心建设。',
    source: '工信部官网',
    sourceUrl: 'https://example.com/news/2',
    categoryId: '5',
    tags: ['政策', '工信部', '绿色数据中心'],
    publishedAt: '2024-04-09T14:20:00Z',
    viewCount: 3420,
  },
  {
    id: '3',
    title: '阿里云宣布CDN节点全面升级为边缘计算节点',
    content: '阿里云今日宣布，其全球CDN节点将全面升级为边缘计算节点，支持在离用户更近的位置运行轻量级计算任务。升级后的节点将提供容器运行环境，支持Serverless函数部署，大幅降低应用响应延迟。首批升级覆盖中国大陆主要城市及亚太核心区域。',
    summary: '阿里云CDN节点升级为边缘计算节点，支持Serverless部署，降低应用响应延迟。',
    source: '阿里云',
    sourceUrl: 'https://example.com/news/3',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '3',
    tags: ['阿里云', 'CDN', '边缘计算'],
    publishedAt: '2024-04-08T10:15:00Z',
    viewCount: 1890,
  },
  {
    id: '4',
    title: '某大型云服务商数据中心发生火灾，引发行业安全警示',
    content: '昨日凌晨，某大型云服务商位于东南亚的数据中心发生火灾事故，导致部分云服务中断。事故原因初步判定为电气设备故障引发。此次事件造成多个企业客户业务受影响，预计损失达数千万美元。行业专家呼吁加强数据中心消防安全管理，完善应急预案。',
    summary: '大型云服务商数据中心发生火灾，部分云服务中断，引发行业对数据中心安全的广泛关注。',
    source: '科技日报',
    sourceUrl: 'https://example.com/news/4',
    categoryId: '6',
    tags: ['安全事故', '数据中心', '风险提示'],
    publishedAt: '2024-04-07T16:45:00Z',
    viewCount: 5670,
  },
  {
    id: '5',
    title: '腾讯云发布新一代智能IDC运维平台',
    content: '腾讯云正式发布新一代智能IDC运维平台，融合AIops技术实现数据中心全栈智能化管理。平台支持设备故障预测、能耗优化、容量规划等核心功能，可将运维效率提升40%以上。该平台已在腾讯云自有数据中心全面部署，并面向企业客户开放。',
    summary: '腾讯云发布智能IDC运维平台，融合AIops技术，提升数据中心运维效率40%以上。',
    source: '腾讯云',
    sourceUrl: 'https://example.com/news/5',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: ['腾讯云', 'IDC', '智能运维'],
    publishedAt: '2024-04-06T09:30:00Z',
    viewCount: 2150,
  },
  {
    id: '6',
    title: '华为云推出企业级混合云解决方案',
    content: '华为云正式发布企业级混合云解决方案，帮助企业实现公有云与私有云的无缝协同。该方案支持统一资源调度、一致的应用体验、统一的安全策略管理，满足企业关键业务上云需求。首批合作伙伴包括金融、制造、能源等行业龙头企业。',
    summary: '华为云推出企业级混合云解决方案，实现公有云与私有云无缝协同。',
    source: '华为云',
    sourceUrl: 'https://example.com/news/6',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: ['华为云', '混合云', '企业上云'],
    publishedAt: '2024-04-05T11:20:00Z',
    viewCount: 1780,
  },
  {
    id: '7',
    title: '数据中心液冷技术迎来爆发期，多家厂商推出新产品',
    content: '随着AI算力需求激增，数据中心散热问题日益突出，液冷技术迎来快速发展期。本周，多家设备厂商发布新一代液冷解决方案，包括浸没式液冷、冷板式液冷等多种技术路线。业内预计，2024年液冷数据中心市场规模将突破100亿元。',
    summary: '液冷技术成为数据中心散热主流方案，2024年市场规模预计突破100亿元。',
    source: '数据中心世界',
    sourceUrl: 'https://example.com/news/7',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: ['液冷技术', '数据中心', '散热'],
    publishedAt: '2024-04-04T13:00:00Z',
    viewCount: 2340,
  },
  {
    id: '8',
    title: '国家数据局：加强数据基础设施建设，推动算力网络发展',
    content: '国家数据局召开新闻发布会，强调将加强数据基础设施建设，推动算力网络协同发展。重点包括：建设国家算力枢纽节点，优化算力资源配置；推动东数西算工程深入实施；完善数据流通交易基础设施。预计到2025年，全国算力规模将超过300 EFLOPS。',
    summary: '国家数据局强调加强数据基础设施建设，推动算力网络发展，2025年算力规模目标超300 EFLOPS。',
    source: '新华网',
    sourceUrl: 'https://example.com/news/8',
    categoryId: '5',
    tags: ['国家数据局', '算力网络', '东数西算'],
    publishedAt: '2024-04-03T15:30:00Z',
    viewCount: 4120,
  },
  {
    id: '9',
    title: 'AWS宣布在亚太地区新建3个数据中心区域',
    content: '亚马逊云服务（AWS）宣布将在亚太地区新建3个数据中心区域，分别位于泰国、新西兰和越南。新区域将提供完整的AWS服务组合，满足当地企业数字化转型需求。这是AWS在亚太区最大规模的基础设施扩张计划，总投资预计超过50亿美元。',
    summary: 'AWS宣布在泰国、新西兰、越南新建数据中心区域，亚太区最大规模基础设施扩张。',
    source: 'AWS',
    sourceUrl: 'https://example.com/news/9',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: ['AWS', '亚太区', '数据中心'],
    publishedAt: '2024-04-02T10:00:00Z',
    viewCount: 2890,
  },
  {
    id: '10',
    title: '云服务商价格战持续，行业利润率承压',
    content: '近期，多家云服务商相继下调产品价格，云计算市场价格战持续升温。分析指出，激烈的价格竞争将导致行业整体利润率下降，中小云服务商面临更大生存压力。专家建议云服务商应聚焦差异化服务，避免陷入纯价格竞争。',
    summary: '云服务商价格战持续，行业利润率承压，专家建议聚焦差异化服务。',
    source: '财经网',
    sourceUrl: 'https://example.com/news/10',
    categoryId: '6',
    tags: ['价格战', '云计算', '风险提示'],
    publishedAt: '2024-04-01T08:45:00Z',
    viewCount: 3560,
  },
  {
    id: '11',
    title: '字节跳动自建数据中心采用全栈自研技术',
    content: '字节跳动披露其自建数据中心技术架构，全面采用自研服务器、自研网络设备和自研软件系统。通过深度定制化，数据中心PUE值降至1.15以下，达到行业领先水平。该数据中心主要支撑抖音、今日头条等海量业务。',
    summary: '字节跳动自建数据中心采用全栈自研技术，PUE值降至1.15以下。',
    source: 'TechWeb',
    sourceUrl: 'https://example.com/news/11',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '1',
    tags: ['字节跳动', '自研技术', 'PUE'],
    publishedAt: '2024-03-31T14:20:00Z',
    viewCount: 4230,
  },
  {
    id: '12',
    title: 'CDN行业格局生变：边缘计算成为新战场',
    content: '传统CDN服务商正加速向边缘计算转型，边缘计算成为CDN行业新的竞争焦点。分析指出，随着5G和物联网发展，边缘计算市场将在未来3年保持50%以上的年增长率。传统CDN厂商面临云服务商的强势竞争，行业整合趋势明显。',
    summary: 'CDN行业加速向边缘计算转型，边缘计算成为新竞争焦点，行业整合趋势明显。',
    source: '通信产业网',
    sourceUrl: 'https://example.com/news/12',
    categoryId: '3',
    tags: ['CDN', '边缘计算', '行业趋势'],
    publishedAt: '2024-03-30T11:30:00Z',
    viewCount: 1980,
  },
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
