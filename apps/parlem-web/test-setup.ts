// tests/setup.ts
import matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom'
import { expect } from 'vitest'
import { cleanup } from '@testing-library/vue'

expect.extend(matchers)

vi.mock('@/.nuxt/imports', () => ({
	definePageMeta: vi.fn(),
	defineI18nRoute: vi.fn(),
	useHead: vi.fn(),
	useNuxtApp: () => ({
		$bus: {
			$emit: vi.fn(),
		},
	}),
	useAsyncData: async (fn: Function) => {
		await fn()
	},
}))

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup()
})
