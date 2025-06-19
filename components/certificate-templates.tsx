import { Award, QrCode, Shield, CheckCircle, Star, Crown, Zap, Trophy, Medal, Gem } from "lucide-react"

interface CertificateData {
  recipientName: string
  courseName: string
  issueDate: string
  issuerName: string
  issuerTitle: string
  certificateType: string
  id: string
}

export function ModernCertificateTemplate({ data }: { data: CertificateData }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100 max-w-4xl mx-auto">
      {/* Header with geometric pattern */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 h-32">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        {/* Geometric decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white border-opacity-30 rotate-45"></div>
        <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white border-opacity-30 rotate-12"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Zap className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="px-12 py-8 pt-12">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            CERTIFICATE
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="text-xl font-light text-gray-600 uppercase tracking-[0.3em]">
              OF {data.certificateType.toUpperCase()}
            </span>
            <Star className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="text-center space-y-6">
          <p className="text-lg text-gray-600">Proudly presented to</p>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg transform rotate-1"></div>
            <div className="relative bg-white border-2 border-blue-200 rounded-lg p-6 shadow-lg">
              <h2 className="text-5xl font-bold text-gray-800 font-serif">{data.recipientName}</h2>
            </div>
          </div>

          <p className="text-lg text-gray-600">for outstanding achievement in</p>
          <h3 className="text-3xl font-semibold text-gray-800">{data.courseName}</h3>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
            <p className="text-gray-700 italic text-lg">
              "Excellence is not a skill, it's an attitude. This certificate recognizes your commitment to continuous
              learning and professional growth."
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="w-32 border-t-2 border-gray-400 pt-2">
              <p className="text-sm text-gray-500 font-medium">DATE ISSUED</p>
              <p className="text-gray-800 font-semibold">
                {new Date(data.issueDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center border-2 border-blue-200">
              <QrCode className="h-12 w-12 text-blue-600" />
            </div>
            <p className="text-xs text-gray-500 mt-1">VERIFY ONLINE</p>
          </div>

          <div className="text-center">
            <div className="w-40 border-t-2 border-gray-400 pt-2">
              <p className="text-sm text-gray-500 font-medium">AUTHORIZED BY</p>
              <p className="text-gray-800 font-bold">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-600">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        {/* Security strip */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Shield className="h-3 w-3" />
              <span>ID: {data.id}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-3 w-3 text-green-500" />
              <span>Digitally Verified</span>
            </div>
            <div>
              <span>
                © {new Date().getFullYear()} {data.issuerName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ClassicCertificateTemplate({ data }: { data: CertificateData }) {
  return (
    <div className="bg-white border-8 border-double border-amber-600 rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto">
      {/* Ornate header */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 border-b-4 border-amber-600">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-amber-600 rounded-full mb-4 shadow-lg">
            <Trophy className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-amber-800 font-serif tracking-wide">CERTIFICATE</h1>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <div className="w-16 h-px bg-amber-600"></div>
            <span className="text-xl text-amber-700 font-light">OF EXCELLENCE</span>
            <div className="w-16 h-px bg-amber-600"></div>
          </div>
        </div>
      </div>

      <div className="p-12 bg-gradient-to-br from-amber-50 via-white to-yellow-50 relative">
        {/* Decorative corners */}
        <div className="absolute top-8 left-8 w-12 h-12 border-4 border-amber-400 rounded-full opacity-20"></div>
        <div className="absolute top-8 right-8 w-12 h-12 border-4 border-amber-400 rounded-full opacity-20"></div>

        <div className="text-center space-y-8">
          <p className="text-2xl text-gray-700 font-light">This is to hereby certify that</p>

          <div className="relative">
            <div className="bg-white border-4 border-amber-200 rounded-lg p-8 shadow-inner">
              <h2 className="text-6xl font-bold text-amber-800 font-serif">{data.recipientName}</h2>
            </div>
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-amber-400 rounded-full"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-amber-400 rounded-full"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-400 rounded-full"></div>
          </div>

          <p className="text-2xl text-gray-700 font-light">has successfully completed</p>
          <h3 className="text-4xl font-bold text-gray-800 font-serif">{data.courseName}</h3>

          <div className="bg-amber-100 border-l-8 border-amber-500 p-6 rounded-r-lg">
            <p className="text-gray-800 text-lg italic font-medium">
              "In recognition of dedication, perseverance, and exceptional achievement in academic excellence."
            </p>
          </div>
        </div>

        {/* Signature section */}
        <div className="flex justify-between items-end mt-16">
          <div className="text-center">
            <div className="w-40 border-t-4 border-amber-600 pt-3">
              <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Date</p>
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
            <div className="w-24 h-24 bg-amber-100 border-4 border-amber-400 rounded-full flex items-center justify-center">
              <QrCode className="h-14 w-14 text-amber-700" />
            </div>
            <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide">Authentic</p>
          </div>

          <div className="text-center">
            <div className="w-40 border-t-4 border-amber-600 pt-3">
              <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Director</p>
              <p className="text-lg font-bold text-gray-800">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-600">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        {/* Certificate ID */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full">
            <span className="text-sm font-mono">Certificate No: {data.id}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ElegantTemplate({ data }: { data: CertificateData }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200 max-w-4xl mx-auto">
      {/* Minimalist header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-lg">
            <Medal className="h-10 w-10 text-gray-800" />
          </div>
          <h1 className="text-4xl font-light text-white tracking-[0.2em]">CERTIFICATE</h1>
          <div className="w-32 h-px bg-white mx-auto mt-4"></div>
        </div>
      </div>

      <div className="p-12">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-gray-600 font-light">This certifies that</p>
            <div className="border-b-2 border-gray-300 pb-4">
              <h2 className="text-5xl font-light text-gray-900">{data.recipientName}</h2>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-600 font-light">has successfully completed</p>
            <h3 className="text-3xl font-medium text-gray-800">{data.courseName}</h3>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
            <p className="text-gray-700 italic">
              "Simplicity is the ultimate sophistication. This achievement represents dedication to excellence."
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
          <div className="text-left">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Date</p>
            <p className="text-gray-800 font-medium">
              {new Date(data.issueDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300">
              <QrCode className="h-10 w-10 text-gray-600" />
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Authorized by</p>
            <p className="text-gray-800 font-medium">{data.issuerName}</p>
            {data.issuerTitle && <p className="text-sm text-gray-600">{data.issuerTitle}</p>}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">Certificate ID: {data.id}</p>
        </div>
      </div>
    </div>
  )
}

export function CorporateTemplate({ data }: { data: CertificateData }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100 max-w-4xl mx-auto">
      {/* Corporate header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 p-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4">
              <Award className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">CERTIFICATE</h1>
              <p className="text-indigo-200">Professional Recognition</p>
            </div>
          </div>
          <div className="text-right text-white">
            <p className="text-sm opacity-80">Issued by</p>
            <p className="font-semibold">{data.issuerName}</p>
          </div>
        </div>
      </div>

      <div className="p-12">
        <div className="text-center space-y-8">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <p className="text-lg text-gray-700 mb-4">This is to certify that</p>
            <h2 className="text-5xl font-bold text-indigo-800">{data.recipientName}</h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-600">has successfully completed the professional program</p>
            <h3 className="text-3xl font-semibold text-gray-800">{data.courseName}</h3>
          </div>

          <div className="grid grid-cols-3 gap-4 my-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Verified</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Secure</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Excellence</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-500">Issue Date</p>
            <p className="font-semibold text-gray-800">
              {new Date(data.issueDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-lg flex items-center justify-center border-2 border-indigo-300">
              <QrCode className="h-12 w-12 text-indigo-600" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Scan to verify</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Authorized Signature</p>
            <div className="border-t-2 border-gray-400 pt-2 w-32">
              <p className="font-semibold text-gray-800">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-600">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">Certificate ID: {data.id}</span>
        </div>
      </div>
    </div>
  )
}

export function CreativeTemplate({ data }: { data: CertificateData }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100 max-w-4xl mx-auto">
      {/* Creative header with gradient */}
      <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-8">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        {/* Floating elements */}
        <div className="absolute top-4 left-8 w-6 h-6 bg-white bg-opacity-30 rounded-full"></div>
        <div className="absolute top-12 right-12 w-4 h-4 bg-white bg-opacity-30 rounded-full"></div>
        <div className="absolute bottom-6 left-16 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>

        <div className="relative text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-lg">
            <Gem className="h-10 w-10 text-pink-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">CREATIVE CERTIFICATE</h1>
          <p className="text-pink-100">Celebrating Innovation & Creativity</p>
        </div>
      </div>

      <div className="p-12 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-gray-600">This creative achievement is awarded to</p>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg transform -rotate-1"></div>
              <div className="relative bg-white border-2 border-pink-300 rounded-lg p-6 shadow-lg">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {data.recipientName}
                </h2>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-600">for outstanding creativity in</p>
            <h3 className="text-3xl font-semibold text-gray-800">{data.courseName}</h3>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg border border-pink-200">
            <p className="text-gray-700 italic text-lg">
              "Creativity is intelligence having fun. This certificate celebrates your unique vision and artistic
              excellence."
            </p>
          </div>

          {/* Creative elements */}
          <div className="flex justify-center space-x-8 my-8">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
              <Star className="h-8 w-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full flex items-center justify-center">
              <Gem className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="w-32 border-t-2 border-pink-400 pt-2">
              <p className="text-sm text-gray-500 font-medium">Date</p>
              <p className="text-gray-800 font-semibold">
                {new Date(data.issueDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center border-2 border-pink-300">
              <QrCode className="h-12 w-12 text-pink-600" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Verify Online</p>
          </div>

          <div className="text-center">
            <div className="w-32 border-t-2 border-pink-400 pt-2">
              <p className="text-sm text-gray-500 font-medium">Issued by</p>
              <p className="text-gray-800 font-bold">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-600">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm">
            Certificate ID: {data.id}
          </span>
        </div>
      </div>
    </div>
  )
}

export function AcademicTemplate({ data }: { data: CertificateData }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-green-600 max-w-4xl mx-auto">
      {/* Academic header */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-700 p-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-4 shadow-lg">
            <Award className="h-12 w-12 text-green-700" />
          </div>
          <h1 className="text-4xl font-bold text-white font-serif">ACADEMIC CERTIFICATE</h1>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <div className="w-16 h-px bg-white"></div>
            <span className="text-lg text-green-100">Excellence in Education</span>
            <div className="w-16 h-px bg-white"></div>
          </div>
        </div>
      </div>

      <div className="p-12 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-xl text-gray-700 font-serif">This is to certify that</p>
            <div className="bg-white border-4 border-green-200 rounded-lg p-8 shadow-inner">
              <h2 className="text-6xl font-bold text-green-800 font-serif">{data.recipientName}</h2>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xl text-gray-700 font-serif">has successfully completed the academic program</p>
            <h3 className="text-4xl font-bold text-gray-800 font-serif">{data.courseName}</h3>
          </div>

          <div className="bg-green-100 border-l-8 border-green-500 p-6 rounded-r-lg">
            <p className="text-gray-800 text-lg italic font-serif">
              "Education is the most powerful weapon which you can use to change the world. This achievement represents
              dedication to learning and growth."
            </p>
          </div>

          {/* Academic symbols */}
          <div className="flex justify-center space-x-6 my-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xs text-gray-600">Excellence</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xs text-gray-600">Achievement</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Medal className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xs text-gray-600">Honor</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end mt-16">
          <div className="text-center">
            <div className="w-40 border-t-4 border-green-600 pt-3">
              <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Date Conferred</p>
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
            <div className="w-24 h-24 bg-green-100 border-4 border-green-400 rounded-full flex items-center justify-center">
              <QrCode className="h-14 w-14 text-green-700" />
            </div>
            <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide">Official Seal</p>
          </div>

          <div className="text-center">
            <div className="w-40 border-t-4 border-green-600 pt-3">
              <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Registrar</p>
              <p className="text-lg font-bold text-gray-800">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-600">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full">
            <span className="text-sm font-mono">Registration No: {data.id}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
