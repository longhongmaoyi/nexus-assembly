import { t, type Locale } from '@/lib/i18n'

/** Resolve localized text without importing tr everywhere. */
export function pick(locale: Locale, value: { en: string; zh: string; fr: string }): string {
  return value[locale]
}

export const SWITCHER = {
  label: t('Language', '语言', 'Langue'),
}

export const CFG = {
  kicker: t('Online Configurator', '在线配置器', 'Configurateur en ligne'),
  title: t('Design Your Unit', '定制您的单元', 'Concevez votre unité'),
  subtitle: t(
    'Six guided steps. Save your progress automatically, then email us the summary for engineering feedback and a quotation.',
    '六步引导式定制。自动保存进度，完成后可将配置摘要发送给我们，获取工程意见与报价。',
    'Six étapes guidées. Votre progression est enregistrée automatiquement, puis envoyez-nous le résumé par courriel pour une rétroaction d’ingénierie et une soumission.'
  ),
  savedNote: t('Progress auto-saved on this device', '进度已在此设备上自动保存', 'Progression enregistrée automatiquement sur cet appareil'),
  steps: [
    t('Product', '选择产品', 'Produit'),
    t('Package', '选择套餐', 'Forfait'),
    t('Upgrades', '升级配置', 'Améliorations'),
    t('Your Details', '您的信息', 'Vos coordonnées'),
    t('Review', '确认摘要', 'Récapitulatif'),
    t('Done', '完成', 'Terminé'),
  ],
  back: t('Back', '上一步', 'Retour'),
  continue: t('Continue', '继续', 'Continuer'),
  restart: t('Start Over', '重新开始', 'Recommencer'),
  printSummary: t('Print Summary', '打印摘要', 'Imprimer le résumé'),
  emailSummary: t('Email Us This Summary', '通过邮件发送此摘要', 'Courriel : envoyer ce résumé'),

  productTitle: t('Choose your product line', '选择您的产品线', 'Choisissez votre gamme de produits'),
  productDesc: t('Every line ships in Standard, Comfort and Premium packages.', '每条产品线均提供标准版、舒适版与尊享版套餐。', 'Chaque gamme est offerte en forfaits Standard, Confort et Premium.'),
  packageTitle: t('Choose your package tier', '选择套餐等级', 'Choisissez votre forfait'),
  packageDesc: t('The tier sets the base specification — you can fine-tune with upgrades next.', '等级决定基础规格——接下来可通过升级项进一步微调。', 'Le forfait définit la spécification de base — vous pourrez l’affiner avec les améliorations.'),
  includedFeatures: t('Included in this tier', '该等级包含', 'Inclus dans ce forfait'),
  selectThisTier: t('Select this tier', '选择此等级', 'Sélectionner ce forfait'),

  upgradesTitle: t('Add upgrades', '添加升级配置', 'Ajoutez des améliorations'),
  upgradesDesc: t('Optional — pick as many as you like.', '可选项——数量不限。', 'Facultatif — choisissez-en autant que vous voulez.'),
  noneSelected: t('No upgrades selected yet.', '尚未选择任何升级项。', 'Aucune amélioration sélectionnée pour le moment.'),
  selectedLabel: t('Selected', '已选', 'Sélectionné'),
  examplesLabel: t('Popular options:', '热门选项：', 'Options populaires :'),

  detailsTitle: t('Tell us about your project', '告诉我们您的项目信息', 'Parlez-nous de votre projet'),
  detailsDesc: t('We use these details to prepare engineering feedback and your quotation.', '我们将根据这些信息准备工程意见与报价。', 'Nous utilisons ces informations pour préparer la rétroaction d’ingénierie et votre soumission.'),

  reviewTitle: t('Review your configuration', '核对您的配置', 'Vérifiez votre configuration'),
  reviewDesc: t(
    'Print it, save it as PDF, or email it to our team — we’ll respond with feedback and pricing.',
    '打印、另存为 PDF 或发送给我们的团队——我们会回复反馈与价格。',
    'Imprimez-le, enregistrez-le en PDF ou envoyez-le à notre équipe — nous répondrons avec commentaires et prix.'
  ),
  edit: t('Edit', '修改', 'Modifier'),
  referenceId: t('Reference ID', '参考编号', 'Numéro de référence'),
  summaryGenerated: t('Generated', '生成时间', 'Généré le'),

  doneTitle: t('Configuration complete!', '配置完成！', 'Configuration terminée !'),
  doneBody: t(
    'Email us your summary and our engineering team will reply with feedback and a quotation.',
    '请将摘要发送给我们，工程团队将回复反馈与报价。',
    'Courriellez-nous votre résumé et notre équipe d’ingénierie répondra avec commentaires et soumission.'
  ),
  doneRefNote: t(
    'Keep this reference ID for faster service:',
    '请保留此参考编号以便快速服务：',
    'Conservez ce numéro de référence pour un service plus rapide :'
  ),

  productName: t('Product', '产品', 'Produit'),
  packageName: t('Package tier', '套餐等级', 'Forfait'),
  upgradesName: t('Upgrades selected', '已选升级项', 'Améliorations sélectionnées'),
  noUpgrades: t('None — base package only', '无——仅基础套餐', 'Aucune — forfait de base uniquement'),

  fieldName: t('Full name', '姓名', 'Nom complet'),
  fieldEmail: t('Email address', '电子邮箱', 'Adresse courriel'),
  fieldPhone: t('Phone number', '电话号码', 'Téléphone'),
  fieldCity: t('City / delivery location', '城市 / 交付地点', 'Ville / lieu de livraison'),
  fieldProvince: t('Province or territory', '省或地区', 'Province ou territoire'),
  fieldCompany: t('Company (optional)', '公司（选填）', 'Entreprise (facultatif)'),
  fieldWebsite: t('Website / product range', '网站 / 产品范围', 'Site web / gamme de produits'),
  fieldMessage: t('Project details', '项目详情', 'Détails du projet'),
  fieldMessageOptional: t('Additional notes (optional)', '补充说明（选填）', 'Remarques supplémentaires (facultatif)'),
  messagePlaceholder: {
    en: 'Tell us about timelines, site conditions, certifications you need…',
    zh: '请告诉我们时间安排、现场条件、所需认证……',
    fr: 'Parlez-nous des délais, des conditions du site, des certifications requises…',
  },
}

export const FORM = {
  send: t('Send Message', '发送信息', 'Envoyer le message'),
  sending: t('Sending…', '发送中……', 'Envoi…'),
  success: t(
    "Thanks! Your email draft has opened — just hit send. Prefer a direct line? We're at info@nexusassembly.ca.",
    '谢谢！邮件草稿已打开——只需点击发送。也可以直接联系我们：info@nexusassembly.ca。',
    'Merci ! Votre brouillon de courriel est ouvert — il ne reste qu’à l’envoyer. Joignez-nous directement à info@nexusassembly.ca.'
  ),
  requiredHint: t('* required fields', '* 为必填项', '* champs requis'),
  errRequired: t('This field is required.', '此项为必填。', 'Ce champ est requis.'),
  errEmail: t('Please enter a valid email address.', '请输入有效的电子邮箱。', 'Veuillez entrer une adresse courriel valide.'),
  contactSubject: t('Website enquiry — Contact page', '网站咨询——联系页面', 'Demande du site web — page Contact'),
  supplierSubject: t('Supplier partnership application', '供应商合作申请', 'Candidature de partenariat fournisseur'),
  quoteSubject: t('Quotation request from configurator', '来自配置器的报价请求', 'Demande de soumission via le configurateur'),
}

