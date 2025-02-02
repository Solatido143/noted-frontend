/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'soft-purple': '#6B4F9C',
        'vibrant-pink': '#EC4899',
        'muted-lavender': '#E9D5FF',
        'custom-charcoal': '#2D3748',
        'custom-slate': '#4A5568',
        'soft-gray': '#2B2D42',
        'pale-peach': '#F9E4D4',
        'light-tan': '#D6C1A1',
        'dark-charcoal': '#1A202C',
        'soft-green': '#34D399',
        'bright-red': '#EF4444',
        'warm-yellow': '#FBBF24',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
