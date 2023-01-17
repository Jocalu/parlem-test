/// <reference types="vite/client" />
/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		sourcemap: true,
	},

	plugins: [vue()],

	resolve: {
		alias: {
			'~~/': resolve(__dirname, '/'),
			// used to import nuxt composables into vue components
			'#imports': resolve(__dirname, '/.nuxt/imports.d.ts'),
		},
	},

	// @ts-ignore
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './test-setup.ts',
		include: ['**/*.spec.(js|ts)'],
	},
})
