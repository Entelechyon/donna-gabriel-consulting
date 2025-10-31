'use client'

import Image from 'next/image'
import { scrollToSection } from '@/lib/utils'
import CalendlyButton from './CalendlyButton'

export default function Hero() {
  const handleLearnMore = () => {
    scrollToSection('about')
  }

  return (
    <section className="pt-16 pb-12 md:pt-20 md:pb-12 bg-white relative overflow-hidden min-h-[650px] md:min-h-[700px] flex items-center">
      {/* Decorative teal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

      <div className="container-custom w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-5 md:space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
              Donna Gabriel Consulting
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-accent">
              Get Donna & Get Moving!
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Helping individuals and organizations find their flourish through purposeful change and personal growth
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CalendlyButton className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Book a Discovery Call
              </CalendlyButton>

              <button
                onClick={handleLearnMore}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black">
            <Image
              src="/images/hero.webp"
              alt="Donna Gabriel - Motivational Speaker and Coach"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
