import { UserData } from '~~/@types/userData'

const factory = () => {
	const getUserData = async (userId: string): Promise<UserData | undefined> => {
		try {
			const response = await fetch(`http://localhost:8000/api/user/${userId}`)
			const userData = await response.json()

			return userData
		} catch (error) {
			console.error('error', error)
		}
	}

	return {
		getUserData,
	}
}

export default factory()
