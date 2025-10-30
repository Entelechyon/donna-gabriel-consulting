import Image from 'next/image'

export default function Community() {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60">
        <Image
          src="/images/community1.webp"
          alt="DGC Community Events"
          fill
          className="object-cover opacity-30"
          loading="lazy"
          sizes="100vw"
          quality={80}
        />
      </div>

      {/* Overlay Content */}
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Building Confident, Connected Communities
          </h2>
          <p className="text-xl md:text-2xl text-white/95 font-medium">
            Since 2012, Donna has helped hundreds of people find their flourish through creativity, connection, and courage.
          </p>
        </div>
      </div>
    </section>
  )
}
