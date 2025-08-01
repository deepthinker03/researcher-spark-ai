'use client'

import { useState } from 'react'
import { DocumentTextIcon, MagnifyingGlassIcon, ChatBubbleLeftRightIcon, PhotoIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const recentActivities = [
  {
    id: 1,
    type: 'article_analysis',
    title: 'Periodontal Disease Treatment Outcomes',
    date: '2023-11-15T10:30:00Z',
    icon: DocumentTextIcon,
  },
  {
    id: 2,
    type: 'article_search',
    query: 'dental implants success rates',
    date: '2023-11-14T15:45:00Z',
    icon: MagnifyingGlassIcon,
  },
  {
    id: 3,
    type: 'ai_chat',
    question: 'Explain the latest ADA guidelines for caries prevention',
    date: '2023-11-13T09:20:00Z',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 4,
    type: 'image_analysis',
    title: 'Panoramic X-ray analysis',
    date: '2023-11-12T14:10:00Z',
    icon: PhotoIcon,
  },
]

const quickActions = [
  {
    name: 'Analyze Article',
    icon: DocumentTextIcon,
    href: '/analyzer',
    color: 'text-indigo-600 dark:text-indigo-400',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900',
  },
  {
    name: 'Find Articles',
    icon: MagnifyingGlassIcon,
    href: '/finder',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900',
  },
  {
    name: 'AI Chat',
    icon: ChatBubbleLeftRightIcon,
    href: '/chat',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900',
  },
  {
    name: 'Image Analysis',
    icon: PhotoIcon,
    href: '/radiology',
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900',
  },
  {
    name: 'Generate Article',
    icon: DocumentArrowUpIcon,
    href: '/generator',
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900',
  },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Welcome back! Here's your research overview.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickActions.map((action) => (
          <Link
            key={action.name}
            href={action.href}
            className="group"
          >
            <div className={`${action.bgColor} rounded-lg p-6 flex items-center transition-all group-hover:shadow-md`}>
              <div className={`${action.color} p-3 rounded-full`}>
                <action.icon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{action.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Get started</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'recent'
                  ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Recent Activities
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'saved'
                  ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Saved Items
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Articles Analyzed</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">24</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Saved References</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">56</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">AI Chats</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">18</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Highlights</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    You analyzed <span className="font-semibold">5 articles</span> about periodontal disease last week.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Your most common research topic is <span className="font-semibold">dental implants</span>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recent' && (
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400">
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-medium text-gray-900 dark:text-white">
                        {activity.type === 'article_analysis' && `Analyzed: ${activity.title}`}
                        {activity.type === 'article_search' && `Searched: ${activity.query}`}
                        {activity.type === 'ai_chat' && `Asked: ${activity.question}`}
                        {activity.type === 'image_analysis' && `Analyzed: ${activity.title}`}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(activity.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="mt-1 flex space-x-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                        {activity.type.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="text-center py-12">
              <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
              <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No saved items yet</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Save articles, analyses, or chats to access them here later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}