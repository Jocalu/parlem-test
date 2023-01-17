import { Request, Response } from 'express'
import { describe, test, expect, vi, beforeEach } from 'vitest'

import userDataController, { userData } from '../controllers/userDataController'

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

describe('getUserByCustomerId', () => {
	beforeEach(() => {
		vi.restoreAllMocks()
	})

	test('should return a json', () => {
		userDataController.getUserByCustomerId(req, res)

		expect(res.json).toHaveBeenCalled()
	})

	test('should return a json with the user data', () => {
		userDataController.getUserByCustomerId(req, res)

		expect(res.json).toHaveBeenCalledWith(userData)
	})

	test('not should return a json if the customerId not exist', () => {
		const req = {
			params: {
				customerId: '22222',
			},
		} as unknown as Request
		userDataController.getUserByCustomerId(req, res)

		expect(res.json).not.toHaveBeenCalled()
	})
})
