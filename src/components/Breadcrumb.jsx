import { Link } from 'wouter'

export function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.href}>
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <>
                  <Link href={item.href}>{item.name}</Link>
                  <span className="sep" aria-hidden="true">/</span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
