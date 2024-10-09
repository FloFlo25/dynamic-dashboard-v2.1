import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			borderRadius: {
				DEFAULT: "14px",
				full: "9999px",
			},
			colors: {
				accent: {
					main: "#ED1C24",
					light: "#FFE1E1",
					dark: "#8E1E23",
				},
				primary: { main: "#3A3F52", light: "#595E77" },
				secondary: {
					main: "#1F222D",
					light: "#272A3A",
				},
				success: {
					main: "#57A463",
					light: "#E1FFE6",
					dark: "#336532",
				},
				info: {
					main: "#325665",
					light: "#ADE1E9",
					dark: "#1F3640",
				},
				disabled: "#8f8f8f7f",
				inactive: "hsl(25, 25%, 25%)",
			},
			screens: {
				xs: "360px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
