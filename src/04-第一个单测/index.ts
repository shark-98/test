export const useTodo = () => {
  const todos: any[] = []

  const addTodo = (title: string) => {
    todos.push({ title })
  }

  return { todos, addTodo }
};
