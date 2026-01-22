import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://prabsy96.github.io',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
