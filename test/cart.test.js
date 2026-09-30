import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('returns 0 for an empty cart', () => {
  const items = []
  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.equal(cartTotal(items, options), 0)
})

test('free shipping applies at the threshold', () => {
  const items = [
    { name: 'Sản phẩm', price: 250000, qty: 2 },
  ]
  const options = {
    vatRate: 0,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.equal(cartTotal(items, options), 500000)
})

test('throws RangeError for a negative price', () => {
  const items = [
    { name: 'Sản phẩm lỗi', price: -10000, qty: 1 },
  ]
  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.throws(
    () => cartTotal(items, options),
    RangeError
  )
})

test('throws RangeError for a non-integer quantity', () => {
  const items = [
    { name: 'Sản phẩm lỗi', price: 100000, qty: 1.5 },
  ]
  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.throws(
    () => cartTotal(items, options),
    RangeError
  )
})