import { t, type LocalizedText } from '@/lib/i18n'

export type PackageTierId = 'standard' | 'comfort' | 'premium'

export interface PackageTier {
  id: PackageTierId
  name: LocalizedText
  tagline: LocalizedText
}

export const PACKAGE_TIERS: PackageTier[] = [
  {
    id: 'standard',
    name: t('Standard Edition', '标准版', 'Édition Standard'),
    tagline: t('Essential, code-ready.', '必备配置，符合规范。', "L'essentiel, conforme aux codes."),
  },
  {
    id: 'comfort',
    name: t('Comfort Edition', '舒适版', 'Édition Confort'),
    tagline: t('Upgraded comfort for four-season use.', '舒适升级，四季适用。', 'Confort accru pour une utilisation quatre saisons.'),
  },
  {
    id: 'premium',
    name: t('Premium Edition', '尊享版', 'Édition Premium'),
    tagline: t('High-end, smart and accessible.', '高端智能，无障碍设计。', 'Haut de gamme, intelligent et accessible.'),
  },
]

export interface UpgradeOption {
  id: string
  name: LocalizedText
  description: LocalizedText
  examples: LocalizedText[]
}

export const UPGRADES: UpgradeOption[] = [
  {
    id: 'interior-finishes',
    name: t('Interior Finishes', '内饰装饰', 'Finitions intérieures'),
    description: t(
      'Flooring, wall panels, ceilings and colour schemes.',
      '地板、墙板、天花与整体配色方案。',
      'Planchers, panneaux muraux, plafonds et gammes de couleurs.'
    ),
    examples: [
      t('LVP or sheet vinyl flooring', 'LVP 锁扣地板或卷材地板', 'Plancher LVP ou vinyle en feuille'),
      t('Solid wood accents', '实木饰面', "Accents de bois massif"),
      t('Custom colour packages', '定制配色方案', 'Forfaits de couleurs sur mesure'),
    ],
  },
  {
    id: 'kitchen',
    name: t('Kitchen', '厨房', 'Cuisine'),
    description: t(
      'Cabinetry, countertops and certified appliances.',
      '橱柜、台面与认证电器。',
      'Armoires, comptoirs et électroménagers certifiés.'
    ),
    examples: [
      t('Quartz countertops', '石英石台面', 'Comptoirs de quartz'),
      t('Certified range & fridge', '认证炉灶与冰箱', 'Cuisinière et réfrigérateur certifiés'),
      t('Extra storage & island options', '额外储物与中岛选项', 'Rangement additionnel et options d’îlot'),
    ],
  },
  {
    id: 'bathroom',
    name: t('Bathroom', '卫浴', 'Salle de bain'),
    description: t(
      'Showers, vanities, fixtures and ventilation.',
      '淋浴间、洗手台、龙头五金与排风。',
      'Douche, meuble-lavabo, robinetterie et ventilation.'
    ),
    examples: [
      t('Walk-in shower', '步入式淋浴间', 'Douche à l’italienne'),
      t('Upgraded vanity & mirror', '升级洗手台与镜柜', 'Meuble-lavabo et miroir améliorés'),
      t('Heated floor option', '浴室地暖选项', 'Plancher chauffant en option'),
    ],
  },
  {
    id: 'hvac',
    name: t('HVAC & Ventilation', '暖通空调与通风', 'CVC et ventilation'),
    description: t(
      'Heating, cooling, heat recovery and ventilation sized for Canadian winters.',
      '为加拿大冬季量身配置的供暖、制冷、热回收与新风系统。',
      'Chauffage, climatisation, récupération de chaleur et ventilation dimensionnés pour les hivers canadiens.'
    ),
    examples: [
      t('Cold-climate heat pump', '寒冷气候热泵', 'Thermopompe pour climat froid'),
      t('HRV / ERV systems', 'HRV / ERV 新风换气系统', 'Systèmes VRC / VRE'),
      t('Ducted or ductless A/C', '管道式或无管道空调', 'Climatisation avec ou sans conduits'),
    ],
  },
  {
    id: 'doors-windows',
    name: t('Doors & Windows', '门窗', 'Portes et fenêtres'),
    description: t(
      'Entry doors, patio doors and glazing packages.',
      '入户门、露台门与玻璃配置。',
      'Portes d’entrée, portes-patio et ensembles vitrés.'
    ),
    examples: [
      t('Low-E insulated glass units', '低辐射中空玻璃', 'Vitrage isolant à faible émissivité'),
      t('Triple-glazed upgrade', '三玻两腔升级', 'Amélioration triple vitrage'),
      t('Steel or fiberglass entry doors', '钢质或玻璃纤维入户门', "Portes d'entrée en acier ou fibre de verre"),
    ],
  },
  {
    id: 'exterior-walls',
    name: t('Exterior Walls', '外墙', 'Murs extérieurs'),
    description: t(
      'Siding, trims and weather-protection finishes.',
      '外墙挂板、收边线条与耐候保护饰面。',
      'Parement, moulures et finitions de protection contre les intempéries.'
    ),
    examples: [
      t('Metal or LP SmartSide siding', '金属或 LP SmartSide 挂板', 'Parement métallique ou LP SmartSide'),
      t('Board-and-batten accents', '竖板条装饰', 'Accents planche-et-latte'),
      t('Winterized seal package', '冬季密封套件', 'Ensemble d’étanchéité hivernal'),
    ],
  },
  {
    id: 'furniture',
    name: t('Furniture', '家具', 'Mobilier'),
    description: t(
      'Built-in beds, seating, tables and storage solutions.',
      '固定床铺、座椅、桌台与储物方案。',
      'Lits intégrés, sièges, tables et solutions de rangement.'
    ),
    examples: [
      t('Murphy beds', '隐形壁床', 'Lits escamotables'),
      t('Built-in benches & dinettes', '固定座椅与餐桌组合', 'Bancs et tables intégrés'),
      t('Storage stairs', '储物楼梯', 'Escaliers de rangement'),
    ],
  },
  {
    id: 'smart-controls',
    name: t('Smart Controls', '智能控制', 'Commandes intelligentes'),
    description: t(
      'Thermostats, lighting, locks and monitoring.',
      '温控器、照明、门锁与远程监控。',
      'Thermostats, éclairage, serrures et surveillance.'
    ),
    examples: [
      t('Smart thermostats', '智能温控器', 'Thermostats intelligents'),
      t('Keyless entry', '无钥匙进入', 'Entrée sans clé'),
      t('Solar & battery monitoring', '太阳能与电池监控', 'Suivi solaire et batterie'),
    ],
  },
  {
    id: 'deck-addons',
    name: t('Deck & Add-ons', '露台及附加装置', 'Terrasse et ajouts'),
    description: t(
      'Decks, skirting, ramps, hitch and towing hardware.',
      '露台、围裙板、坡道、拖车架与牵引硬件。',
      'Terrasses, jupes, rampes, attelage et matériel de remorquage.'
    ),
    examples: [
      t('Composite decking', '复合木塑露台地板', 'Terrasse en composite'),
      t('Insulated skirting', '保温围裙板', 'Jupe isolée'),
      t('Tie-downs & anchoring', '固定与锚固系统', 'Ancrages et systèmes de fixation'),
    ],
  },
  {
    id: 'accessibility',
    name: t('Accessibility Features', '无障碍设施', "Fonctionnalités d'accessibilité"),
    description: t(
      'Barrier-free layouts, grab bars and ramp-ready entries.',
      '无障碍布局、安全扶手与坡道入口。',
      'Aménagements sans obstacles, barres d’appui et entrées prêtes pour rampe.'
    ),
    examples: [
      t('Wider doorways', '加宽门洞', 'Ouvertures de portes élargies'),
      t('Roll-in shower', '轮椅可进入淋浴间', 'Douche accessible en fauteuil roulant'),
      t('Barrier-free ramps', '无障碍坡道', 'Rampe sans obstacle'),
    ],
  },
  {
    id: 'other-accessories',
    name: t('Other Accessories', '其他配件', 'Autres accessoires'),
    description: t(
      'Roof racks, awnings, generators, solar and everything else.',
      '车顶架、遮阳篷、发电机、太阳能及其他各类配件。',
      'Galeries, auvents, génératrice, solaire et tout le reste.'
    ),
    examples: [
      t('Roof racks & ladders', '车顶架与爬梯', 'Galeries et échelles'),
      t('Awnings & exterior lighting', '遮阳篷与外部照明', 'Auvents et éclairage extérieur'),
      t('Generators & solar kits', '发电机与太阳能套件', 'Génératrices et trousses solaires'),
    ],
  },
]

