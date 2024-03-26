import { describe, it, expect } from 'vitest';
import { useTodo } from './index.ts';

describe('第一个单测', () => {
  it('add todo', () => {
    const { addTodo, todos } = useTodo()

    const title1 = 'hello'
    addTodo(title1)

    expect(todos).toEqual([{ title: title1 }])

    const title2 = 'lkb'
    addTodo(title2)

    expect(todos).toEqual([{ title: title1 }, { title: title2 }])
  })
})
