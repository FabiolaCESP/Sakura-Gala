import styles from './BigButton.module.css' 
import { Link } from 'react-router'

function ButtonBig (props) {
    return (
        <>
        <Link to={props.link}>
        <button className={styles.buttonStyle}>
            {props.text}
        </button>
        </Link>
        </>
    )
}

export default ButtonBig