export interface ProductPackage {
  id: PackageTierId
  features: LocalizedText[]
}

export interface Product {
  slug: string
  icon: string
  name: LocalizedText
  shortName: LocalizedText
  cardSub: LocalizedText
  tagline: LocalizedText
  description: [LocalizedText, LocalizedText]
  highlights: LocalizedText[]
  packages: ProductPackage[]
  upgradeIds: string[]
  image: string
}

export const PRODUCTS: Product[] = [
  {
    slug: 'modular-living-spaces',
    icon: 'modular',
    name: t('Modular Living Spaces', '模块化居住空间', 'Espaces de vie modulaires'),
    shortName: t('Modular Living', '模块化居住', 'Habitat modulaire'),
    cardSub: t('Cabins, tiny homes & garden suites', '小屋、微型住宅与花园套房', 'Chalets, micro-maisons et suites de jardin'),
    tagline: t(
      'Turn-key modular units assembled and certified for Canadian four-season living.',
      '即装即住的模块化单元，在加拿大组装并认证，适合四季居住。',
      'Des unités modulaires clés en main assemblées et certifiées pour la vie canadienne quatre saisons.'
    ),
    description: [
      t(
        'NEXUS modular living spaces arrive as complete, code-ready units — structure, envelope, electrical, plumbing, HVAC and interiors assembled and inspected under one roof.',
        'NEXUS 模块化居住空间以完整、符合规范的成套单元交付——结构、围护、电气、给排水、暖通空调与内饰均在同一厂区内完成组装与检验。',
        'Les espaces de vie modulaires NEXUS arrivent comme des unités complètes prêtes au code — structure, enveloppe, électricité, plomberie, CVC et intérieurs assemblés et inspectés sous un même toit.'
      ),
      t(
        'Choose a Standard, Comfort or Premium package, then personalize finishes, kitchen, bathroom, HVAC and accessibility with our engineering team reviewing every unit against Canadian standards before assembly begins.',
        '选择标准版、舒适版或尊享版套餐，再定制内饰、厨房、卫浴、暖通空调与无障碍配置；组装开始前，工程团队会依照加拿大标准审核每台单元。',
        'Choisissez un forfait Standard, Confort ou Premium, puis personnalisez les finitions, la cuisine, la salle de bain, le CVC et l’accessibilité — notre équipe d’ingénierie vérifie chaque unité selon les normes canadiennes avant l’assemblage.'
      ),
    ],
    highlights: [
      t('CSA Z240 / A277 certification paths', 'CSA Z240 / A277 认证路径', 'Parcours de certification CSA Z240 / A277'),
      t('Cold-climate envelope & high-performance windows', '寒冷气候围护结构与高性能门窗', 'Enveloppe pour climat froid et fenêtres haute performance'),
      t('Fully integrated electrical, plumbing and HVAC', '电气、给排水与暖通空调一体化集成', 'Électricité, plomberie et CVC entièrement intégrés'),
      t('Kitchen and bathroom included in every tier', '每个等级均含厨房与卫浴', 'Cuisine et salle de bain incluses dans chaque forfait'),
      t('Deck, skirting and anchoring options', '露台、围裙板与锚固选项', 'Options de terrasse, de jupe et d’ancrage'),
    ],
    packages: [
      {
        id: 'standard',
        features: [
          t('Efficient studio or one-bedroom layout', '高效的开间或一居室布局', 'Studio efficace ou aménagement à une chambre'),
          t('Standard insulation package', '标准保温配置', "Forfait d'isolation standard"),
          t('Kitchenette with certified appliances', '带认证电器的小厨房', 'Kitchenette avec électroménagers certifiés'),
          t('Complete three-piece bathroom', '完整三件套卫浴', 'Salle de bain complète trois pièces'),
          t('Electric baseboard heating', '电踢脚线供暖', 'Chauffage électrique à plinthes'),
          t('Standard windows and steel entry door', '标准窗户与钢制入户门', "Fenêtres standard et porte d'entrée en acier"),
        ],
      },
      {
        id: 'comfort',
        features: [
          t('Upgraded insulation, HRV-ready ventilation', '升级保温，预留 HRV 新风接口', 'Isolation améliorée, ventilation prête pour VRC'),
          t('Full kitchen with certified range and fridge', '完整厨房，含认证炉灶与冰箱', 'Cuisine complète avec cuisinière et réfrigérateur certifiés'),
          t('Finished bathroom with shower and vanity', '精装卫浴，含淋浴与洗手台', 'Salle de bain aménagée avec douche et meuble-lavabo'),
          t('Heat pump or furnace for cold climates', '寒冷气候热泵或采暖炉', 'Thermopompe ou fournaise pour climat froid'),
          t('Larger window packages', '加大窗户配置', 'Forfaits de fenêtres plus grandes'),
          t('Interior finish options', '内饰可选方案', 'Options de finitions intérieures'),
        ],
      },
      {
        id: 'premium',
        features: [
          t('Premium interior finishes and flooring', '高端内饰与地板', 'Finitions intérieures et planchers haut de gamme'),
          t('Smart climate, lighting and lock controls', '智能温控、照明与门锁控制', 'Commandes intelligentes de climat, d’éclairage et de serrures'),
          t('Upgraded kitchen and spa-style bathroom', '升级厨房与水疗式卫浴', 'Cuisine améliorée et salle de bain style spa'),
          t('High-efficiency HVAC with heat recovery', '带热回收的高效暖通空调', 'CVC haute efficacité avec récupération de chaleur'),
          t('Accessibility upgrades available', '可选无障碍升级', "Améliorations d'accessibilité disponibles"),
          t('Custom floor plans and additions', '定制户型与扩建方案', "Plans d'étage et extensions sur mesure"),
        ],
      },
    ],
    upgradeIds: ['interior-finishes', 'kitchen', 'bathroom', 'hvac', 'doors-windows', 'exterior-walls', 'furniture', 'smart-controls', 'deck-addons', 'accessibility', 'other-accessories'],
    image: '/images/products/modular-space.webp',
  },
  {
    slug: 'mobile-commercial-units',
    icon: 'food',
    name: t('Mobile Commercial Units', '移动商业单元', 'Unités commerciales mobiles'),
    shortName: t('Mobile Commercial', '移动商业', 'Commerce mobile'),
    cardSub: t('Food trailers & mobile retail', '餐车拖车与移动零售', 'Remorques-restaurants et commerce mobile'),
    tagline: t(
      'Health-department-ready food trailers and mobile retail units built for daily service.',
      '符合卫生部门要求的餐车拖车与移动零售单元，专为日常运营打造。',
      'Des remorques-restaurants prêtes pour la santé et des unités de commerce mobile conçues pour le service quotidien.'
    ),
    description: [
      t(
        'From coffee trailers to full kitchens and mobile boutiques, NEXUS commercial units are laid out around your workflow — cooking line, service window, storage and utilities positioned for speed and hygiene.',
        '从咖啡拖车到完整厨房和移动精品店，NEXUS 商业单元围绕您的工作流程设计——烹饪线、服务窗口、储物与水电设施布局兼顾效率与卫生。',
        "Des remorques à café aux cuisines complètes et boutiques mobiles, les unités commerciales NEXUS sont agencées autour de votre flux de travail — ligne de cuisson, guichet, rangement et utilitaires pensés pour la rapidité et l'hygiène."
      ),
      t(
        'Every unit is prepared for Canadian health inspection: food-safe surfaces, ventilation, fresh and grey water systems, plus certified gas and electrical installed by licensed trades.',
        '每台单元均按加拿大卫生检查标准准备：食品级台面、排风系统、清水与灰水系统，以及持证技工安装的认证燃气与电气系统。',
        'Chaque unité est préparée pour l’inspection sanitaire canadienne : surfaces alimentaires, ventilation, systèmes d’eau potable et grise, plus gaz et électricité certifiés installés par des artisans licenciés.'
      ),
    ],
    highlights: [
      t('Layouts planned around your menu or merchandise', '根据您的菜单或商品规划布局', 'Agencements planifiés selon votre menu ou vos produits'),
      t('Health-inspection-ready water & surface systems', '符合卫生检查的水路与台面系统', 'Systèmes d’eau et de surfaces prêts pour l’inspection'),
      t('Certified propane, electrical & fire safety', '认证燃气、电气与消防安全', 'Propane, électricité et sécurité incendie certifiés'),
      t('Commercial-grade ventilation hoods', '商用级排烟罩', 'Hottes de ventilation de qualité commerciale'),
      t('Service windows, awnings & signage options', '服务窗口、遮阳篷与招牌选项', 'Guichets, auvents et options d’enseigne'),
    ],
    packages: [
      {
        id: 'standard',
        features: [
          t('Open service layout with prep counters', '开放服务式布局与备餐台', 'Configuration de service ouverte avec comptoirs'),
          t('Food-safe stainless work surfaces', '食品级不锈钢操作台', 'Surfaces de travail en inox alimentaire'),
          t('Fresh & grey water tanks', '清水箱与灰水箱', 'Réservoirs d’eau potable et d’eau grise'),
          t('Basic ventilation and lighting', '基础排风与照明', 'Ventilation et éclairage de base'),
          t('Shelving and dry-storage bays', '货架与干料储藏区', 'Étagères et espaces de stockage sec'),
          t('Single service window', '单个服务窗口', 'Guichet de service simple'),
        ],
      },
      {
        id: 'comfort',
        features: [
          t('Full cooking line rough-in (propane ready)', '完整烹饪线预装（预留燃气）', 'Préinstallation complète de cuisson (prête au propane)'),
          t('Commercial hood with certified fan', '商用排烟罩与认证风机', 'Hotte commerciale avec ventilateur certifié'),
          t('Double-compartment sink + handwash', '双槽水槽 + 洗手池', 'Évier double compartiment + lave-mains'),
          t('Upgraded LED lighting package', '升级 LED 照明方案', 'Forfait d’éclairage DEL amélioré'),
          t('Fridge / freezer rough-ins', '冰箱/冷柜预装位', 'Préinstallations réfrigérateur / congélateur'),
          t('Fold-down counters & serving shelf', '折叠台面与服务架', 'Comptoirs rabattables et tablette de service'),
        ],
      },
      {
        id: 'premium',
        features: [
          t('Turn-key kitchen with certified equipment', '交钥匙厨房，含认证设备', 'Cuisine clé en main avec équipement certifié'),
          t('Fire suppression system installed', '已安装消防抑制系统', 'Système d’extinction installé'),
          t('Custom exterior branding & awnings', '定制外观品牌与遮阳篷', 'Image de marque extérieure et auvents sur mesure'),
          t('Generator / shore power integration', '发电机/市电双供电集成', 'Intégration génératrice / branchement terrestre'),
          t('POS & smart monitoring rough-ins', '收银与智能监控预装', 'Préinstallations POS et surveillance intelligente'),
          t('Premium interior finishes', '高端内饰饰面', 'Finitions intérieures haut de gamme'),
        ],
      },
    ],
    upgradeIds: ['kitchen', 'interior-finishes', 'hvac', 'doors-windows', 'exterior-walls', 'smart-controls', 'deck-addons', 'other-accessories'],
    image: '/images/products/food-trailer.webp',
  },
  {
    slug: 'industrial-solutions',
    icon: 'industrial',
    name: t('Industrial Solutions', '工业解决方案', 'Solutions industrielles'),
    shortName: t('Industrial', '工业', 'Industriel'),
    cardSub: t('Equipment pods & workforce housing', '设备舱与工人宿舍', 'Modules techniques et hébergement pour travailleurs'),
    tagline: t(
      'Equipment enclosures, washroom pods and workforce housing engineered for remote sites.',
      '为偏远工地打造的设备舱、卫浴舱与工人宿舍。',
      'Enceintes d’équipement, modules sanitaires et hébergement pour travailleurs conçus pour les sites éloignés.'
    ),
    description: [
      t(
        'When projects run far from the grid, NEXUS industrial units keep crews and equipment protected — insulated equipment pods, washroom and shower buildings, and dormitory units rated for northern winters.',
        '当项目远离城市电网时，NEXUS 工业单元为人员与设备提供可靠保障——保温设备舱、卫浴淋浴房以及适应北部寒冬的宿舍单元。',
        'Lorsque les projets s’éloignent du réseau, les unités industrielles NEXUS protègent équipes et équipements — modules techniques isolés, bâtiments sanitaires et unités de dormitory cotées pour les hivers nordiques.'
      ),
      t(
        'Skid, sled or trailer mounted; diesel or electric heat; crane-liftable construction — every unit ships with inspection records and commissioning checklists.',
        '可选滑橇、雪橇或拖车底盘；柴油或电采暖；可吊装结构——每台单元均附检验记录与调试清单。',
        'Sur patins, traîneaux ou remorques ; chauffage diesel ou électrique ; construction levable à la grue — chaque unité est livrée avec rapports d’inspection et listes de mise en service.'
      ),
    ],
    highlights: [
      t('Arctic-rated insulation packages available', '可提供极寒级保温配置', "Ensembles d'isolation cotés Arctique disponibles"),
      t('Skid, sled or trailer mounting', '滑橇、雪橇或拖车式安装', 'Montage sur patins, traîneaux ou remorque'),
      t('Crane-liftable, stackable designs', '可吊装、可堆叠设计', 'Conceptions levables à la grue et empilables'),
      t('Electrical, plumbing & HVAC commissioned on site-ready skids', '电气、给排水与暖通空调在预装底座上完成调试', 'Électricité, plomberie et CVC mis en service sur patins prêts à l’emploi'),
      t('Bulk fleet pricing for camps and contractors', '营地与承包商批量车队价格', 'Tarifs de flotte pour camps et entrepreneurs'),
    ],
    packages: [
      {
        id: 'standard',
        features: [
          t('Insulated steel equipment enclosure', '保温钢制设备舱', 'Enceinte technique isolée en acier'),
          t('Ventilation and winterized seals', '通风与冬季密封', 'Ventilation et joints hivernaux'),
          t('Interior lighting and receptacles', '内部照明与插座', 'Éclairage intérieur et prises de courant'),
          t('Single-point electrical connection', '单点电源接入', 'Raccordement électrique à point unique'),
          t('Basic shelving / racking', '基础货架/支架', 'Étagères / supports de base'),
          t('Safety signage and tie-down points', '安全标识与固定点', 'Signalisation de sécurité et points d’ancrage'),
        ],
      },
      {
        id: 'comfort',
        features: [
          t('Washroom / shower room rough-ins', '卫浴/淋浴间预装', 'Préinstallations sanitaire / douche'),
          t('Heated vestibule options', '预热门斗选项', 'Options de sas chauffé'),
          t('Upgraded insulation (arctic option)', '升级保温（极寒选项）', 'Isolation améliorée (option arctique)'),
          t('Diesel or electric heating systems', '柴油或电采暖系统', 'Systèmes de chauffage diesel ou électrique'),
          t('Bunk layouts with storage', '带储物的床位布局', 'Aménagements de couchettes avec rangement'),
          t('Exterior service doors & ramps', '外部检修门与坡道', 'Portes de service extérieures et rampes'),
        ],
      },
      {
        id: 'premium',
        features: [
          t('Turn-key camp units with full services', '交钥匙营地单元，含全套设施', 'Unités de camp clé en main avec services complets'),
          t('Smart monitoring: temp, door, power', '智能监控：温度、门禁、电力', 'Surveillance intelligente : température, portes, énergie'),
          t('Redundant power & heat backups', '冗余供电与备用供暖', 'Alimentation redondante et chauffage de secours'),
          t('Custom engineering & P.Eng stamping', '定制工程设计与 P.Eng 盖章认证', 'Ingénierie personnalisée avec sceau d’ingénieur'),
          t('Fleet wraps, numbering & tracking', '车队涂装、编号与追踪', 'Habillage de flotte, numérotation et suivi'),
          t('On-site commissioning support', '现场调试支持', 'Soutien à la mise en service sur place'),
        ],
      },
    ],
    upgradeIds: ['hvac', 'interior-finishes', 'doors-windows', 'exterior-walls', 'smart-controls', 'accessibility', 'other-accessories'],
    image: '/images/products/utility-trailer.webp',
  },
  {
    slug: 'commercial-waste-solutions',
    icon: 'waste',
    name: t('Commercial Waste Solutions', '商业垃圾解决方案', 'Solutions de déchets commerciaux'),
    shortName: t('Waste Solutions', '垃圾解决方案', 'Déchets commerciaux'),
    cardSub: t('Enclosed waste & recycling enclosures', '封闭式垃圾房与回收站', 'Locaux fermés pour déchets et recyclage'),
    tagline: t(
      'Bear-proof, bylaw-friendly waste and recycling enclosures for properties and municipalities.',
      '防熊、符合法规的垃圾与回收房，适用于物业与市政。',
      'Enclos à déchets et recyclage résistants aux ours et conformes aux règlements pour propriétés et municipalités.'
    ),
    description: [
      t(
        'NEXUS enclosed waste buildings keep pests out, odours down and sites compliant — engineered ventilation, galvanized steel construction and concrete-compatible anchoring.',
        'NEXUS 封闭式垃圾房可防虫害、控异味、保合规——工程化通风设计、镀锌钢结构以及可与混凝土锚固的连接件。',
        'Les bâtiments à déchets fermés NEXUS éloignent les nuisibles, réduisent les odeurs et maintiennent la conformité — ventilation conçue, construction en acier galvanisé et ancrages compatibles béton.'
      ),
      t(
        'Standard footprints fit most parking lots and lanes, while fully custom enclosures match your architecture and bylaw requirements — including multi-stream recycling layouts.',
        '标准尺寸适配多数停车场与后巷，全定制外壳可匹配您的建筑风格与地方法规——含多流线回收布局。',
        'Les empreintes standard s’adaptent à la plupart des stationnements et ruelles, tandis que les enclos entièrement personnalisés épousent votre architecture et vos règlements — y compris les aménagements multistreams.'
      ),
    ],
    highlights: [
      t('Wildlife-resistant doors and latches', '防野生动物门锁系统', 'Portes et loquets résistants à la faune'),
      t('Engineered passive & mechanical ventilation', '工程化自然与机械通风', 'Ventilation naturelle et mécanique conçue'),
      t('Galvanized / powder-coated steel builds', '镀锌/粉末喷涂钢制结构', 'Constructions en acier galvanisé / poudré'),
      t('Multi-stream recycling configurations', '多流线回收配置', 'Configurations de recyclage multistreams'),
      t('Municipal & property-management programs', '市政与物业管理合作方案', 'Programmes municipaux et de gestion immobilière'),
    ],
    packages: [
      {
        id: 'standard',
        features: [
          t('Single or double bin layout', '单桶或双桶布局', 'Aménagement à un ou deux bacs'),
          t('Lockable wildlife-resistant gates', '可上锁防动物门', 'Portails verrouillables anti-faune'),
          t('Galvanized steel cladding', '镀锌钢板外皮', 'Parement en acier galvanisé'),
          t('Passive roof vents', '屋顶被动通风', 'Évents de toit passifs'),
          t('Concrete pad anchoring kit', '混凝土基座锚固套件', 'Nécessaire d’ancrage sur dalle de béton'),
          t('Safety signage included', '含安全标识', 'Signalisation de sécurité incluse'),
        ],
      },
      {
        id: 'comfort',
        features: [
          t('Multi-stream sorting stations', '多流线分类站', 'Stations de tri multistreams'),
          t('Mechanical ventilation package', '机械通风方案', "Forfait d'aération mécanique"),
          t('Powder-coated colour options', '粉末喷涂配色选项', 'Options de couleurs poudrées'),
          t('Interior wash-down surfaces', '内部可冲洗表面', 'Surfaces intérieures lavables'),
          t('Card-access gate option', '刷卡门禁选项', 'Option de portail à carte'),
          t('Service lighting & outlets', '作业照明与插座', 'Éclairage de service et prises'),
        ],
      },
      {
        id: 'premium',
        features: [
          t('Architectural custom facades', '建筑级定制外观', 'Façades architecturales personnalisées'),
          t('Full-height drive-through designs', '全高通行式设计', 'Conceptions traversantes pleine hauteur'),
          t('Compactor-ready electrical rough-ins', '压缩机预装电气接口', 'Préinstallations électriques prêtes pour compacteur'),
          t('Fill-level sensors & route software hooks', '满位传感器与路线软件接口', "Capteurs de niveau et liens logiciels d'itinéraire"),
          t('Snow-load engineering for your region', '按当地雪荷载工程设计', 'Ingénierie des charges de neige selon votre région'),
          t('Volume pricing for municipalities', '市政批量采购价格', 'Tarifs volumiques pour municipalités'),
        ],
      },
    ],
    upgradeIds: ['exterior-walls', 'doors-windows', 'smart-controls', 'other-accessories'],
    image: '/images/products/waste-solutions.webp',
  },
]

export const PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug)

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getUpgradesFor(product: Product): UpgradeOption[] {
  return product.upgradeIds
    .map((id) => UPGRADES.find((u) => u.id === id))
    .filter((u): u is UpgradeOption => Boolean(u))
}

export function getTier(id: PackageTierId): PackageTier {
  return PACKAGE_TIERS.find((tier) => tier.id === id) as PackageTier
}
