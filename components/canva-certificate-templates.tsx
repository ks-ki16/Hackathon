import { Award, QrCode, Shield, CheckCircle, Star, Crown, Trophy, Medal, Gem, Heart, Sparkles } from "lucide-react"

interface CertificateData {
  recipientName: string
  courseName: string
  issueDate: string
  issuerName: string
  issuerTitle: string
  certificateType: string
  id: string
}

export function CanvaModernTemplate({ data }: { data: CertificateData }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto" style={{ aspectRatio: "4/3" }}>
      {/* Modern Canva-style header with geometric shapes */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-8 left-8 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
          <div className="absolute top-16 right-12 w-12 h-12 bg-white bg-opacity-15 transform rotate-45"></div>
          <div className="absolute bottom-8 left-1/3 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
          <div className="absolute bottom-12 right-8 w-8 h-8 bg-white bg-opacity-25 transform rotate-12"></div>
        </div>

        {/* Header content */}
        <div className="relative z-10 flex items-center justify-between h-full px-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">CERTIFICATE</h1>
            <p className="text-blue-100 text-lg">of Achievement</p>
          </div>
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Sparkles className="h-10 w-10 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="px-12 py-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center space-y-8">
          {/* Recipient section */}
          <div className="space-y-4">
            <p className="text-lg text-gray-600 font-light">This is proudly presented to</p>

            {/* Name with modern styling */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl transform rotate-1 opacity-50"></div>
              <div className="relative bg-white border-2 border-purple-200 rounded-2xl p-8 shadow-lg">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {data.recipientName}
                </h2>
              </div>
            </div>
          </div>

          {/* Course section */}
          <div className="space-y-4">
            <p className="text-lg text-gray-600 font-light">for successfully completing</p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-3xl font-semibold text-gray-800">{data.courseName}</h3>
            </div>
          </div>

          {/* Achievement badges */}
          <div className="flex justify-center space-x-6 py-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Excellence</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Achievement</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <Medal className="h-8 w-8 text-white" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Recognition</span>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-200">
          <div className="text-left">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Date</p>
            <p className="text-lg font-semibold text-gray-800">
              {new Date(data.issueDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center border-2 border-purple-300 shadow-lg">
              <QrCode className="h-12 w-12 text-purple-600" />
            </div>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">Verify</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Authorized by</p>
            <div className="border-t-2 border-purple-400 pt-2 w-40">
              <p className="text-lg font-bold text-gray-800">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-600">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        {/* Certificate ID */}
        <div className="mt-6 text-center">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
            Certificate ID: {data.id}
          </span>
        </div>
      </div>
    </div>
  )
}

export function CanvaElegantTemplate({ data }: { data: CertificateData }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4 border-gray-800"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Elegant black and gold header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-12 relative">
        {/* Decorative elements */}
        <div className="absolute top-6 left-6 w-8 h-8 border-2 border-yellow-400 transform rotate-45 opacity-60"></div>
        <div className="absolute top-6 right-6 w-8 h-8 border-2 border-yellow-400 transform rotate-45 opacity-60"></div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 border-2 border-yellow-400 rounded-full opacity-40"></div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-400 rounded-full mb-6 shadow-2xl">
            <Crown className="h-12 w-12 text-gray-900" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-2 tracking-wider">CERTIFICATE</h1>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-yellow-400"></div>
            <span className="text-yellow-400 text-lg font-light tracking-[0.3em]">OF EXCELLENCE</span>
            <div className="w-16 h-px bg-yellow-400"></div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-12 py-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center space-y-8">
          <p className="text-2xl text-gray-700 font-light italic">This is to certify that</p>

          {/* Elegant name presentation */}
          <div className="relative py-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100 to-transparent opacity-50"></div>
            <div className="relative">
              <h2 className="text-6xl font-bold text-gray-900 font-serif tracking-wide">{data.recipientName}</h2>
              <div className="w-32 h-1 bg-yellow-400 mx-auto mt-4"></div>
            </div>
          </div>

          <p className="text-2xl text-gray-700 font-light italic">has demonstrated exceptional excellence in</p>

          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-4xl font-bold font-serif">{data.courseName}</h3>
          </div>

          {/* Elegant quote */}
          <div className="bg-yellow-50 border-l-8 border-yellow-400 p-6 rounded-r-2xl">
            <p className="text-gray-800 text-lg italic font-serif">
              "Excellence is never an accident. It is always the result of high intention, sincere effort, and
              intelligent execution."
            </p>
          </div>
        </div>

        {/* Signature section */}
        <div className="flex justify-between items-end mt-16 pt-8 border-t-2 border-gray-300">
          <div className="text-center">
            <div className="w-48 border-t-4 border-gray-800 pt-4">
              <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">Date of Achievement</p>
              <p className="text-xl font-bold text-gray-900">
                {new Date(data.issueDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-gray-900 rounded-2xl flex items-center justify-center shadow-2xl">
              <QrCode className="h-14 w-14 text-yellow-400" />
            </div>
            <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide font-bold">Authentic</p>
          </div>

          <div className="text-center">
            <div className="w-48 border-t-4 border-gray-800 pt-4">
              <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">Authorized Signature</p>
              <p className="text-xl font-bold text-gray-900">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-700 italic">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-gray-900 text-yellow-400 px-8 py-3 rounded-full shadow-lg">
            <span className="text-sm font-mono tracking-wider">Certificate No: {data.id}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CanvaCorporateTemplate({ data }: { data: CertificateData }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border border-gray-200"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Corporate header with professional styling */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 p-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Award className="h-10 w-10 text-blue-700" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">PROFESSIONAL</h1>
              <h2 className="text-2xl font-light text-blue-200">CERTIFICATE</h2>
            </div>
          </div>
          <div className="text-right text-white">
            <p className="text-sm text-blue-200">Issued by</p>
            <p className="text-xl font-bold">{data.issuerName}</p>
            <p className="text-sm text-blue-200">{data.issuerTitle}</p>
          </div>
        </div>
      </div>

      {/* Professional content area */}
      <div className="px-12 py-10">
        <div className="text-center space-y-8">
          {/* Professional badge */}
          <div className="inline-flex items-center bg-blue-50 border-2 border-blue-200 rounded-full px-8 py-3">
            <Shield className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-blue-800 font-semibold uppercase tracking-wide">Professional Recognition</span>
          </div>

          <p className="text-xl text-gray-700">This certificate is awarded to</p>

          {/* Professional name styling */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-8 shadow-inner">
            <h2 className="text-5xl font-bold text-blue-800">{data.recipientName}</h2>
          </div>

          <p className="text-xl text-gray-700">for successful completion of the professional program</p>

          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg">
            <h3 className="text-3xl font-semibold text-gray-800">{data.courseName}</h3>
          </div>

          {/* Professional metrics */}
          <div className="grid grid-cols-4 gap-4 py-6">
            <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-green-800">Verified</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-blue-800">Secure</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
              <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-purple-800">Excellence</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-yellow-800">Achievement</p>
            </div>
          </div>
        </div>

        {/* Professional footer */}
        <div className="flex justify-between items-end mt-12 pt-8 border-t-2 border-gray-200">
          <div className="text-left">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Issue Date</p>
            <p className="text-lg font-bold text-gray-800">
              {new Date(data.issueDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 border-4 border-blue-400 rounded-xl flex items-center justify-center shadow-lg">
              <QrCode className="h-12 w-12 text-blue-700" />
            </div>
            <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide font-semibold">Scan to Verify</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Digital Signature</p>
            <div className="border-t-4 border-blue-600 pt-3 w-40">
              <p className="text-lg font-bold text-gray-800">{data.issuerName}</p>
              <p className="text-sm text-gray-600">{data.issuerTitle}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span className="bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Certificate ID: {data.id}
          </span>
        </div>
      </div>
    </div>
  )
}

export function CanvaCreativeTemplate({ data }: { data: CertificateData }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto" style={{ aspectRatio: "4/3" }}>
      {/* Creative colorful header */}
      <div className="relative h-48 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 overflow-hidden">
        {/* Creative floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-8 w-12 h-12 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute top-12 right-16 w-8 h-8 bg-yellow-300 bg-opacity-40 transform rotate-45"></div>
          <div className="absolute bottom-8 left-16 w-16 h-16 bg-white bg-opacity-15 rounded-full"></div>
          <div className="absolute bottom-12 right-8 w-6 h-6 bg-pink-300 bg-opacity-50 transform rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-cyan-300 bg-opacity-60 rounded-full"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-2xl">
              <Heart className="h-10 w-10 text-pink-500" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">CREATIVE CERTIFICATE</h1>
            <p className="text-pink-100 text-lg">Celebrating Innovation & Artistry</p>
          </div>
        </div>
      </div>

      {/* Creative content area */}
      <div className="px-12 py-10 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="text-center space-y-8">
          <p className="text-xl text-gray-700 font-light">This creative achievement is proudly awarded to</p>

          {/* Creative name styling with multiple layers */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-3xl transform -rotate-2 opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-3xl transform rotate-1 opacity-30"></div>
            <div className="relative bg-white border-4 border-pink-300 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {data.recipientName}
              </h2>
            </div>
          </div>

          <p className="text-xl text-gray-700 font-light">for outstanding creativity and innovation in</p>

          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-2xl p-6 border-4 border-purple-300 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800">{data.courseName}</h3>
          </div>

          {/* Creative quote with artistic styling */}
          <div className="relative bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border-2 border-pink-200">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-pink-400 rounded-full"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-indigo-400 rounded-full"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-pink-400 rounded-full"></div>
            <p className="text-gray-800 text-lg italic font-light relative z-10">
              "Creativity is intelligence having fun. This certificate celebrates your unique vision, artistic
              excellence, and innovative spirit."
            </p>
          </div>

          {/* Creative achievement icons */}
          <div className="flex justify-center space-x-8 py-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">Innovation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">Excellence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <Gem className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">Artistry</p>
            </div>
          </div>
        </div>

        {/* Creative footer */}
        <div className="flex justify-between items-end mt-12 pt-8 border-t-4 border-gradient-to-r from-pink-300 to-purple-300">
          <div className="text-center">
            <div className="w-40 border-t-4 border-pink-400 pt-3">
              <p className="text-sm text-gray-600 uppercase tracking-wide font-bold">Creative Date</p>
              <p className="text-lg font-bold text-gray-800">
                {new Date(data.issueDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 rounded-2xl flex items-center justify-center border-4 border-purple-400 shadow-2xl">
              <QrCode className="h-12 w-12 text-purple-700" />
            </div>
            <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide font-bold">Verify Creativity</p>
          </div>

          <div className="text-center">
            <div className="w-40 border-t-4 border-purple-400 pt-3">
              <p className="text-sm text-gray-600 uppercase tracking-wide font-bold">Creative Director</p>
              <p className="text-lg font-bold text-gray-800">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-600 italic">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full text-sm font-bold shadow-2xl">
            Creative ID: {data.id}
          </span>
        </div>
      </div>
    </div>
  )
}

export function CanvaAcademicTemplate({ data }: { data: CertificateData }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-8 border-double border-green-700"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Academic header with traditional styling */}
      <div className="bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 p-10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-white rounded-full mb-6 shadow-2xl border-4 border-green-200">
            <Award className="h-14 w-14 text-green-700" />
          </div>
          <h1 className="text-5xl font-bold text-white font-serif mb-2">ACADEMIC CERTIFICATE</h1>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="w-20 h-px bg-green-300"></div>
            <span className="text-green-200 text-xl font-light tracking-[0.2em]">EXCELLENCE IN EDUCATION</span>
            <div className="w-20 h-px bg-green-300"></div>
          </div>
        </div>
      </div>

      {/* Academic content */}
      <div className="px-12 py-10 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="text-center space-y-8">
          <p className="text-2xl text-gray-700 font-serif italic">This is to certify that</p>

          {/* Academic name presentation */}
          <div className="relative py-8">
            <div className="absolute inset-0 bg-green-100 rounded-2xl transform rotate-1 opacity-50"></div>
            <div className="relative bg-white border-8 border-green-300 rounded-2xl p-10 shadow-2xl">
              <h2 className="text-6xl font-bold text-green-800 font-serif">{data.recipientName}</h2>
              <div className="w-40 h-2 bg-green-600 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>

          <p className="text-2xl text-gray-700 font-serif italic">has successfully completed the academic program</p>

          <div className="bg-green-800 text-white p-8 rounded-2xl shadow-2xl border-4 border-green-600">
            <h3 className="text-4xl font-bold font-serif">{data.courseName}</h3>
          </div>

          {/* Academic honors */}
          <div className="bg-green-100 border-l-8 border-green-600 p-8 rounded-r-2xl shadow-lg">
            <p className="text-gray-800 text-xl italic font-serif leading-relaxed">
              "Education is the most powerful weapon which you can use to change the world. This achievement represents
              dedication to learning, growth, and academic excellence."
            </p>
          </div>

          {/* Academic achievement symbols */}
          <div className="flex justify-center space-x-8 py-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 border-4 border-green-400 rounded-full flex items-center justify-center shadow-lg">
                <Star className="h-10 w-10 text-green-600" />
              </div>
              <p className="text-sm text-gray-700 mt-3 font-semibold uppercase tracking-wide">Excellence</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 border-4 border-green-400 rounded-full flex items-center justify-center shadow-lg">
                <Trophy className="h-10 w-10 text-green-600" />
              </div>
              <p className="text-sm text-gray-700 mt-3 font-semibold uppercase tracking-wide">Achievement</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 border-4 border-green-400 rounded-full flex items-center justify-center shadow-lg">
                <Medal className="h-10 w-10 text-green-600" />
              </div>
              <p className="text-sm text-gray-700 mt-3 font-semibold uppercase tracking-wide">Honor</p>
            </div>
          </div>
        </div>

        {/* Academic footer */}
        <div className="flex justify-between items-end mt-16 pt-8 border-t-4 border-green-600">
          <div className="text-center">
            <div className="w-48 border-t-8 border-green-700 pt-4">
              <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">Date Conferred</p>
              <p className="text-xl font-bold text-gray-900">
                {new Date(data.issueDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-28 h-28 bg-green-100 border-8 border-green-500 rounded-full flex items-center justify-center shadow-2xl">
              <QrCode className="h-16 w-16 text-green-700" />
            </div>
            <p className="text-xs text-gray-700 mt-3 uppercase tracking-wide font-bold">Official Seal</p>
          </div>

          <div className="text-center">
            <div className="w-48 border-t-8 border-green-700 pt-4">
              <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">Academic Registrar</p>
              <p className="text-xl font-bold text-gray-900">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-700">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-green-700 text-white px-8 py-4 rounded-full shadow-2xl">
            <span className="text-sm font-mono tracking-wider">Registration No: {data.id}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CanvaLuxuryTemplate({ data }: { data: CertificateData }) {
  return (
    <div
      className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4 border-yellow-600"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Luxury header with gold accents */}
      <div className="relative bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 p-12 overflow-hidden">
        {/* Luxury decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-4 w-12 h-12 border-4 border-white border-opacity-30 transform rotate-45"></div>
          <div className="absolute top-4 right-4 w-12 h-12 border-4 border-white border-opacity-30 transform rotate-45"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-4 border-white border-opacity-30 transform rotate-45"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-4 border-white border-opacity-30 transform rotate-45"></div>
        </div>

        <div className="relative text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full mb-6 shadow-2xl border-8 border-yellow-300">
            <Crown className="h-16 w-16 text-yellow-600" />
          </div>
          <h1 className="text-6xl font-bold text-white font-serif mb-4 tracking-wide">LUXURY CERTIFICATE</h1>
          <div className="flex items-center justify-center space-x-6">
            <div className="w-24 h-1 bg-white rounded-full"></div>
            <span className="text-yellow-100 text-2xl font-light tracking-[0.3em]">PREMIUM EXCELLENCE</span>
            <div className="w-24 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Luxury content */}
      <div className="px-12 py-12 bg-gradient-to-br from-yellow-50 via-white to-amber-50">
        <div className="text-center space-y-10">
          <p className="text-3xl text-gray-800 font-serif italic">This prestigious certificate is awarded to</p>

          {/* Luxury name presentation */}
          <div className="relative py-10">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-amber-100 to-yellow-100 rounded-3xl transform rotate-1 opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 rounded-3xl transform -rotate-1 opacity-40"></div>
            <div className="relative bg-white border-8 border-yellow-400 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-7xl font-bold text-yellow-700 font-serif tracking-wide">{data.recipientName}</h2>
              <div className="flex justify-center space-x-4 mt-6">
                <div className="w-16 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-8 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-16 h-2 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <p className="text-3xl text-gray-800 font-serif italic">for exceptional achievement in</p>

          <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white p-10 rounded-3xl shadow-2xl border-4 border-yellow-500">
            <h3 className="text-5xl font-bold font-serif">{data.courseName}</h3>
          </div>

          {/* Luxury quote */}
          <div className="relative bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-10 border-8 border-yellow-300 shadow-xl">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
              <Gem className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <p className="text-gray-800 text-2xl italic font-serif leading-relaxed relative z-10">
              "Luxury is in each detail. This certificate represents the pinnacle of achievement, excellence, and
              distinguished recognition."
            </p>
          </div>

          {/* Luxury achievement symbols */}
          <div className="flex justify-center space-x-10 py-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-300">
                <Crown className="h-12 w-12 text-white" />
              </div>
              <p className="text-sm text-gray-700 mt-4 font-bold uppercase tracking-wider">Prestige</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-amber-300">
                <Gem className="h-12 w-12 text-white" />
              </div>
              <p className="text-sm text-gray-700 mt-4 font-bold uppercase tracking-wider">Excellence</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-400">
                <Trophy className="h-12 w-12 text-white" />
              </div>
              <p className="text-sm text-gray-700 mt-4 font-bold uppercase tracking-wider">Achievement</p>
            </div>
          </div>
        </div>

        {/* Luxury footer */}
        <div className="flex justify-between items-end mt-16 pt-10 border-t-8 border-yellow-500">
          <div className="text-center">
            <div className="w-52 border-t-8 border-yellow-600 pt-6">
              <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">Date of Excellence</p>
              <p className="text-2xl font-bold text-gray-900">
                {new Date(data.issueDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 bg-yellow-100 border-8 border-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
              <QrCode className="h-20 w-20 text-yellow-700" />
            </div>
            <p className="text-xs text-gray-700 mt-4 uppercase tracking-wide font-bold">Premium Verification</p>
          </div>

          <div className="text-center">
            <div className="w-52 border-t-8 border-yellow-600 pt-6">
              <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">Luxury Authority</p>
              <p className="text-2xl font-bold text-gray-900">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-700 italic">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-12 py-4 rounded-full shadow-2xl border-4 border-yellow-500">
            <span className="text-lg font-mono tracking-wider">Luxury Certificate No: {data.id}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
