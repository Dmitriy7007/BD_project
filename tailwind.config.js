/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'
const { COLORS } = require('./src/constants/color.constants')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { colors: COLORS },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.primary-gradient': {
          // background: `linear-gradient(to right, ${COLORS.activeBtn}, ${COLORS.linkActive})`,
          background: `linear-gradient(177deg, #079ee6 0%, #079ee6 1.27%, #079ee6 4.86%, #089de6 10.4%, #099de6 17.54%, #0c9be6 25.93%, #0f99e6 35.2%, #1497e6 45.01%, #1a93e6 54.99%, #228fe6 64.8%, #2d89e7 74.07%, #3982e7 80.25%, #487ae7 89.6%, #5a70e7 95.14%, #6e64e8 98.73%, #8657e8 100%)`,
        },
        'secondary-gradient': {
          background: `linear-gradient(177deg, #e5f5fc 0%, #e5f5fc 12.6%, #e5f5fc 24.39%, #e6f5fc 35.36%, #e6f4fc 45.51%, #e7f4fc 54.81%, #e8f3fc 63.28%, #e9f3fc 70.89%, #eaf2fc 77.64%, #ebf2fc 83.52%, #ecf1fc 88.52%, #edf0fc 92.63%, #eef0fc 95.84%, #efeffc 98.15%, #f0effc 99.53%, #f1eefc 100%)`,
        },
      })
    }),
  ],
}
