import { t, type LocalizedText } from '@/lib/i18n'

export const HOME = {
  heroBadge: t(
    'Markham, Ontario · Canadian assembly & certification hub',
    '安大略省万锦市 · 加拿大组装与认证中心',
    'Markham (Ontario) · Carrefour canadien d’assemblage et de certification'
  ),
  heroTitleA: t('Global Manufacturing.', '全球制造。', 'Fabrication mondiale.'),
  heroTitleB: t('Canadian Standards.', '加拿大标准。', 'Normes canadiennes.'),
  heroSub: t(
    'We integrate trusted overseas manufacturing with hands-on assembly, inspection and CSA-compliant certification in Canada — so your modular units arrive finished, verified and ready to deploy.',
    '我们将可靠的海外制造与加拿大的实地组装、检验及 CSA 合规认证相结合——让您的模块化单元以完工、经验证、可直接部署的状态交付。',
    'Nous allions une fabrication internationale fiable à l’assemblage, l’inspection et la certification aux normes CSA réalisés au Canada — vos unités modulaires arrivent finies, vérifiées et prêtes à déployer.'
  ),
  whyKicker: t('Why NEXUS', '为何选择 NEXUS', 'Pourquoi NEXUS'),
  whyTitle: t(
    'One team from factory floor to final inspection.',
    '从工厂车间到最终检验，一个团队全程负责。',
    'Une seule équipe, du plancher d’usine à l’inspection finale.'
  ),
  whyBody: t(
    'Offshore pricing alone doesn’t deliver a compliant unit. NEXUS closes the gap between global production capacity and Canadian code requirements with local assembly, engineering review and documented QC.',
    '仅有海外低价并不能交付合规产品。NEXUS 通过本地组装、工程审核与可追溯质检，弥合全球产能与加拿大法规之间的差距。',
    'Un prix offshore ne suffit pas à livrer une unité conforme. NEXUS comble l’écart entre la capacité de production mondiale et les exigences des codes canadiens grâce à l’assemblage local, à la révision d’ingénierie et au contrôle qualité documenté.'
  ),
  whyPoints: [
    {
      title: t('Local assembly & finishing', '本地组装与精整', 'Assemblage et finition locaux'),
      desc: t(
        'Units are completed, fitted and finished at our Markham facility — not shipped blind from overseas.',
        '单元在万锦厂区完成总装、安装与精整——而非海外直接盲发。',
        "Les unités sont complétées, équipées et finies à notre installation de Markham — pas expédiées à l'aveugle de l'étranger."
      ),
    },
    {
      title: t('Engineering review before build', '开工前工程审核', 'Révision d’ingénierie avant fabrication'),
      desc: t(
        'Every configuration is checked against CSA, electrical and transport requirements before the first panel is cut.',
        '在第一块板材切割之前，每项配置都会对照 CSA、电气与运输要求进行核对。',
        'Chaque configuration est vérifiée par rapport aux exigences CSA, électriques et de transport avant la première découpe.'
      ),
    },
    {
      title: t('Documented quality control', '全流程质检记录', 'Contrôle qualité documenté'),
      desc: t(
        'Staged inspections with photo records at framing, rough-in, finishing and final sign-off.',
        '框架、隐蔽工程、精整与终验四个阶段均留存照片化检验记录。',
        'Inspections échelonnées avec photos : ossature, installations encastrées, finition et signature finale.'
      ),
    },
    {
      title: t('Certification-ready documentation', '认证就绪文档', 'Documentation prête pour certification'),
      desc: t(
        'Serial-numbered units with inspection dossiers that support CSA Z240 / A277 and provincial approvals.',
        '序列号化管理，检验档案支持 CSA Z240 / A277 及省级审批。',
        'Unités à numéro de série avec dossiers d’inspection appuyant les certifications CSA Z240 / A277 et provinciales.'
      ),
    },
    {
      title: t('Logistics handled end-to-end', '端到端物流安排', 'Logistique gérée de bout en bout'),
      desc: t(
        'Ocean freight, customs, inland transport and site delivery coordinated by one accountable team.',
        '海运、清关、内陆运输与现场交付由一个责任团队统筹。',
        'Fret maritime, douane, transport terrestre et livraison sur site coordonnés par une seule équipe responsable.'
      ),
    },
  ],
  productsKicker: t('Our Product Solutions', '产品解决方案', 'Nos solutions de produits'),
  productsTitle: t(
    'Four product lines. One Canadian assembly standard.',
    '四大产品线，一个加拿大组装标准。',
    'Quatre gammes de produits. Une norme canadienne d’assemblage.'
  ),
  productsBody: t(
    'Every category ships in Standard, Comfort and Premium packages and can be personalized through our online configurator.',
    '每个品类均提供标准版、舒适版与尊享版套餐，并可通过在线配置器进行个性化定制。',
    'Chaque catégorie est offerte en forfaits Standard, Confort et Premium et peut être personnalisée grâce à notre configurateur en ligne.'
  ),
  productsCta: t('Explore all products', '浏览全部产品', 'Explorer tous les produits'),
  processKicker: t('How We Work', '合作流程', 'Notre méthode'),
  processTitle: t(
    'From your floor plan to a certified unit.',
    '从您的图纸到认证成品。',
    'De votre plan à une unité certifiée.'
  ),
  processSteps: [
    {
      title: t('Engineering & Design', '工程设计与制图', 'Ingénierie et conception'),
      desc: t(
        'Our engineers turn your requirements into production-ready drawings and a firm quotation.',
        '工程师将您的需求转化为可投产图纸，并出具正式报价。',
        'Nos ingénieurs transforment vos exigences en plans prêts pour la production et en une soumission ferme.'
      ),
    },
    {
      title: t('Precision Assembly', '精密组装', 'Assemblage de précision'),
      desc: t(
        'Framing, systems and finishes are assembled at our Markham facility to engineering tolerances.',
        '框架、系统与内饰在万锦厂区按工程公差精密组装。',
        'Ossature, systèmes et finitions assemblés à Markham selon les tolérances d’ingénierie.'
      ),
    },
    {
      title: t('Quality Inspection', '质量检验', 'Inspection qualité'),
      desc: t(
        'Staged inspections with photo records at framing, rough-in, finishing and final sign-off.',
        '框架、隐蔽工程、精整与终验分阶段检验，全程照片留档。',
        'Inspections échelonnées avec photos : ossature, installations encastrées, finition et signature finale.'
      ),
    },
    {
      title: t('Safe Delivery', '安全交付', 'Livraison sécurisée'),
      desc: t(
        'Finished units are protected, transported and delivered across Canada, ready to deploy.',
        '完工单元经封装保护，运抵加拿大各地，即可部署使用。',
        'Les unités finies sont protégées, transportées et livrées partout au Canada, prêtes à déployer.'
      ),
    },
  ],
  configureKicker: t('Online Configurator', '在线配置器', 'Configurateur en ligne'),
  configureTitle: t(
    'Design your unit in six guided steps.',
    '六步引导，轻松定制您的单元。',
    'Concevez votre unité en six étapes guidées.'
  ),
  configureBody: t(
    'Choose a product, package and upgrades, add your contact details, then email us a printable summary — we respond with engineering feedback and a quotation.',
    '选择产品、套餐与升级项，填写联系方式，即可通过邮件发送可打印的配置摘要——我们将回复工程意见与报价。',
    'Choisissez un produit, un forfait et des améliorations, ajoutez vos coordonnées, puis courriel-nous un résumé imprimable — nous répondons avec rétroaction d’ingénierie et soumission.'
  ),
  configurePoints: [
    t('Pick your product, package and upgrades', '选择产品、套餐与升级项', 'Choisissez produit, forfait et améliorations'),
    t('See package pricing update live', '套餐价格实时更新', 'Voyez le prix du forfait en temps réel'),
    t('Email a printable configuration summary', '一键邮件发送可打印配置摘要', 'Courrielez un résumé de configuration imprimable'),
    t('Get engineering feedback and a quotation', '获取工程意见与正式报价', 'Recevez une rétroaction d’ingénierie et une soumission'),
  ],
  configureCta: t('Start configuring', '开始定制', 'Commencer la configuration'),
  supplierCtaTitle: t(
    'Manufacture for Canada with a partner on the ground.',
    '与本地伙伴携手，进军加拿大市场。',
    'Fabriquez pour le Canada avec un partenaire sur place.'
  ),
  supplierCtaBody: t(
    'OEMs and component suppliers: pair your production capacity with our Canadian assembly, certification and distribution.',
    '面向原始设备制造商与零部件供应商：将您的产能与我们的加拿大组装、认证及分销能力结合。',
    'OEM et fournisseurs de composantes : jumelez votre capacité de production à notre assemblage, notre certification et notre distribution au Canada.'
  ),
  clientCtaTitle: t(
    'Buying from overseas? Get a Canadian safety net.',
    '海外采购？获得加拿大本土保障。',
    'Achetez à l’étranger ? Obtenez un filet de sécurité canadien.'
  ),
  clientCtaBody: t(
    'Inspections, compliance review and last-mile delivery for units you commission abroad.',
    '为您的海外定制单元提供检验、合规审查与最后一公里配送服务。',
    'Inspections, revue de conformité et livraison dernier kilomètre pour les unités commandées à l’étranger.'
  ),
}

