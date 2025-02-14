import styles from '../header/Header.module.css'
import cardicon from '../../assets/icons/card-icon-white.svg'
import home from '../../assets/icons/home.svg'
import { Link } from 'react-router'

function Header(){
    return (
        <header className={styles.headerStyle}>
           <div className={styles.cardicon}>
                <img src={cardicon} alt="icono de una carta de tarot" />
                <span className={styles.title}>SAKURA TAROT</span>
       </div>

           <div className={styles.Inicio}>
                <Link to= '/'>
               <img src={home} alt="icono de una casa" /></Link>
               <span className={styles.title}>Inicio</span>
             
           </div>
             
  
        </header>
    )
}

    export default Header