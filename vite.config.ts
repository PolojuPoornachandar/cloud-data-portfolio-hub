
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Get the repository name from environment or use a default value
  // This will be in the format username/repo-name or just repo-name
  const repo = process.env.GITHUB_REPOSITORY ? 
    process.env.GITHUB_REPOSITORY.split('/')[1] : '';

  return {
    base: mode === 'production' ? `/${repo}/` : '/',
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
});
