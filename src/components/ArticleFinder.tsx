'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

export default function ArticleFinder() {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<any[]>([])
  const [selectedDatabase, setSelectedDatabase] = useState('all')

  const databases = [
    { id: 'all', name: 'All Databases' },
    { id: 'pubmed', name: 'PubMed' },
    { id: 'arxiv', name: 'ArXiv' },
    { id: 'semantic', name: 'Semantic Scholar' },
    { id: 'core', name: 'CORE' },
    { id: 'doaj', name: 'DOAJ' },
    { id: 'plos', name: 'PLOS' },
    { id: 'zenodo', name: 'Zenodo' },
  ]

  const searchArticles = async () => {
    if (!query.trim()) return
    
    setIsSearching(true)
    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const mockResults = Array(5).fill(null).map((_, i) => ({
        id: `mock-${i}`,
        title: `${query} research paper ${i + 1}`,
        abstract: `This is a mock abstract about ${query}. It summarizes the key findings and methodology of the research. The study was conducted in 202${i} and published in the Journal of Mock Research.`,
        authors: [`Author ${i + 1}`, `Researcher ${i + 1}`],
        year: 2020 + i,
        source: databases[Math.floor(Math.random() * databases.length)].name,
        url: `https://example.com/paper-${i}`,
        database: selectedDatabase === 'all' ? databases[Math.floor(Math.random() * databases.length) + 1].id : selectedDatabase,
      }))
      
      setResults(mockResults)
    } catch (error) {
      console.error('Error searching articles:', error)
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Global Research Article Finder</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Search across multiple academic databases to find relevant research articles
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-grow">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Search Topic or Keywords
            </label>
            <input
              type="text"
              id="search"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter research topic or keywords..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && searchArticles()}
            />
          </div>
          <div className="w-full md:w-64">
            <label htmlFor="database" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Database
            </label>
            <select
              id="database"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              value={selectedDatabase}
              onChange={(e) => setSelectedDatabase(e.target.value)}
            >
              {databases.map((db) => (
                <option key={db.id} value={db.id}>{db.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={searchArticles}
            disabled={!query.trim() || isSearching}
            className={`flex items-center px-6 py-3 rounded-md text-white font-medium ${
              !query.trim() || isSearching
                ? 'bg-gray-400 cursor-not-allowed dark:bg-gray-600'
                : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800'
            }`}
          >
            {isSearching ? (
              <>
                <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
                Searching...
              </>
            ) : (
              <>
                <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                Search Articles
              </>
            )}
          </button>
        </div>
      </div>

      {results.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Found {results.length} articles
          </h2>
          
          {results.map((article) => (
            <div key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {article.authors.join(', ')} • {article.year} • {article.source}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {article.abstract}
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                  {article.database}
                </span>
              </div>
              <div className="mt-4">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium"
                >
                  View full article <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}