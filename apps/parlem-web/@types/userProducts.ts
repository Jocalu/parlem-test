export interface UserProduct {
	_id: number
	productName: string
	productTypeName: string
	numeracioTerminal: number
	soldAt: Date
	customerId: string
}

export interface LoadingUserProductsState {
	readonly kind: 'LoadingUserProductsState'
}

export interface LoadedUserProductsState {
	readonly kind: 'LoadedUserProductsState'
	readonly userProducts: UserProduct[]
}

export type UserProductsState =
	| LoadingUserProductsState
	| LoadedUserProductsState
