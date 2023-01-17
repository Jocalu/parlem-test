import { UserProduct } from '~~/@types/UserProducts'

const factory = () => {
	const getUserProducts = async (
		userId: string
	): Promise<UserProduct[] | undefined> => {
		try {
			const response = await fetch(
				`http://localhost:8000/api/products/${userId}`
			)
			const userProducts = await response.json()

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
