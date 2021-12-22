import styles from './Button.module.css';

function Button(props) {
	const classes = `${props.className} ${styles.button}`;
	return (
		<button onClick={props.onClick} className={classes} id={props.id}>
			{props.title}
		</button>
	);
}

export default Button;
