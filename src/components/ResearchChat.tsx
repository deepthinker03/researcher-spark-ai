'use client'

import { useState, useRef, useEffect } from 'react'
import { PaperAirplaneIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function ResearchChat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Simulate API call with mock response
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: `Here's some information about "${input}":\n\n` +
          `1. **Definition**: ${input} is a research topic in the field of medicine and dentistry.\n` +
          `2. **Recent Studies**: A 2023 study published in the Journal of Dental Research found significant correlations.\n` +
          `3. **Clinical Implications**: This has important implications for clinical practice.\n\n` +
          `Would you like me to find specific articles about ${input} or explain any particular aspect in more detail?`
      }
      
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error getting AI response:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again later.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Research Assistant</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Get answers to your research questions and assistance with your work
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="h-[500px] overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="max-w-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  How can I help with your research today?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ask me anything about medical or dental research, article writing, study design, or scientific concepts.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-sm text-gray-500 dark:text-gray-500">Try asking:</p>
                  <button
                    onClick={() => setInput('What are the latest treatments for periodontitis?')}
                    className="text-sm px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    What are the latest treatments for periodontitis?
                  </button>
                  <button
                    onClick={() => setInput('Explain the methodology of a randomized controlled trial')}
                    className="text-sm px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    Explain the methodology of a randomized controlled trial
                  </button>
                </div>
              </div>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-3/4 rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {message.content.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-2 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2">
                <div className="flex items-center">
                  <ArrowPathIcon className="h-4 w-4 mr-2 animate-spin" />
                  <span>Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex">
            <input
              type="text"
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="Type your research question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className={`px-4 py-2 rounded-r-md text-white ${
                !input.trim() || isLoading
                  ? 'bg-gray-400 cursor-not-allowed dark:bg-gray-600'
                  : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800'
              }`}
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}