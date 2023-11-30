import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header-cover': 'url("/assets/images/header-cover.png")',
        'paper-texture': 'url("/assets/images/paper-texture.png")',
        'cover-title': 'url("/assets/images/cover-title.png")',
        'form-ad': 'url("/assets/images/form-ad.png")',
      },
      colors: {
        orange: '#F78320',
        'page-color': '#F8F8F8',
        'dark-gray': '#161514',
        'light-gray': '#B3B3B3',
      },
    },
  },
  plugins: [],
};
export default config;
