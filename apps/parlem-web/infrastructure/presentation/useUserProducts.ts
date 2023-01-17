import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'

import { userProductsStore } from './userProducts.store'

import type { UserProductsState } from '~~/@types/userProducts'

export interface UseUserProducts {
	getUserProducts(userId: string): Promise<void>
	userProductsState: Ref<UserProductsState>
}

export const useUserProducts = (): UseUserProducts => {
	const store = userProductsStore()
	const { userProductsState } = storeToRefs(store)

	return {
		getUserProducts: store.getUserProducts,
		userProductsState: userProductsState,
	}
}
