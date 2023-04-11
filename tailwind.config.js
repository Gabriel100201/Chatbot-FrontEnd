/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'cream': '#FBF3E3',
        "beige": '#DFDED5',
        'purple': '#5E6697',
        'pink': '#243c5a',
        'violet': '#B38BCB'
      },
      backgroundImage: {
        'banner': "url('/src/assets/Banner.svg')"
      }

    },
  },
  plugins: [],
}

