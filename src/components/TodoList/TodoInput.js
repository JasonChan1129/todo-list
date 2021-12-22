import React from 'react';
import { useRef } from 'react';
import Button from '../UI/Button';
import styles from './TodoInput.module.css';

function TodoInput(props) {
	const todoInputRef = useRef();

	const TodoInputHandler = event => {
		event.preventDefault();
		const todoItem = todoInputRef.current.value;
		if (todoItem) {
			props.onAddItem(todoItem);
			todoInputRef.current.value = '';
		}
	};

	return (
		<form onSubmit={TodoInputHandler} className={styles.form}>
			<input type="text" ref={todoInputRef} placeholder="Add something to do!" />
			<Button title="+" />
		</form>
	);
}
export default TodoInput;
