import type { Ref } from 'vue'
import { defineStore } from 'pinia'

import userDataApi from '../api/userData.api'

import type { UserDataState } from '~~/@types/userData'

export const userDataStore = defineStore('userDataStore', () => {
	const userDataState: Ref<UserDataState> = ref({
		kind: 'LoadingUserDataState',
	}) as Ref<UserDataState>

	const getUserData = async (userId: string) => {
		const userData = await userDataApi.getUserData(userId)

		userDataState.value = { kind: 'LoadedUserDataState', userData }
	}

	return {
		getUserData,
		userDataState,
	}
})
