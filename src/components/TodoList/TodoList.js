import React, { useState } from 'react';
import TodoInput from './TodoInput';
import List from './List';
import FinishedList from './FinishedList';
import Navbar from './Navbar';
import Card from '../UI/Card';
import styles from './TodoList.module.css';

function TodoList(props) {
	const [tab, setTab] = useState('to-do');

	const changeTabHandler = event => {
		if (event.currentTarget.id === 'to-do') {
			setTab('to-do');
		} else {
			setTab('finished');
		}
	};

	const fileList = props.fileList;
	const currentFileIndex = props.currentFileIndex;
	const currentFile = fileList.filter(file => {
		return file.id === currentFileIndex;
	});
	const list = currentFile[0].list;
	const finishedList = currentFile[0].finishedList;

	return (
		<Card className={styles['todo-list']}>
			<Navbar
				onBackHome={props.onBackHome}
				onChangeTab={changeTabHandler}
				tab={tab}
				selectedClass={styles.selected}
			/>
			{tab === 'to-do' && <TodoInput onAddItem={props.onAddItem} />}
			{tab === 'to-do' && <List list={list} onItemDone={props.onItemDone} />}
			{tab === 'finished' && <FinishedList finishedList={finishedList} />}
		</Card>
	);
}

export default TodoList;
