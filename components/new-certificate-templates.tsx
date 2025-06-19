import { Award, QrCode, CheckCircle, Star, Crown, Shield, Trophy, Medal } from "lucide-react"

interface CertificateData {
  recipientName: string
  courseName: string
  issueDate: string
  issuerName: string
  issuerTitle: string
  certificateType: string
  id: string
}

export function ClassicBeigeTemplate({ data }: { data: CertificateData }) {
  return (
    <div
      className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-8 border-double border-amber-700 relative"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Ornate corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-4 border-amber-600 transform rotate-45 opacity-30"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-4 border-amber-600 transform rotate-45 opacity-30"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-amber-600 transform rotate-45 opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-amber-600 transform rotate-45 opacity-30"></div>

      <div className="p-12 h-full flex flex-col justify-center text-center space-y-6">
        {/* Title */}
        <div className="mb-4">
          <h1 className="text-6xl font-bold text-amber-800 font-serif mb-2">CERTIFICATE</h1>
          <p className="text-2xl text-amber-700 font-light tracking-[0.3em] uppercase">
            OF {data.certificateType.toUpperCase()}
          </p>
        </div>

        {/* Award text */}
        <p className="text-xl text-gray-700 font-light">THIS CERTIFICATE IS AWARDED TO</p>

        {/* Recipient name */}
        <div className="py-4">
          <div className="border-t-2 border-b-2 border-amber-600 py-4 mx-8">
            <h2 className="text-5xl font-bold text-amber-800 font-serif italic">{data.recipientName}</h2>
          </div>
        </div>

        {/* Course description */}
        <div className="space-y-3">
          <p className="text-lg text-gray-700">FOR SUCCESSFULLY COMPLETING</p>
          <h3 className="text-3xl font-semibold text-amber-800 uppercase tracking-wide">{data.courseName}</h3>
        </div>

        {/* Award icon */}
        <div className="flex justify-center py-4">
          <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
            <Award className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Date and signatures */}
        <div className="flex justify-between items-end mt-8 pt-4">
          <div className="text-center">
            <div className="w-48 border-t-2 border-amber-600 pt-2">
              <p className="font-bold text-amber-800">{data.issuerName}</p>
              <p className="text-sm text-gray-600 uppercase tracking-wide">{data.issuerTitle || "DIRECTOR"}</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">DATE ISSUED</p>
            <p className="font-bold text-amber-800">
              {new Date(data.issueDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center border-2 border-amber-600">
              <QrCode className="h-12 w-12 text-amber-700" />
            </div>
            <p className="text-xs text-gray-500 mt-1">ID: {data.id}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ModernTealTemplate({ data }: { data: CertificateData }) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto relative"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Teal geometric design */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600">
        {/* Geometric corner elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-600 transform rotate-45 translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-700 transform rotate-45 -translate-x-16 translate-y-16"></div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-white"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 p-12 h-full flex flex-col justify-center text-center space-y-6">
        {/* Title with geometric elements */}
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-8 bg-white transform rotate-45"></div>
            <h1 className="text-5xl font-bold text-white">CERTIFICATE</h1>
            <div className="w-8 h-8 bg-white transform rotate-45"></div>
          </div>
          <p className="text-xl text-white font-light tracking-[0.2em] uppercase">OF {data.certificateType}</p>
        </div>

        {/* Award text */}
        <p className="text-lg text-white opacity-90">This certificate is proudly awarded to</p>

        {/* Recipient name with modern styling */}
        <div className="py-6">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 mx-4">
            <h2 className="text-5xl font-bold text-white font-sans tracking-wide">{data.recipientName}</h2>
          </div>
        </div>

        {/* Course description */}
        <div className="space-y-3">
          <p className="text-white opacity-90">for outstanding performance in</p>
          <div className="bg-white bg-opacity-15 rounded-xl p-4 mx-8">
            <h3 className="text-2xl font-semibold text-white">{data.courseName}</h3>
          </div>
        </div>

        {/* Modern achievement icon */}
        <div className="flex justify-center py-4">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <CheckCircle className="h-10 w-10 text-teal-600" />
          </div>
        </div>

        {/* Footer with modern layout */}
        <div className="flex justify-between items-end mt-8 pt-4">
          <div className="text-left">
            <div className="w-40 border-t-2 border-white pt-2">
              <p className="font-bold text-white">{data.issuerName}</p>
              <p className="text-sm text-teal-100">{data.issuerTitle || "Principal"}</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-teal-100 mb-2">Issued on</p>
            <p className="font-bold text-white">{new Date(data.issueDate).toLocaleDateString()}</p>
          </div>

          <div className="text-right">
            <div className="w-40 border-t-2 border-white pt-2">
              <p className="font-bold text-white">Harper Russo</p>
              <p className="text-sm text-teal-100">Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function GreenAchievementTemplate({ data }: { data: CertificateData }) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto relative"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Green curved design background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white">
        {/* Top curved section */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-green-600 to-green-700 rounded-b-[50px]"></div>
        {/* Bottom curved section */}
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-l from-green-600 via-yellow-500 to-green-600 rounded-t-[50px]"></div>
      </div>

      {/* Year badge */}
      <div className="absolute top-8 left-8 w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center border-4 border-yellow-400 z-10">
        <span className="text-white font-bold text-lg">{new Date(data.issueDate).getFullYear()}</span>
      </div>

      <div className="relative z-10 p-12 h-full flex flex-col justify-center text-center space-y-6">
        {/* Title with decorative borders */}
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-green-800 mb-4">CERTIFICATE</h1>
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-green-600 max-w-32"></div>
            <p className="text-2xl text-green-700 font-light tracking-[0.2em] uppercase px-6 border-t-2 border-b-2 border-green-600 py-2">
              OF {data.certificateType}
            </p>
            <div className="flex-1 h-px bg-green-600 max-w-32"></div>
          </div>
        </div>

        {/* Recipient name with elegant styling */}
        <div className="py-8">
          <p className="text-lg text-gray-700 mb-4">This certificate is presented to</p>
          <h2 className="text-5xl font-bold text-yellow-700 font-serif italic mb-4">{data.recipientName}</h2>
          <div className="w-96 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Course description with elegant text */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            In recognition of outstanding achievement and successful completion of
          </p>
          <div className="bg-green-100 rounded-xl p-4 border-l-4 border-green-600">
            <h3 className="text-2xl font-semibold text-green-800">{data.courseName}</h3>
          </div>
        </div>

        {/* Signature section with elegant styling */}
        <div className="py-6">
          <div className="w-48 h-16 mx-auto border-b-2 border-gray-400 flex items-end justify-center">
            <span className="text-2xl text-gray-600 font-serif italic">Signature</span>
          </div>
        </div>

        {/* Footer signatures */}
        <div className="flex justify-between items-end mt-8">
          <div className="text-center">
            <div className="w-40 border-t-2 border-gray-600 pt-2">
              <p className="font-bold text-gray-800">{data.issuerName}</p>
              <p className="text-sm text-gray-600">{data.issuerTitle || "Director"}</p>
            </div>
          </div>

          <div className="text-center">
            <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              {new Date(data.issueDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="text-center">
            <div className="w-40 border-t-2 border-gray-600 pt-2">
              <p className="font-bold text-gray-800">Bailey Dupont</p>
              <p className="text-sm text-gray-600">Organizer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DarkLuxuryTemplate({ data }: { data: CertificateData }) {
  return (
    <div
      className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4 border-yellow-500 relative"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Dark luxury background with gold accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Luxury pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-yellow-400 transform rotate-45"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Ornate corner decorations */}
      <div className="absolute top-4 left-4 w-12 h-12 z-10">
        <div className="w-full h-full border-2 border-yellow-400 transform rotate-45"></div>
        <div className="absolute top-2 left-2 w-8 h-8 border border-yellow-300 transform rotate-45"></div>
      </div>
      <div className="absolute bottom-4 right-4 w-12 h-12 z-10">
        <div className="w-full h-full border-2 border-yellow-400 transform rotate-45"></div>
        <div className="absolute top-2 left-2 w-8 h-8 border border-yellow-300 transform rotate-45"></div>
      </div>

      {/* Luxury award badge */}
      <div className="absolute top-8 left-8 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-2xl z-10">
        <div className="text-center">
          <Crown className="h-8 w-8 text-gray-900 mx-auto mb-1" />
          <p className="text-xs font-bold text-gray-900">LUXURY</p>
        </div>
      </div>

      <div className="relative z-10 p-12 h-full flex flex-col justify-center text-center space-y-8">
        {/* Luxury title */}
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-yellow-400 mb-2 tracking-wide font-serif">CERTIFICATE</h1>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-yellow-400"></div>
            <p className="text-2xl text-yellow-300 font-light tracking-[0.3em] uppercase">OF {data.certificateType}</p>
            <div className="w-16 h-px bg-yellow-400"></div>
          </div>
        </div>

        {/* Award text */}
        <p className="text-xl text-gray-300">This prestigious certificate is awarded to</p>

        {/* Recipient name with luxury styling */}
        <div className="py-6">
          <div className="bg-yellow-500 bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mx-4 border border-yellow-500">
            <h2 className="text-5xl font-bold text-yellow-400 font-serif italic tracking-wide">{data.recipientName}</h2>
          </div>
        </div>

        {/* Course description */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed">
            In recognition of exceptional excellence and outstanding achievement in
          </p>
          <div className="bg-gray-800 border-2 border-yellow-500 rounded-xl p-4">
            <h3 className="text-2xl font-semibold text-yellow-400">{data.courseName}</h3>
          </div>
        </div>

        {/* Decorative luxury element */}
        <div className="flex justify-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-px bg-yellow-400"></div>
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <Medal className="h-8 w-8 text-gray-900" />
            </div>
            <div className="w-8 h-px bg-yellow-400"></div>
          </div>
        </div>

        {/* Luxury signatures */}
        <div className="flex justify-between items-end mt-8">
          <div className="text-center">
            <p className="text-yellow-400 font-serif italic text-lg mb-2">Authorized by</p>
            <div className="w-48 border-t-2 border-yellow-500 pt-2">
              <p className="font-bold text-yellow-400">{data.issuerName}</p>
              <p className="text-sm text-gray-400">{data.issuerTitle || "Executive Director"}</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-yellow-400 text-sm mb-2">Date of Excellence</p>
            <p className="font-bold text-yellow-400">
              {new Date(data.issueDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="w-16 h-16 bg-yellow-500 bg-opacity-20 rounded-lg flex items-center justify-center mt-2 border border-yellow-500">
              <QrCode className="h-12 w-12 text-yellow-400" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-yellow-400 font-serif italic text-lg mb-2">Verified by</p>
            <div className="w-48 border-t-2 border-yellow-500 pt-2">
              <p className="font-bold text-yellow-400">Luxury Authority</p>
              <p className="text-sm text-gray-400">Certification Board</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TealCourseTemplate({ data }: { data: CertificateData }) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto relative"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Teal background with flowing design */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900">
        {/* Flowing ribbon design */}
        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-yellow-400 via-yellow-500 to-transparent transform skew-x-12 opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-48 h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent transform -skew-x-12 opacity-60"></div>

        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-6 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-teal-400"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Excellence badge */}
      <div className="absolute top-12 left-12 w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-2xl z-10">
        <div className="text-center">
          <div className="flex justify-center mb-1">
            <Star className="h-4 w-4 text-gray-800" />
            <Star className="h-4 w-4 text-gray-800" />
            <Star className="h-4 w-4 text-gray-800" />
          </div>
          <p className="text-lg font-bold text-gray-800">COURSE</p>
          <p className="text-lg font-bold text-gray-800">COMPLETE</p>
        </div>
      </div>

      <div className="relative z-10 p-12 h-full">
        {/* Header section - right aligned */}
        <div className="text-right mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 font-sans">CERTIFICATE</h1>
          <p className="text-xl text-teal-200 tracking-[0.2em] uppercase">FOR COURSE {data.certificateType}</p>
          <div className="w-32 h-1 bg-yellow-400 ml-auto mt-2"></div>
        </div>

        {/* Award text - right aligned */}
        <div className="text-right mb-6">
          <p className="text-lg text-teal-300">This certificate is proudly presented to</p>
        </div>

        {/* Recipient name - right aligned */}
        <div className="text-right mb-8">
          <div className="inline-block bg-yellow-400 bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-400">
            <h2 className="text-5xl font-bold text-yellow-400 font-serif italic">{data.recipientName}</h2>
          </div>
        </div>

        {/* Course info - right aligned */}
        <div className="text-right mb-8">
          <p className="text-lg text-white mb-2">for successfully completing the course</p>
          <div className="inline-block bg-teal-600 bg-opacity-50 rounded-xl p-4 border border-yellow-400">
            <h3 className="text-3xl font-bold text-yellow-400 italic uppercase tracking-wide">{data.courseName}</h3>
          </div>
          <p className="text-teal-200 mt-4">
            Completed on:{" "}
            {new Date(data.issueDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Signatures - bottom positioned */}
        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 bg-opacity-20 rounded-full flex items-center justify-center mb-2 border-2 border-yellow-400">
              <Shield className="h-10 w-10 text-yellow-400" />
            </div>
            <div className="w-40 border-t-2 border-yellow-400 pt-2">
              <p className="font-bold text-white">{data.issuerName}</p>
              <p className="text-sm text-teal-200 uppercase">{data.issuerTitle || "COURSE DIRECTOR"}</p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 bg-opacity-20 rounded-full flex items-center justify-center mb-2 border-2 border-yellow-400">
              <QrCode className="h-10 w-10 text-yellow-400" />
            </div>
            <p className="text-xs text-teal-200">Certificate ID: {data.id}</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 bg-opacity-20 rounded-full flex items-center justify-center mb-2 border-2 border-yellow-400">
              <Trophy className="h-10 w-10 text-yellow-400" />
            </div>
            <div className="w-40 border-t-2 border-yellow-400 pt-2">
              <p className="font-bold text-white">MARGARITA PEREZ</p>
              <p className="text-sm text-teal-200 uppercase">ACADEMIC DIRECTOR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