export const ASSEMBLY = {
  badge: t('Assembly Centre', '组装中心', "Centre d'assemblage"),
  title: t(
    'Where global components become Canadian units.',
    '全球部件在此成为加拿大成品。',
    'Là où les composants mondiaux deviennent des unités canadiennes.'
  ),
  sub: t(
    'Our Markham facility receives containers of finished components and completes assembly, systems installation, inspection and certification preparation under Canadian supervision.',
    '我们的万锦工厂接收成品部件集装箱，并在加拿大本地监督下完成组装、系统安装、检验与认证准备。',
    'Notre installation de Markham reçoit des conteneurs de composants finis et réalise l’assemblage, l’installation des systèmes, l’inspection et la préparation à la certification sous supervision canadienne.'
  ),
  intro: [
    t(
      'Container loads arrive with pre-engineered panels, frames and systems from our vetted manufacturing partners. Nothing is installed blind: every shipment is checked against packing lists and engineering drawings before work begins.',
      '集装箱到货时载有来自我们严格审核的制造伙伴的预制板材、框架与系统。所有安装均非盲目进行：开工前，每批货物都会对照装箱单与工程图纸进行核对。',
      'Les conteneurs arrivent avec panneaux préfabriqués, châssis et systèmes de nos partenaires manufacturiers vérifiés. Rien n’est installé à l’aveugle : chaque expédition est vérifiée par rapport aux listes de colisage et aux plans d’ingénierie avant le début des travaux.'
    ),
    t(
      'From there, our licensed trades and assemblers complete structural work, electrical, plumbing, HVAC and interior finishing — photographing each stage so your unit’s full build history travels with it.',
      '随后，我们的持证技工与装配工完成结构作业、电气、给排水、暖通空调与内饰精装——每个阶段拍照存档，完整建造历史随单元交付。',
      'Ensuite, nos artisans licenciés et assembleurs réalisent la structure, l’électricité, la plomberie, le CVC et la finition intérieure — en photographiant chaque étape afin que l’historique complet accompagne votre unité.'
    ),
  ],
  capabilitiesTitle: t('Facility Capabilities', '厂区能力', 'Capacités de l’installation'),
  capabilities: [
    {
      title: t('Structural assembly & squaring', '结构组装与校准', 'Assemblage structurel et mise d’équerre'),
      desc: t(
        'Floor, wall and roof systems assembled on leveled jigs to engineering tolerances.',
        '地板、墙体与屋面系统在调平胎具上按工程公差组装。',
        'Systèmes de plancher, murs et toit assemblés sur gabarits nivelés selon les tolérances d’ingénierie.'
      ),
    },
    {
      title: t('Licensed electrical & plumbing', '持证电气与管道作业', 'Électricité et plomberie par artisans licenciés'),
      desc: t(
        'Rough-ins and final connections completed by Red Seal trades familiar with CSA requirements.',
        '隐蔽工程与最终连接由熟悉 CSA 要求的红印章技工完成。',
        'Installations encastrées et raccordements finaux par des compagnons Sceau rouge connaissant les exigences CSA.'
      ),
    },
    {
      title: t('Insulation & envelope finishing', '保温与围护精整', 'Isolation et finition de l’enveloppe'),
      desc: t(
        'Cold-climate insulation, vapor barriers and exterior cladding installed to spec.',
        '按规范安装寒冷气候保温层、隔汽层与外墙饰面。',
        'Isolation pour climat froid, pare-vapeur et parement extérieur installés selon les spécifications.'
      ),
    },
    {
      title: t('Interior fit-out', '内饰装配', 'Aménagement intérieur'),
      desc: t(
        'Kitchens, bathrooms, millwork and flooring installed per your configuration sheet.',
        '根据您的配置单安装厨房、卫浴、木作与地板。',
        'Cuisines, salles de bain, ébénisterie et planchers installés selon votre feuille de configuration.'
      ),
    },
    {
      title: t('Stage inspections & documentation', '阶段检验与文档记录', 'Inspections par étapes et documentation'),
      desc: t(
        'Photo-documented QC gates before any stage is closed in — nothing gets hidden behind drywall.',
        '任一封闭工序前均设照片化质检关卡——不留任何隐患在墙板之后。',
        'Points de contrôle QC photographiés avant la fermeture de toute étape — rien n’est caché derrière les cloisons.'
      ),
    },
  ],
  facilityTitle: t('Inside the Markham facility', '走进万锦厂区', "Au cœur de l'installation de Markham"),
  facilityPoints: [
    t('Indoor assembly bays with levelled jig floors', '室内组装工位，配备调平胎具地面', 'Bays d’assemblage intérieurs avec planchers à gabarits nivelés'),
    t('Dedicated electrical & plumbing rough-in stations', '专用电气与管道预装工位', 'Stations dédiées pour installations électriques et plomberie'),
    t('Finishing area for interiors and cladding', '内饰与挂板精整区', 'Zone de finition pour intérieurs et parement'),
    t('Photo-documentation at every QC gate', '每个质检关卡全程拍照留档', 'Documentation photo à chaque point de contrôle QC'),
    t('Serial-number tracking from container to customer', '从集装箱到客户的序列号追踪', 'Suivi par numéro de série du conteneur au client'),
    t('Staging yard for transport preparation', '运输准备堆场', 'Cour d’expédition pour la préparation au transport'),
  ],
  ctaTitle: t(
    'Tour the floor or book an assembly slot.',
    '预约参观车间或预订组装档期。',
    'Visitez l’atelier ou réservez un créneau d’assemblage.'
  ),
  ctaBody: t(
    'We host supplier and client walkthroughs by appointment and reserve production slots against your delivery schedule.',
    '我们接受预约参观，并根据您的交付计划预留生产档期。',
    'Nous accueillons fournisseurs et clients sur rendez-vous et réservons les créneaux de production selon votre calendrier de livraison.'
  ),
}

