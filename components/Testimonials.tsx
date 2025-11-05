export default function Testimonials() {
  const testimonials = [
    {
      quote: 'No more awkward money chats — BillBuddy makes it fair and fast.',
      author: 'Sarah Chen',
      role: 'Group Organizer',
    },
    {
      quote: 'We use it for every group dinner. So simple, and everyone knows exactly what they owe.',
      author: 'Mike Rodriguez',
      role: 'Travel Enthusiast',
    },
    {
      quote: 'Finally, a bot that actually works. No complicated setup, just add and go.',
      author: 'Emma Johnson',
      role: 'Student',
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by Groups Everywhere
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what people are saying about BillBuddy Bot.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg"
            >
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

