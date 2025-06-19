import {
  Award,
  QrCode,
  CheckCircle,
  Star,
  Crown,
  Shield,
  Trophy,
  Medal,
  Sparkles,
  BadgeIcon as Certificate,
} from "lucide-react"

interface CertificateData {
  recipientName: string
  courseName: string
  issueDate: string
  issuerName: string
  issuerTitle: string
  certificateType: string
  id: string
  description?: string
  primaryColor?: string
  secondaryColor?: string
  textColor?: string
  fontFamily?: string
  textAlignment?: string
  certificateSize?: string
  borderStyle?: string
  borderWidth?: string
  cornerStyle?: string
}

export function BannerbearTemplate1({ data }: { data: CertificateData }) {
  const primaryColor = data.primaryColor || "#2563eb"
  const secondaryColor = data.secondaryColor || "#f59e0b"
  const fontFamily = data.fontFamily || "serif"
  const textAlignment = data.textAlignment || "center"
  const certificateSize = data.certificateSize || "standard"
  const borderStyle = data.borderStyle || "solid"
  const borderWidth = data.borderWidth || "medium"
  const cornerStyle = data.cornerStyle || "rounded"

  // Size configurations
  const sizeConfig = {
    small: { width: "max-w-2xl", padding: "p-8", titleSize: "text-3xl", nameSize: "text-4xl", courseSize: "text-2xl" },
    standard: {
      width: "max-w-4xl",
      padding: "p-12",
      titleSize: "text-5xl",
      nameSize: "text-5xl",
      courseSize: "text-3xl",
    },
    large: { width: "max-w-6xl", padding: "p-16", titleSize: "text-6xl", nameSize: "text-6xl", courseSize: "text-4xl" },
  }

  const config = sizeConfig[certificateSize as keyof typeof sizeConfig]

  // Border configurations
  const borderConfig = {
    solid: "border-solid",
    double: "border-double border-8",
    dashed: "border-dashed border-4",
    none: "border-0",
  }

  const borderWidthConfig = {
    thin: "border-2",
    medium: "border-4",
    thick: "border-8",
  }

  const cornerConfig = {
    rounded: "rounded-2xl",
    sharp: "rounded-none",
    "extra-rounded": "rounded-3xl",
  }

  const textAlignClass =
    textAlignment === "center" ? "text-center" : textAlignment === "left" ? "text-left" : "text-right"

  return (
    <div
      className={`bg-white overflow-hidden shadow-2xl mx-auto relative ${config.width} ${cornerConfig[cornerStyle as keyof typeof cornerConfig]} ${borderConfig[borderStyle as keyof typeof borderConfig]} ${borderStyle !== "none" ? borderWidthConfig[borderWidth as keyof typeof borderWidthConfig] : ""}`}
      style={{
        aspectRatio: "4/3",
        fontFamily,
        borderColor: borderStyle !== "none" ? primaryColor : "transparent",
      }}
    >
      {/* Header with primary color */}
      <div className="h-32 relative" style={{ backgroundColor: primaryColor }}>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        {/* Decorative elements */}
        <div className="absolute top-4 left-8 w-12 h-12 border-2 border-white border-opacity-30 rounded-full"></div>
        <div className="absolute top-6 right-12 w-8 h-8 border-2 border-white border-opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <Award className="h-10 w-10" style={{ color: primaryColor }} />
        </div>
      </div>

      <div className={`${config.padding} pt-12`}>
        {/* Title */}
        <div className={`mb-8 ${textAlignClass}`}>
          <h1 className={`${config.titleSize} font-bold mb-2`} style={{ color: primaryColor }}>
            CERTIFICATE
          </h1>
          <div
            className={`flex items-center space-x-2 mb-4 ${textAlignment === "center" ? "justify-center" : textAlignment === "left" ? "justify-start" : "justify-end"}`}
          >
            <Star className="h-5 w-5" style={{ color: secondaryColor }} />
            <span className="text-xl font-light text-gray-600 uppercase tracking-[0.3em]">
              OF {data.certificateType.toUpperCase()}
            </span>
            <Star className="h-5 w-5" style={{ color: secondaryColor }} />
          </div>
          <div
            className={`w-24 h-1 rounded-full ${textAlignment === "center" ? "mx-auto" : textAlignment === "left" ? "mr-auto" : "ml-auto"}`}
            style={{ backgroundColor: secondaryColor }}
          ></div>
        </div>

        {/* Content */}
        <div className={`space-y-6 ${textAlignClass}`}>
          <p className="text-lg text-gray-600">This certificate is proudly presented to</p>

          <div className="relative">
            <div
              className="absolute inset-0 rounded-lg transform rotate-1 opacity-30"
              style={{ backgroundColor: `${primaryColor}20` }}
            ></div>
            <div className="relative bg-white border-2 rounded-lg p-6 shadow-lg" style={{ borderColor: primaryColor }}>
              <h2 className={`${config.nameSize} font-bold text-gray-800`} style={{ fontFamily: "serif" }}>
                {data.recipientName}
              </h2>
            </div>
          </div>

          <p className="text-lg text-gray-600">{data.description || "for outstanding achievement in"}</p>
          <h3 className={`${config.courseSize} font-semibold text-gray-800`}>{data.courseName}</h3>

          <div
            className="rounded-lg p-6 border"
            style={{ backgroundColor: `${primaryColor}10`, borderColor: `${primaryColor}40` }}
          >
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
            <div
              className="w-20 h-20 rounded-lg flex items-center justify-center border-2 shadow-lg"
              style={{ backgroundColor: `${primaryColor}20`, borderColor: primaryColor }}
            >
              <QrCode className="h-12 w-12" style={{ color: primaryColor }} />
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

        {/* Certificate ID */}
        <div className={`mt-6 ${textAlignClass}`}>
          <span
            className="text-white px-6 py-2 rounded-full text-sm font-medium"
            style={{ backgroundColor: primaryColor }}
          >
            Certificate ID: {data.id}
          </span>
        </div>
      </div>
    </div>
  )
}

