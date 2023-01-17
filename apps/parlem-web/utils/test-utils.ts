import { render as VTLrender, RenderOptions } from '@testing-library/vue'

export const render = (component: unknown, options?: RenderOptions) => {
	const defaultOptions = {
		global: {
			stubs: {
				'nuxt-link': {
					template: '<a href="#"><slot /></a>',
				},
			},
		},
	}

	return VTLrender(component, {
		...defaultOptions,
		...options,
	})
}
