export default function Hero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Split bills instantly in your{' '}
              <span className="text-blue-600">Telegram group.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              BillBuddy Bot helps your friends share expenses with one simple command.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a
                href="https://t.me/billbuddy_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
                Add to Telegram
              </a>
            </div>
            <p className="text-sm text-gray-500">Free to use. No setup required.</p>
          </div>

          {/* Chat Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  BB
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">BillBuddy Bot</h3>
                  <p className="text-xs text-gray-500">online</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">Alex:</span> /split 450 pizza
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">BillBuddy Bot:</span>
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    💰 Bill split: $450
                  </p>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-gray-600">Alex: $150</p>
                    <p className="text-xs text-gray-600">Sarah: $150</p>
                    <p className="text-xs text-gray-600">Mike: $150</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

