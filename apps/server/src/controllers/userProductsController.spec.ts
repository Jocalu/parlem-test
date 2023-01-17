import { Request, Response } from 'express'
import { describe, test, expect, vi, beforeEach } from 'vitest'

import userProductsController, {
	userProducts,
} from '../controllers/userProductsController'

const mockCustomerId = '11111'

const res = {
	json: vi.fn(),
	status: vi.fn(),
	send: vi.fn(),
} as unknown as Response

const req = {
	params: {
		customerId: mockCustomerId,
	},
} as unknown as Request

describe('getUserProductsByCustomerId', () => {
	beforeEach(() => {
		vi.restoreAllMocks()
	})

	test('should return a json', () => {
		userProductsController.getUserProductsByCustomerId(req, res)

		expect(res.json).toHaveBeenCalled()
	})

	test('should return a json with the user products', () => {
		userProductsController.getUserProductsByCustomerId(req, res)

		expect(res.json).toHaveBeenCalledWith(userProducts)
	})

	test('not should return a json if the customerId not exist', () => {
		const req = {
			params: {
				customerId: '22222',
			},
		} as unknown as Request
		userProductsController.getUserProductsByCustomerId(req, res)

		expect(res.json).not.toHaveBeenCalled()
	})
})
