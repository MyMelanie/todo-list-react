import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import RestBtn from './RestBtn';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleTodoHandler = (id) => {
	setTodos(
		todos.map((todo) => {
			return todo.id === id
				? { ...todo, isCompleted: !todo.isCompleted }
				: { ...todo }
		})
	)
	}

	const resetTodosHandler = () => {
        setTodos([])
    }

	const completedTodoCount = todos.filter((item) => item.isComplete).length


  return (
    <>
		<h1>What's the Plan for Today?</h1>
		<TodoForm onSubmit={addTodo} />
		{todos.length > 0 && (
			<RestBtn resetTodos={resetTodosHandler}/>
		)}
		<Todo
			todos={todos}
			completeTodo={completeTodo}
			removeTodo={removeTodo}
			updateTodo={updateTodo}
			toggleTodo={toggleTodoHandler}
		/>

		{completedTodoCount > 0 && (
			<h2>
				Congratulations ! <br />
				You have completed {completedTodoCount} {completedTodoCount > 1 ? 'todos' : 'todo'}
			</h2>)}
    </>
  );
}

export default TodoList;