"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Award,
  ArrowLeft,
  CheckCircle,
  XCircle,
  AlertCircle,
  Calendar,
  User,
  BookOpen,
  Building,
  Shield,
  ExternalLink,
} from "lucide-react"

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
      primaryColor: "#2563eb",
      secondaryColor: "#f59e0b",
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
      primaryColor: "#059669",
      secondaryColor: "#dc2626",
    },
  ],
])

interface Certificate {
  id: string
  recipientName: string
  courseName: string
  issueDate: string
  issuerName: string
  issuerTitle: string
  certificateType: string
  description: string
  template: string
  generatedAt: string
  verified: boolean
  primaryColor?: string
  secondaryColor?: string
}

export default function VerifyPage({ params }: { params: { id: string } }) {
  const [certificate, setCertificate] = useState<Certificate | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const verifyCertificate = async () => {
      setLoading(true)
      setError(null)

      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const cert = certificateStorage.get(params.id)

        if (cert) {
          setCertificate(cert)
        } else {
          setError("Certificate not found")
        }
      } catch (err) {
        setError("Failed to verify certificate")
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      verifyCertificate()
    }
  }, [params.id])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusIcon = () => {
    if (loading) {
      return <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    }

    if (error || !certificate) {
      return <XCircle className="h-8 w-8 text-red-500" />
    }

    if (certificate.verified) {
      return <CheckCircle className="h-8 w-8 text-green-500" />
    }

    return <AlertCircle className="h-8 w-8 text-yellow-500" />
  }

  const getStatusMessage = () => {
    if (loading) {
      return {
        title: "Verifying Certificate...",
        description: "Please wait while we verify the certificate authenticity.",
        color: "text-blue-600",
      }
    }

    if (error) {
      return {
        title: "Verification Failed",
        description:
          error === "Certificate not found"
            ? "This certificate ID does not exist in our database. Please check the ID and try again."
            : "Unable to verify certificate at this time. Please try again later.",
        color: "text-red-600",
      }
    }

    if (!certificate) {
      return {
        title: "Certificate Not Found",
        description: "The certificate with this ID could not be found.",
        color: "text-red-600",
      }
    }

    if (certificate.verified) {
      return {
        title: "Certificate Verified ✓",
        description: "This certificate is authentic and has been successfully verified.",
        color: "text-green-600",
      }
    }

    return {
      title: "Verification Pending",
      description: "This certificate is pending verification.",
      color: "text-yellow-600",
    }
  }

  const status = getStatusMessage()

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certificate Verification</h1>
          <p className="text-xl text-gray-600">Verify the authenticity of certificates issued through our platform</p>
        </div>

        {/* Verification Status */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">{getStatusIcon()}</div>
            <h2 className={`text-2xl font-bold mb-2 ${status.color}`}>{status.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{status.description}</p>
          </div>

          {/* Certificate ID */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Certificate ID</p>
              <p className="font-mono text-lg font-semibold text-gray-900">{params.id}</p>
            </div>
          </div>

          {/* Certificate Details */}
          {certificate && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Recipient</p>
                      <p className="text-gray-600">{certificate.recipientName}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Course/Program</p>
                      <p className="text-gray-600">{certificate.courseName}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Issued By</p>
                      <p className="text-gray-600">{certificate.issuerName}</p>
                      {certificate.issuerTitle && <p className="text-sm text-gray-500">{certificate.issuerTitle}</p>}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Issue Date</p>
                      <p className="text-gray-600">{formatDate(certificate.issueDate)}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Certificate Type</p>
                      <p className="text-gray-600 capitalize">{certificate.certificateType}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Generated</p>
                      <p className="text-gray-600">{formatDate(certificate.generatedAt)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {certificate.description && (
                <div className="border-t pt-6">
                  <p className="text-sm font-medium text-gray-900 mb-2">Description</p>
                  <p className="text-gray-600">{certificate.description}</p>
                </div>
              )}

              {/* Verification Badge */}
              {certificate.verified && (
                <div className="border-t pt-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <div>
                        <p className="font-medium text-green-800">Verified Certificate</p>
                        <p className="text-sm text-green-600">
                          This certificate has been verified as authentic and was issued by {certificate.issuerName}.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Error State Actions */}
          {error && (
            <div className="border-t pt-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium text-red-800 mb-2">Troubleshooting Tips:</p>
                    <ul className="text-sm text-red-600 space-y-1">
                      <li>• Double-check the certificate ID for any typos</li>
                      <li>• Ensure the certificate was generated through our platform</li>
                      <li>• Contact the certificate issuer if you believe this is an error</li>
                      <li>• Try refreshing the page or checking again later</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Demo Certificates */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Try Demo Certificates</h3>
          <p className="text-gray-600 mb-6">Test the verification system with these demo certificates:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/verify/CERT-DEMO-001"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Jane Smith</p>
                  <p className="text-sm text-gray-600">Advanced React Development</p>
                  <p className="text-xs text-gray-500 font-mono">CERT-DEMO-001</p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </div>
            </Link>

            <Link
              href="/verify/CERT-DEMO-002"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Michael Johnson</p>
                  <p className="text-sm text-gray-600">Digital Marketing Mastery</p>
                  <p className="text-xs text-gray-500 font-mono">CERT-DEMO-002</p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </div>
            </Link>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center mt-8">
          <Link
            href="/generate"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <Award className="h-5 w-5 mr-2" />
            Create Your Certificate
          </Link>
        </div>
      </div>
    </div>
  )
}
