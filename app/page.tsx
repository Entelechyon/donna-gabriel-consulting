import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Methodology from '@/components/Methodology'
import Services from '@/components/Services'
import Community from '@/components/Community'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ChatbotWidget from '@/components/ChatbotWidget'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Methodology />
      <Services />
      <Community />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatbotWidget />
    </main>
  )
}
