import { Request, Response } from 'express'
import { describe, test, expect, vi } from 'vitest'

import userDataController, { userData } from '../controllers/userDataController'

const mockCustomerId = '11111'

const res = {
	json: vi.fn(),
} as unknown as Response

const req = {
	params: {
		customerId: mockCustomerId,
	},
} as unknown as Request

describe('getUserByCustomerId', () => {
	test('should return a json', () => {
		userDataController.getUserByCustomerId(req, res)

		expect(res.json).toHaveBeenCalled()
	})

	test('should return a json with the user data', () => {
		userDataController.getUserByCustomerId(req, res)

		expect(res.json).toHaveBeenCalledWith(userData)
	})
})