export const COMPLIANCE = {
  badge: t('Engineering · Quality · Compliance', '工程 · 质量 · 合规', 'Ingénierie · Qualité · Conformité'),
  title: t(
    'Certified before it leaves the floor.',
    '出厂之前，认证先行。',
    'Certifié avant de quitter l’atelier.'
  ),
  sub: t(
    'Every NEXUS unit is built against a documented compliance matrix covering structure, systems, fire safety, energy and transport — reviewed by engineers and evidenced with photos and inspection records.',
    '每台 NEXUS 单元均依照涵盖结构、系统、消防安全、节能与运输的合规矩阵建造——由工程师审核，并以照片与检验记录为证。',
    'Chaque unité NEXUS est construite selon une matrice de conformité documentée couvrant la structure, les systèmes, la sécurité incendie, l’énergie et le transport — revue par des ingénieurs et prouvée par photos et rapports d’inspection.'
  ),
  intro: [
    t(
      'Canadian codes are unforgiving with imported units. Our engineering team translates your configuration into a compliance plan up front: which CSA standard applies, which inspections happen at which stage, and what documentation you receive at handover.',
      '加拿大法规对进口产品要求严格。我们的工程团队会提前将您的配置转化为合规计划：适用哪项 CSA 标准、哪个阶段进行哪种检验、交付时提供哪些文档。',
      'Les codes canadiens sont impitoyables envers les unités importées. Notre équipe d’ingénierie traduit votre configuration en plan de conformité : quelle norme CSA s’applique, quelles inspections ont lieu à quelle étape et quels documents vous recevez à la livraison.'
    ),
  ],
  domainsTitle: t('Compliance Domains', '合规领域', "Domaines de conformité"),
  domains: [
    {
      id: 'structural',
      name: t('Structural & Modularity', '结构与模块化', 'Structure et modularité'),
      summary: t(
        'Framing, connections and lifting points engineered for Canadian snow and wind loads.',
        '框架、连接件与吊点按加拿大雪荷载与风荷载设计。',
        'Ossature, connexions et points de levage conçus pour les charges de neige et de vent canadiennes.'
      ),
      points: [
        t('NBC-aligned load calculations', '符合国家建筑规范的荷载计算', 'Calculs de charges alignés sur le CNB'),
        t('Engineer-stamped drawings available per province', '可提供各省工程师盖章图纸', 'Plans scellés par ingénieur disponibles par province'),
        t('Module connection details for multi-unit builds', '多单元组合的模块连接详图', 'Détails de connexion modulaire pour projets multi-unités'),
        t('Material certs tracked to heat numbers', '材料证书追溯至炉号', 'Certificats de matériaux tracés jusqu’aux numéros de coulée'),
        t('Crane-lift point verification', '吊装点验证', 'Vérification des points de levage'),
      ],
    },
    {
      id: 'electrical',
      name: t('Electrical Systems', '电气系统', 'Systèmes électriques'),
      summary: t(
        'CEC-compliant wiring installed and verified by licensed electricians.',
        '由持证电工安装并验证符合加拿大电气规范（CEC）的线路。',
        'Câblage conforme au CEC installé et vérifié par électriciens licenciés.'
      ),
      points: [
        t('ESA / provincial inspection coordination', 'ESA 及省级检验协调', 'Coordination des inspections ESA / provinciales'),
        t('Load calculations and panel schedules', '负荷计算与配电盘清单', 'Calculs de charge et plans de tableaux'),
        t('Labelled circuits with as-built diagrams', '回路标识及竣工图', 'Circuits étiquetés avec diagrammes conformes'),
        t('Certified components only (cUL/CSA)', '仅使用认证部件（cUL/CSA）', 'Composantes certifiées uniquement (cUL/CSA)'),
        t('GFCI/AFCI protection where required', '按要求配置 GFCI/AFCI 保护', 'Protection GFCI / AFCI lorsque requis'),
      ],
    },
    {
      id: 'plumbing',
      name: t('Plumbing & Gas', '给排水与燃气', 'Plomberie et gaz'),
      summary: t(
        'Potable water, drain systems and propane installations done by licensed trades.',
        '饮用水、排水系统与丙烷装置均由持证技工完成。',
        'Eau potable, drainage et installations au propane réalisés par artisans licenciés.'
      ),
      points: [
        t('Pressure testing documented', '压力测试记录存档', 'Essais de pression documentés'),
        t('TSSA-certified gas fitters for propane work', '丙烷作业由 TSSA 认证管道工完成', 'Installateurs de gaz certifiés TSSA pour le propane'),
        t('Four-season water line protection', '四季水管防冻保护', 'Protection antifreeze des conduites quatre saisons'),
        t('Grey water solutions per site requirements', '按现场要求配置灰水方案', 'Solutions d’eau grise selon les exigences du site'),
        t('Fixture lists matched to health approvals', '洁具清单匹配卫生审批', 'Listes d’appareils sanitaires alignées aux approbations sanitaires'),
      ],
    },
    {
      id: 'hvac',
      name: t('HVAC & Ventilation', '暖通空调与通风', 'CVC et ventilation'),
      summary: t(
        'Heating and ventilation sized for real Canadian winters, from HRVs to cold-climate heat pumps.',
        '供暖与通风按真正的加拿大寒冬配置，从 HRV 新风到寒冷气候热泵。',
        'Chauffage et ventilation dimensionnés pour les vrais hivers canadiens, des VRC aux thermopompes pour climat froid.'
      ),
      points: [
        t('Heat-loss calculations per unit', '逐台热损失计算', 'Calculs de déperdition par unité'),
        t('HRV / ERV commissioning records', 'HRV/ERV 调试记录', 'Registres de mise en service VRC / VRE'),
        t('Combustion appliance make-up air review', '燃烧设备补风审查', 'Revue d’air de compensation des appareils à combustion'),
        t('Ducting verified against plans', '风管与图纸核对验证', 'Conduits vérifiés par rapport aux plans'),
        t('Cold-weather startup testing', '低温启动测试', 'Essais de démarrage par temps froid'),
      ],
    },
    {
      id: 'fire',
      name: t('Fire Safety & Egress', '消防安全与疏散', 'Sécurité incendie et évacuation'),
      summary: t(
        'Alarm, suppression and egress planning appropriate to each unit type and occupancy.',
        '针对每种单元类型与用途配置报警、灭火与疏散方案。',
        'Alerte, extinction et évacuation adaptés à chaque type d’unité et à son occupation.'
      ),
      points: [
        t('Smoke/CO alarm placement per code', '烟感/CO 报警器按规范布置', 'Placement des avertisseurs fumée/CO selon le code'),
        t('Fire-suppression for cooking lines', '烹饪线消防抑制系统', 'Extinction pour lignes de cuisson'),
        t('Egress window sizing verification', '疏散窗尺寸核验', 'Vérification des dimensions des fenêtres de sortie'),
        t('Interior finish flame-spread ratings', '内饰火焰蔓延等级控制', 'Indices de propagation de flamme des finitions'),
        t('Travel-path and exit signage where applicable', '按要求设置疏散路径与出口标识', 'Chemins d’évacuation et signalisation lorsque applicables'),
      ],
    },
    {
      id: 'energy',
      name: t('Energy & Insulation', '节能与保温', 'Énergie et isolation'),
      summary: t(
        'Envelope performance documented so your unit performs from coast to coast.',
        '围护性能全程留档，确保单元全国各地都有出色表现。',
        'La performance de l’enveloppe est documentée pour que votre unité performe d’un océan à l’autre.'
      ),
      points: [
        t('Inspection photos of insulation & vapor barriers', '保温层与隔汽层检验照片', 'Photos d’inspection de l’isolation et du pare-vapeur'),
        t('Window/door U-value documentation', '门窗 U 值文档', 'Documentation des valeurs U des fenêtres et portes'),
        t('Airtightness targets per climate zone', '按气候分区设定气密目标', 'Cibles d’étanchéité à l’air par zone climatique'),
        t('Thermal-bridging mitigation details', '热桥处理细节', 'Détails d’atténuation des ponts thermiques'),
        t('Optional blower-door testing', '可选鼓风门测试', 'Essai porte-soufflante en option'),
      ],
    },
    {
      id: 'transport',
      name: t('Transport & Anchoring', '运输与锚固', 'Transport et ancrage'),
      summary: t(
        'Units engineered to survive the ride and anchor safely at site.',
        '确保单元经得起运输颠簸，并在现场安全锚固。',
        'Des unités conçues pour survivre au transport et s’ancrer solidement sur site.'
      ),
      points: [
        t('Brace-on-transit engineering reviews', '运输加固工程审核', 'Revues d’ingénierie du renfort de transport'),
        t('Tie-down and anchoring hardware included', '含固定与锚固五金件', 'Quincaillerie d’arrimage et d’ancrage incluse'),
        t('Over-dimensional load permitting support', '超限运输许可支持', 'Soutien aux permis de charges hors gabarit'),
        t('Site-set level checklists', '现场就位调平清单', 'Listes de mise à niveau sur site'),
        t('Skid, chassis or foundation interfaces', '滑橇、底盘或基础接口方案', 'Interfaces patins, châssis ou fondation'),
      ],
    },
  ],
  standardsTitle: t('Standards We Build Against', '我们遵循的建造标准', 'Normes appliquées'),
  standards: [
    t('CSA Z240 series — modular / manufactured buildings', 'CSA Z240 系列——模块化/预制建筑', 'Série CSA Z240 — bâtiments modulaires / préfabriqués'),
    t('CSA A277 — certification of modular buildings', 'CSA A277——模块化建筑认证', 'CSA A277 — certification des bâtiments modulaires'),
    t('National Building Code of Canada (NBC)', '加拿大国家建筑规范（NBC）', 'Code national du bâtiment du Canada (CNB)'),
    t('Canadian Electrical Code, Part I', '加拿大电气规范第一部分', 'Code canadien de l’électricité, partie I'),
    t('Provincial plumbing & gas codes (incl. TSSA)', '省给排水与燃气规范（含 TSSA）', 'Codes provinciaux de plomberie et de gaz (incl. TSSA)'),
    t('Health authority requirements for food service units', '餐饮单元卫生部门要求', 'Exigences des autorités sanitaires pour les unités alimentaires'),
    t('CSA B149 propane installation code', 'CSA B149 丙烷安装规范', 'CSA B149 — code d’installation au propane'),
  ],
  reviewTitle: t('Our Six-Gate Review Process', '六道质检流程', 'Notre processus en six points de contrôle'),
  reviewSteps: [
    {
      title: t('Design intake', '设计受理', 'Réception du design'),
      desc: t('Drawings reviewed for scope, standard and province of installation.', '审核图纸的范围、适用标准与安装省份。', 'Plans revus pour la portée, la norme et la province d’installation.'),
    },
    {
      title: t('Compliance plan', '合规计划', 'Plan de conformité'),
      desc: t('Applicable CSA/NBC paths and inspection stages confirmed in writing.', '书面确认适用的 CSA/NBC 路径与检验阶段。', 'Parcours CSA/CNB applicables et étapes d’inspection confirmés par écrit.'),
    },
    {
      title: t('Incoming materials check', '来料检验', 'Contrôle des matériaux reçus'),
      desc: t('Components checked against specs with material certificates on file.', '对照规格检查部件，材料证书存档。', 'Composantes vérifiées selon les spécifications avec certificats au dossier.'),
    },
    {
      title: t('Rough-in inspection', '隐蔽工程检验', 'Inspection des installations encastrées'),
      desc: t('Electrical, plumbing and insulation inspected and photographed before closing in.', '封闭前对电气、管道与保温进行检验并拍照。', 'Électricité, plomberie et isolation inspectées et photographiées avant fermeture.'),
    },
    {
      title: t('Final systems test', '最终系统测试', 'Essais finaux des systèmes'),
      desc: t('Power-up, water pressure, ventilation and safety devices tested live.', '现场测试通电、水压、通风与安全装置。', 'Mise sous tension, pression d’eau, ventilation et dispositifs de sécurité testés.'),
    },
    {
      title: t('Handover dossier', '交付档案', 'Dossier de livraison'),
      desc: t('Serial-numbered build record, inspection photos and compliance documents delivered.', '交付带序列号的建造记录、检验照片与合规文档。', 'Dossier de construction numéroté, photos d’inspection et documents de conformité livrés.'),
    },
  ],
}

