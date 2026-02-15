import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vue from '@astrojs/vue';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://unstopabloo.dev",
  integrations: [sitemap(), vue(), react()],

  vite: {
    plugins: [tailwindcss()]
  }
});