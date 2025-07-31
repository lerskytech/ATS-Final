/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F7FAFC', // Light gray background
        'surface': '#FFFFFF',    // White for cards and surfaces
        'text-primary': '#2D3748', // Dark charcoal for primary text
        'text-secondary': '#718096',// Medium gray for secondary text
        'accent': '#3182CE',      // Professional blue accent
        'accent-hover': '#2B6CB0',// Darker blue for hover states
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
