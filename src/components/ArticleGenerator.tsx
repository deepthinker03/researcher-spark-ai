'use client'

import { useState } from 'react'
import { DocumentTextIcon, ArrowPathIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import ReactMarkdown from 'react-markdown'

export default function ArticleGenerator() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedArticle, setGeneratedArticle] = useState('')
  const [format, setFormat] = useState('apa')

  const generateArticle = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Mock generated article
      const mockArticle = `# Research Article on ${prompt}

## Abstract
This study examines the current state of research on ${prompt}. Through a comprehensive literature review and meta-analysis, we identify key trends and gaps in the existing research. Our findings suggest significant opportunities for further investigation in this area.

## Introduction
${prompt} has emerged as an important topic in recent years. The growing interest in this field is driven by several factors, including [factor 1], [factor 2], and [factor 3]. 

## Methodology
We conducted a systematic review of articles published between 2010 and 2023. Our search strategy included databases such as PubMed, IEEE Xplore, and ScienceDirect. Inclusion criteria were [criteria].

## Results
Our analysis revealed three main findings:
1. Finding 1 related to ${prompt}
2. Finding 2 related to ${prompt}
3. Finding 3 related to ${prompt}

## Discussion
The implications of these findings are significant for [field]. They suggest that [interpretation].

## Conclusion
This study contributes to the growing body of knowledge on ${prompt}. Future research should investigate [suggestions].

## References
1. Author A et al. (2020) "Title 1". Journal Name.
2. Author B et al. (2021) "Title 2". Journal Name.
3. Author C et al. (2022) "Title 3". Journal Name.`
      
      setGeneratedArticle(mockArticle)
    } catch (error) {
      console.error('Error generating article:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadArticle = () => {
    const element = document.createElement('a')
    const file = new Blob([generatedArticle], { type: 'text/markdown' })
    element.href = URL.createObjectURL(file)
    element.download = `research_article_${prompt.substring(0, 20)}.md`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Research Article Generator</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Generate complete research articles with citations based on your topic
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="mb-6">
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Research Topic or Prompt
          </label>
          <textarea
            id="prompt"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            rows={3}
            placeholder="Describe the research article you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="format" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Citation Format
          </label>
          <select
            id="format"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value="apa">APA</option>
            <option value="mla">MLA</option>
            <option value="chicago">Chicago</option>
            <option value="ieee">IEEE</option>
            <option value="ama">AMA</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            onClick={generateArticle}
            disabled={!prompt.trim() || isGenerating}
            className={`flex items-center px-6 py-3 rounded-md text-white font-medium ${
              !prompt.trim() || isGenerating
                ? 'bg-gray-400 cursor-not-allowed dark:bg-gray-600'
                : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800'
            }`}
          >
            {isGenerating ? (
              <>
                <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <DocumentTextIcon className="h-5 w-5 mr-2" />
                Generate Article
              </>
            )}
          </button>
        </div>
      </div>

      {generatedArticle && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Generated Article</h2>
            <button
              onClick={downloadArticle}
              className="flex items-center px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white font-medium"
            >
              <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
              Download
            </button>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{generatedArticle}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  )
}