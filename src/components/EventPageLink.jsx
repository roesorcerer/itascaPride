import Link from 'next/link'
import clsx from 'clsx'

export function EventPageLink({ color = 'rainbow' }) {
  return (
    <Link
      href="https://www.facebook.com/ItascaPride/events/?id=61554640344998&sk=events"
      aria-label="View Events on Facebook"
      className={clsx(
        'rounded-lg transition-colors',
        color === 'rainbow'
          ? 'bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white'
          : color === 'blue'
            ? 'bg-gray-700 text-white hover:bg-gray-900'
            : 'bg-white text-gray-900 hover:bg-gray-50',
      )}
    >
      <svg viewBox="0 0 120 40" aria-hidden="true" className="h-10"></svg>
    </Link>
  )
}
