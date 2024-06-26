import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		fontSize: {
			base: "16px",
			md: "14px",
			sm: "12px",
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		screens: {
			sm: { max: "480px" }, // 모바일 전용
			md: { min: "481px", max: "1149px" }, // 태블릿 전용
			lg: "1150px", // 웹 전용
		},
		colors: {
			"gray-99": "#F7F7F7",
			"gray-97": "#EDEDED",
			"gray-95": "#E4E4E4",
			"gray-90": "#C4C4C4",
			"gray-80": "#B0B0B0",
			"gray-60": "#8A8A8A",
			"gray-40": "#5C5C5C",
			"gray-20": "#2A2A2A",
			"gray-10": "#171717",
			Black: "#000000",
			White: "#FFFFFF",
			"orange-200": "#DD6646",
			"orange-100": "#F6714E",
			"orange-30": "rgba(254, 240, 237, 3)",
			"orange-15": "rgba(254, 240, 237, 1.5)",
			"orange-10": "rgba(254, 240, 237, 1)",
			"orange-5": "rgba(246, 113, 78, 0.05)",
			"mint-200": "#009CA9",
			"mint-100": "#00B8C7",
			"mint-10": "#00B8C71a",
			"blue-200": "#4959CB",
			"blue-100": "#5669EF",
			"blue-10": "#5669EF1a",
			"yellow-100": "#FFDC27",
			Primary: "#F6714E",
			Secondary: "#00B8C7",
			"Error-1": "#FF4343",
			"Error-2": "#FF9494",
			Warning: "#FF9200",
			Info: "#FF9200",
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
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
	plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
} satisfies Config;

export default config;
