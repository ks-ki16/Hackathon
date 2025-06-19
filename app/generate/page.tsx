"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import {
  Award,
  ArrowLeft,
  Download,
  ImageIcon,
  Share2,
  Check,
  Palette,
  Type,
  Settings,
  AlertCircle,
} from "lucide-react"
import {
  BannerbearTemplate1,
  BannerbearTemplate2,
  BannerbearTemplate3,
  BannerbearTemplate4,
  BannerbearTemplate5,
  BannerbearTemplate6,
} from "@/components/bannerbear-templates"

// Enhanced certificate storage with demo data
const certificateStorage = new Map([
  [
    "CERT-DEMO-001",
    {
      id: "CERT-DEMO-001",
      recipientName: "Jane Smith",
      courseName: "Advanced React Development",
      issueDate: "2024-01-10",
      issuerName: "Tech Academy",
      issuerTitle: "Director of Education",
      certificateType: "completion",
      description:
        "for successfully completing the comprehensive course and demonstrating excellence in React development",
      template: "template-1",
      generatedAt: "2024-01-10T10:00:00Z",
      verified: true,
    },
  ],
  [
    "CERT-DEMO-002",
    {
      id: "CERT-DEMO-002",
      recipientName: "Michael Johnson",
      courseName: "Digital Marketing Mastery",
      issueDate: "2024-01-05",
      issuerName: "Marketing Institute",
      issuerTitle: "Chief Marketing Officer",
      certificateType: "achievement",
      description: "for outstanding performance and mastery in digital marketing strategies",
      template: "template-2",
      generatedAt: "2024-01-05T14:30:00Z",
      verified: true,
    },
  ],
])

