import React, { useState } from 'react';
import AddFile from './components/AddFile/AddFile';
import TodoList from './components/TodoList/TodoList';

function App() {
	const [intoFile, setIntoFile] = useState(false);
	const [fileList, setFileList] = useState([]);
	const [currentFileIndex, setCurrentFileIndex] = useState('');

	const appendFileList = file => {
		setFileList(prevFileList => {
			return [...prevFileList, file];
		});
	};

	const intoFileHandler = event => {
		setIntoFile(true);
		setCurrentFileIndex(event.target.id);
	};

	const deleteFileHandler = event => {
		const deleteFileId = event.currentTarget.id;
		const deleteFIleIndex = fileList.findIndex(file => {
			return file.id === deleteFileId;
		});
		const updatedFileList = [...fileList];
		updatedFileList.splice(deleteFIleIndex, 1);
		setFileList(updatedFileList);
	};

	const addTodoItem = item => {
		// find the fileList with the targeted id.
		let targetedFileList = fileList.filter(item => {
			return item.id === currentFileIndex;
		});
		targetedFileList = targetedFileList[0];

		// update the list array of that fileList object
		const updatedList = targetedFileList.list;
		updatedList.push(item);

		// update the fileList state
		setFileList(
			fileList.map(item => {
				return item.id === currentFileIndex ? { ...item, list: updatedList } : item;
			})
		);
	};

	const removeTodoItem = event => {
		const deleteItemIndex = event.target.parentNode.id;

		// find the fileList with the targeted id.
		let targetedFileList = fileList.filter(item => {
			return item.id === currentFileIndex;
		});
		targetedFileList = targetedFileList[0];
		const updatedList = targetedFileList.list;
		const updatedFinishedList = targetedFileList.finishedList;

		// update the list array and finishedList array of that fileList object
		updatedFinishedList.push(updatedList[deleteItemIndex]);
		updatedList.splice(deleteItemIndex, 1);

		// update the fileList state
		setFileList(
			fileList.map(item => {
				return item.id === currentFileIndex
					? {
							...item,
							list: updatedList,
							finishedList: updatedFinishedList,
					  }
					: item;
			})
		);
	};

	const backHomeHandler = () => {
		setIntoFile(false);
	};

	return (
		<React.Fragment>
			{!intoFile && (
				<AddFile
					onIntoFile={intoFileHandler}
					onDeleteFile={deleteFileHandler}
					onAddFile={appendFileList}
					fileList={fileList}
				/>
			)}
			{intoFile && (
				<TodoList
					onAddItem={addTodoItem}
					onItemDone={removeTodoItem}
					onBackHome={backHomeHandler}
					fileList={fileList}
					currentFileIndex={currentFileIndex}
				/>
			)}
		</React.Fragment>
	);
}

export default App;
