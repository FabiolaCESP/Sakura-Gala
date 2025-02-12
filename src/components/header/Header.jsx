import styles from '../header/Header.module.css'
import cardicon from '../../assets/icons/card-icon-white.svg'
import home from '../../assets/icons/home.svg'
import { Link } from 'react-router'


function Header(){
    return (
        <header className={styles.headerStyle}>
           <div className={styles.cardicon}>
                <img src={cardicon} alt="icono de una carta de tarot" />
                 <h3>SAKURA TAROT</h3>
           </div>

           <div className={styles.Inicio}>
                <Link to= '/'>
               <img src={home} alt="icono de una casa" /></Link>
               <h3>Inicio</h3>
           </div>

        </header>
    )
}

    export default Header