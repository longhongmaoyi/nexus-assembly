import { t, type LocalizedText } from '@/lib/i18n'

export const SITE = {
  name: 'NEXUS Assembly Centre',
  shortName: 'NEXUS',
  legalName: 'Nexus Canada Assembly Centre Inc.',
  url: 'https://nexusassembly.ca',
  email: 'info@nexusassembly.ca',
  phone: '+1 416 846 3253',
  phoneHref: '+14168463253',
  addressLine: '125 Cartmel Drive, Markham, Ontario L3S 1K8, Canada',
  tagline: t(
    'Built to Canadian Standards. Delivered with Confidence.',
    '加拿大标准制造，交付值得信赖。',
    'Construit selon les normes canadiennes. Livré en toute confiance.'
  ),
  description: t(
    'NEXUS Assembly Centre combines global manufacturing with Canadian assembly, inspection and CSA-compliant certification to deliver modular living spaces, mobile commercial units, enclosed trailers, industrial solutions and commercial waste solutions.',
    'NEXUS 组装中心将全球制造与加拿大本地组装、检验及 CSA 合规认证相结合，交付模块化居住空间、移动商业单元、封闭式拖车、工业解决方案与商业垃圾解决方案。',
    'Le Centre d’assemblage NEXUS allie fabrication mondiale, assemblage canadien, inspection et certification aux normes CSA pour livrer des espaces de vie modulaires, des unités commerciales mobiles, des remorques fermées, des solutions industrielles et des solutions de déchets commerciaux.'
  ),
  hours: t(
    'Mon–Fri · 9:00 AM – 6:00 PM ET',
    '周一至周五 · 9:00 – 18:00（东部时间）',
    'Lun–ven · 9 h – 18 h (HE)'
  ),
}

export interface NavChild {
  href: string
  label: LocalizedText
  desc: LocalizedText
}

export interface NavItem {
  label: LocalizedText
  href?: string
  children?: NavChild[]
}

export const NAV: NavItem[] = [
  { label: t('Home', '首页', 'Accueil'), href: '' },
  {
    label: t('Products', '产品中心', 'Produits'),
    children: [
      {
        href: '/products/modular-living-spaces',
        label: t('Modular Living Spaces', '模块化居住空间', 'Espaces de vie modulaires'),
        desc: t(
          'Cabins, tiny homes & garden suites',
          '小屋、微型住宅与花园套房',
          'Chalets, micro-maisons et suites de jardin'
        ),
      },
      {
        href: '/products/mobile-commercial-units',
        label: t('Mobile Commercial Units', '移动商业单元', 'Unités commerciales mobiles'),
        desc: t(
          'Food trailers & mobile retail',
          '餐车拖车与移动零售',
          'Remorques-restaurants et commerce mobile'
        ),
      },
      {
        href: '/products/enclosed-trailers',
        label: t('Enclosed Trailers', '封闭式拖车', 'Remorques fermées'),
        desc: t(
          'Cargo, contractor & custom builds',
          '货运、工程与定制车型',
          'Chargement, entrepreneurs et sur mesure'
        ),
      },
      {
        href: '/products/industrial-solutions',
        label: t('Industrial Solutions', '工业解决方案', 'Solutions industrielles'),
        desc: t(
          'Equipment pods & workforce housing',
          '设备舱与工人宿舍',
          'Modules techniques et hébergement pour travailleurs'
        ),
      },
      {
        href: '/products/commercial-waste-solutions',
        label: t(
          'Commercial Waste Solutions',
          '商业垃圾解决方案',
          'Solutions de déchets commerciaux'
        ),
        desc: t(
          'Enclosed waste & recycling enclosures',
          '封闭式垃圾房与回收站',
          'Locaux fermés pour déchets et recyclage'
        ),
      },
      {
        href: '/products',
        label: t('View All Products', '查看全部产品', 'Voir tous les produits'),
        desc: t('Browse the full catalogue', '浏览完整产品目录', 'Parcourir le catalogue complet'),
      },
    ],
  },
  { label: t('Customization', '产品定制', 'Personnalisation'), href: '/configure' },
  { label: t('Assembly', '组装中心', 'Assemblage'), href: '/assembly' },
  { label: t('Quality & Compliance', '质量与合规', 'Qualité et conformité'), href: '/engineering-compliance' },
  {
    label: t('Company', '关于我们', 'Entreprise'),
    children: [
      {
        href: '/suppliers',
        label: t('For Suppliers', '供应商合作', 'Fournisseurs'),
        desc: t('Become a manufacturing partner', '成为我们的制造伙伴', 'Devenir partenaire de fabrication'),
      },
      {
        href: '/clients',
        label: t('For Clients', '客户中心', 'Clients'),
        desc: t('Ordering, delivery & support', '订购、交付与售后支持', 'Commande, livraison et soutien'),
      },
      {
        href: '/about',
        label: t('About Us', '关于我们', 'À propos'),
        desc: t('Who we are & how we work', '了解我们的团队与模式', 'Qui nous sommes et comment nous travaillons'),
      },
      {
        href: '/contact',
        label: t('Contact', '联系我们', 'Contact'),
        desc: t('Reach our team in Markham', '联系万锦市团队', 'Joignez notre équipe à Markham'),
      },
    ],
  },
]

