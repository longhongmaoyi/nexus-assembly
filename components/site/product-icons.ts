import { Box, Home, Recycle, Store, Warehouse, type LucideIcon } from 'lucide-react'

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  'modular-living-spaces': Home,
  'mobile-commercial-units': Store,
  'industrial-solutions': Warehouse,
  'commercial-waste-solutions': Recycle,
}

export function productIcon(slug: string): LucideIcon {
  return PRODUCT_ICONS[slug] ?? Box
}
