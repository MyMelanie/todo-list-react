import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { AiOutlineDelete } from 'react-icons/ai';
import { TbEdit } from 'react-icons/tb';
import {FaCheck} from 'react-icons/fa'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo, toggleTodo }) => {
  	const [edit, setEdit] = useState({
		id: null,
		value: ''
  	});

  	const submitUpdate = value => {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: ''
		});
  	};

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />;
	}

	return todos.map((todo, index) => (
		<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index} >

			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.text}
			</div>
			<div className='icons'>
				<TbEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
				<AiOutlineDelete onClick={() => removeTodo(todo.id)} className='delete-icon' />
				<FaCheck onClick={() => completeTodo(todo.id)} className='check-icon'/>
		</div>
		</div>
	));
};

export default Todo;