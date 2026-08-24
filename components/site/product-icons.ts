import { Box, Home, Recycle, Store, Truck, Warehouse, type LucideIcon } from 'lucide-react'

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  'modular-living-spaces': Home,
  'mobile-commercial-units': Store,
  'enclosed-trailers': Truck,
  'industrial-solutions': Warehouse,
  'commercial-waste-solutions': Recycle,
}

export function productIcon(slug: string): LucideIcon {
  return PRODUCT_ICONS[slug] ?? Box
}
