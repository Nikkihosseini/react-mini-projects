/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive']
      },
      colors:{
        "void-black": '#0E0E14',
        "cosmic-indigo": '#3A1C71',
        "neon-blue": '#4D9DE0',
        "retro-mint-green": '#7ED6A7',
        "purple-glitch": '#8F4EAB',
        "lime-crt-glow": '#A8E6CF',
        'foggy-lilac': '#C8B6FF'
      },
    },
  },
  plugins: [],
}