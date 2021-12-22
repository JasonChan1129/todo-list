import React from 'react';
import FileInput from './FileInput';
import FileList from './FileList';
import Card from '../UI/Card';
import styles from './AddFile.module.css';

function AddFile(props) {
	return (
		<Card className={styles['add-file']}>
			<header className={styles.header}>To do List</header>
			<FileInput onAddFile={props.onAddFile} />
			<FileList
				fileList={props.fileList}
				onIntoFile={props.onIntoFile}
				onDeleteFile={props.onDeleteFile}
			/>
		</Card>
	);
}

export default AddFile;
