import clsx from 'clsx'
import Image from 'next/image'

import frame from '@/images/phone-frame.svg'
import styles from './rainbowflag.module.css'

function PlaceholderFrame(props) {
  return (
    <svg viewBox="0 0 400 300" aria-hidden="true" {...props}>
      <path
        d="M10 10 Q 70 30 130 10 T 250 10 T 370 10 Q 430 30 490 10 V 290 Q 430 270 370 290 T 250 290 T 130 290 Q 70 270 10 290 Z"
        fill="#F2F2F2"
        stroke="#D4D4D4"
        strokeWidth="5"
      />
    </svg>
  )
}

export function RainbowFlag({
  className,
  children,
  priority = false,
  ...props
}) {
  return (
    <div className={clsx(styles.flagContainer, className)} {...props}>
      <div className={styles.flag} />
      <PlaceholderFrame className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100" />
    </div>
  )
}

export default RainbowFlag
