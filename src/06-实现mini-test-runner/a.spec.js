import { test, it, expect, beforeAll, beforeEach, afterEach, afterAll, describe } from './core.js';

test.only('测试1', () => {
  console.log('测试1：start')
  expect(1).toBe(1)
})

it('测试2', () => {
  console.log('测试2：start')
})

it.only('测试3', () => {
  console.log('测试3：start')
})

beforeAll(() => {
  console.log('beforeAll')
})
beforeEach(() => {
  console.log('beforeEach')
})
afterEach(() => {
  console.log('afterEach')
})
afterAll(() => {
  console.log('afterAll')
})

describe('sub', () => {
  it.only('测试sub', () => {
    console.log('测试sub：start')
  })
})

