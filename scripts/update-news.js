/**
 * 自动更新行业新闻脚本
 * 每5天自动抓取最新的数据中心、IDC、CDN、云计算行业新闻
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 模拟新闻数据源 - 实际使用时可以替换为真实的新闻API或爬虫
const newsTemplates = [
  {
    categoryId: '5',
    tags: ['政策', '工信部', '算力', '数据中心'],
    sources: [
      { name: '工信部官网', url: 'https://www.miit.gov.cn/' },
      { name: '新华网', url: 'http://www.xinhuanet.com/' },
      { name: '国家数据局', url: 'http://www.snda.gov.cn/' }
    ]
  },
  {
    categoryId: '4',
    tags: ['阿里云', '腾讯云', '云厂商', 'AI算力'],
    sources: [
      { name: '阿里云', url: 'https://www.aliyun.com/' },
      { name: '腾讯云', url: 'https://cloud.tencent.com/' },
      { name: '百度智能云', url: 'https://cloud.baidu.com/' },
      { name: '京东云', url: 'https://www.jdcloud.com/' },
      { name: '华为云', url: 'https://www.huaweicloud.com/' }
    ]
  },
  {
    categoryId: '3',
    tags: ['CDN', '边缘计算', '网宿科技', '加速'],
    sources: [
      { name: '网宿科技', url: 'https://www.wangsu.com/' },
      { name: '阿里云', url: 'https://www.aliyun.com/' },
      { name: '腾讯云', url: 'https://cloud.tencent.com/' },
      { name: 'Google Cloud', url: 'https://cloud.google.com/' }
    ]
  },
  {
    categoryId: '2',
    tags: ['IDC', '数据中心', '算力租赁', '智算中心'],
    sources: [
      { name: 'IDC圈', url: 'https://www.idcquan.com/' },
      { name: 'AWS', url: 'https://aws.amazon.com/' },
      { name: '东方国信', url: 'https://www.bonc.com.cn/' },
      { name: '润泽科技', url: 'https://www.zeroidc.com/' }
    ]
  },
  {
    categoryId: '1',
    tags: ['数据中心', '液冷', 'PUE', '绿色数据中心'],
    sources: [
      { name: '数据中心世界', url: 'https://www.dcw.com.cn/' },
      { name: 'IDC圈', url: 'https://www.idcquan.com/' },
      { name: 'TechWeb', url: 'https://www.techweb.com.cn/' }
    ]
  },
  {
    categoryId: '6',
    tags: ['风险提示', '算力租赁', '涨价', '供需错配'],
    sources: [
      { name: 'SemiAnalysis', url: 'https://www.semianalysis.com/' },
      { name: '财经网', url: 'https://www.caijing.com.cn/' },
      { name: '通信产业网', url: 'https://www.ccidcom.com/' }
    ]
  }
];

// 新闻标题模板
const titleTemplates = {
  '5': [
    '工信部发布{policy}，推动{industry}发展',
    '国家数据局：到{year}年{target}',
    '新政策支持{industry}，{benefit}',
    '{region}发布{policy}，{impact}'
  ],
  '4': [
    '{company}宣布{product}涨价{percent}',
    '{company}发布新一代{product}',
    '{company}{product}正式商用，{feature}',
    '{company}与{partner}达成{cooperation}'
  ],
  '3': [
    '{company}CDN{feature}，{benefit}',
    '边缘计算{feature}，{company}布局{market}',
    '{company}宣布CDN{action}，{impact}'
  ],
  '2': [
    '{company}新建{scale}数据中心，投资{amount}',
    '算力租赁{feature}，{company}{action}',
    '{region}智算中心{status}，{scale}投产',
    '{company}IDC{feature}，{benefit}'
  ],
  '1': [
    '数据中心{technology}技术{feature}',
    '{company}数据中心PUE降至{value}，{achievement}',
    '{scale}数据中心{status}，采用{technology}'
  ],
  '6': [
    '{industry}{risk}，{impact}',
    '{product}价格{action}{percent}，{impact}',
    '算力市场{status}，{suggestion}'
  ]
};

// 新闻内容模板
const contentTemplates = {
  '5': `据{name}报道，{date}，{department}正式发布《{policy}》。该政策明确提出{target}，将重点推进{focus}。分析人士指出，此举将{impact}，预计{forecast}。`,
  '4': `{company}于{date}发布公告，宣布{announcement}。此次调整涉及{scope}，{detail}。公司表示，{reason}。业内专家认为，{analysis}。`,
  '3': `{company}今日宣布，{announcement}。新功能将{feature}，可{benefit}。目前该服务已覆盖{coverage}，预计{forecast}。`,
  '2': `{company}宣布{announcement}，计划{plan}。该项目{detail}，预计{timeline}。此举将{impact}，{analysis}。`,
  '1': `随着{driver}，{technology}成为数据中心{application}。{date}，{company}发布{product}，{feature}。业内预计，{forecast}。`,
  '6': `近期，{phenomenon}，引发市场关注。数据显示，{data}。分析指出，{analysis}。专家建议，{suggestion}。`
};

// 生成随机数
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 从数组中随机选择
const pick = (arr) => arr[random(0, arr.length - 1)];

// 生成日期（最近7天内）
const generateDate = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split('T')[0];
};

// 生成新闻标题
const generateTitle = (categoryId, vars) => {
  const templates = titleTemplates[categoryId];
  let title = pick(templates);
  
  Object.keys(vars).forEach(key => {
    title = title.replace(`{${key}}`, vars[key]);
  });
  
  return title;
};

// 生成新闻内容
const generateContent = (categoryId, vars) => {
  const template = contentTemplates[categoryId];
  let content = template;
  
  Object.keys(vars).forEach(key => {
    content = content.replace(`{${key}}`, vars[key]);
  });
  
  return content;
};

// 生成单条新闻
const generateNewsItem = (id, daysAgo) => {
  const template = pick(newsTemplates);
  const source = pick(template.sources);
  const date = generateDate(daysAgo);
  
  // 根据分类生成不同的变量
  const vars = {
    // 通用变量
    name: source.name,
    date: date,
    company: pick(['阿里云', '腾讯云', '华为云', '百度智能云', '京东云', 'AWS', '谷歌云', '微软云']),
    percent: `${random(5, 50)}%`,
    
    // 政策类
    policy: pick(['数据中心发展行动计划', '算力基础设施建设指南', '云计算服务管理办法', '新型数据中心发展指导意见']),
    department: pick(['工信部', '国家数据局', '发改委', '网信办']),
    industry: pick(['数据中心', '云计算', '算力产业', 'IDC行业']),
    year: '2028',
    target: pick(['基本建成普惠算力服务体系', '实现数据中心绿色化转型', '算力规模超过300 EFLOPS']),
    benefit: pick(['降低中小企业算力门槛', '推动行业数字化转型', '促进区域协调发展']),
    region: pick(['北京', '上海', '广东', '浙江', '江苏']),
    impact: pick(['显著降低运营成本', '提升产业竞争力', '推动技术创新']),
    focus: pick(['绿色数据中心建设', '算力网络协同发展', '边缘计算节点部署']),
    forecast: pick(['到2026年底初见成效', '未来三年将持续增长', '行业将迎来新一轮发展机遇']),
    
    // 产品类
    product: pick(['AI算力服务', '容器服务', '对象存储', 'CDN加速', '边缘计算节点']),
    announcement: pick(['产品价格调整通知', '新一代产品正式发布', '服务全面升级', '与合作伙伴达成战略合作']),
    scope: pick(['全线AI算力产品', '核心云服务组件', '存储与计算服务', '网络加速产品']),
    detail: pick(['价格上调5%-34%', '性能提升40%以上', '新增多项AI功能', '覆盖全球主要区域']),
    reason: pick(['全球AI算力需求激增', '核心硬件成本上涨', '为保障服务质量', '持续投入技术研发']),
    analysis: pick(['标志着行业进入涨价周期', '将推动云服务商差异化竞争', '有利于行业长期健康发展', '企业需优化算力使用策略']),
    feature: pick(['支持智能调度', '实现秒级扩容', '提供全栈解决方案', '集成AI推理能力']),
    coverage: pick(['全国主要城市', '亚太地区核心节点', '全球50+区域', '一带一路沿线国家']),
    
    // IDC类
    scale: pick(['超大规模', '大型', '中型']),
    amount: pick(['50亿美元', '100亿元人民币', '30亿美元']),
    plan: pick(['新建3个数据中心区域', '扩建现有智算中心', '布局边缘计算节点']),
    timeline: pick(['2026年底前投产', '分三期建设完成', '未来两年逐步落地']),
    status: pick(['正式开工', '一期已建成', '进入试运营阶段']),
    
    // 数据中心类
    driver: pick(['AI算力需求激增', '双碳目标推进', '数字化转型加速']),
    technology: pick(['液冷', 'AI智能运维', '全栈自研', '模块化']),
    application: pick(['散热主流方案', '运维效率提升关键', '建设标准配置']),
    value: pick(['1.15', '1.2', '1.25']),
    achievement: pick(['达到行业领先水平', '获得绿色数据中心认证', '刷新行业记录']),
    
    // 风险类
    phenomenon: pick(['算力租赁价格持续上涨', '云厂商集体调价', '高端GPU供应紧张']),
    risk: pick(['供需错配加剧', '成本压力传导', '市场竞争白热化']),
    data: pick(['H100租赁价格5个月涨40%', '日均Token调用量突破140万亿', '算力成本占企业支出比例上升至30%']),
    suggestion: pick(['企业应优化算力使用策略', '关注国产替代方案', '提前锁定长期合约']),
    action: pick(['上涨', '下调', '波动'])
  };
  
  const title = generateTitle(template.categoryId, vars);
  const content = generateContent(template.categoryId, vars);
  
  return {
    id: String(id),
    title,
    content,
    summary: content.substring(0, 80) + '...',
    source: source.name,
    sourceUrl: source.url,
    coverImage: random(0, 10) > 3 ? `https://images.unsplash.com/photo-${pick([
      '1558494949-ef010cbdcc31',
      '1544197150-b99a580bb7a8',
      '1560264280-88b68371db39',
      '1451187580459-43490279c0fa',
      '1518770660439-4636190af475'
    ])}?w=800&h=400&fit=crop` : undefined,
    categoryId: template.categoryId,
    tags: template.tags.slice(0, random(2, 4)),
    publishedAt: `${date}T${String(random(8, 18)).padStart(2, '0')}:${String(random(0, 59)).padStart(2, '0')}:00Z`,
    viewCount: random(1500, 9000)
  };
};

// 主函数
const main = () => {
  console.log('🚀 开始生成最新行业新闻...');
  
  // 生成12条新闻（最近7天内）
  const newsItems = [];
  for (let i = 0; i < 12; i++) {
    newsItems.push(generateNewsItem(i + 1, random(0, 7)));
  }
  
  // 按日期排序（最新的在前）
  newsItems.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  
  // 重新分配ID
  newsItems.forEach((item, index) => {
    item.id = String(index + 1);
  });
  
  // 读取现有的 mockData.ts 文件
  const mockDataPath = path.join(__dirname, '..', 'src', 'data', 'mockData.ts');
  let mockDataContent = fs.readFileSync(mockDataPath, 'utf-8');
  
  // 提取文件的其他部分（categories 和函数）
  const categoriesMatch = mockDataContent.match(/export const categories[\s\S]*?\];/);
  const functionsMatch = mockDataContent.match(/export const getNewsWithCategory[\s\S]*$/);
  
  if (!categoriesMatch || !functionsMatch) {
    console.error('❌ 无法解析 mockData.ts 文件结构');
    process.exit(1);
  }
  
  // 生成新的 mockNews 数组
  const mockNewsArray = JSON.stringify(newsItems, null, 2)
    .replace(/"([^"]+)":/g, '$1:')  // 移除 key 的引号
    .replace(/"/g, "'");  // 将双引号替换为单引号
  
  // 组装新的文件内容
  const newContent = `import type { Category, NewsItem } from '@/types';

${categoriesMatch[0]}

export const mockNews: NewsItem[] = ${mockNewsArray};

${functionsMatch[0]}`;
  
  // 写入文件
  fs.writeFileSync(mockDataPath, newContent, 'utf-8');
  
  console.log('✅ 新闻更新完成！');
  console.log(`📰 共生成 ${newsItems.length} 条新闻`);
  console.log('\n📋 新闻列表：');
  newsItems.forEach((item, index) => {
    console.log(`  ${index + 1}. [${item.source}] ${item.title.substring(0, 50)}...`);
  });
};

main();
