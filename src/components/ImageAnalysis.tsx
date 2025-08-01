'use client'

import { useState } from 'react'
import { PhotoIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { useDropzone } from 'react-dropzone'

export default function ImageAnalysis() {
  const [file, setFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.dicom']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0])
      setPreviewUrl(URL.createObjectURL(acceptedFiles[0]))
      setAnalysisResult(null)
    },
  })

  const analyzeImage = async () => {
    if (!file) return
    
    setIsAnalyzing(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Mock analysis result
      const mockResult = {
        findings: [
          "Normal bone density and trabecular pattern",
          "No evidence of fracture or dislocation",
          "Intact lamina dura around all teeth",
          "No radiolucent or radiopaque lesions detected"
        ],
        diagnosis: "No significant radiographic abnormalities detected",
        recommendations: [
          "Clinical correlation recommended",
          "Follow-up imaging in 6 months if symptoms persist"
        ]
      }
      
      setAnalysisResult(mockResult)
    } catch (error) {
      console.error('Error analyzing image:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Radiological Image Analysis</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Upload dental or medical images for AI-powered analysis
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive
              ? 'border-indigo-500 bg-indigo-50 dark:bg-gray-700'
              : 'border-gray-300 hover:border-indigo-500 dark:border-gray-600 dark:hover:border-indigo-400'
          }`}
        >
          <input {...getInputProps()} />
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {isDragActive ? (
              <span className="text-indigo-600 dark:text-indigo-400">Drop the image here</span>
            ) : (
              <>
                Drag and drop your radiological image here, or click to select a file
                <br />
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  Supported formats: JPEG, PNG, DICOM
                </span>
              </>
            )}
          </p>
        </div>

        {file && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Uploaded Image</h3>
              {previewUrl && (
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img
                    src={previewUrl}
                    alt="Uploaded preview"
                    className="w-full h-auto max-h-96 object-contain"
                    onLoad={() => URL.revokeObjectURL(previewUrl)}
                  />
                </div>
              )}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <PhotoIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 truncate max-w-xs">
                    {file.name}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {(file.size / 1024).toFixed(1)} KB
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Analysis</h3>
                <button
                  onClick={analyzeImage}
                  disabled={isAnalyzing}
                  className={`flex items-center px-4 py-2 rounded-md text-white font-medium ${
                    isAnalyzing
                      ? 'bg-gray-400 cursor-not-allowed dark:bg-gray-600'
                      : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800'
                  }`}
                >
                  {isAnalyzing ? (
                    <>
                      <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    'Analyze Image'
                  )}
                </button>
              </div>

              {analysisResult ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Findings</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                      {analysisResult.findings.map((finding: string, index: number) => (
                        <li key={index}>{finding}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Diagnosis</h4>
                    <p className="text-gray-700 dark:text-gray-300">{analysisResult.diagnosis}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Recommendations</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                      {analysisResult.recommendations.map((rec: string, index: number) => (
                        <li key={index}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 text-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    {isAnalyzing
                      ? 'Analyzing image...'
                      : 'Upload an image and click "Analyze Image" to get results'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}