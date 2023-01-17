import type { Ref } from 'vue'
import { defineStore } from 'pinia'

import userDataApi from '~~/infrastructure/api/userData.api'

import { errorMessage } from '~~/locales/ca.json'

import type { UserDataState } from '~~/@types/userData'

export const userDataStore = defineStore('userDataStore', () => {
	const userDataState: Ref<UserDataState> = ref({
		kind: 'LoadingUserDataState',
	}) as Ref<UserDataState>

	const getUserData = async (userId: string) => {
		const userData = await userDataApi.getUserData(userId)

		if (userData) {
			userDataState.value = { kind: 'LoadedUserDataState', userData }
			return
		}

		userDataState.value = {
			kind: 'ErrorUserDataState',
			error: errorMessage,
		}
	}

	return {
		getUserData,
		userDataState,
	}
})