export function BannerbearTemplate2({ data }: { data: CertificateData }) {
  const primaryColor = data.primaryColor || "#dc2626"
  const secondaryColor = data.secondaryColor || "#f59e0b"

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-8 border-double"
      style={{ aspectRatio: "4/3", borderColor: secondaryColor }}
    >
      {/* Ornate header */}
      <div
        className="p-8 border-b-4"
        style={{
          background: `linear-gradient(to right, ${secondaryColor}20, ${primaryColor}20)`,
          borderColor: secondaryColor,
        }}
      >
        <div className="text-center">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 shadow-lg"
            style={{ backgroundColor: secondaryColor }}
          >
            <Crown className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold font-serif tracking-wide" style={{ color: primaryColor }}>
            CERTIFICATE
          </h1>
          <div className="flex items-center justify-center space-x-4 mt-2">
            <div className="w-16 h-px" style={{ backgroundColor: secondaryColor }}></div>
            <span className="text-xl font-light" style={{ color: `${primaryColor}90` }}>
              OF EXCELLENCE
            </span>
            <div className="w-16 h-px" style={{ backgroundColor: secondaryColor }}></div>
          </div>
        </div>
      </div>

      <div
        className="p-12 relative"
        style={{ background: `linear-gradient(to bottom right, ${secondaryColor}10, transparent, ${primaryColor}10)` }}
      >
        {/* Decorative corners */}
        <div
          className="absolute top-8 left-8 w-12 h-12 border-4 rounded-full opacity-20"
          style={{ borderColor: secondaryColor }}
        ></div>
        <div
          className="absolute top-8 right-8 w-12 h-12 border-4 rounded-full opacity-20"
          style={{ borderColor: secondaryColor }}
        ></div>

        <div className="text-center space-y-8">
          <p className="text-2xl text-gray-700 font-light">This is to hereby certify that</p>

          <div className="relative">
            <div
              className="border-4 rounded-lg p-8 shadow-inner bg-white"
              style={{ borderColor: `${secondaryColor}50` }}
            >
              <h2 className="text-6xl font-bold font-serif" style={{ color: primaryColor }}>
                {data.recipientName}
              </h2>
            </div>
            <div
              className="absolute -top-2 -left-2 w-8 h-8 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            ></div>
            <div
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            ></div>
            <div
              className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            ></div>
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            ></div>
          </div>

          <p className="text-2xl text-gray-700 font-light">has successfully completed</p>
          <h3 className="text-4xl font-bold font-serif text-gray-800">{data.courseName}</h3>

          <div
            className="border-l-8 p-6 rounded-r-lg"
            style={{
              backgroundColor: `${secondaryColor}20`,
              borderColor: secondaryColor,
            }}
          >
            <p className="text-gray-800 text-lg italic font-medium">
              {data.description ||
                "In recognition of dedication, perseverance, and exceptional achievement in academic excellence."}
            </p>
          </div>
        </div>

        {/* Signature section */}
        <div className="flex justify-between items-end mt-16">
          <div className="text-center">
            <div className="w-40 border-t-4 pt-3" style={{ borderColor: secondaryColor }}>
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
            <div
              className="w-24 h-24 border-4 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: `${secondaryColor}20`,
                borderColor: secondaryColor,
              }}
            >
              <QrCode className="h-14 w-14" style={{ color: primaryColor }} />
            </div>
            <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide">Authentic</p>
          </div>

          <div className="text-center">
            <div className="w-40 border-t-4 pt-3" style={{ borderColor: secondaryColor }}>
              <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Director</p>
              <p className="text-lg font-bold text-gray-800">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-600">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        {/* Certificate ID */}
        <div className="mt-8 text-center">
          <div className="inline-block text-white px-6 py-2 rounded-full" style={{ backgroundColor: secondaryColor }}>
            <span className="text-sm font-mono">Certificate No: {data.id}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BannerbearTemplate3({ data }: { data: CertificateData }) {
  const primaryColor = data.primaryColor || "#059669"
  const secondaryColor = data.secondaryColor || "#f59e0b"

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto" style={{ aspectRatio: "4/3" }}>
      {/* Modern geometric header */}
      <div className="relative h-40 overflow-hidden" style={{ backgroundColor: primaryColor }}>
        {/* Geometric shapes */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute top-4 left-4 w-16 h-16 bg-white bg-opacity-15 transform rotate-45"></div>
        <div className="absolute bottom-4 right-1/4 w-12 h-12 bg-white bg-opacity-20 rounded-full"></div>

        <div className="relative z-10 flex items-center justify-between h-full px-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">CERTIFICATE</h1>
            <p className="text-green-100 text-lg">Modern Achievement</p>
          </div>
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <Sparkles className="h-10 w-10" style={{ color: primaryColor }} />
          </div>
        </div>
      </div>

      <div className="px-12 py-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-gray-600 font-light">This certificate is presented to</p>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl transform rotate-1 opacity-30"
                style={{ backgroundColor: `${primaryColor}20` }}
              ></div>
              <div
                className="relative bg-white border-2 rounded-2xl p-8 shadow-lg"
                style={{ borderColor: `${primaryColor}50` }}
              >
                <h2 className="text-5xl font-bold" style={{ color: primaryColor }}>
                  {data.recipientName}
                </h2>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-600 font-light">for successfully completing</p>
            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: `${primaryColor}10`,
                borderColor: `${primaryColor}30`,
              }}
            >
              <h3 className="text-3xl font-semibold text-gray-800">{data.courseName}</h3>
            </div>
          </div>

          {/* Modern achievement badges */}
          <div className="flex justify-center space-x-6 py-6">
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-lg"
                style={{ background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}80)` }}
              >
                <Star className="h-8 w-8 text-white" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Excellence</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-lg"
                style={{ background: `linear-gradient(135deg, ${secondaryColor}, ${secondaryColor}80)` }}
              >
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Achievement</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-lg"
                style={{ background: `linear-gradient(135deg, ${primaryColor}80, ${secondaryColor})` }}
              >
                <Medal className="h-8 w-8 text-white" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Certified</span>
            </div>
          </div>
        </div>

        {/* Modern footer */}
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
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center border-2 shadow-lg"
              style={{
                backgroundColor: `${primaryColor}10`,
                borderColor: primaryColor,
              }}
            >
              <QrCode className="h-12 w-12" style={{ color: primaryColor }} />
            </div>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">Verify</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Authorized by</p>
            <div className="border-t-2 pt-2 w-40" style={{ borderColor: primaryColor }}>
              <p className="text-lg font-bold text-gray-800">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-600 italic">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span
            className="text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
            style={{ backgroundColor: primaryColor }}
          >
            Certificate ID: {data.id}
          </span>
        </div>
      </div>
    </div>
  )
}

export function BannerbearTemplate4({ data }: { data: CertificateData }) {
  const primaryColor = data.primaryColor || "#7c3aed"
  const secondaryColor = data.secondaryColor || "#f59e0b"

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4"
      style={{ aspectRatio: "4/3", borderColor: primaryColor }}
    >
      {/* Classic header */}
      <div className="p-10 relative" style={{ backgroundColor: `${primaryColor}10` }}>
        {/* Decorative elements */}
        <div
          className="absolute top-4 left-4 w-8 h-8 border-2 transform rotate-45 opacity-30"
          style={{ borderColor: primaryColor }}
        ></div>
        <div
          className="absolute top-4 right-4 w-8 h-8 border-2 transform rotate-45 opacity-30"
          style={{ borderColor: primaryColor }}
        ></div>
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 border-2 rounded-full opacity-40"
          style={{ borderColor: primaryColor }}
        ></div>

        <div className="text-center">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-2xl"
            style={{ backgroundColor: primaryColor }}
          >
            <Certificate className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-2 tracking-wider font-serif" style={{ color: primaryColor }}>
            CERTIFICATE
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px" style={{ backgroundColor: secondaryColor }}></div>
            <span className="font-light tracking-[0.3em] text-lg" style={{ color: `${primaryColor}90` }}>
              OF {data.certificateType.toUpperCase()}
            </span>
            <div className="w-16 h-px" style={{ backgroundColor: secondaryColor }}></div>
          </div>
        </div>
      </div>

      <div className="px-12 py-10">
        <div className="text-center space-y-8">
          <p className="text-2xl text-gray-700 font-serif italic">This certificate is awarded to</p>

          <div className="relative py-8">
            <div
              className="absolute inset-0 rounded-2xl opacity-50"
              style={{ backgroundColor: `${secondaryColor}20` }}
            ></div>
            <div className="relative">
              <h2 className="text-6xl font-bold font-serif tracking-wide" style={{ color: primaryColor }}>
                {data.recipientName}
              </h2>
              <div className="w-32 h-1 mx-auto mt-4" style={{ backgroundColor: secondaryColor }}></div>
            </div>
          </div>

          <p className="text-2xl text-gray-700 font-serif italic">for exceptional achievement in</p>

          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg">
            <h3 className="text-3xl font-semibold text-gray-800">{data.courseName}</h3>
          </div>

          {/* Professional metrics */}
          <div className="grid grid-cols-4 gap-4 py-6">
            <div
              className="text-center p-4 rounded-xl border"
              style={{
                backgroundColor: `${secondaryColor}10`,
                borderColor: `${secondaryColor}30`,
              }}
            >
              <CheckCircle className="h-8 w-8 mx-auto mb-2" style={{ color: secondaryColor }} />
              <p className="text-sm font-semibold" style={{ color: `${secondaryColor}80` }}>
                Verified
              </p>
            </div>
            <div
              className="text-center p-4 rounded-xl border"
              style={{
                backgroundColor: `${primaryColor}10`,
                borderColor: `${primaryColor}30`,
              }}
            >
              <Shield className="h-8 w-8 mx-auto mb-2" style={{ color: primaryColor }} />
              <p className="text-sm font-semibold" style={{ color: `${primaryColor}80` }}>
                Secure
              </p>
            </div>
            <div
              className="text-center p-4 rounded-xl border"
              style={{
                backgroundColor: `${secondaryColor}10`,
                borderColor: `${secondaryColor}30`,
              }}
            >
              <Star className="h-8 w-8 mx-auto mb-2" style={{ color: secondaryColor }} />
              <p className="text-sm font-semibold" style={{ color: `${secondaryColor}80` }}>
                Excellence
              </p>
            </div>
            <div
              className="text-center p-4 rounded-xl border"
              style={{
                backgroundColor: `${primaryColor}10`,
                borderColor: `${primaryColor}30`,
              }}
            >
              <Trophy className="h-8 w-8 mx-auto mb-2" style={{ color: primaryColor }} />
              <p className="text-sm font-semibold" style={{ color: `${primaryColor}80` }}>
                Achievement
              </p>
            </div>
          </div>
        </div>

        {/* Signature section */}
        <div className="flex justify-between items-end mt-16 pt-8 border-t-2 border-gray-300">
          <div className="text-center">
            <div className="w-48 border-t-4 pt-4" style={{ borderColor: primaryColor }}>
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
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl border-2"
              style={{
                backgroundColor: primaryColor,
                borderColor: `${primaryColor}50`,
              }}
            >
              <QrCode className="h-14 w-14" style={{ color: secondaryColor }} />
            </div>
            <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide font-bold">Authentic</p>
          </div>

          <div className="text-center">
            <div className="w-48 border-t-4 pt-4" style={{ borderColor: primaryColor }}>
              <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">Authorized Signature</p>
              <p className="text-xl font-bold text-gray-900">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-700 italic">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div
            className="inline-block text-white px-8 py-3 rounded-full shadow-lg"
            style={{ backgroundColor: primaryColor }}
          >
            <span className="text-sm font-mono tracking-wider">Certificate No: {data.id}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BannerbearTemplate5({ data }: { data: CertificateData }) {
  const primaryColor = data.primaryColor || "#ec4899"
  const secondaryColor = data.secondaryColor || "#f59e0b"

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto" style={{ aspectRatio: "4/3" }}>
      {/* Creative colorful header */}
      <div
        className="relative h-48 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}80, ${secondaryColor})` }}
      >
        {/* Creative floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-8 w-12 h-12 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute top-12 right-16 w-8 h-8 bg-white bg-opacity-40 transform rotate-45"></div>
          <div className="absolute bottom-8 left-16 w-16 h-16 bg-white bg-opacity-15 rounded-full"></div>
          <div className="absolute bottom-12 right-8 w-6 h-6 bg-white bg-opacity-50 transform rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white bg-opacity-60 rounded-full"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-2xl">
              <Sparkles className="h-10 w-10" style={{ color: primaryColor }} />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">CREATIVE CERTIFICATE</h1>
            <p className="text-white text-lg opacity-90">Celebrating Innovation & Artistry</p>
          </div>
        </div>
      </div>

      <div
        className="px-12 py-10"
        style={{ background: `linear-gradient(to bottom right, ${primaryColor}05, transparent, ${secondaryColor}05)` }}
      >
        <div className="text-center space-y-8">
          <p className="text-xl text-gray-700 font-light">This creative achievement is proudly awarded to</p>

          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl transform -rotate-2 opacity-30"
              style={{ backgroundColor: `${primaryColor}30` }}
            ></div>
            <div
              className="absolute inset-0 rounded-3xl transform rotate-1 opacity-30"
              style={{ backgroundColor: `${secondaryColor}30` }}
            ></div>
            <div
              className="relative bg-white border-4 rounded-3xl p-8 shadow-2xl"
              style={{ borderColor: primaryColor }}
            >
              <h2
                className="text-5xl font-bold"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {data.recipientName}
              </h2>
            </div>
          </div>

          <p className="text-xl text-gray-700 font-light">for outstanding creativity and innovation in</p>

          <div
            className="rounded-2xl p-6 border-4 shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}10, ${secondaryColor}10)`,
              borderColor: primaryColor,
            }}
          >
            <h3 className="text-3xl font-bold text-gray-800">{data.courseName}</h3>
          </div>

          <div
            className="relative rounded-2xl p-8 border-2"
            style={{
              backgroundColor: `${primaryColor}05`,
              borderColor: `${primaryColor}30`,
            }}
          >
            <div
              className="absolute -top-2 -left-2 w-8 h-8 rounded-full"
              style={{ backgroundColor: primaryColor }}
            ></div>
            <div
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            ></div>
            <div
              className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            ></div>
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full"
              style={{ backgroundColor: primaryColor }}
            ></div>
            <p className="text-gray-800 text-lg italic font-light relative z-10">
              {data.description ||
                "Creativity is intelligence having fun. This certificate celebrates your unique vision, artistic excellence, and innovative spirit."}
            </p>
          </div>

          {/* Creative achievement icons */}
          <div className="flex justify-center space-x-8 py-6">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
                style={{ background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}80)` }}
              >
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">Innovation</p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
                style={{ background: `linear-gradient(135deg, ${secondaryColor}, ${secondaryColor}80)` }}
              >
                <Crown className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">Excellence</p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
                style={{ background: `linear-gradient(135deg, ${primaryColor}80, ${secondaryColor})` }}
              >
                <Star className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">Artistry</p>
            </div>
          </div>
        </div>

        {/* Creative footer */}
        <div
          className="flex justify-between items-end mt-12 pt-8 border-t-4"
          style={{ borderImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor}) 1` }}
        >
          <div className="text-center">
            <div className="w-40 border-t-4 pt-3" style={{ borderColor: primaryColor }}>
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
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center border-4 shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}20, ${secondaryColor}20)`,
                borderColor: primaryColor,
              }}
            >
              <QrCode className="h-12 w-12" style={{ color: primaryColor }} />
            </div>
            <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide font-bold">Verify Creativity</p>
          </div>

          <div className="text-center">
            <div className="w-40 border-t-4 pt-3" style={{ borderColor: secondaryColor }}>
              <p className="text-sm text-gray-600 uppercase tracking-wide font-bold">Creative Director</p>
              <p className="text-lg font-bold text-gray-800">{data.issuerName}</p>
              {data.issuerTitle && <p className="text-sm text-gray-600 italic">{data.issuerTitle}</p>}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span
            className="text-white px-8 py-3 rounded-full text-sm font-bold shadow-2xl"
            style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
          >
            Creative ID: {data.id}
          </span>
        </div>
      </div>
    </div>
  )
}

export function BannerbearTemplate6({ data }: { data: CertificateData }) {
  const primaryColor = data.primaryColor || "#1f2937"
  const secondaryColor = data.secondaryColor || "#f59e0b"

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border border-gray-200"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Corporate header */}
      <div className="p-8" style={{ backgroundColor: primaryColor }}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Award className="h-10 w-10" style={{ color: primaryColor }} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">PROFESSIONAL</h1>
              <h2 className="text-2xl font-light text-gray-300">CERTIFICATE</h2>
            </div>
          </div>
          <div className="text-right text-white">
            <p className="text-sm text-gray-300">Issued by</p>
            <p className="text-xl font-bold">{data.issuerName}</p>
            <p className="text-sm text-gray-300">{data.issuerTitle}</p>
          </div>
        </div>
      </div>

      <div className="px-12 py-10">
        <div className="text-center space-y-8">
          {/* Professional badge */}
          <div
            className="inline-flex items-center border-2 rounded-full px-8 py-3"
            style={{
              backgroundColor: `${primaryColor}05`,
              borderColor: `${primaryColor}30`,
            }}
          >
            <Shield className="h-6 w-6 mr-2" style={{ color: primaryColor }} />
            <span className="font-semibold uppercase tracking-wide" style={{ color: primaryColor }}>
              Professional Recognition
            </span>
          </div>

          <p className="text-xl text-gray-700">This certificate is awarded to</p>

          <div
            className="border-2 rounded-2xl p-8 shadow-inner bg-white"
            style={{
              borderColor: `${primaryColor}30`,
              background: `linear-gradient(135deg, ${primaryColor}05, ${secondaryColor}05)`,
            }}
          >
            <h2 className="text-5xl font-bold" style={{ color: primaryColor }}>
              {data.recipientName}
            </h2>
          </div>

          <p className="text-xl text-gray-700">for successful completion of the professional program</p>

          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg">
            <h3 className="text-3xl font-semibold text-gray-800">{data.courseName}</h3>
          </div>

          {/* Professional metrics */}
          <div className="grid grid-cols-4 gap-4 py-6">
            <div
              className="text-center p-4 rounded-xl border"
              style={{
                backgroundColor: `${secondaryColor}10`,
                borderColor: `${secondaryColor}30`,
              }}
            >
              <CheckCircle className="h-8 w-8 mx-auto mb-2" style={{ color: secondaryColor }} />
              <p className="text-sm font-semibold" style={{ color: `${secondaryColor}80` }}>
                Verified
              </p>
            </div>
            <div
              className="text-center p-4 rounded-xl border"
              style={{
                backgroundColor: `${primaryColor}10`,
                borderColor: `${primaryColor}30`,
              }}
            >
              <Shield className="h-8 w-8 mx-auto mb-2" style={{ color: primaryColor }} />
              <p className="text-sm font-semibold" style={{ color: `${primaryColor}80` }}>
                Secure
              </p>
            </div>
            <div
              className="text-center p-4 rounded-xl border"
              style={{
                backgroundColor: `${secondaryColor}10`,
                borderColor: `${secondaryColor}30`,
              }}
            >
              <Star className="h-8 w-8 mx-auto mb-2" style={{ color: secondaryColor }} />
              <p className="text-sm font-semibold" style={{ color: `${secondaryColor}80` }}>
                Excellence
              </p>
            </div>
            <div
              className="text-center p-4 rounded-xl border"
              style={{
                backgroundColor: `${primaryColor}10`,
                borderColor: `${primaryColor}30`,
              }}
            >
              <Trophy className="h-8 w-8 mx-auto mb-2" style={{ color: primaryColor }} />
              <p className="text-sm font-semibold" style={{ color: `${primaryColor}80` }}>
                Achievement
              </p>
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
            <div
              className="w-20 h-20 border-4 rounded-xl flex items-center justify-center shadow-lg"
              style={{
                backgroundColor: `${primaryColor}10`,
                borderColor: primaryColor,
              }}
            >
              <QrCode className="h-12 w-12" style={{ color: primaryColor }} />
            </div>
            <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide font-semibold">Scan to Verify</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Digital Signature</p>
            <div className="border-t-4 pt-3 w-40" style={{ borderColor: primaryColor }}>
              <p className="text-lg font-bold text-gray-800">{data.issuerName}</p>
              <p className="text-sm text-gray-600">{data.issuerTitle}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span
            className="text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg"
            style={{ backgroundColor: primaryColor }}
          >
            Certificate ID: {data.id}
          </span>
        </div>
      </div>
    </div>
  )
}
