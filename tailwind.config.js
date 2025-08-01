/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
        secondary: {
          light: '#10b981',
          dark: '#059669',
        },
        accent: {
          light: '#f59e0b',
          dark: '#d97706',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [
    // Remove plugins you're not using
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}