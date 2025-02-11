import styles from '../header/Header.module.css'
import cardicon from '../../assets/icons/card-icon-white.svg'



function Header(){
    return (
        <header className={styles.headerStyle}>
           <div className={styles.cardicon}>
                <img src={cardicon} alt="cardiconwhite" />
                 <h3>SAKURA TAROT</h3>
           </div>

           <div className={styles.Inicio}>
               <img src= {home}alt="home" />
               <h3>Inicio</h3>
           </div>





        </header>
    )
}

    export default Header