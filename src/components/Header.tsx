'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggle from './ThemeToggle'
import Sidebar from './Sidebar'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Article Analyzer', href: '/analyzer' },
  { name: 'Find Articles', href: '/finder' },
  { name: 'Image Analysis', href: '/radiology' },
  { name: 'AI Chat', href: '/chat' },
  { name: 'Write Article', href: '/generator' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <button
              type="button"
              className="mr-4 text-gray-500 dark:text-gray-300 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Link href="/">
              <span className="sr-only">Researchers Spark AI</span>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                  RSAI
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                  RESEARCHERS <span className="text-indigo-600 dark:text-indigo-400">SPARK AI</span>
                </span>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:flex lg:space-x-8">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-900 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="ml-10 flex items-center space-x-4">
              <ThemeToggle />
              <Link
                href="/dashboard"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-900 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </header>
  )
}