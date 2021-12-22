import Button from '../UI/Button';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faListUl, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
	return (
		<div>
			<Button
				title={<FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>}
				onClick={props.onBackHome}
				className={styles.button}
			/>
			<Button
				title={<FontAwesomeIcon icon={faListUl}></FontAwesomeIcon>}
				onClick={props.onChangeTab}
				className={
					props.tab === 'to-do' ? `${styles.button} ${props.selectedClass}` : styles.button
				}
				id="to-do"
			/>
			<Button
				title={<FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>}
				onClick={props.onChangeTab}
				className={
					props.tab === 'finished' ? `${styles.button} ${props.selectedClass}` : styles.button
				}
				id="finished"
			/>
		</div>
	);
}

export default Navbar;
