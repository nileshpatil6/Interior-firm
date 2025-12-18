import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                terracotta: {
                    50: '#fdf8f6',
                    100: '#f2e8e5',
                    200: '#eaddd7',
                    300: '#e0cec7',
                    400: '#d2bab0',
                    500: '#C16039', // Primary
                    600: '#a34d2b',
                    700: '#863b1f',
                    800: '#6a2c16',
                    900: '#50200f',
                },
                sand: {
                    50: '#f9f8f6',
                    100: '#f5f2eb', // Light background
                    200: '#ebe5d9',
                    300: '#e0d8c6',
                    400: '#d2c6b0',
                    500: '#c1b398',
                    600: '#a3967d',
                    700: '#867b64',
                    800: '#6a614e',
                    900: '#504a3b',
                },
                charcoal: "#1A1A1A",
            },
            fontFamily: {
                serif: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
