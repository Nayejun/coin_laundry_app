// tailwind.config.js
import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				moveLeft: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-306px)" }, // 290px width + 16px gap
				},
			},
			animation: {
				moveLeft: "moveLeft 2s forwards",
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				userGuide:
					"linear-gradient(180deg, rgba(8, 151, 156, 0.00) 31.06%, #08979C 100%)",
			},

			// text-primary-strong
			colors: {
				primary: {
					normal: "#13C2C2",
					strong: "#00A5A1",
					heavy: "#008781",
				},
				label: {
					normal: "#171719",
					strong: "#000000",
					neutral: "#5A5C63",
					alternative: "#878A93",
					assistive: "#AEB0B6",
					disable: "#E1E2E4",
				},
				background: {
					normal: {
						normal: "#FFFFFF",
						alternative: "#F7F7F8",
					},
					elevated: {
						normal: "#FFFFFF",
						alternative: "#F7F7F8",
					},
				},
				interaction: {
					inactive: "#989BA2",
					disable: "#F4F4F5",
				},
				line: {
					normal: "rgba(112, 115, 124, 0.22)",
					neutral: "rgba(112, 115, 124, 0.16)",
					alternative: "rgba(247, 247, 248, 1)",
				},
				status: {
					positive: "#00BF40",
					cautionary: "#FF9200",
					destructive: "#FF4242",
				},
				accent: {
					lime: "#58CF04",
					cyan: "#13C2C2",
					"light-blue": "#008DCF",
					pink: "#F553DA",
					"skin-1": "#FFCCA8",
					"skin-2": "#FDBE92",
				},
				inverse: {
					primary: "#08979C",
					background: "#1B1C1E",
					label: "#F7F7F8",
				},
				static: {
					white: "#FFFFFF",
					black: "#000000",
				},
				component: {
					fill: {
						normal: "rgba(112, 115, 124, 0.08)",
						strong: "rgba(112, 115, 124, 0.16)",
						alternative: "rgba(112, 115, 124, 0.05)",
					},
					material: {
						dimmer: "rgba(23, 23, 25, 0.52)",
					},
				},

				neutral: {
					99: "#F7F7F7",
					95: "#DCDCDC",
					90: "#C4C4C4",
					80: "#B0B0B0",
					70: "#9B9B9B",
					60: "#8A8A8A",
					50: "#737373",
					40: "#5C5C5C",
					30: "#474747",
					22: "#303030",
					20: "#2A2A2A",
					15: "#1C1C1C",
					10: "#171717",
					5: "#0F0F0F",
				},
				"cool-neutral": {
					99: "#F7F7F8",
					98: "#F4F4F5",
					97: "#EAEBEC",
					96: "#E1E2E4",
					95: "#DBDCDF",
					90: "#C2C4C8",
					80: "#AEB0B6",
					70: "#989BA2",
					60: "#878A93",
					50: "#70737C",
					40: "#5A5C63",
					30: "#46474C",
					25: "#37383C",
					23: "#333438",
					22: "#2E2F33",
					20: "#292A2D",
					17: "#212225",
					15: "#1B1C1E",
					10: "#171719",
					7: "#141415",
					5: "#0F0F10",
				},
				"primary-color": {
					cyan: {
						900: "#005A51",
						800: "#007770",
						700: "#008781",
						600: "#009792",
						500: "#00A5A1",
						400: "#00B4B2",
						300: "#13C2C2",
						200: "#72D4D5",
						100: "#ADE4E5",
						50: "#DFF4F5",
					},
				},
			},
			boxShadow: {
				"elevation-shadow-normal": `0 0 1px 0 rgba(0, 0, 0, 0.08), 
          0 0 1px 0 rgba(0, 0, 0, 0.08),
          0 1px 2px 0 rgba(0, 0, 0, 0.12)`,
				"elevation-shadow-emphasize": `0 0 1px 0 rgba(0, 0, 0, 0.08), 
          0 1px 4px 0 rgba(0, 0, 0, 0.08),
          0 2px 8px 0 rgba(0, 0, 0, 0.12)`,
				"elevation-shadow-strong": `0 0 4px 0 rgba(0, 0, 0, 0.08), 
          0 4px 8px 0 rgba(0, 0, 0, 0.08),
          0 6px 12px 0 rgba(0, 0, 0, 0.12)`,
				"elevation-shadow-heavy": `0 0 8px 0 rgba(0, 0, 0, 0.08), 
          0 8px 16px 0 rgba(0, 0, 0, 0.08),
          0 16px 20px 0 rgba(0, 0, 0, 0.12)`,
			},
			borderRadius: {
				sm: "4px",
				md: "8px",
				lg: "12px",
				xl: "20px",
			},
			opacity: {
				"16": "0.16",
			},

			fontSize: {
				"title-1": [
					"24px",
					{ lineHeight: "32px", fontWeight: "700" },
				],
				"heading-1": [
					"22px",
					{ lineHeight: "30px", fontWeight: "600" },
				],
				"heading-2": [
					"20px",
					{ lineHeight: "28px", fontWeight: "600" },
				],
				"headline-1": [
					"18px",
					{ lineHeight: "26px", fontWeight: "600" },
				],
				"headline-2": [
					"17px",
					{ lineHeight: "24px", fontWeight: "600" },
				],
				"body-1-normal": [
					"16px",
					{ lineHeight: "24px", fontWeight: "400" },
				],
				"body-1-reading": [
					"16px",
					{ lineHeight: "26px", fontWeight: "400" },
				],
				"body-2-normal": [
					"15px",
					{ lineHeight: "22px", fontWeight: "400" },
				],
				"body-2-reading": [
					"15px",
					{ lineHeight: "24px", fontWeight: "400" },
				],
				"label-1-normal": [
					"14px",
					{ lineHeight: "20px", fontWeight: "600" },
				],
				"label-1-reading": [
					"14px",
					{ lineHeight: "22px", fontWeight: "600" },
				],
				"label-2": [
					"13px",
					{ lineHeight: "18px", fontWeight: "400" },
				],
				"caption-1": [
					"12px",
					{ lineHeight: "16px", fontWeight: "400" },
				],
				"caption-2": [
					"11px",
					{ lineHeight: "14px", fontWeight: "400" },
				],
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
			fontFamily: {
				pretendard: ["var(--font-pretendard)"],
			},
		},
	},
	plugins: [],
};

export default config;
