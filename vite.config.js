import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	manifest: {
		name: "Alemcomedy",
		short_name: "Alem",
		description: "landing page for alemcomedy festival",
		icons: [{ src: "./public/favicon.ico", size: "16x16" }],
	},
});
