import Link from "next/link"
import { Shield, Award, QrCode, Download, Users, Palette, Zap, Star } from "lucide-react"

export default function HomePage() {
  const templates = [
    {
      id: "classic-beige",
      name: "Classic Beige",
      description: "Traditional certificate with ornate border design",
      image: "/templates/classic-beige.png",
      color: "from-amber-600 to-yellow-600",
      category: "Classic",
    },
    {
      id: "modern-teal",
      name: "Modern Teal",
      description: "Contemporary design with geometric elements",
      image: "/templates/modern-teal.png",
      color: "from-teal-500 to-cyan-600",
      category: "Modern",
    },
    {
      id: "green-achievement",
      name: "Green Achievement",
      description: "Professional achievement certificate with curved design",
      image: "/templates/green-achievement.png",
      color: "from-green-600 to-yellow-500",
      category: "Achievement",
    },
    {
      id: "dark-luxury",
      name: "Dark Luxury",
      description: "Premium dark certificate with gold accents",
      image: "/templates/dark-luxury.png",
      color: "from-gray-800 to-yellow-500",
      category: "Luxury",
    },
    {
      id: "teal-course",
      name: "Teal Course",
      description: "Course completion certificate with flowing design",
      image: "/templates/teal-course.png",
      color: "from-teal-700 to-yellow-500",
      category: "Course",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CertifyPro</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="#templates"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Templates
                </Link>
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </Link>
                <Link
                  href="/verify"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Verify
                </Link>
                <Link href="/generate" className="btn-primary">
                  Create Certificate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Certificate
              <span className="block text-cyan-300">Generation Platform</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Create stunning, professional certificates with our authentic templates. Choose from beautiful designs
              crafted by professional designers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/generate"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Choose Template & Create
              </Link>
              <Link
                href="#templates"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Template Showcase Section */}
      <section id="templates" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beautiful Certificate Templates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our professionally designed templates inspired by the best design practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={template.image || "/placeholder.svg?height=200&width=300"}
                    alt={template.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">4.9</span>
                    </div>
                    <Link
                      href={`/generate?template=${template.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      Use Template
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/generate"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Browse All Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, customize, and verify professional certificates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Designer Templates</h3>
              <p className="text-gray-600">
                Professional templates designed by experts for maximum impact and visual appeal.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Generation</h3>
              <p className="text-gray-600">
                Create beautiful certificates in seconds with our streamlined process and real-time preview.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">QR Code Verification</h3>
              <p className="text-gray-600">
                Secure QR codes that link to certificate details for instant verification and authenticity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Quality PDF</h3>
              <p className="text-gray-600">
                Download print-ready PDF certificates with high resolution for professional presentation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Authentic</h3>
              <p className="text-gray-600">
                Advanced security features prevent fraud and ensure certificate authenticity and credibility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bulk Generation</h3>
              <p className="text-gray-600">
                Generate multiple certificates at once for events, courses, and programs with CSV import.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Certificates Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-200">Professional Templates</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Create Your Certificate?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations using CertifyPro for their professional certificate needs.
          </p>
          <Link
            href="/generate"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Creating Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">CertifyPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                The most trusted platform for professional certificate generation and verification with beautiful
                templates.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/generate" className="text-gray-400 hover:text-white">
                    Create Certificate
                  </Link>
                </li>
                <li>
                  <Link href="/verify" className="text-gray-400 hover:text-white">
                    Verify Certificate
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-gray-400 hover:text-white">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 CertifyPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
