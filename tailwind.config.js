/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Sesuaikan dengan folder yang berisi file .tsx atau .jsx
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',  // Warna utama
        secondary: '#ffed4a', // Warna kedua
      },
      backgroundImage: {
        // Menambahkan background gradient
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'start': '#6EE7B7',  // Warna awal gradient
        'end': '#3B82F6',    // Warna akhir gradient
      }),
    },
  },
  plugins: [],
}
