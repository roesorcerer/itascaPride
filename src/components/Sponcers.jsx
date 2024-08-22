import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'

export function Sponcers() {
  return (
    <Container>
      <div className="static overflow-hidden">
        <div className="flex min-h-2 items-center justify-center">
          <div className="sm:auto-cols-auto lg:auto-cols-auto lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:flex lg:h-full lg:max-w-none lg:flex-col lg:justify-center lg:pt-2 xl:col-span-2">
              <h1 className="text-center text-4xl font-medium text-gray-900 lg:text-left">
                Our Partners and Sponcers:
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
                    <Image src={logo} alt={name} className="h-8" unoptimized />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
