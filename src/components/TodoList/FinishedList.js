import styles from './FinishedList.module.css';

function FinishedList(props) {
	return (
		<ul className={styles.list}>
			{props.finishedList.map(item => (
				<li key={Math.random().toString()}>{item}</li>
			))}
		</ul>
	);
}

export default FinishedList;
