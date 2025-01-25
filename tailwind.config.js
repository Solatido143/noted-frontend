/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        softPurple: "#6B4F9C", // Used for primary buttons or key action items in the UI
        vibrantPink: "#EC4899", // Used for highlights or important items like notifications or call-to-action buttons
        mutedLavender: "#E9D5FF", // Used for backgrounds or subtle highlights
        charcoal: "#2D3748", // Used for dark text or prominent items like headers
        slate: "#4A5568", // A neutral gray color, often used for text or secondary elements
        softGray: "#2B2D42", // A soft dark color for elements like footers or background contrast
        palePeach: "#F9E4D4", // Light background color or accents
        lightTan: "#D6C1A1", // A soft neutral color, useful for card backgrounds or subtle borders
        darkCharcoal: "#1A202C", // Dark background color for elements like modals or navigation
        softGreen: "#34D399", // Used for success or positive action indicators (like success messages)
        brightRed: "#EF4444", // Bright accent color, often used for error or warning messages
        warmYellow: "#FBBF24", // A warm yellow color, often used for highlights or attention-grabbing items
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
