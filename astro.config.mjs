import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://prabhu.github.io',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
