/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				iceberg: ["var(--font-iceberg)", "sans-serif"],
				khand: ["var(--font-khand)", "sans-serif"],
				langar: ["var(--font-langar)", "sans-serif"],
			},
		},
		screens: {
			// Override the 'sm' breakpoint
			sm: "425px", // Default is 640px; you can set it to any value you need

			// Keep other default breakpoints
			md: "768px",
			lg: "1025px",
			xl: "1280px",

			// Add custom breakpoints
			xs: "320px", // Already a default in Tailwind 3+
			"2xs": "375px", // Example of a custom breakpoint
			"2xl": "1536px", // Already a default in Tailwind 3+
			"3xl": "1920px", // Example of a custom breakpoint
			tablet: "720px", // Custom breakpoint for tablets
		},
	},
	plugins: [],
};
