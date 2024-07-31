// src/components/PhoneFrame.jsx
import Image from 'next/image'
import clsx from 'clsx'

export function PhoneFrame({
  className,
  children,
  priority = false,
  ...props
}) {
  return (
    <div className={clsx('relative aspect-[366/729]', className)} {...props}>
      <div className="absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl" />
      <div className="overflow-hidden] absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*50%)] w-[calc(318/366*50%)] transform grid-cols-1">
        {children}
      </div>
      <Image
        src="/happyface.png"
        alt="Happy Face"
        width={5}
        height={5}
        className="pointer-events-none absolute inset-0 h-auto w-auto"
        unoptimized
        priority={priority}
      />
    </div>
  )
}
