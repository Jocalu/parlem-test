import { render } from '~~/utils/test-utils'

import TextLabeled from '~~/components/TextLabeled/TextLabeled.vue'

import { userAreaDataAddress } from '~~/locales/ca.json'

const mockText = 'Carrer de la Ciutat de Granada, 1, 08003 Barcelona, Barcelona'

describe('TextLabeled', () => {
	test('should render text', () => {
		const { getByText } = componentBuilder()

		const text = getByText(mockText)

		expect(text).toBeVisible()
	})

	test('should render label', () => {
		const { getByText } = componentBuilder()

		const label = getByText(userAreaDataAddress)

		expect(label).toBeVisible()
	})
})

const componentBuilder = () => {
	const component = render(TextLabeled, {
		props: {
			text: mockText,
			label: userAreaDataAddress,
		},
	})

	return {
		...component,
	}
}
