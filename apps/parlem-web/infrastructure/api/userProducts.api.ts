import { UserProduct } from '~~/@types/UserProducts'

import { API_HOST } from '~~/constants/apiHost'

const factory = () => {
	const getUserProducts = async (
		userId: string
	): Promise<UserProduct[] | undefined> => {
		try {
			const response = await fetch(`${API_HOST}/api/products/${userId}`)
			const userProducts = await response.json()

			if (response.status === 500) {
				throw new Error('Server error')
			}

			return userProducts
		} catch (error) {
			console.error('error', error)
		}
	}

	return {
		getUserProducts,
	}
}

export default factory()
