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
        "Void-Black": '#0E0E14',
        "Cosmic-Indigo": '#3A1C71',
        "Neon-Blue": '#4D9DE0',
        "Retro-Mint-Green": '#7ED6A7',
        "Purple-Glitch": '#8F4EAB',
        "Lime-CRT-Glow": '#A8E6CF',
        'Foggy-Lilac': '#C8B6FF'
      },
    },
  },
  plugins: [],
}