import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://prabsy96.github.io',
  base: '/personal_website',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
