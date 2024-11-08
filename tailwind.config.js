import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px', // Small devices (tablets, 640px and up)
        md: '768px', // Medium devices (desktops, 768px and up)
        lg: '1024px', // Large devices (desktops, 1024px and up)
        xl: '1280px', // Extra large devices (large desktops, 1280px and up)
        '2xl': '1536px', // 2x extra large devices (larger desktops, 1536px and up)
      },
    },
  },
  plugins: [daisyui],
}
