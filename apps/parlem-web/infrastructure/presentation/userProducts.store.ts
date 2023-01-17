import type { Ref } from 'vue'
import { defineStore } from 'pinia'

import userProductsApi from '../api/userProducts.api'

import type { UserProductsState } from '~~/@types/userProducts'

export const userProductsStore = defineStore('userProductsStore', () => {
	const userProductsState: Ref<UserProductsState> = ref({
		kind: 'LoadingUserProductsState',
	}) as Ref<UserProductsState>

	const getUserProducts = async (userId: string) => {
		const userProducts = await userProductsApi.getUserProducts(userId)

		userProductsState.value = { kind: 'LoadedUserProductsState', userProducts }
	}

	return {
		getUserProducts,
		userProductsState,
	}
})
