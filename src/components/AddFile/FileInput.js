import React from 'react';
import { useRef } from 'react';
import Button from '../UI/Button';
import styles from './FileInput.module.css';

function FileInput(props) {
	const fileInputRef = useRef();

	const FileInputHandler = event => {
		event.preventDefault();
		const fileName = fileInputRef.current.value;
		if (fileName) {
			const id = Math.random().toString();
			const file = { fileName: fileName, id: id, list: [], finishedList: [] };
			props.onAddFile(file);
			fileInputRef.current.value = '';
		}
	};

	return (
		<form onSubmit={FileInputHandler} className={styles.form}>
			<input type="text" ref={fileInputRef} placeholder="Add a new file." />
			<Button title="+" />
		</form>
	);
}
export default FileInput;
