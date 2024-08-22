'use client'
import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { EventPageLink } from '@/components/EventPageLink'
import CountdownTimer from './CountdownTimer'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GradientBackground } from './GradientBackground'

import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'

export function Hero() {
  return (
    <>
      <Container>
        <div className="static flex min-h-screen items-center justify-center overflow-hidden">
          <GradientBackground />
          <div className="absolute inset-0 z-0 bg-black opacity-10"></div>
          <div className="relative z-10 text-center">
            <div className="mx-auto max-w-4xl">
              <CountdownTimer />
              <h1 className="mb-5 text-5xl font-bold text-black">
                Celebrate Pride within Itasca County!
              </h1>
              <p className="mb-5 text-gray-800">
                Coming together as a community to build a safe and inclusive
                environment for all.
              </p>
              <Button
                href="https://www.facebook.com/ItascaPride/events/?id=61554640344998&sk=events"
                variant="solid"
              >
                Check out our events!
              </Button>
              <Button
                href="https://www.wdio.com/front-page/top-stories/itasca-pride-kicks-off-their-first-pride-fest-in-grand-rapids/"
                variant="outline"
              >
                <span className="ml-2.5">2024 Pride Fest</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
