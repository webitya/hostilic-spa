'use client'

import { useRouter } from 'next/navigation'
import { Play, Sparkles, Heart, Leaf } from 'lucide-react'

export default function HomeHero() {
  const router = useRouter()

  return (
    <section
      className="relative w-full pt-10 overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100"
      style={{ minHeight: '90vh' }}
    >
      {/* Soft Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sage-200 rounded-full blur-2xl opacity-20" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-lavender-200 rounded-full blur-2xl opacity-20" />
      <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-eucalyptus-200 rounded-full blur-2xl opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-sage-200/50 shadow">
              <Leaf className="w-4 h-4 text-sage-600" />
              <span className="text-sm text-sage-700 font-light">13+ Years of Excellence</span>
            </div>

            <div>
              <h1 className="text-4xl lg:text-5xl font-light text-stone-800 leading-tight">
                Welcome to{' '}
                <span className="block text-sage-600 font-semibold">
                  SR Holistic Wellness
                </span>
              </h1>
              <div className="w-20 h-1 mt-3 bg-gradient-to-r from-sage-400 to-lavender-400 rounded-full" />
            </div>

            <p className="text-base lg:text-lg text-stone-700 font-light leading-relaxed">
              SR Holistic Wellness is a{' '}
              <span className="text-sage-700 font-medium">
                sanctuary where healing meets luxury
              </span>. With over 13 years of experience, we offer personalized therapies
              blending traditional healing with modern care to rejuvenate your body, calm your mind,
              and awaken your soul.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-light">
                <Heart className="w-3 h-3" />
                <span>Traditional Healing</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-lavender-100 text-lavender-700 rounded-full text-sm font-light">
                <Sparkles className="w-3 h-3" />
                <span>Modern Luxury</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-eucalyptus-100 text-eucalyptus-700 rounded-full text-sm font-light">
                <Leaf className="w-3 h-3" />
                <span>Holistic Care</span>
              </span>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={() => router.push('/holistic-therapies')}
                className="inline-flex items-center space-x-2 bg-sage-500 hover:bg-sage-600 text-white px-6 py-3 rounded-full text-base font-medium shadow hover:shadow-md transition-all"
              >
                <span>Explore Our Services</span>
                <Play className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Visual / Video Section */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-4 border border-stone-200 shadow-xl">
              <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden bg-gradient-to-br from-sage-100 to-lavender-100">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src="/vid.mp4" type="video/mp4" />
                </video>

                {/* Quote Overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow border border-white/40">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-gradient-to-br from-sage-100 to-lavender-100 rounded-xl">
                        <Sparkles className="w-5 h-5 text-sage-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-stone-800">
                          “Discover the Power of Holistic Living”
                        </h3>
                        <p className="text-xs text-stone-600 leading-relaxed font-light">
                          Every experience is designed to elevate your body, enlighten your mind,
                          and awaken your soul.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow hover:scale-105 transition-transform">
                    <Play className="w-8 h-8 text-sage-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-sage-400 to-eucalyptus-400 rounded-2xl p-2 shadow">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-lavender-400 to-sage-400 rounded-2xl p-2 shadow">
              <Leaf className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Spa Palette */}
      <style jsx>{`
        .text-sage-600 { color: #7c9885; }
        .text-sage-700 { color: #6b8471; }
        .bg-sage-100 { background-color: #e8f0ea; }
        .bg-sage-200 { background-color: #d4e0d7; }
        .bg-sage-400 { background-color: #9db5a3; }
        .bg-sage-500 { background-color: #7c9885; }
        .hover\\:bg-sage-600:hover { background-color: #6b8471; }

        .text-lavender-700 { color: #8a7ca8; }
        .bg-lavender-100 { background-color: #ede8f3; }
        .bg-lavender-200 { background-color: #e0dae8; }
        .bg-lavender-400 { background-color: #c0b3d1; }

        .text-eucalyptus-700 { color: #6a8f4f; }
        .bg-eucalyptus-100 { background-color: #eef3ea; }
        .bg-eucalyptus-200 { background-color: #d6e2cd; }
        .bg-eucalyptus-400 { background-color: #a4c087; }
      `}</style>
    </section>
  )
}
