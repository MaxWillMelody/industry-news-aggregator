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
    title: '工信部发布《关于开展普惠算力赋能中小企业发展专项行动的通知》',
    content: '2026年4月2日，工信部办公厅正式发布《关于开展普惠算力赋能中小企业发展专项行动的通知》，首次提出"算力银行"与"算力超市"两大创新概念。目标明确：到2028年底，基本建成普惠算力服务体系，覆盖门类不少于10类行业，显著降低中小企业获取、使用算力门槛。政策还将推行按"卡时""核时"及Token计费等灵活付费模式，鼓励地方发放"算力券""存力券""运力券"以精准补贴。',
    summary: '工信部首次提出"算力银行"与"算力超市"概念，推动普惠算力服务体系建设，降低中小企业算力使用门槛。',
    source: '工信部官网',
    sourceUrl: 'https://www.miit.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: ['政策', '工信部', '算力银行', '中小企业'],
    publishedAt: '2026-04-02T14:20:00Z',
    viewCount: 5420,
  },
  {
    id: '2',
    title: '腾讯云宣布AI算力产品涨价5%，年内第二次调价',
    content: '4月9日，腾讯云发布公告，自2026年5月9日起，对AI算力、容器服务TKE-原生节点、弹性MapReduce(EMR)三类产品价格统一上调5%。这是腾讯云一个月内第二次调价，此前3月11日已对混元系列模型进行大幅调价，部分模型涨幅高达463%。腾讯云解释，此次调价是因为全球AI算力需求持续激增，核心硬件供应链成本大幅上涨。',
    summary: '腾讯云年内第二次涨价，AI算力产品5月9日起上调5%，此前模型服务涨幅最高达463%。',
    source: '腾讯云',
    sourceUrl: 'https://cloud.tencent.com/',
    categoryId: '4',
    tags: ['腾讯云', '涨价', 'AI算力', '云厂商'],
    publishedAt: '2026-04-09T10:00:00Z',
    viewCount: 6890,
  },
  {
    id: '3',
    title: '阿里云AI算力产品最高涨价34%，打破20年降价传统',
    content: '阿里云于2026年3月18日宣布对部分产品进行价格上调，新价格于4月18日生效。此次调价主要涉及AI算力与文件存储服务，其中平头哥真武810E等算力卡相关服务的价格上调5%至34%，CPFS（智算版）并行文件存储的价格统一上调30%。这是阿里云自年初取消折扣后首次明确宣布涨价，打破了云计算行业近20年"只降不升"的价格惯例。',
    summary: '阿里云AI算力产品最高涨34%，文件存储涨30%，打破云计算行业20年降价传统。',
    source: '阿里云',
    sourceUrl: 'https://www.aliyun.com/',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: ['阿里云', '涨价', 'AI算力', '存储'],
    publishedAt: '2026-04-08T08:30:00Z',
    viewCount: 7230,
  },
  {
    id: '4',
    title: '全球算力租赁价格飙升，海外H100租赁价格5个月上涨40%',
    content: '据SemiAnalysis数据，截至2026年4月，海外H100租赁价格5个月内上涨40%。国内方面，B200租金价格在3月接力飙升。算力租赁行业当前的高景气度主要源于国内算力市场的供需错配——下游大模型与互联网厂商算力需求爆发，而部分国产高端芯片一定程度上受制于代工产能瓶颈。中信证券研报指出，伴随Agent应用和多模态生态的全面爆发，全球Token用量进入新一轮加速增长期，云产业链呈现显著供需错配。',
    summary: '海外H100租赁价格5个月涨40%，国内B200租金飙升，算力租赁行业进入高景气周期。',
    source: 'SemiAnalysis',
    sourceUrl: 'https://www.semianalysis.com/',
    categoryId: '6',
    tags: ['算力租赁', 'H100', '涨价', '风险提示'],
    publishedAt: '2026-04-08T16:45:00Z',
    viewCount: 8960,
  },
  {
    id: '5',
    title: '百度智能云跟进涨价，AI算力产品上调5%-30%',
    content: '百度智能云于2026年3月18日发布调价公告，称为保障平台长期稳定运行与服务质量，对部分产品价格进行结构性优化。AI算力相关产品服务上调约5%-30%，并行文件存储上调约30%。此前，AWS于1月率先打破近20年"只降不升"传统，对机器学习实例提价约15%；谷歌云更激进，AI基础设施价格最高涨幅达100%。',
    summary: '百度智能云AI算力产品涨价5%-30%，全球云厂商集体进入涨价周期。',
    source: '百度智能云',
    sourceUrl: 'https://cloud.baidu.com/',
    coverImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: ['百度智能云', '涨价', 'AI算力', '云厂商'],
    publishedAt: '2026-04-07T09:30:00Z',
    viewCount: 5150,
  },
  {
    id: '6',
    title: '京东云承诺不涨价，全系核心产品价格保持稳定',
    content: '在阿里云、腾讯云、百度智能云相继宣布涨价之际，京东云于3月18日发布公告，郑重承诺全系核心产品不涨价，并将对多款产品实施更大力度优惠。京东云明确表示拒绝跟风涨价，现有云主机、AI算力、存储、网络等全系核心产品价格保持稳定，不新增涨价项、不提高收费标准。同时，京东云还将对数据库、中间件等多款产品实施更大力度的优惠措施，平均降幅超16%，最高降幅达40%。',
    summary: '京东云承诺全系核心产品不涨价，数据库等产品最高降40%，与涨价潮形成差异化竞争。',
    source: '京东云',
    sourceUrl: 'https://www.jdcloud.com/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '4',
    tags: ['京东云', '不涨价', '价格战', '云计算'],
    publishedAt: '2026-04-06T11:20:00Z',
    viewCount: 4780,
  },
  {
    id: '7',
    title: '算力银行概念兴起，东方国信实现双模式规模化商业验证',
    content: '随着工信部"算力银行"概念的提出，A股唯一同时实现"算力银行+算力超市"双模式规模化商业验证的公司东方国信受到市场关注。旗下AutoDL平台为国内C端算力零售绝对龙头，服务70万+开发者、6000+AI创业公司，用户复购率70%，毛利率超50%。公司手握字节跳动60亿元5-8年独家长单，内蒙古和林格尔智算中心一期260MW已于2026年投产。',
    summary: '算力银行概念兴起，东方国信AutoDL平台市占率超50%，手握字节60亿长单。',
    source: '东方国信',
    sourceUrl: 'https://www.bonc.com.cn/',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: ['算力银行', '东方国信', 'AutoDL', '智算中心'],
    publishedAt: '2026-04-05T13:00:00Z',
    viewCount: 6340,
  },
  {
    id: '8',
    title: '边缘计算+AI-RAN成为技术新战场，2026年被视为通用电信云落地元年',
    content: '4月6日，InterDigital宣布将在6G@UT论坛上展示AI增强服务和能效边缘智能的最新进展，其中"空中联邦学习"技术实现了多用户MIMO场景下的实时模型聚合。几乎同时，英伟达在MWC26上高调推动"AI Grid"战略，将无线接入网从单一的连接管道改造成分布式的AI推理工厂。在国内，2026年被业界视为通用电信云落地元年，《广州市现代化基础设施发展"十五五"规划》明确提出构建以智能算力为主的算力供给体系。',
    summary: '边缘计算与AI-RAN深度融合，英伟达推动AI Grid战略，2026年成为电信云落地元年。',
    source: '通信产业网',
    sourceUrl: 'https://www.ccidcom.com/',
    categoryId: '3',
    tags: ['边缘计算', 'AI-RAN', '电信云', '英伟达'],
    publishedAt: '2026-04-04T15:30:00Z',
    viewCount: 4120,
  },
  {
    id: '9',
    title: '中国日均Token调用量突破140万亿，较两年前增长超千倍',
    content: '据国家数据局数据，2026年3月中国日均Token调用量已突破140万亿，较两年前的1000亿暴增超千倍。智谱2026年一季度API定价提升83%后，市场依然供不应求，调用量反增400%。摩根大通预测，中国的AI推理Token消耗量预计将从2025年的约10千万亿增长至2030年的约3900千万亿，五年间增长约370倍。Token需求的爆炸式增长是本轮云厂商集体涨价的直接导火索。',
    summary: '中国日均Token调用量突破140万亿，两年增长超千倍，推动云厂商涨价潮。',
    source: '国家数据局',
    sourceUrl: 'http://www.snda.gov.cn/',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    categoryId: '5',
    tags: ['Token', 'AI推理', '国家数据局', '算力需求'],
    publishedAt: '2026-04-03T10:00:00Z',
    viewCount: 7890,
  },
  {
    id: '10',
    title: '谷歌云宣布大幅涨价，AI基础设施价格最高涨幅达100%',
    content: '谷歌云于2026年1月27日正式官宣涨价，自2026年5月1日起对Google Cloud、CDN Interconnect、Peering以及AI与计算基础设施服务进行价格调整。其中AI计算实例涨幅20%-50%，CDN出口带宽北美地区涨幅高达100%（从0.04美元/GiB涨至0.08美元/GiB），欧洲涨60%，亚洲涨42%。这是全球云厂商中最激进的涨价幅度，标志着云计算行业正式告别"折扣战"时代。',
    summary: '谷歌云CDN带宽北美涨100%，AI计算涨20%-50%，全球涨幅最激进。',
    source: 'Google Cloud',
    sourceUrl: 'https://cloud.google.com/',
    categoryId: '3',
    tags: ['谷歌云', 'CDN', '涨价', 'AI基础设施'],
    publishedAt: '2026-04-02T08:45:00Z',
    viewCount: 5560,
  },
  {
    id: '11',
    title: 'AWS率先打破20年降价传统，机器学习实例涨价15%',
    content: '亚马逊云科技（AWS）于2026年1月23日宣布上调其EC2机器学习容量块（Capacity Blocks for ML）价格约15%，其中p5e.48xlarge实例每小时费用由34.61美元涨至39.80美元。这是AWS近20年来首次打破"只降不升"的传统，打响全球云厂商涨价第一枪。此次涨价覆盖P5e/P5/P4d（NVIDIA GPU）、Trn2/Trn1（自研Trainium）等所有高端训练实例，美国西部地区涨幅更高。',
    summary: 'AWS打破20年降价传统，机器学习实例率先涨价15%，打响全球涨价第一枪。',
    source: 'AWS',
    sourceUrl: 'https://aws.amazon.com/',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    categoryId: '2',
    tags: ['AWS', '涨价', '机器学习', 'GPU实例'],
    publishedAt: '2026-04-01T14:20:00Z',
    viewCount: 6230,
  },
  {
    id: '12',
    title: '网宿科技CDN业务向智算成功转型，2025年前三季度净利同比增长43.6%',
    content: '网宿科技CDN业务向智算成功转型，2025年前三季度净利润同比增长43.6%，资产负债率仅15%，现金流质量优秀。作为A股资金认可度高的算力股，网宿科技受益于CDN涨价带来的利润弹性及出海贡献的收入增量，同时卡位边缘AI推理市场。机构分析指出，AI推理将大规模向边缘侧下沉，针对边缘数据直接计算，减少向中心云数据传输，边缘云/CDN厂商将迎来价值重估机遇。',
    summary: '网宿科技CDN转型智算成效显著，净利增长43.6%，卡位边缘AI推理市场。',
    source: '网宿科技',
    sourceUrl: 'https://www.wangsu.com/',
    categoryId: '3',
    tags: ['网宿科技', 'CDN', '边缘AI', '智算转型'],
    publishedAt: '2026-03-31T11:30:00Z',
    viewCount: 3980,
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
