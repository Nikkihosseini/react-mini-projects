/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        'foggy-lilac': '#C8B6FF',
        "glitch-red": "#FF4C58",
        "crt-white": "#F8F8F2",         // سفید نرم مثل پس‌زمینه مانیتورهای CRT
        "vintage-rose": "#FFD6D6",      // صورتی روشن با حس نوستالژیک
        "gameboy-green": "#C4E3CB",     // سبز کمرنگ یادآور گیم‌بوی کلاسیک
        "soft-lavender": "#E6DAF8",     // یاسی ملایم مثل آسمون فانتزی بازی‌های RPG
        "peach-fuzz": "#FFE5B4",        // هلویی روشن و نوستالژیک
        "sky-cartridge-blue": "#A3D2FF", // آبی کمرنگ مثل لیبل‌ بازی‌های کارتریجی
        "pastel-glitch-purple": "#D1A3FF", // ترکیب بنفش-پاستلی که حس فانتزی پیکسلی داره
        "warm-glow-yellow": "#FFF8C5"   // زرد خیلی لطیف، مثل نور لامپ زرد قدیمی
      },
      container: {
      center: true,
      padding: '1rem',
       screens: {
          'xs': '480px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
      },
    },
  },
  plugins: [],
}