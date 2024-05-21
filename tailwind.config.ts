import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-gray': '#70737C',
        'background-light': '#F7F7F8', // Custom background color
        'primary': '#13C2C2',
        'hover-primary': '#00A5A1',
        'active-primary': '#008781',
      },
      opacity: {
        '16': '0.16',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
  plugins: [
    function({addUtilities}: { addUtilities: any }) {
      const newUtilities = {
        '.title1': {
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: '700',
        },
        '.heading1': {
          fontSize: '22px',
          lineHeight: '30px',
          fontWeight: '600',
        },
        '.heading2': {
          fontSize: '20px',
          lineHeight: '28px',
          fontWeight: '600',
        },
        '.headline1': {
          fontSize: '18px',
          lineHeight: '26px',
          fontWeight: '600',
        },
        '.headline2': {
          fontSize: '17px',
          lineHeight: '24px',
          fontWeight: '600',
        },
        '.body1_normal': {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '400',
        },
        '.body1_reading': {
          fontSize: '16px',
          lineHeight: '26px',
          fontWeight: '400',
        },
        '.body2_normal': {
          fontSize: '15px',
          lineHeight: '22px',
          fontWeight: '400',
        },
        '.body2_reading': {
          fontSize: '15px',
          lineHeight: '24px',
          fontWeight: '400',
        },
        '.label1_normal': {
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
        },
        '.label1_reading': {
          fontSize: '14px',
          lineHeight: '22px',
          fontWeight: '600',
        },
        '.label2': {
          fontSize: '13px',
          lineHeight: '18px',
          fontWeight: '400',
        },
        '.caption1': {
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '400',
        },
        '.caption2': {
          fontSize: '11px',
          lineHeight: '14px',
          fontWeight: '400',
        },
      };
      addUtilities(newUtilities)
    }
  ],
};

export default config;