export const CTA = {
  requestQuote: t('Request a Quote', '获取报价', 'Demander une soumission'),
  configureProduct: t('Configure Your Product', '定制您的产品', 'Configurez votre produit'),
  contactUs: t('Contact Us', '联系我们', 'Nous joindre'),
  browseProducts: t('Browse Products', '浏览产品', 'Voir les produits'),
  learnMore: t('Learn More', '了解更多', 'En savoir plus'),
}

export const FOOTER_ABOUT: LocalizedText = t(
  'Canadian assembly, inspection and certification for globally manufactured modular solutions. One team, one standard, delivered across Canada.',
  '为全球制造的模块化解决方案提供加拿大本地组装、检验与认证服务。一个团队，一个标准，交付至加拿大全境。',
  'Assemblage, inspection et certification canadiens pour des solutions modulaires fabriquées à l’échelle mondiale. Une équipe, une norme, livrées partout au Canada.'
)

export const FOOTER_COLS: { title: LocalizedText; links: NavChild[] }[] = [
  {
    title: t('Products', '产品系列', 'Produits'),
    links: [
      {
        href: '/products/modular-living-spaces',
        label: t('Modular Living Spaces', '模块化居住空间', 'Espaces de vie modulaires'),
        desc: t('', '', ''),
      },
      {
        href: '/products/mobile-commercial-units',
        label: t('Mobile Commercial Units', '移动商业单元', 'Unités commerciales mobiles'),
        desc: t('', '', ''),
      },
      {
        href: '/products/enclosed-trailers',
        label: t('Enclosed Trailers', '封闭式拖车', 'Remorques fermées'),
        desc: t('', '', ''),
      },
      {
        href: '/products/industrial-solutions',
        label: t('Industrial Solutions', '工业解决方案', 'Solutions industrielles'),
        desc: t('', '', ''),
      },
      {
        href: '/products/commercial-waste-solutions',
        label: t(
          'Commercial Waste Solutions',
          '商业垃圾解决方案',
          'Solutions de déchets commerciaux'
        ),
        desc: t('', '', ''),
      },
      { href: '/configure', label: t('Customization', '产品定制', 'Personnalisation'), desc: t('', '', '') },
    ],
  },
  {
    title: t('Company', '公司信息', 'Entreprise'),
    links: [
      { href: '/assembly', label: t('Assembly Centre', '组装中心', "Centre d'assemblage"), desc: t('', '', '') },
      { href: '/engineering-compliance', label: t('Quality & Compliance', '质量与合规', 'Qualité et conformité'), desc: t('', '', '') },
      { href: '/suppliers', label: t('For Suppliers', '供应商合作', 'Fournisseurs'), desc: t('', '', '') },
      { href: '/clients', label: t('For Clients', '客户中心', 'Clients'), desc: t('', '', '') },
      { href: '/about', label: t('About Us', '关于我们', 'À propos'), desc: t('', '', '') },
      { href: '/contact', label: t('Contact', '联系我们', 'Contact'), desc: t('', '', '') },
    ],
  },
]

export const CONTACT_LABELS = {
  address: t('Address', '地址', 'Adresse'),
  phone: t('Phone', '电话', 'Téléphone'),
  email: t('Email', '邮箱', 'Courriel'),
  hours: t('Hours', '营业时间', 'Heures'),
}

export const LEGAL = {
  rights: t('All rights reserved.', '版权所有，保留所有权利。', 'Tous droits réservés.'),
  privacy: t('Privacy Policy', '隐私政策', 'Politique de confidentialité'),
  terms: t('Terms of Service', '服务条款', "Conditions d'utilisation"),
}