export const SUPPLIERS = {
  badge: t('Supplier Partnerships', '供应商合作', 'Partenariats fournisseurs'),
  title: t(
    'Your factory. Our Canadian platform.',
    '您的工厂，我们在加拿大的平台。',
    'Votre usine. Notre plateforme canadienne.'
  ),
  sub: t(
    'NEXUS partners with manufacturers who can build to our engineering packages — we handle Canadian assembly, certification, sales and delivery while you focus on production.',
    'NEXUS 与能按我们工程包生产的制造商合作——您专注生产，我们负责加拿大本地组装、认证、销售与交付。',
    'NEXUS s’associe à des fabricants capables de produire selon nos forfaits d’ingénierie — nous gérons l’assemblage, la certification, la vente et la livraison au Canada pendant que vous vous concentrez sur la production.'
  ),
  intro: [
    t(
      'We issue complete manufacturing packages: drawings, BOMs, jigs and QC checkpoints refined over successive production runs. Your team builds; our team verifies at origin, receives in Canada and completes final assembly to code.',
      '我们提供完整的生产技术包：图纸、物料清单、胎具与经多轮生产优化的质检控制点。您的团队负责生产；我们的团队在原产地验证、在加拿大接收并完成符合法规的最终组装。',
      'Nous émettons des forfaits de fabrication complets : plans, listes de matériaux, gabarits et points de contrôle QC affinés sur des séries successives. Votre équipe fabrique ; la nôtre vérifie à l’origine, réceptionne au Canada et complète l’assemblage final conformément aux codes.'
    ),
    t(
      'Partners gain a recurring Canadian order book without hiring local sales teams, navigating certification or carrying finished-goods inventory abroad.',
      '合作伙伴无需组建本地销售团队、自行应对认证或在海外积压成品库存，即可获得持续的加拿大订单。',
      'Les partenaires obtiennent un carnet de commandes canadien récurrent sans embaucher d’équipes de vente locales, sans naviguer seuls la certification ni immobiliser des inventaires à l’étranger.'
    ),
  ],
  benefitsTitle: t('What You Get as a NEXUS Partner', '成为 NEXUS 合作伙伴的收获', 'Ce que vous obtenez comme partenaire'),
  benefits: [
    {
      title: t('Engineering-ready product packages', '成品级工程产品包', 'Forfaits produits prêts pour l’ingénierie'),
      desc: t('Drawings, specs, BOMs and acceptance criteria prepared by our Canadian engineering team.', '由我们加拿大工程团队提供的图纸、规格、物料清单与验收标准。', 'Plans, spécifications, nomenclatures et critères d’acceptation préparés par notre équipe d’ingénierie canadienne.'),
    },
    {
      title: t('Predictable, repeat orders', '可预期的持续订单', 'Commandes prévisibles et récurrentes'),
      desc: t('Scheduled production runs against real Canadian demand, not one-off bets.', '基于真实加拿大需求的定期生产排程，而非一次性试单。', 'Des séries de production planifiées selon la demande canadienne réelle, pas des paris ponctuels.'),
    },
    {
      title: t('Compliance handled locally', '合规事务本地处理', 'Conformité gérée localement'),
      desc: t('CSA paths, inspections and documentation managed on the Canadian side.', 'CSA 认证路径、检验与文档均由加拿大团队管理。', 'Parcours CSA, inspections et documentation gérés du côté canadien.'),
    },
    {
      title: t('Clear QC feedback loops', '清晰的质检反馈闭环', 'Boucles de rétroaction QC claires'),
      desc: t('Stage photos and punch lists shared after every run so quality improves batch over batch.', '每轮生产后共享阶段照片与整改清单，质量逐批提升。', 'Photos d’étapes et listes de corrections partagées après chaque série pour améliorer la qualité lot après lot.'),
    },
    {
      title: t('Logistics coordination', '物流统筹', 'Coordination logistique'),
      desc: t('Container planning, customs paperwork and inland transport coordinated by NEXUS.', '集装箱计划、清关文件与内陆运输由 NEXUS 统筹。', 'Planification des conteneurs, douanes et transport terrestre coordonnés par NEXUS.'),
    },
    {
      title: t('Long-term exclusivity options', '长期独家合作选项', "Options d'exclusivité à long terme"),
      desc: t('High-performing partners can secure category exclusivity with volume commitments.', '表现优异的伙伴可通过销量承诺获得品类独家合作。', 'Les partenaires performants peuvent obtenir l’exclusivité de catégorie avec des engagements de volume.'),
    },
  ],
  processTitle: t('How Partnership Starts', '合作启动流程', 'Comment débute le partenariat'),
  processSteps: [
    {
      title: t('Introduction & capability review', '初步接洽与能力评估', 'Présentation et revue des capacités'),
      desc: t('Share your factory profile, certifications and reference products.', '分享贵厂简介、认证与参考产品。', 'Partagez le profil de votre usine, vos certifications et vos produits de référence.'),
    },
    {
      title: t('Sample & pilot build', '样品与试制', 'Échantillon et fabrication pilote'),
      desc: t('We commission a pilot unit against our package and inspect it together.', '我们按技术包委托试制样机并共同检验。', 'Nous commandons une unité pilote selon notre forfait et l’inspectons ensemble.'),
    },
    {
      title: t('QC alignment', '质检标准对齐', 'Alignement QC'),
      desc: t('Checkpoints, photo protocols and acceptance criteria are agreed in writing.', '书面确认质检控制点、拍照流程与验收标准。', 'Points de contrôle, protocoles photo et critères d’acceptation convenus par écrit.'),
    },
    {
      title: t('First container order', '首批订单发运', 'Première commande conteneurisée'),
      desc: t('Production starts against a scheduled volume with staged payments.', '按计划产量开始生产，分阶段付款。', 'La production démarre sur un volume planifié avec paiements échelonnés.'),
    },
    {
      title: t('Canadian assembly & launch', '加拿大组装与上市', 'Assemblage canadien et lancement'),
      desc: t('Units are assembled, certified and launched under the NEXUS brand in Canada.', '单元在加拿大以 NEXUS 品牌完成组装、认证与上市。', 'Les unités sont assemblées, certifiées et lancées sous la marque NEXUS au Canada.'),
    },
    {
      title: t('Scale & iterate', '放量与迭代', 'Croître et itérer'),
      desc: t('Feedback loops drive design refinements and growing order volumes.', '反馈闭环驱动设计优化与订单量增长。', 'Les boucles de rétroaction pilotent les raffinements et la croissance des volumes.'),
    },
  ],
  ctaTitle: t(
    'Ready to build for the Canadian market?',
    '准备为加拿大市场而造？',
    'Prêt à fabriquer pour le marché canadien ?'
  ),
  ctaBody: t(
    'Send your company profile and product range — our sourcing team responds within five business days.',
    '发送贵司简介与产品范围——我们的采购团队将在五个工作日内回复。',
    'Envoyez le profil de votre entreprise et votre gamme — notre équipe d’approvisionnement répond sous cinq jours ouvrables.'
  ),
}

