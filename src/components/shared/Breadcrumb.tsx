import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  to?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const BASE_URL = 'https://www.tankspeedterminals.eu'

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: 'Home', to: '/' }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.to ? { item: `${BASE_URL}${item.to}` } : {}),
    })),
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="bg-navy-light border-b border-gold/10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-1 flex-wrap text-xs" itemScope itemType="https://schema.org/BreadcrumbList">
            {allItems.map((item, i) => (
              <li key={i} className="flex items-center gap-1" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                {i > 0 && <ChevronRight size={12} className="text-gold/40" aria-hidden="true" />}
                {item.to && i < allItems.length - 1 ? (
                  <Link to={item.to} className="text-text-muted hover:text-gold transition-colors" itemProp="item">
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span className={i === allItems.length - 1 ? 'text-gold' : 'text-text-muted'} itemProp="name">
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={String(i + 1)} />
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
