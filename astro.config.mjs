// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ЗАМЕНИ на свой GitHub-логин и имя репозитория.
// Если репозиторий называется USERNAME.github.io — поставь base: '/'
const USERNAME = 'illuminatyq';
const REPO = 'illuminatyq.github.io';

export default defineConfig({
  site: `https://${USERNAME}.github.io`,
  base: `/${REPO}`,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});