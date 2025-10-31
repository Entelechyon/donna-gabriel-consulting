export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: '[Testimonial content to be added]',
      author: '[Client Name]',
      role: '[Role/Organization]',
    },
    {
      id: 2,
      content: '[Testimonial content to be added]',
      author: '[Client Name]',
      role: '[Role/Organization]',
    },
    {
      id: 3,
      content: '[Testimonial content to be added]',
      author: '[Client Name]',
      role: '[Role/Organization]',
    },
  ]

  return (
    <section className="section-padding bg-white w-full">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 break-words">
            What People Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Stories of transformation
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-light rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow w-full"
            >
              {/* Quote Icon */}
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-primary/30 mb-3 sm:mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-6c0-2.2 1.8-4 4-4V8z" />
              </svg>

              {/* Content */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="border-t-2 border-primary/20 pt-3 sm:pt-4">
                <p className="font-bold text-black text-sm sm:text-base break-words">{testimonial.author}</p>
                <p className="text-primary text-xs sm:text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note for editing */}
        <div className="mt-6 sm:mt-8 p-4 bg-accent/10 rounded-lg text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            <strong>Note:</strong> Testimonials are placeholders. Edit this component to add real testimonials at components/Testimonials.tsx
          </p>
        </div>
      </div>
    </section>
  )
}
