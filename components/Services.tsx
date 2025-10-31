'use client'

import { useState } from 'react'
import { scrollToSection } from '@/lib/utils'
import CalendlyButton from './CalendlyButton'

export default function Services() {
  const [showModal, setShowModal] = useState(false)

  const handleEnquireClick = () => {
    scrollToSection('contact')
  }

  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: '1:1 Coaching',
      subtitle: '(By Application Only)',
      description:
        'Exclusive, tailored sessions for individuals ready for meaningful change. Together, we\'ll regulate your rhythm, liberate you from constraints, and reimagine your future.',
      cta: 'Apply Now',
      useCalendly: true,
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Workshops & Programmes',
      subtitle: '(Organizations, Schools, Community Groups)',
      description:
        'Bespoke workshops designed for teams that want to flourish together. Every experience blends creativity, facilitation, and connection — adaptable to boardrooms, classrooms, or creative spaces.',
      cta: 'Enquire',
      action: handleEnquireClick,
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
      title: 'Speaking & Events',
      subtitle: '(Keynotes + Hosting/MC)',
      description:
        'Inspiring keynotes and professional event hosting that guide audiences to breakthrough moments. Donna brings energy, confidence, and presence to any stage.',
      cta: 'Book Donna',
      action: handleEnquireClick,
    },
    {
      id: 4,
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'DGC Events',
      subtitle: '(NDIS-Specific Programmes)',
      description:
        'Safe, inclusive programs created to help participants discover their own flourish in supportive, creative settings. Includes social events, creative workshops, and community building.',
      cta: 'Learn More',
      action: () => setShowModal(true),
    },
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Work With Me
          </h2>
          <p className="text-xl text-gray-700">
            Four ways we can work together
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="text-primary mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-primary font-medium mb-4">{service.subtitle}</p>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* CTA Button */}
              {service.useCalendly ? (
                <CalendlyButton className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  {service.cta}
                </CalendlyButton>
              ) : (
                <button
                  onClick={service.action}
                  className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  {service.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* DGC Events Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-black">DGC Events</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-black"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                DGC Events include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>After Hours Events:</strong> Monthly social gatherings in supportive, creative environments
                </li>
                <li>
                  <strong>The Social Club:</strong> Weekly confidence building and community connection
                </li>
                <li>
                  <strong>DGCreative:</strong> Creative arts program designed for self-expression and growth
                </li>
              </ul>
              <p className="pt-4">
                For more information, please contact Donna directly.
              </p>
            </div>

            <button
              onClick={() => {
                setShowModal(false)
                handleEnquireClick()
              }}
              className="w-full mt-6 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