export const CLIENTS = {
  badge: t('For Clients', '客户中心', 'Pour les clients'),
  title: t(
    'Buy overseas with a Canadian safety net.',
    '海外采购，加拿大保障。',
    'Achetez à l’étranger avec un filet de sécurité canadien.'
  ),
  sub: t(
    'Whether you buy from our catalogue or commission units from your own factory abroad, NEXUS inspects, completes and delivers to Canadian standards.',
    '无论您从我们的产品目录选购，还是委托海外自有工厂生产，NEXUS 都能按加拿大标准完成检验、组装与交付。',
    'Que vous achetiez de notre catalogue ou commandiez des unités à votre propre usine à l’étranger, NEXUS inspecte, complète et livre selon les normes canadiennes.'
  ),
  servicesTitle: t('How We Support Your Project', '我们如何支持您的项目', 'Comment nous soutenons votre projet'),
  services: [
    {
      title: t('Catalogue purchase', '目录采购', 'Achat au catalogue'),
      desc: t('Configure a Standard, Comfort or Premium unit online and receive a firm quote.', '在线配置标准版、舒适版或尊享版单元，获取正式报价。', 'Configurez une unité Standard, Confort ou Premium en ligne et recevez une soumission ferme.'),
    },
    {
      title: t('Custom design-build', '定制设计与建造', 'Conception-construction sur mesure'),
      desc: t('Bring drawings or ideas; we engineer, quote and build to Canadian code.', '带来图纸或想法；我们按加拿大规范进行工程设计、报价与建造。', 'Apportez plans ou idées ; nous concevons, soumissionnons et construisons selon le code canadien.'),
    },
    {
      title: t('Third-party build inspection', '第三方建造检验', 'Inspection de fabrication tierce'),
      desc: t('We inspect units produced at your own overseas factory before they ship.', '在发运前对您海外自有工厂生产的单元进行检验。', "Nous inspectons les unités produites par votre usine à l'étranger avant l'expédition."),
    },
    {
      title: t('Compliance completion', '合规收尾', 'Mise en conformité'),
      desc: t('Missing systems are installed and documented in Canada so your unit passes inspection.', '在加拿大补装缺失系统并出具文档，确保您的单元通过检验。', 'Les systèmes manquants sont installés et documentés au Canada pour que votre unité passe l’inspection.'),
    },
    {
      title: t('Delivery & siting', '配送与就位', 'Livraison et mise en place'),
      desc: t('Coordinated transport, offload and placement support across Canada.', '统筹全加运输、卸货与就位支持。', 'Transport coordonné, déchargement et soutien à la mise en place partout au Canada.'),
    },
    {
      title: t('Warranty & parts', '质保与配件', 'Garantie et pièces'),
      desc: t('Local warranty service and spare-parts supply after handover.', '交付后提供本地质保服务与备件供应。', 'Service de garantie local et fourniture de pièces après la livraison.'),
    },
  ],
  faqTitle: t('Frequently Asked Questions', '常见问题', 'Questions fréquentes'),
  faqs: [
    {
      q: t('Can I buy directly from your catalogue?', '可以直接从目录下单吗？', 'Puis-je acheter directement au catalogue ?'),
      a: t(
        'Yes. Configure any product online or contact us — we confirm engineering details and issue a firm quotation before any deposit.',
        '可以。您可以在线配置任何产品或直接联系我们——我们在收取任何订金之前都会确认工程细节并出具正式报价。',
        'Oui. Configurez n’importe quel produit en ligne ou contactez-nous — nous confirmons les détails d’ingénierie et émettons une soumission ferme avant tout dépôt.'
      ),
    },
    {
      q: t('Do you build from my own drawings?', '可以使用我自己的图纸吗？', 'Construisez-vous à partir de mes propres plans ?'),
      a: t(
        'Yes. Our engineers review your drawings for Canadian code compliance and quote either as-is or with recommended changes.',
        '可以。我们的工程师会审核您的图纸是否符合加拿大规范，并按原图纸或建议修改后报价。',
        'Oui. Nos ingénieurs révisent vos plans pour la conformité aux codes canadiens et soumissionnent tels quels ou avec les modifications recommandées.'
      ),
    },
    {
      q: t('What certifications can my unit carry?', '我的单元可以获得哪些认证？', 'Quelles certifications mon unité peut-elle obtenir ?'),
      a: t(
        'Depending on unit type and province: CSA Z240 modular certification, A277 factory inspection reports, electrical certification and health approvals for food service.',
        '视单元类型与省份而定：CSA Z240 模块化认证、A277 工厂检验报告、电气认证以及餐饮卫生审批。',
        'Selon le type d’unité et la province : certification modulaire CSA Z240, rapports d’inspection d’usine A277, certification électrique et approbations sanitaires pour le service alimentaire.'
      ),
    },
    {
      q: t('How long does an order take?', '订单周期是多久？', 'Combien de temps prend une commande ?'),
      a: t(
        'Configured units typically ship within weeks depending on season and complexity; custom builds are scheduled after the compliance plan is approved.',
        '标准配置单元通常数周内即可发运（视季节与复杂度而定）；定制单元在合规计划批准后排产。',
        'Les unités configurées sont typiquement expédiées en quelques semaines selon la saison et la complexité ; les constructions sur mesure sont planifiées après l’approbation du plan de conformité.'
      ),
    },
    {
      q: t('I already have a unit being built overseas. Can you help?', '我已有单元在海外建造中，你们能帮忙吗？', 'J’ai déjà une unité en construction à l’étranger. Pouvez-vous aider ?'),
      a: t(
        'Yes — we offer pre-shipment inspection, customs and transport coordination, plus completion of missing systems in Markham so it passes Canadian inspection.',
        '可以——我们提供发运前检验、清关与运输协调，并在万锦补齐缺失系统，使其通过加拿大检验。',
        'Oui — nous offrons l’inspection avant expédition, la coordination douanière et du transport, ainsi que l’achèvement des systèmes manquants à Markham pour réussir l’inspection canadienne.'
      ),
    },
    {
      q: t('Where do you deliver?', '配送到哪些地区？', 'Où livrez-vous ?'),
      a: t(
        'Anywhere in Canada. Transport is quoted by route; we coordinate over-dimensional permits where required.',
        '加拿大全境配送。运费按路线报价；必要时我们协调超限运输许可。',
        'Partout au Canada. Le transport est soumis par itinéraire ; nous coordonnons les permis hors gabarit lorsque requis.'
      ),
    },
    {
      q: t('What warranty do you provide?', '提供什么质保？', 'Quelle garantie offrez-vous ?'),
      a: t(
        'Workmanship warranty on assembly performed in Canada, plus manufacturer warranties passed through to you. Details are confirmed in your quotation.',
        '我们对在加拿大完成的组装提供工艺质保，同时转授制造商质保。具体细节在报价中确认。',
        'Garantie de main-d’œuvre sur l’assemblage effectué au Canada, plus garanties des fabricants transférées. Les détails sont confirmés dans votre soumission.'
      ),
    },
  ],
  ctaTitle: t(
    'Tell us what you’re building.',
    '告诉我们您想建什么。',
    'Dites-nous ce que vous construisez.'
  ),
  ctaBody: t(
    'Share your project details and our team will map the fastest compliant path from order to occupancy.',
    '分享您的项目详情，我们的团队将为您规划从下单到投入使用最快的合规路径。',
    'Partagez les détails de votre projet et notre équipe tracera le chemin conforme le plus rapide de la commande à l’occupation.'
  ),
}

