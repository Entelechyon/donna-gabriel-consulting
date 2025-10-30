export default function Methodology() {
  const steps = [
    {
      number: 1,
      title: 'Self-Regulation',
      subtitle: 'Finding Your Rhythm',
      description:
        'Ground yourself. Develop awareness of your emotions, thoughts, and actions. Learn to steady the inner waters so you can respond rather than react.',
      keywords: ['Presence', 'Stability', 'Balance'],
      icon: (
        <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path strokeWidth="2" d="M12 6v12M6 12h12" />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Self-Liberation',
      subtitle: 'Breaking the Limits',
      description:
        'Release old patterns, expectations, and constraints. Step out of what holds you back and claim your agency.',
      keywords: ['Freedom', 'Empowerment', 'Release'],
      icon: (
        <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Self-Reimagination',
      subtitle: 'Expanding Possibility',
      description:
        'With freedom comes creativity. Redesign your vision of self and future. Reimagine who you are becoming and what\'s possible.',
      keywords: ['Purpose', 'Creativity', 'Vision'],
      icon: (
        <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeWidth="2"
            d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"
          />
          <path strokeWidth="2" d="M19 19l1 3-3-1-3 1 1-3-1-3 3 1 3-1-1 3z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="methodology" className="section-padding bg-gray-light">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Finding Your Flourish
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            My Three-Step Process for Growth
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">{step.icon}</div>

              {/* Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-primary font-semibold text-lg">
                  → {step.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                {step.description}
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap justify-center gap-2">
                {step.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto border-t-2 border-primary/20 pt-8">
            This framework underpins everything I do — from one-on-one coaching to large-scale events.
          </p>
        </div>
      </div>
    </section>
  )
}