export default function GeneratePage() {
  const [selectedTemplate, setSelectedTemplate] = useState("template-1")
  const [activeTab, setActiveTab] = useState("templates")
  const [formData, setFormData] = useState({
    recipientName: "John Doe",
    courseName: "Web Development Mastery",
    issueDate: "2024-01-15",
    issuerName: "Digital Academy",
    issuerTitle: "Chief Executive Officer",
    certificateType: "completion",
    description: "for successfully completing the comprehensive course and demonstrating excellence in web development",
  })

  const [customization, setCustomization] = useState({
    primaryColor: "#2563eb",
    secondaryColor: "#f59e0b",
    textColor: "#1f2937",
    fontFamily: "serif",
    logoUrl: "",
    borderStyle: "solid",
    borderWidth: "medium",
    cornerStyle: "rounded",
    backgroundPattern: "none",
    certificateSize: "standard",
    textAlignment: "center",
  })

  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCertificate, setGeneratedCertificate] = useState<any>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const templates = [
    {
      id: "template-1",
      name: "Professional Blue",
      description: "Clean and professional design with blue accents and elegant typography",
      category: "Professional",
      features: ["Clean Layout", "Professional Typography", "Blue Accent Colors"],
    },
    {
      id: "template-2",
      name: "Golden Excellence",
      description: "Elegant design with gold borders and luxury feel for premium certifications",
      category: "Luxury",
      features: ["Gold Borders", "Luxury Design", "Premium Feel"],
    },
    {
      id: "template-3",
      name: "Modern Minimalist",
      description: "Clean, modern design with geometric elements and contemporary styling",
      category: "Modern",
      features: ["Minimalist Design", "Geometric Elements", "Contemporary Style"],
    },
    {
      id: "template-4",
      name: "Classic Traditional",
      description: "Traditional certificate with ornate borders and classic typography",
      category: "Classic",
      features: ["Ornate Borders", "Classic Typography", "Traditional Style"],
    },
    {
      id: "template-5",
      name: "Creative Colorful",
      description: "Vibrant and creative design perfect for artistic achievements and creative courses",
      category: "Creative",
      features: ["Vibrant Colors", "Creative Design", "Artistic Elements"],
    },
    {
      id: "template-6",
      name: "Corporate Formal",
      description: "Formal corporate design ideal for business certifications and professional training",
      category: "Corporate",
      features: ["Corporate Design", "Formal Layout", "Business Professional"],
    },
  ]

  const colorPresets = [
    { name: "Blue", primary: "#2563eb", secondary: "#f59e0b" },
    { name: "Green", primary: "#059669", secondary: "#dc2626" },
    { name: "Purple", primary: "#7c3aed", secondary: "#f59e0b" },
    { name: "Red", primary: "#dc2626", secondary: "#059669" },
    { name: "Teal", primary: "#0d9488", secondary: "#f59e0b" },
    { name: "Orange", primary: "#ea580c", secondary: "#2563eb" },
  ]

  const borderStyles = [
    { value: "solid", label: "Solid" },
    { value: "double", label: "Double" },
    { value: "dashed", label: "Dashed" },
    { value: "none", label: "None" },
  ]

  const borderWidths = [
    { value: "thin", label: "Thin" },
    { value: "medium", label: "Medium" },
    { value: "thick", label: "Thick" },
  ]

  const cornerStyles = [
    { value: "sharp", label: "Sharp" },
    { value: "rounded", label: "Rounded" },
    { value: "extra-rounded", label: "Extra Rounded" },
  ]

  const backgroundPatterns = [
    { value: "none", label: "None" },
    { value: "subtle", label: "Subtle" },
    { value: "geometric", label: "Geometric" },
    { value: "watermark", label: "Watermark" },
  ]

  const certificateSizes = [
    { value: "small", label: "Small (A5)", dimensions: "5.8 × 8.3 in" },
    { value: "standard", label: "Standard (A4)", dimensions: "8.3 × 11.7 in" },
    { value: "large", label: "Large (A3)", dimensions: "11.7 × 16.5 in" },
  ]

  const textAlignments = [
    { value: "left", label: "Left" },
    { value: "center", label: "Center" },
    { value: "right", label: "Right" },
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.recipientName.trim()) {
      newErrors.recipientName = "Recipient name is required"
    }
    if (!formData.courseName.trim()) {
      newErrors.courseName = "Course name is required"
    }
    if (!formData.issuerName.trim()) {
      newErrors.issuerName = "Issuer name is required"
    }
    if (!formData.issueDate) {
      newErrors.issueDate = "Issue date is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleCustomizationChange = (field: string, value: string) => {
    setCustomization({
      ...customization,
      [field]: value,
    })
  }

  const generateCertificate = async () => {
    if (!validateForm()) {
      return
    }

    setIsGenerating(true)

    // Simulate certificate generation with realistic delay
    setTimeout(() => {
      const certificateId = `CERT-${Date.now()}`
      const certificate = {
        id: certificateId,
        ...formData,
        ...customization,
        template: selectedTemplate,
        qrCode: `${window.location.origin}/verify/${certificateId}`,
        generatedAt: new Date().toISOString(),
        verified: true,
      }

      // Store certificate data for verification
      certificateStorage.set(certificateId, certificate)

      setGeneratedCertificate(certificate)
      setIsGenerating(false)
    }, 2000)
  }

  const downloadImage = (format: "png" | "jpg" | "pdf") => {
    // In a real implementation, this would generate and download the actual file
    const link = document.createElement("a")
    link.download = `certificate-${generatedCertificate.recipientName.replace(/\s+/g, "-")}.${format}`

    // Simulate file download
    alert(
      `Downloading certificate as ${format.toUpperCase()}.\n\nIn a real implementation, this would:\n• Generate the certificate as ${format.toUpperCase()}\n• Download the file automatically\n• Include proper resolution and formatting`,
    )
  }

  const shareCertificate = async () => {
    const shareData = {
      title: `Certificate for ${generatedCertificate.recipientName}`,
      text: `${generatedCertificate.recipientName} has completed ${generatedCertificate.courseName}`,
      url: `${window.location.origin}/verify/${generatedCertificate.id}`,
    }

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        // Fallback to clipboard
        await navigator.clipboard.writeText(shareData.url)
        alert("Certificate verification link copied to clipboard!")
      }
    } else {
      // Fallback for browsers without Web Share API
      await navigator.clipboard.writeText(shareData.url)
      alert("Certificate verification link copied to clipboard!")
    }
  }

  const getSizeClasses = () => {
    switch (customization.certificateSize) {
      case "small":
        return "w-[420px] h-[297px]" // A5 ratio
      case "large":
        return "w-[842px] h-[595px]" // A3 ratio
      default:
        return "w-[595px] h-[420px]" // A4 ratio
    }
  }

  const getAlignmentClasses = () => {
    switch (customization.textAlignment) {
      case "left":
        return "text-left"
      case "right":
        return "text-right"
      default:
        return "text-center"
    }
  }

  const getBorderClasses = () => {
    const borderStyle = customization.borderStyle === "none" ? "" : `border-${customization.borderStyle}`
    const borderWidth =
      customization.borderWidth === "thin" ? "border" : customization.borderWidth === "thick" ? "border-4" : "border-2"
    return `${borderStyle} ${borderWidth}`
  }

  const getCornerClasses = () => {
    switch (customization.cornerStyle) {
      case "sharp":
        return "rounded-none"
      case "extra-rounded":
        return "rounded-3xl"
      default:
        return "rounded-lg"
    }
  }

  const renderTemplate = (data: any) => {
    const templateProps = {
      data: {
        ...data,
        ...customization,
        sizeClasses: getSizeClasses(),
        alignmentClasses: getAlignmentClasses(),
        borderClasses: getBorderClasses(),
        cornerClasses: getCornerClasses(),
      },
    }

    switch (selectedTemplate) {
      case "template-1":
        return <BannerbearTemplate1 {...templateProps} />
      case "template-2":
        return <BannerbearTemplate2 {...templateProps} />
      case "template-3":
        return <BannerbearTemplate3 {...templateProps} />
      case "template-4":
        return <BannerbearTemplate4 {...templateProps} />
      case "template-5":
        return <BannerbearTemplate5 {...templateProps} />
      case "template-6":
        return <BannerbearTemplate6 {...templateProps} />
      default:
        return <BannerbearTemplate1 {...templateProps} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center">
              <Award className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CertifyPro</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Certificate Generator</h1>
          <p className="text-xl text-gray-600">
            Create professional certificates in minutes with our easy-to-use generator
          </p>
        </div>

        {!generatedCertificate ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Panel - Controls */}
            <div className="lg:col-span-1 space-y-6">
              {/* Tab Navigation */}
              <div className="bg-white rounded-xl shadow-lg">
                <div className="flex border-b">
                  <button
                    onClick={() => setActiveTab("templates")}
                    className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === "templates"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Palette className="h-4 w-4 inline mr-2" />
                    Templates
                  </button>
                  <button
                    onClick={() => setActiveTab("content")}
                    className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === "content"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Type className="h-4 w-4 inline mr-2" />
                    Content
                  </button>
                  <button
                    onClick={() => setActiveTab("design")}
                    className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === "design"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Settings className="h-4 w-4 inline mr-2" />
                    Design
                  </button>
                </div>

                <div className="p-6">
                  {/* Templates Tab */}
                  {activeTab === "templates" && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Choose a Template</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {templates.map((template) => (
                          <div
                            key={template.id}
                            className={`cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 ${
                              selectedTemplate === template.id
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() => setSelectedTemplate(template.id)}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <h4 className="font-medium text-gray-900">{template.name}</h4>
                                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                    {template.category}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                                <div className="flex flex-wrap gap-1">
                                  {template.features.map((feature, index) => (
                                    <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              {selectedTemplate === template.id && (
                                <Check className="h-5 w-5 text-blue-500 flex-shrink-0 ml-2" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Content Tab */}
                  {activeTab === "content" && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Certificate Content</h3>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Name *</label>
                        <input
                          type="text"
                          name="recipientName"
                          value={formData.recipientName}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.recipientName ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Enter recipient's name"
                        />
                        {errors.recipientName && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.recipientName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Course/Program *</label>
                        <input
                          type="text"
                          name="courseName"
                          value={formData.courseName}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.courseName ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Enter course name"
                        />
                        {errors.courseName && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.courseName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Certificate description"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Issue Date *</label>
                        <input
                          type="date"
                          name="issueDate"
                          value={formData.issueDate}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.issueDate ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.issueDate && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.issueDate}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Issuer Name *</label>
                        <input
                          type="text"
                          name="issuerName"
                          value={formData.issuerName}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.issuerName ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Organization name"
                        />
                        {errors.issuerName && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.issuerName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Issuer Title</label>
                        <input
                          type="text"
                          name="issuerTitle"
                          value={formData.issuerTitle}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Title or position"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Certificate Type</label>
                        <select
                          name="certificateType"
                          value={formData.certificateType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                          <option value="completion">Completion</option>
                          <option value="achievement">Achievement</option>
                          <option value="participation">Participation</option>
                          <option value="excellence">Excellence</option>
                          <option value="appreciation">Appreciation</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Design Tab */}
                  {activeTab === "design" && (
                    <div className="space-y-6">
                      <h3 className="font-semibold text-gray-900">Design Customization</h3>

                      {/* Certificate Size */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Certificate Size</label>
                        <div className="grid grid-cols-1 gap-2">
                          {certificateSizes.map((size) => (
                            <button
                              key={size.value}
                              onClick={() => handleCustomizationChange("certificateSize", size.value)}
                              className={`p-3 text-left rounded-lg border-2 transition-colors ${
                                customization.certificateSize === size.value
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              <div className="font-medium">{size.label}</div>
                              <div className="text-sm text-gray-600">{size.dimensions}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Text Alignment */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                        <div className="grid grid-cols-3 gap-2">
                          {textAlignments.map((alignment) => (
                            <button
                              key={alignment.value}
                              onClick={() => handleCustomizationChange("textAlignment", alignment.value)}
                              className={`p-2 rounded-lg border-2 transition-colors ${
                                customization.textAlignment === alignment.value
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              {alignment.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Color Scheme */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Color Presets</label>
                        <div className="grid grid-cols-2 gap-2">
                          {colorPresets.map((preset) => (
                            <button
                              key={preset.name}
                              onClick={() => {
                                handleCustomizationChange("primaryColor", preset.primary)
                                handleCustomizationChange("secondaryColor", preset.secondary)
                              }}
                              className="flex items-center p-2 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors"
                            >
                              <div className="flex space-x-1 mr-2">
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.primary }}></div>
                                <div
                                  className="w-4 h-4 rounded-full"
                                  style={{ backgroundColor: preset.secondary }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-700">{preset.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Custom Colors */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                          <input
                            type="color"
                            value={customization.primaryColor}
                            onChange={(e) => handleCustomizationChange("primaryColor", e.target.value)}
                            className="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                          <input
                            type="color"
                            value={customization.secondaryColor}
                            onChange={(e) => handleCustomizationChange("secondaryColor", e.target.value)}
                            className="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Border Style */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Border Style</label>
                        <div className="grid grid-cols-2 gap-2">
                          {borderStyles.map((style) => (
                            <button
                              key={style.value}
                              onClick={() => handleCustomizationChange("borderStyle", style.value)}
                              className={`p-2 rounded-lg border-2 transition-colors ${
                                customization.borderStyle === style.value
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              {style.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Border Width */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Border Width</label>
                        <div className="grid grid-cols-3 gap-2">
                          {borderWidths.map((width) => (
                            <button
                              key={width.value}
                              onClick={() => handleCustomizationChange("borderWidth", width.value)}
                              className={`p-2 rounded-lg border-2 transition-colors ${
                                customization.borderWidth === width.value
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              {width.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Corner Style */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Corner Style</label>
                        <div className="grid grid-cols-3 gap-2">
                          {cornerStyles.map((corner) => (
                            <button
                              key={corner.value}
                              onClick={() => handleCustomizationChange("cornerStyle", corner.value)}
                              className={`p-2 rounded-lg border-2 transition-colors ${
                                customization.cornerStyle === corner.value
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              {corner.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Font Family */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
                        <select
                          value={customization.fontFamily}
                          onChange={(e) => handleCustomizationChange("fontFamily", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                          <option value="serif">Serif (Traditional)</option>
                          <option value="sans-serif">Sans Serif (Modern)</option>
                          <option value="mono">Monospace (Technical)</option>
                        </select>
                      </div>

                      {/* Background Pattern */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Background Pattern</label>
                        <div className="grid grid-cols-2 gap-2">
                          {backgroundPatterns.map((pattern) => (
                            <button
                              key={pattern.value}
                              onClick={() => handleCustomizationChange("backgroundPattern", pattern.value)}
                              className={`p-2 rounded-lg border-2 transition-colors ${
                                customization.backgroundPattern === pattern.value
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              {pattern.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={generateCertificate}
                disabled={isGenerating}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Generating...
                  </div>
                ) : (
                  "Generate Certificate"
                )}
              </button>
            </div>

            {/* Right Panel - Live Preview */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Live Preview</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>Updates automatically</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4 overflow-auto">
                  <div className="flex justify-center">
                    <div className="transform scale-50 origin-center">{renderTemplate(formData)}</div>
                  </div>
                </div>

                <div className="mt-4 text-center text-sm text-gray-600">
                  <p>Preview is scaled to fit. Actual certificate will be full size.</p>
                  <p>Size: {certificateSizes.find((s) => s.value === customization.certificateSize)?.dimensions}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Generated Certificate View
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Certificate is Ready!</h2>

              {/* Full Size Certificate */}
              <div className="bg-gray-100 rounded-lg p-6 mb-8 overflow-auto">
                <div className="flex justify-center">{renderTemplate(generatedCertificate)}</div>
              </div>

              {/* Certificate Details */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Certificate Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>
                      <span className="font-medium">Certificate ID:</span> {generatedCertificate.id}
                    </p>
                    <p>
                      <span className="font-medium">Recipient:</span> {generatedCertificate.recipientName}
                    </p>
                    <p>
                      <span className="font-medium">Course:</span> {generatedCertificate.courseName}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-medium">Template:</span>{" "}
                      {templates.find((t) => t.id === selectedTemplate)?.name}
                    </p>
                    <p>
                      <span className="font-medium">Generated:</span>{" "}
                      {new Date(generatedCertificate.generatedAt).toLocaleString()}
                    </p>
                    <p>
                      <span className="font-medium">Verification:</span>{" "}
                      <Link
                        href={`/verify/${generatedCertificate.id}`}
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        /verify/{generatedCertificate.id}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Options */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => downloadImage("png")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download PNG
                </button>
                <button
                  onClick={() => downloadImage("jpg")}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download JPG
                </button>
                <button
                  onClick={() => downloadImage("pdf")}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download PDF
                </button>
                <button
                  onClick={shareCertificate}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </button>
                <Link
                  href={`/verify/${generatedCertificate.id}`}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <ImageIcon className="h-5 w-5 mr-2" />
                  Verify
                </Link>
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={() => setGeneratedCertificate(null)}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  ← Create Another Certificate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
