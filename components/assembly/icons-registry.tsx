import {
  Package,
  Factory,
  Scissors,
  ShieldCheck,
  ClipboardCheck,
  Truck,
  Search,
  MapPin,
  Boxes,
  PackageCheck,
  Wrench,
  Handshake,
  Building2,
  Leaf,
} from 'lucide-react'

export const assemblyIcons = {
  Import: Package,
  Assembly: Factory,
  Customization: Scissors,
  QualityControl: ShieldCheck,
  Compliance: ClipboardCheck,
  Delivery: Truck,
  CanadianAssembly: Factory,
  Quality: PackageCheck,
  FastDelivery: Truck,
  Value: Wrench,
  Search: Search,
  Location: MapPin,
  Boxes: Boxes,
  StatTruck: Truck,
  StatHandshake: Handshake,
  StatBuilding: Building2,
  StatShield: ShieldCheck,
  StatLeaf: Leaf,
} as const

export type AssemblyIconName = keyof typeof assemblyIcons
