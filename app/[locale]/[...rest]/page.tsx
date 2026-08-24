import { notFound } from 'next/navigation'

// Unknown paths inside a valid locale hit this catch-all and render the
// localized not-found page (middleware guarantees a valid locale prefix).
export default function CatchAllPage() {
  notFound()
}
