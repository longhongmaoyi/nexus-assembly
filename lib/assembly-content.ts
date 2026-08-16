import type { Locale, LocalizedText } from '@/lib/i18n'

const t = (en: string, zh: string, fr: string): LocalizedText => ({ en, zh, fr })

export const assemblyNavigation = [
  { slug: 'home', label: t('Home', '首页', 'Accueil') },
  { slug: 'products', label: t('Products', '产品中心', 'Produits') },
  { slug: 'assembly-centre', label: t('Assembly Centre', '组装中心', 'Centre d\'assemblage') },
  { slug: 'about', label: t('About Us', '关于我们', 'À propos') },
  { slug: 'why-nexus', label: t('Why NEXUS', '选择NEXUS', 'Pourquoi NEXUS') },
  { slug: 'resources', label: t('Resources', '资源中心', 'Ressources') },
  { slug: 'contact', label: t('Contact', '联系我们', 'Contact') },
]

export const assemblyCopy = {
  nav: {
    quote: t('Get a Quote', '获取报价', 'Demander un devis'),
    search: t('Search', '搜索', 'Rechercher'),
  },
  hero: {
    eyebrow: t('BUILT FOR CANADA. ASSEMBLED IN CANADA.', '为加拿大制造，在加拿大组装。', 'FABRIQUÉ POUR LE CANADA. ASSEMBLÉ AU CANADA.'),
    title: t('ONE CENTRE. MULTIPLE SOLUTIONS.', '一个组装中心，多种解决方案。', 'UN SEUL CENTRE. DES SOLUTIONS MULTIPLES.'),
    subtitle: t(
      'Utility trailers, food trailers, modular spaces, enclosed cargo and commercial waste — all assembled to Canadian standards.',
      '通用拖车、食品车、模块化空间、封闭货箱及商业废物方案 — 均符合加拿大标准。',
      'Remorques utilitaires, chariots de restauration, espaces modulaires, cargo fermé et déchets commerciaux — assemblés selon les normes canadiennes.'
    ),
    services: [
      t('Utility Trailer', '通用拖车', 'Remorque utilitaire'),
      t('Food Trailer', '食品车', 'Chariot de restauration'),
      t('Modular Space', '模块化空间', 'Espace modulaire'),
      t('Enclosed Cargo', '封闭货箱', 'Cargo fermé'),
      t('Commercial Waste', '商业废物方案', 'Solutions de déchets'),
    ],
    primaryCta: t('Explore Products', '产品中心', 'Découvrir les produits'),
    secondaryCta: t('About Our Assembly Centre', '了解组装中心', 'À propos de notre centre d\'assemblage'),
  },
  features: [
    { icon: 'Import', label: t('Import', '进口', 'Importation') },
    { icon: 'Assembly', label: t('Assembly', '组装', 'Assemblage') },
    { icon: 'Customization', label: t('Customization', '定制改装', 'Personnalisation') },
    { icon: 'QualityControl', label: t('Quality Control', '质量检验', 'Contrôle qualité') },
    { icon: 'Compliance', label: t('Compliance', '合规认证', 'Conformité') },
    { icon: 'Delivery', label: t('Delivery', '交付', 'Livraison') },
  ],
  // PLACEHOLDER: stats from AI mockup — need client confirmation
  stats: [
    { icon: 'StatTruck', value: '10,000+', label: t('Trailers Assembled', '拖车组装总数', 'Remorques assemblées') },
    { icon: 'StatHandshake', value: '50+', label: t('Commercial Partners', '商业合作伙伴', 'Partenaires commerciaux') },
    { icon: 'StatBuilding', value: '5,000 m²+', label: t('Assembly Facility', '组装基地', 'Surface d\'assemblage') },
    { icon: 'StatShield', value: '100%', label: t('Canadian Standards', '符合加拿大标准', 'Normes canadiennes') },
    { icon: 'StatLeaf', value: 'One-Stop', label: t('Import to Delivery', '一站式服务', 'De l\'importation à la livraison') },
  ],
  productCategories: {
    'utility-trailer': t('Utility Trailer', '通用拖车', 'Remorque utilitaire'),
    'food-trailer': t('Food Trailer', '食品车', 'Chariot de restauration'),
    'modular-space': t('Modular Space', '模块化空间', 'Espace modulaire'),
    'enclosed-cargo': t('Enclosed Cargo', '封闭货箱', 'Cargo fermé'),
    'waste-solutions': t('Waste Solutions', '废物解决方案', 'Solutions de déchets'),
  } as Record<string, LocalizedText>,
  productsSection: {
    eyebrow: t('Our Product Line', '产品系列', 'Notre gamme de produits'),
    body: t(
      'Commercial Solutions for Business, Construction, Retail and More.',
      '面向商业、建筑、零售等行业的商业解决方案。',
      'Des solutions commerciales pour les entreprises, la construction, le commerce de détail et plus encore.'
    ),
    tabAll: t('All', '全部', 'Tous'),
    viewDetails: t('View Details', '查看详情', 'Voir les détails'),
    badgeHot: t('Hot', '热销', 'Populaire'),
  },
  products: [
    {
      category: 'utility-trailer',
      badge: t('Hot', '热门', 'Populaire'),
      title: t('U714 Hydraulic Dump Trailer', 'U714 液压倾卸车', 'Chariot déversoir hydraulique U714'),
      specs: [
        t('7\' x 14\' | 14,000 LB GVWR', '7\' x 14\' | 14,000 磅总重量', '7\' x 14\' | 14 000 lb PTAC'),
        t('Scissor Lift Hydraulic', '剪刀铰升降液压', 'Levage hydraulique à ciseaux'),
        t('Heavy-Duty Steel Frame', '重型钢架', 'Châssis acier lourd'),
      ],
      image: '/images/products/utility-trailer.webp',
      href: '/products/utility-trailers/u714',
    },
    {
      category: 'food-trailer',
      badge: null,
      title: t('Food Trailer', '食品车', 'Chariot de restauration'),
      specs: [
        t('6\' x 12\' | Full Kitchen Equipment', '6\' x 12\' | 完整厨房设备', '6\' x 12\' | Équipement de cuisine complète'),
        t('Stainless Steel Interior', '不锈钢内部', 'Intérieur en acier inoxydable'),
        t('Mobile-Ready Design', '移动就绪设计', 'Conçu pour la mobilité'),
      ],
      image: '/images/products/food-trailer.webp',
      href: '/products/food-trailers/standard',
    },
    {
      category: 'modular-space',
      badge: null,
      title: t('Modular Space / Pods', '模块化空间/机柜', 'Espace modulaire / Pods'),
      specs: [
        t('20\' x 24\' | Pre-fabricated Structure', '20\' x 24\' | 预制结构', '20\' x 24\' | Structure préfabriquée'),
        t('Climate-Controlled', '气候控制', 'Climatisation contrôlée'),
        t('Insulated Walls & Roof', '隔热墙壁和屋顶', 'Murs et toiture isolants'),
      ],
      image: '/images/products/modular-space.webp',
      href: '/products/modular-spaces/standard',
    },
    {
      category: 'enclosed-cargo',
      badge: null,
      title: t('Enclosed Cargo Trailer', '封闭货箱拖车', 'Remorque cargo fermée'),
      specs: [
        t('6\' x 12\' | Secure Design', '6\' x 12\' | 安全设计', '6\' x 12\' | Design sécurisé'),
        t('Aluminum Exterior', '铝合金外壳', 'Extérieur en aluminium'),
        t('Weatherproof Sealing', '防水密封', 'Étanche à l\'eau'),
      ],
      image: '/images/products/enclosed-cargo.png',
      href: '/products/enclosed-cargo/standard',
    },
    {
      category: 'waste-solutions',
      badge: null,
      title: t('Commercial Waste Solutions', '商业废物解决方案', 'Solutions de déchets commerciaux'),
      specs: [
        t('2yd - 40yd | Hook Lift / Roll Off', '2yd - 40yd | 钩起/滚动式', '2yd - 40yd | Système de levage'),
        t('Steel Construction', '钢质结构', 'Construction en acier'),
        t('Custom Sizing Available', '可定制尺寸', 'Dimensions personnalisables'),
      ],
      image: '/images/products/waste-solutions.webp',
      href: '/products/waste-solutions/standard',
    },
  ],
  industries: {
    eyebrow: t('Industries We Serve', '我们服务的行业', 'Industries desservies'),
  },
  industryTiles: [
    { key: 'construction', image: '/images/industries/construction.png', label: t('Construction', '建筑工程', 'Construction') },
    { key: 'food-beverage', image: '/images/industries/food-beverage.png', label: t('Food & Beverage', '餐饮', 'Restauration') },
    { key: 'retail', image: '/images/industries/retail.png', label: t('Retail & Pop-up', '零售快闪', 'Commerce de détail') },
    { key: 'municipal', image: '/images/industries/municipal.png', label: t('Municipal', '政府与公共设施', 'Municipal') },
    { key: 'agriculture', image: '/images/industries/agriculture.png', label: t('Agriculture', '农业', 'Agriculture') },
    { key: 'events', image: '/images/industries/events.png', label: t('Events', '活动与展览', 'Événements') },
  ],
  whyChoose: {
    eyebrow: t('Why Choose NEXUS', '为什么选择我们', 'Pourquoi choisir NEXUS'),
    features: [
      { icon: 'CanadianAssembly', title: t('Canadian Assembly', '加拿大组装', 'Assemblage canadien'), subtitle: t('All products assembled in Canada to local standards.', '所有产品在加拿大根据本地标准组装。', 'Tous les produits sont assemblés au Canada selon les normes locales.') },
      { icon: 'Quality', title: t('High Quality', '高品质', 'Haute qualité'), subtitle: t('Rigorous quality control at every stage.', '每一个阶段都有严格的质量控制。', 'Contrôle qualité rigoureux à chaque étape.') },
      { icon: 'Customization', title: t('Flexible Customization', '灵活定制', 'Personnalisation flexible'), subtitle: t('Tailored to your specific business needs.', '根据您的具体业务需求定制。', 'Adapté à vos besoins spécifiques.') },
      { icon: 'FastDelivery', title: t('Fast Delivery', '快速交付', 'Livraison rapide'), subtitle: t('Efficient supply chain and assembly process.', '高效的供应链和组装流程。', 'Chaîne d\'approvisionnement et processus d\'assemblage efficaces.') },
      { icon: 'Value', title: t('Competitive Value', '有竞争力的价值', 'Valeur compétitive'), subtitle: t('Better quality, better price.', '更好的质量，更好的价格。', 'Meilleure qualité, meilleur prix.') },
    ],
  },
  process: {
    eyebrow: t('Our Process', '我们的流程', 'Notre processus'),
    title: t('From Parts to Solutions — Powered by NEXUS', '从零部件到解决方案，由 NEXUS 驱动', 'Des pièces aux solutions — Propulsé par NEXUS'),
  },
  processSteps: [
    { icon: 'Import', title: t('Import', '进口', 'Importation'), body: t('Global sourcing and logistics coordination.', '全球采购与物流协调。', 'Approvisionnement mondial et coordination logistique.') },
    { icon: 'Assembly', title: t('Assembly', '组装', 'Assemblage'), body: t('Integrated assembly and finishing in Canada.', '在加拿大完成集成组装与饰面。', 'Assemblage et finition intégrés au Canada.') },
    { icon: 'Customization', title: t('Customization', '定制', 'Personnalisation'), body: t('Tailored modifications to project specifications.', '根据项目规范进行定制修改。', 'Modifications personnalisées selon les spécifications.') },
    { icon: 'QualityControl', title: t('Quality Control', '质量控制', 'Contrôle qualité'), body: t('Inspection and testing before release.', '发布前进行检验和测试。', 'Inspection et test avant mise en service.') },
    { icon: 'Compliance', title: t('Compliance', '合规认证', 'Conformité'), body: t('Documentation and certification support.', '文件和认证支持。', 'Documentation et soutien à la certification.') },
    { icon: 'Delivery', title: t('Delivery', '交付', 'Livraison'), body: t('Final delivery and site handover.', '最终交付和现场移交。', 'Livraison finale et remise sur site.') },
  ],
  ctaBand: {
    title: t('From Parts to Solutions — Powered by NEXUS', '从零部件到解决方案，由 NEXUS 驱动', 'Des pièces aux solutions — propulsé par NEXUS'),
    body: t('Share your project details and our team will reach out with a tailored solution.', '分享您的项目详情，我们的团队将提供定制化解决方案。', 'Partagez les détails de votre projet et notre équipe vous contactera avec une solution sur mesure.'),
    primaryCta: t('Get a Quote', '获取报价', 'Demander un devis'),
    secondaryCta: t('Contact Us', '联系我们', 'Contactez-nous'),
  },
  newsletter: {
    eyebrow: t('Stay Updated', '保持更新', 'Restez informé'),
    title: t('Subscribe for Updates', '订阅最新资讯', 'S\'abonner aux mises à jour'),
    body: t('Get the latest updates on products, projects, and industry insights delivered to your inbox.', '获取最新产品、项目和行业见解通过邮箱发送到您的收件箱。', 'Recevez les dernières actualités sur les produits, projets et tendances sectorielles par courriel.'),
    inputPlaceholder: t('Your Email', '您的邮箱', 'Votre courriel'),
    inputAriaLabel: t('Email address for newsletter signup', '新闻通讯订阅邮箱地址', 'Adresse courriel pour l\'abonnement'),
    submitBtn: t('Subscribe', '订阅', 'S\'abonner'),
    successMsg: t('Thank you! Check your email to confirm your subscription.', '谢谢！请检查您的邮箱确认订阅。', 'Merci! Vérifiez votre courriel pour confirmer l\'abonnement.'),
    errorMsg: t('Please enter a valid email address.', '请输入有效的邮箱地址。', 'Veuillez saisir une adresse courriel valide.'),
    validating: t('Validating...', '验证中...', 'Validation...'),
  },
  footer: {
    tagline: t('NEXUS — One Stop Solution for Your Business', 'NEXUS — 您业务的一站式解决方案', 'NEXUS — une solution complète pour votre entreprise'),
    contactTitle: t('Contact', '联系我们', 'Contact'),
    emailLabel: t('Email', '邮箱', 'Courriel'),
    phoneLabel: t('Phone', '电话', 'Téléphone'),
    addressLabel: t('Address', '地址', 'Adresse'),
    address: t('125 Cartmel Drive, Markham, Ontario, Canada, L3S 1K8', '125 Cartmel Drive, Markham, Ontario, Canada, L3S 1K8', '125 Cartmel Drive, Markham, Ontario, Canada, L3S 1K8'),
    phone: t('+1 416 846 3253', '+1 416 846 3253', '+1 416 846 3253'),
    email: t('info@nexusassembly.ca', 'info@nexusassembly.ca', 'info@nexusassembly.ca'),
    legalName: t('NEXUS Canada Assembly Centre Inc.', 'NEXUS Canada Assembly Centre Inc.', 'NEXUS Canada Assembly Centre Inc.'),
    rights: t('All rights reserved.', '保留所有权利。', 'Tous droits réservés.'),
    languagesLabel: t('Languages', '语言', 'Langues'),
  },
  footerLinks: {
    products: {
      title: t('Products', '产品', 'Produits'),
      links: [
        { slug: 'utility-trailers', label: t('Utility Trailers', '通用拖车', 'Remorques utilitaires') },
        { slug: 'food-trailers', label: t('Food Trailers', '食品车', 'Chariots de restauration') },
        { slug: 'modular-spaces', label: t('Modular Spaces', '模块化空间', 'Espaces modulaires') },
        { slug: 'enclosed-cargo', label: t('Enclosed Cargo', '封闭货箱', 'Cargo fermé') },
        { slug: 'waste-solutions', label: t('Waste Solutions', '废物解决方案', 'Solutions de déchets') },
      ],
    },
    company: {
      title: t('Company', '公司', 'Entreprise'),
      links: [
        { slug: 'about', label: t('About Us', '关于我们', 'À propos') },
        { slug: 'assembly-centre', label: t('Assembly Centre', '组装中心', 'Centre d\'assemblage') },
        { slug: 'why-nexus', label: t('Why NEXUS', '为什么选择 NEXUS', 'Pourquoi NEXUS') },
        { slug: 'news', label: t('News', '新闻', 'Actualités') },
      ],
    },
    resources: {
      title: t('Resources', '资源', 'Ressources'),
      links: [
        { slug: 'buyers-guide', label: t('Buyer\'s Guide', '买家指南', 'Guide de l\'acheteur') },
        { slug: 'specifications', label: t('Specifications', '规格', 'Spécifications') },
        { slug: 'compliance', label: t('Compliance', '合规认证', 'Conformité') },
        { slug: 'contact', label: t('Contact', '联系', 'Contact') },
      ],
    },
  },
}
