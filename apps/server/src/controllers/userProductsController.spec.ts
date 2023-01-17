import { Request, Response } from 'express'
import { describe, test, expect, vi } from 'vitest'

import userProductsController, {
	userProducts,
} from '../controllers/userProductsController'

const mockCustomerId = '11111'

const res = {
	json: vi.fn(),
} as unknown as Response

const req = {
	params: {
		customerId: mockCustomerId,
	},
} as unknown as Request

describe('getUserProductsByCustomerId', () => {
	test('should return a json', () => {
		userProductsController.getUserProductsByCustomerId(req, res)

		expect(res.json).toHaveBeenCalled()
	})

	test('should return a json with the user products', () => {
		userProductsController.getUserProductsByCustomerId(req, res)

		expect(res.json).toHaveBeenCalledWith(userProducts)
	})
})
