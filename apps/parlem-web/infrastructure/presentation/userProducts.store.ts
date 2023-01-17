import type { Ref } from 'vue'
import { defineStore } from 'pinia'

import userProductsApi from '~~/infrastructure/api/userProducts.api'

import { errorMessage } from '~~/locales/ca.json'

import type { UserProductsState } from '~~/@types/userProducts'

export const userProductsStore = defineStore('userProductsStore', () => {
	const userProductsState: Ref<UserProductsState> = ref({
		kind: 'LoadingUserProductsState',
	}) as Ref<UserProductsState>

	const getUserProducts = async (userId: string) => {
		const userProducts = await userProductsApi.getUserProducts(userId)

		if (userProducts) {
			userProductsState.value = {
				kind: 'LoadedUserProductsState',
				userProducts,
			}
			return
		}

		userProductsState.value = {
			kind: 'ErrorUserProductsState',
			error: errorMessage,
		}
	}

	return {
		getUserProducts,
		userProductsState,
	}
})