export const ABOUT = {
  badge: t('About Us', '关于我们', 'À propos'),
  title: t(
    'A bridge between world factories and Canadian sites.',
    '连接世界工厂与加拿大工地的桥梁。',
    'Un pont entre les usines du monde et les chantiers canadiens.'
  ),
  sub: t(
    'NEXUS Assembly Centre exists because great manufacturing deserves a compliant Canadian finish — assembled, inspected and documented by people who know the codes.',
    'NEXUS 组装中心的使命是让优秀的制造产品在加拿大合规落地——由深谙法规的团队完成组装、检验与文档交付。',
    'Le Centre d’assemblage NEXUS existe parce qu’une excellente fabrication mérite une finalisation canadienne conforme — assemblée, inspectée et documentée par des gens qui connaissent les codes.'
  ),
  missionTitle: t('Our Mission', '我们的使命', 'Notre mission'),
  mission: t(
    'Make globally manufactured modular solutions trustworthy in Canada: one team accountable for engineering review, assembly quality, compliance evidence and delivery across the country.',
    '让全球制造的模块化解决方案在加拿大值得信赖：一个对工程审核、组装质量、合规证据与全国交付全面负责的团队。',
    'Rendre fiables au Canada les solutions modulaires fabriquées mondialement : une seule équipe responsable de la révision d’ingénierie, de la qualité d’assemblage, des preuves de conformité et de la livraison partout au pays.'
  ),
  valuesTitle: t('What We Stand On', '我们的立足点', 'Nos valeurs'),
  values: [
    {
      title: t('Accountability', '责任到底', 'Responsabilité'),
      desc: t('One contract, one team, one standard — no finger-pointing between factory and site.', '一份合同、一个团队、一个标准——工厂与工地之间绝无推诿。', 'Un contrat, une équipe, une norme — aucun renvoi de responsabilité entre usine et chantier.'),
    },
    {
      title: t('Evidence over claims', '以证据说话', 'Des preuves plutôt que des promesses'),
      desc: t('Photos, serials and inspection records back every compliance statement we make.', '照片、序列号与检验记录支撑我们的每一项合规声明。', 'Photos, numéros de série et rapports d’inspection appuient chaque affirmation de conformité.'),
    },
    {
      title: t('Bilingual by default', '默认多语服务', 'Multilingue par défaut'),
      desc: t('We work with suppliers and clients in English, Chinese and French every day.', '我们每天以英文、中文和法文为供应商与客户服务。', 'Nous travaillons chaque jour en anglais, en chinois et en français avec fournisseurs et clients.'),
    },
  ],
  approachTitle: t('How We Work Every Day', '我们的日常工作方式', 'Notre quotidien'),
  approachPoints: [
    t('Engineering reviews before any production commitment', '任何生产承诺之前先行工程审核', "Révisions d'ingénierie avant tout engagement de production"),
    t('Licensed trades for electrical, plumbing and gas work', '电气、给排水与燃气作业均由持证技工完成', 'Artisans licenciés pour l’électricité, la plomberie et le gaz'),
    t('Photo-documented QC gates at every build stage', '每个建造阶段设拍照质检关卡', 'Points QC photographiés à chaque étape de construction'),
    t('Transparent quotations with compliance scope included', '报价透明，含合规范围说明', 'Soumissions transparentes incluant la portée de conformité'),
    t('Honest lead times based on real production slots', '基于真实生产档期的诚实交期', 'Délais honnêtes basés sur des créneaux réels'),
    t('After-delivery support from the same team that built your unit', '建造您单元的原班团队提供售后支持', 'Soutien après livraison par l’équipe qui a construit votre unité'),
  ],
  ctaTitle: t(
    'Meet the team behind your unit.',
    '认识您单元背后的团队。',
    'Rencontrez l’équipe derrière votre unité.'
  ),
  ctaBody: t(
    'Visit our Markham facility or start with a conversation about your project requirements.',
    '欢迎参观万锦厂区，或先与我们聊聊您的项目需求。',
    'Visitez notre installation de Markham ou commencez par une conversation sur votre projet.'
  ),
}
