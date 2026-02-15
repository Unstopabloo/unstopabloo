import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: "https://unstopabloo.dev",
  integrations: [sitemap(), vue()],

  vite: {
    plugins: [tailwindcss()]
  }
});