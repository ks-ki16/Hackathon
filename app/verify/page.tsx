"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Award, ArrowLeft, Search, CheckCircle, XCircle, Shield, AlertCircle } from "lucide-react"

// Certificate storage - in a real app, this would be a database
const certificateDatabase = new Map()

// Function to add certificate to database (called from generate page)
export function addCertificateToDatabase(certificate: any) {
  certificateDatabase.set(certificate.id, certificate)
}

export default function VerifyPage() {
  const [certificateId, setCertificateId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<any>(null)
  const [inputError, setInputError] = useState("")

  const validateCertificateId = (id: string) => {
    if (!id.trim()) {
      return "Certificate ID is required"
    }
    if (!id.startsWith("CERT-")) {
      return "Certificate ID must start with 'CERT-'"
    }
    if (id.length < 15) {
      return "Certificate ID appears to be too short"
    }
    return ""
  }

  const verifyCertificate = async (e: React.FormEvent) => {
    e.preventDefault()

    const error = validateCertificateId(certificateId)
    if (error) {
      setInputError(error)
      return
    }

    setInputError("")
    setIsVerifying(true)
    setVerificationResult(null)

    // Simulate verification process with realistic delay
    setTimeout(() => {
      // Check if certificate exists in our database
      const storedCertificate = certificateDatabase.get(certificateId.trim())

      if (storedCertificate) {
        setVerificationResult({
          valid: true,
          certificate: {
            ...storedCertificate,
            verifiedAt: new Date().toISOString(),
            status: "Valid & Verified",
          },
        })
      } else {
        // Demo certificates for testing
        const demoCertificates = {
          "CERT-1234567890": {
            id: "CERT-1234567890",
            recipientName: "John Doe",
            courseName: "Advanced Web Development",
            issueDate: "2024-01-15",
            issuerName: "Tech Academy",
            issuerTitle: "Director of Education",
            certificateType: "completion",
            template: "professional-blue",
            generatedAt: "2024-01-15T10:00:00Z",
          },
          "CERT-0987654321": {
            id: "CERT-0987654321",
            recipientName: "Jane Smith",
            courseName: "Digital Marketing Mastery",
            issueDate: "2024-01-20",
            issuerName: "Marketing Institute",
            issuerTitle: "Chief Executive Officer",
            certificateType: "achievement",
            template: "golden-excellence",
            generatedAt: "2024-01-20T14:30:00Z",
          },
        }

        const demoCert = demoCertificates[certificateId.trim() as keyof typeof demoCertificates]

        if (demoCert) {
          setVerificationResult({
            valid: true,
            certificate: {
              ...demoCert,
              verifiedAt: new Date().toISOString(),
              status: "Valid & Verified (Demo)",
            },
          })
        } else {
          setVerificationResult({
            valid: false,
            error: "Certificate not found in our database",
            suggestions: [
              "Double-check the certificate ID for typos",
              "Ensure you copied the complete ID including 'CERT-' prefix",
              "Contact the issuing organization if you believe this is an error",
              "Try using demo IDs: CERT-1234567890 or CERT-0987654321",
            ],
          })
        }
      }

      setIsVerifying(false)
    }, 2000)
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certificate Verification</h1>
          <p className="text-xl text-gray-600">Enter the certificate ID to verify its authenticity and view details</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <form onSubmit={verifyCertificate} className="space-y-6">
            <div>
              <label htmlFor="certificateId" className="block text-sm font-medium text-gray-700 mb-2">
                Certificate ID *
              </label>
              <div className="space-y-2">
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="certificateId"
                    value={certificateId}
                    onChange={(e) => {
                      setCertificateId(e.target.value)
                      setInputError("")
                      setVerificationResult(null)
                    }}
                    className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      inputError ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                    placeholder="Enter certificate ID (e.g., CERT-1234567890)"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isVerifying || !certificateId.trim()}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center px-6 py-3 min-w-[120px] justify-center"
                  >
                    {isVerifying ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Verifying...
                      </>
                    ) : (
                      <>
                        <Search className="h-5 w-5 mr-2" />
                        Verify
                      </>
                    )}
                  </button>
                </div>
                {inputError && (
                  <div className="flex items-center text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {inputError}
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Try demo IDs: <code className="bg-gray-100 px-2 py-1 rounded">CERT-1234567890</code> or{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">CERT-0987654321</code>
              </p>
            </div>
          </form>
        </div>

        {/* Verification Results */}
        {verificationResult && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            {verificationResult.valid ? (
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-600 mb-4">✓ Certificate Verified</h2>
                <p className="text-gray-600 mb-8">This certificate is authentic and has been successfully verified.</p>

                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        Certificate Details
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-gray-600">Certificate ID:</span>
                          <div className="mt-1 font-mono text-sm bg-white px-3 py-2 rounded border">
                            {verificationResult.certificate.id}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Recipient:</span>
                          <div className="mt-1 text-gray-900 font-semibold">
                            {verificationResult.certificate.recipientName}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Course/Program:</span>
                          <div className="mt-1 text-gray-900">{verificationResult.certificate.courseName}</div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Certificate Type:</span>
                          <div className="mt-1 text-gray-900 capitalize">
                            {verificationResult.certificate.certificateType}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <Shield className="h-5 w-5 text-blue-600 mr-2" />
                        Verification Details
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-gray-600">Issuing Organization:</span>
                          <div className="mt-1 text-gray-900 font-semibold">
                            {verificationResult.certificate.issuerName}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Issuer Title:</span>
                          <div className="mt-1 text-gray-900">{verificationResult.certificate.issuerTitle}</div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Issue Date:</span>
                          <div className="mt-1 text-gray-900">
                            {new Date(verificationResult.certificate.issueDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Verified At:</span>
                          <div className="mt-1 text-gray-900 text-sm">
                            {new Date(verificationResult.certificate.verifiedAt).toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Status:</span>
                          <div className="mt-1">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {verificationResult.certificate.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={`/verify/${verificationResult.certificate.id}`} className="btn-primary">
                    View Full Certificate
                  </Link>
                  <button
                    onClick={() => {
                      const verificationUrl = `${window.location.origin}/verify?id=${verificationResult.certificate.id}`
                      navigator.clipboard.writeText(verificationUrl)
                      alert("Verification link copied to clipboard!")
                    }}
                    className="btn-secondary"
                  >
                    Share Verification Link
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-red-600 mb-4">Certificate Not Found</h2>
                <p className="text-gray-600 mb-6">{verificationResult.error}</p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6 text-left">
                  <h4 className="font-semibold text-red-800 mb-3">Troubleshooting Tips:</h4>
                  <ul className="space-y-2 text-sm text-red-700">
                    {verificationResult.suggestions?.map((suggestion: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setCertificateId("")
                    setVerificationResult(null)
                    setInputError("")
                  }}
                  className="btn-primary"
                >
                  Try Another Certificate
                </button>
              </div>
            )}
          </div>
        )}

        {/* How it works section */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">How Certificate Verification Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Enter Certificate ID</h4>
              <p className="text-sm text-gray-600">
                Enter the unique certificate ID found on your certificate document
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Secure Verification</h4>
              <p className="text-sm text-gray-600">Our system securely checks the certificate against our database</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Instant Results</h4>
              <p className="text-sm text-gray-600">Get immediate verification with complete certificate details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
