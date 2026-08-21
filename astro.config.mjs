// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gersoncarrascol.github.io',
  base: '/engagement_dinner_invitation',
  vite: {
    plugins: [tailwindcss()]
  }
});