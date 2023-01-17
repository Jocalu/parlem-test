import { render } from '~~/utils/test-utils'

import SubtitleUnderlined from '~~/components/SubtitleUnderlined/SubtitleUnderlined.vue'

import { userAreaDataAddress } from '~~/locales/ca.json'

describe('SubtitleUnderlined', () => {
	test('should render text', () => {
		const { getByText } = componentBuilder()

		const text = getByText(userAreaDataAddress)

		expect(text).toBeVisible()
	})
})

const componentBuilder = () => {
	const component = render(SubtitleUnderlined, {
		props: {
			text: userAreaDataAddress,
		},
	})

	return {
		...component,
	}
}
