export interface UserData {
	_id: number
	docType: string
	docNum: string
	email: string
	customerId: string
	name: string
	surname: string
	phone: string
	address: Address
}

interface Address {
	street: string
	zipCode: string
	city: string
	province: string
}

export interface LoadingUserDataState {
	readonly kind: 'LoadingUserDataState'
}

export interface LoadedUserDataState {
	readonly kind: 'LoadedUserDataState'
	readonly userData: UserData
}

export interface ErrorUserDataState {
	readonly kind: 'ErrorUserDataState'
	readonly error: string
}

export type UserDataState =
	| LoadingUserDataState
	| LoadedUserDataState
	| ErrorUserDataState
