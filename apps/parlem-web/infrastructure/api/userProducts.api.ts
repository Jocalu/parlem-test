import { UserProduct } from '~~/@types/UserProducts'

const factory = () => {
	const getUserProducts = async (userId: string): Promise<UserProduct[]> => {
		const response = await fetch(`http://localhost:8000/api/products/${userId}`)
		const userProducts = await response.json()

		return userProducts
	}

	return {
		getUserProducts,
	}
}

export default factory()
