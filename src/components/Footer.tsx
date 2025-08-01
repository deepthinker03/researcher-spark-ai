export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6">
          <div className="text-center">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">
              Contact Information
            </h3>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-300">
              <p>Email: drawaisiqbal2002@gmail.com</p>
              <p className="mt-1">Phone: +92 318 9492995</p>
              <p className="mt-1">Location: Mardan, Pakistan</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} RESEARCHERS SPARK AI BY OWAIS IQBAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}