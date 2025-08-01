import Link from 'next/link'
import { MagnifyingGlassIcon, DocumentTextIcon, ChatBubbleLeftRightIcon, PhotoIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline'
import Dashboard from '../components/Dashboard'

export default function Home() {
  const features = [
    {
      name: 'Research Article Analyzer',
      description: 'Upload or paste research articles for comprehensive analysis including summary, key findings, and methodology breakdown.',
      icon: DocumentTextIcon,
      href: '/analyzer',
    },
    {
      name: 'Global Research Finder',
      description: 'Search across multiple academic databases to find relevant research articles on any topic.',
      icon: MagnifyingGlassIcon,
      href: '/finder',
    },
    {
      name: 'AI Research Assistant',
      description: 'Get answers to your research questions, solve doubts, and get writing assistance from our AI chatbot.',
      icon: ChatBubbleLeftRightIcon,
      href: '/chat',
    },
    {
      name: 'Radiological Image Analysis',
      description: 'Upload dental or medical images for AI-powered analysis and interpretation.',
      icon: PhotoIcon,
      href: '/radiology',
    },
    {
      name: 'AI Article Generator',
      description: 'Generate complete research articles with citations and references based on your topic.',
      icon: DocumentArrowUpIcon,
      href: '/generator',
    },
  ]

  return (
    <>
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 dark:from-blue-900 dark:to-indigo-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">RESEARCHERS SPARK AI</span>
                    <span className="block text-indigo-200">BY OWAIS IQBAL</span>
                  </h1>
                  <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Advanced AI-powered research assistant for academics, medical and dental researchers.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        href="/dashboard"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                      >
                        Get Started
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        href="/chat"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10"
                      >
                        Try AI Chat
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need for research
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Our AI-powered tools help you at every stage of your research process.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative bg-white dark:bg-gray-700 rounded-lg p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="ml-3 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</h3>
                    </div>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                      {feature.description}
                    </p>
                    <div className="mt-4">
                      <Link href={feature.href} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium">
                        Try now <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dashboard />
    </>
  )
}