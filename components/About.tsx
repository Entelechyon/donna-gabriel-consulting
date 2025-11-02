import Image from 'next/image'

export default function About() {
  const credentials = [
    'B.Ed ASM',
    'Motivational Presenter',
    'Certified Coach & Facilitator',
    'Australian Calisthenics National Champion',
  ]

  return (
    <section id="about" className="section-padding bg-white w-full">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/images/speaking.webp"
              alt="Donna Gabriel presenting"
              fill
              className="object-contain scale-110"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
              quality={85}
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black break-words">
              About Donna
            </h2>

            <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Donna Gabriel is a lifelong educator, presenter, and dynamic coach who brings energy, creativity, and purpose to every interaction. With qualifications in education, drama, dance, and relationship coaching, Donna has spent decades helping people find their confidence and voice.
              </p>

              <p>
                Whether working one-on-one, facilitating workshops, or speaking to large audiences, Donna creates spaces where people feel safe to explore, grow, and flourish. Her approach blends creative expression with practical tools, making transformation accessible and sustainable.
              </p>

              <p>
                From boardrooms to classrooms, dancefloors to auditoriums, Donna meets people where they are and motivates insight into action.
              </p>
            </div>

            {/* Credentials */}
            <div className="pt-6 border-t-2 border-primary/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((credential, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-primary font-medium"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
