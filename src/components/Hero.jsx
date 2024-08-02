import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { AppDemo } from '@/components/AppDemo'
import { EventPageLink } from '@/components/EventPageLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GradientBackground } from './GradientBackground'
import { RainbowFlag } from './rainbowflag/RainbowFlag'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden py-2 sm:py-2 lg:pb-2 xl:pb-2">
      <GradientBackground />
      <div className="flex min-h-12 items-center justify-center">
        <Container>
          <div className="sm:auto-cols-auto lg:auto-cols-auto lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:flex lg:h-full lg:max-w-none lg:flex-col lg:justify-center lg:pt-2 xl:col-span-2">
              <h1 className="text-center text-4xl font-medium tracking-tight text-gray-900 lg:text-left">
                Embrace Diversity, Celebrate Pride!
              </h1>
              <p className="mt-6 text-center text-lg text-gray-600 lg:text-left">
                Join us in celebrating the vibrant spirit of Itasca Pride! From
                colorful parades to community events, there`s always something
                exciting happening. Connect with friends, enjoy amazing
                performances, and show your support for equality and love. Let`s
                come together and make unforgettable memories!
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4 lg:justify-start">
                <EventPageLink>Facebook Events</EventPageLink>
                <Button
                  href="https://www.facebook.com/ItascaPride/events/?id=61554640344998&sk=events"
                  variant="outline"
                >
                  <PlayIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2.5">Watch the video</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="overflow-hidden py-2 sm:py-2 lg:pb-2 xl:pb-2">
          <div className="flex min-h-2 items-center justify-center">
            <div className="sm:auto-cols-auto lg:auto-cols-auto lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
              <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:flex lg:h-full lg:max-w-none lg:flex-col lg:justify-center lg:pt-2 xl:col-span-2">
                <h1 className="text-center text-4xl font-medium tracking-tight text-gray-900 lg:text-left">
                  Our Wonderful Sponcers:
                </h1>

                <ul
                  role="list"
                  className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8"
                >
                  {[
                    ['Forbes', logoForbes],
                    ['TechCrunch', logoTechcrunch],
                    ['Wired', logoWired],
                    ['CNN', logoCnn, 'hidden xl:block'],
                    ['BBC', logoBbc],
                    ['CBS', logoCbs],
                    ['Fast Company', logoFastCompany],
                    ['HuffPost', logoHuffpost, 'hidden xl:block'],
                  ].map(([name, logo, className]) => (
                    <li key={name} className={clsx('flex', className)}>
                      <Image
                        src={logo}
                        alt={name}
                        className="h-8"
                        unoptimized
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
