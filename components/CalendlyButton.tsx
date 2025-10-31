'use client'

import { useEffect } from 'react'

interface CalendlyButtonProps {
  children: React.ReactNode
  className?: string
}

// Declare Calendly on window for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export default function CalendlyButton({ children, className }: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly popup widget script if not already loaded
    if (!window.Calendly && typeof document !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)

      // Also add the CSS
      const link = document.createElement('link')
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }
  }, [])

  const handleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/donna-donnagabriel-yy4/discovery-call',
      })
    }
  }

  return (
    <button onClick={handleClick} className={className} type="button">
      {children}
    </button>
  )
}
