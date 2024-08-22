import Link from 'next/link'
import clsx from 'clsx'

export function EventPageLink({ color = 'rainbow' }) {
  return (
    <Link
      href="https://www.facebook.com/ItascaPride/events/?id=61554640344998&sk=events"
      aria-label="View Events on Facebook"
      className={clsx('btn w-64 rounded-full')}
    >
      <svg viewBox="0 0 120 40" aria-hidden="true" className="h-10"></svg>
    </Link>
  )
}
