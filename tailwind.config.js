/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito'],
      },

      colors: {
        primary: "#eeeeff",
        secondary: "#888885"
      },

      fontSize: {
        xl2: '22px',
        md3: '18px',
        md2: '17px',
        md4: '12px',
        md5: '14px',
        md6: '16px',
        md7: '13px',
        md8: '10px'
      },

      lineHeight: {
        md2_lh: '22px',
        md3_lh: '14px'
      }
    },
  },
  plugins: [],
}

