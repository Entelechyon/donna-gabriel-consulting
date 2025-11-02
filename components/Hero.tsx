'use client'

import Image from 'next/image'
import { scrollToSection } from '@/lib/utils'
import CalendlyButton from './CalendlyButton'

export default function Hero() {
  const handleLearnMore = () => {
    scrollToSection('about')
  }

  return (
    <section className="pt-20 pb-12 sm:pt-24 md:pt-28 md:pb-16 bg-white relative overflow-hidden min-h-[600px] sm:min-h-[650px] md:min-h-[700px] flex items-center w-full">
      {/* Decorative teal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Hero Image - Shows FIRST on mobile, SECOND on desktop */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-black order-1 md:order-2">
            <Image
              src="/images/hero.webp"
              alt="Donna Gabriel - Motivational Speaker and Coach"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
              quality={85}
            />
          </div>

          {/* Text Content - Shows SECOND on mobile, FIRST on desktop */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight break-words">
              Donna Gabriel
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent break-words">
              Get Donna Get Moving!
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Helping individuals and organisations find their flourish through purposeful change and personal growth
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full">
              <CalendlyButton className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors">
                Book a Discovery Call
              </CalendlyButton>

              <button
                onClick={handleLearnMore}
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
