import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B0FF",
      },

      gridTemplateColumns: {
        home: "1fr 0.4fr",
        navbar: "2.4fr 1fr",
        form: "0.5fr 1fr",
        banner: "1fr 0.4fr",
        footer: "0.5fr 0.5fr 1fr",
      },
    },
  },
  plugins: [],
} satisfies Config;
