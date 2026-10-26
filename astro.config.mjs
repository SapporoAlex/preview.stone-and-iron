// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  // Change this to the live domain before deploying (used for canonical URLs).
  site: 'https://stoneandiron.jp',

  // Plain static HTML output: every page becomes /<slug>/index.html,
  // which any Apache/PHP host serves without extra configuration.
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },

  vite: {
    resolve: {
      alias: {
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Makes the design tokens ($colors, mixins, breakpoints) available
          // in every .scss file and every <style lang="scss"> block,
          // so components never need to import them manually.
          additionalData: '@use "@styles/abstracts" as *;\n',
        },
      },
    },
  },
});
