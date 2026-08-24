import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-lime">404</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
        Page not found · 页面未找到 · Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-navy/70">
        Sorry, we couldn&apos;t find that page. 抱歉，找不到该页面。 Désolé, nous n&apos;avons pas pu
        trouver cette page.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 font-display font-semibold text-white transition hover:bg-navy-light"
      >
        Back to home · 返回首页 · Retour à l&apos;accueil
      </Link>
    </div>
  )
}
