import Image from 'next/image'

/**
 * Realistic 3D-style icon set (generated renders, brand palette).
 * Maps semantic icon names used across sections to image paths.
 */
const iconPaths: Record<string, string> = {
  Import: '/images/icons/import.webp',
  Assembly: '/images/icons/factory.webp',
  Customization: '/images/icons/scissors.webp',
  QualityControl: '/images/icons/shield.webp',
  Compliance: '/images/icons/clipboard.webp',
  Delivery: '/images/icons/truck.webp',
  StatTruck: '/images/icons/truck.webp',
  StatHandshake: '/images/icons/handshake.webp',
  StatBuilding: '/images/icons/factory.webp',
  StatShield: '/images/icons/shield.webp',
  StatLeaf: '/images/icons/leaf.webp',
  CanadianAssembly: '/images/icons/factory.webp',
  Quality: '/images/icons/shield.webp',
  FastDelivery: '/images/icons/truck.webp',
  Value: '/images/icons/handshake.webp',
}

export function IconImage({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  const src = iconPaths[name]
  if (!src) return null
  return (
    <Image
      src={src}
      alt=""
      width={256}
      height={256}
      className={`${className} object-contain drop-shadow-sm`}
      aria-hidden="true"
    />
  )
}
