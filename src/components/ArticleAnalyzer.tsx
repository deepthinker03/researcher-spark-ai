'use client'

import { useState } from 'react'
import { DocumentTextIcon, ArrowPathIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useDropzone } from 'react-dropzone'

export default function ArticleAnalyzer() {
  const [file, setFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const [textContent, setTextContent] = useState('')
  const [activeTab, setActiveTab] = useState('upload')

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0])
      if (acceptedFiles[0].type === 'text/plain') {
        const reader = new FileReader()
        reader.onload = () => {
          setTextContent(reader.result as string)
        }
        reader.readAsText(acceptedFiles[0])
      }
    },
  })

  const analyzeArticle = async () => {
    setIsAnalyzing(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock analysis result
      const mockResult = {
        summary: "This research paper examines the effects of AI-powered tools on academic research productivity. The study found a 35% increase in research output when using AI assistants.",
        keyFindings: [
          "AI tools reduce literature review time by 40%",
          "Researchers using AI assistants produce more citations",
          "Quality of research is maintained while speed increases"
        ],
        strengths: [
          "Robust methodology with control group",
          "Large sample size (n=1,200)",
          "Clear metrics for productivity measurement"
        ],
        weaknesses: [
          "Limited to computer science disciplines",
          "Short-term study (6 months)",
          "Potential bias in self-reported data"
        ],
        methodology: "Mixed-methods approach with quantitative productivity metrics and qualitative interviews with researchers."
      }
      
      setAnalysisResult(mockResult)
    } catch (error) {
      console.error('Error analyzing article:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Research Article Analyzer</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Upload or paste your research article to get a comprehensive analysis
        </p>
      </div>

      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'upload' ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
          onClick={() => setActiveTab('upload')}
        >
          Upload File
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'paste' ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
          onClick={() => setActiveTab('paste')}
        >
          Paste Text
        </button>
      </div>

      {activeTab === 'upload' ? (
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
            <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {isDragActive ? (
                <span className="text-indigo-600 dark:text-indigo-400">Drop the file here</span>
              ) : (
                <>
                  Drag and drop your research article here, or click to select a file
                  <br />
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    Supported formats: PDF, DOCX, TXT
                  </span>
                </>
              )}
            </p>
          </div>

          {file && (
            <div className="mt-4 flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center">
                <DocumentTextIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 truncate max-w-xs">
                  {file.name}
                </span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {(file.size / 1024).toFixed(1)} KB
              </span>
            </div>
          )}

          <div className="mt-6 flex justify-center">
            <button
              onClick={analyzeArticle}
              disabled={!file || isAnalyzing}
              className={`flex items-center px-6 py-3 rounded-md text-white font-medium ${
                !file || isAnalyzing
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
                <>
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  Analyze Article
                </>
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <textarea
            className="w-full h-64 p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="Paste your research article text here..."
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
          />
          <div className="mt-4 flex justify-center">
            <button
              onClick={analyzeArticle}
              disabled={!textContent.trim() || isAnalyzing}
              className={`flex items-center px-6 py-3 rounded-md text-white font-medium ${
                !textContent.trim() || isAnalyzing
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
                <>
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  Analyze Text
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {analysisResult && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Analysis Results</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Summary</h3>
            <p className="text-gray-700 dark:text-gray-300">{analysisResult.summary}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Findings</h3>
              <ul className="space-y-2">
                {analysisResult.keyFindings.map((finding: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Methodology</h3>
              <p className="text-gray-700 dark:text-gray-300">{analysisResult.methodology}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Strengths</h3>
              <ul className="space-y-2">
                {analysisResult.strengths.map((strength: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Weaknesses</h3>
              <ul className="space-y-2">
                {analysisResult.weaknesses.map((weakness: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}