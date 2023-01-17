import { UserData } from '~~/@types/userData'

import { API_HOST } from '~~/constants/apiHost'

const factory = () => {
	const getUserData = async (userId: string): Promise<UserData | undefined> => {
		try {
			const response = await fetch(`${API_HOST}/api/user/${userId}`)
			const userData = await response.json()

			if (response.status === 500) {
				throw new Error('Server error')
			}

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
