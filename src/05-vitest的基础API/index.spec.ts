import { test, it, describe, expect, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';

/** 1.test **/
// 来自测试框架：Jest

/** 2.it **/
// 属于BDD 行为驱动开发
// 描述：it should xxx
// 来自测试框架：Mocha、Jasmine

/** vitest中test、it都可使用，功能一样 **/

/** 3.describe **/
// 测试套件
// 包裹一个测试行为的多个case

/** 4.expect **/
describe('expect', () => {
  it('toBe', () => {
    // 表示全等===
    expect(1).toBe(1)
  })

  it('toEqual', () => {
    // 两个对象的内容比较
    expect({ x: 1 }).toEqual({ x: 1 })
  })

  it('toBeTruthy', () => {
    // 是否是真值
    expect(1).toBeTruthy()
  })

  it('toBeFalsy', () => {
    // 是否是假值
    expect('').toBeFalsy()
  })
  it('toContain', () => {
    // 是否包含
    expect([1]).toContain(1)
    expect('<div>1234</div>').toContain(1234)

  })
  it('toThrow', () => {
    // 是否报错
    const fn = (name) => {
      if (typeof name !== 'string') {
        throw new Error('name must be string')
      }
      return 'hei'
    }

    expect(() => { fn(111) }).toThrow('name must be string')
  })
})

/** 5.Setup and Teardown **/
// beforeEach、beforeAll、afterEach、afterAll
// 执行顺序：beforeAll（只执行一次） -> beforeEach -> test -> afterEach -> afterAll（只执行一次）
describe('Setup and Teardown', () => {
  beforeAll(() => {
    console.log('beforeAll')
  })
  beforeEach(() => {
    console.log('beforeEach')
  })
  test('first', () => { console.log('first') })
  test('second', () => { console.log('second') })
  afterEach(() => {
    console.log('afterEach')
  })
  afterAll(() => {
    console.log('afterAll')
  })
})

/** 6.修饰符 **/
// skip：跳过测试
// only：只执行此测试
// todo：标记待完成的测试

/** 7.执行测试命令 **/
// package.json文件中的script命令中：
// "test": "vitest" 默认为watch模式
// "test": "vitest run" 为run模式
// 使用npm run test 或者 npx vitest
// 后面跟上测试文件名（如果有同名的情况下，文件名前加上目录可以实现只执行某一个文件）
