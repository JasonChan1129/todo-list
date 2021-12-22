import React from 'react';
import styles from './FileList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function FileList(props) {
	return (
		<ul className={styles['file-list']}>
			{props.fileList.map(file => (
				<li key={file.id}>
					<button id={file.id} onClick={props.onIntoFile} className={styles.items}>
						{file.fileName}
					</button>
					<button
						id={file.id}
						className={styles['delete-button']}
						onClick={props.onDeleteFile}
					>
						<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
					</button>
				</li>
			))}
		</ul>
	);
}
export default FileList;
