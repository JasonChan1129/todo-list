import Button from '../UI/Button';
import styles from './List.module.css';

function List(props) {
	return (
		<ul className={styles.list}>
			{props.list.map((item, index) => (
				<li key={Math.random().toString()} id={index} className={styles.item}>
					<button onClick={props.onItemDone} className={styles.checked}>
						1
					</button>
					{item}
				</li>
			))}
		</ul>
	);
}

export default List;
