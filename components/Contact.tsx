'use client'

import { useState } from 'react'
import Script from 'next/script'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-gray-light w-full">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 break-words">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Ready to find your flourish? Let&apos;s start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 w-full">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg w-full">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6 break-words">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                  Service Interest <span className="text-accent">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="1:1 Coaching">1:1 Coaching</option>
                  <option value="Workshops">Workshops</option>
                  <option value="Speaking">Speaking</option>
                  <option value="DGC Events">DGC Events</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me what's important to you right now..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent. I&apos;ll be in touch soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  Oops! Something went wrong. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>

          {/* Right Column - Calendly & Contact Info */}
          <div className="space-y-6 sm:space-y-8 w-full">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6 break-words">
                Or Book Directly
              </h3>

              {/* Calendly Inline Widget */}
              <div className="mb-5 sm:mb-6 w-full overflow-hidden">
                <div
                  className="calendly-inline-widget w-full"
                  data-url="https://calendly.com/donna-donnagabriel-yy4/discovery-call"
                  style={{ minWidth: '100%', height: '600px' }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="afterInteractive"
                />
              </div>

              {/* Direct Contact Info */}
              <div className="pt-5 sm:pt-6 border-t-2 border-gray-200 space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-black">Email</p>
                    <a
                      href="mailto:donna@donnagabriel.com.au"
                      className="text-primary hover:text-primary-dark break-words"
                    >
                      donna@donnagabriel.com.au
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 text-sm pt-4">
                  Prefer to chat first? Send me an email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
