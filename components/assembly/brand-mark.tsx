import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n'

export function AssemblyBrandMark({ locale }: { locale: Locale }) {
  return (
    <Link href={`/${locale}`} aria-label="NEXUS Canada Assembly Centre home" className="shrink-0">
      <Image
        src="/images/nexus-logo.png"
        alt="NEXUS Canada Assembly Centre"
        width={900}
        height={220}
        priority
        className="h-12 w-auto sm:h-14"
      />
    </Link>
  )
}
