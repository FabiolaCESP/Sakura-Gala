import styles from './Welcome.module.css'
import sakuraUnicorn from '../../assets/images/unicorn.webp'
import circleEffect from '../../assets/images/circle.webp'
import Footer from '../../components/footer/Footer'
import UserForm from '../../components/form/userForm'

function PageWelcome () {

    return (
        <>
         <main className={styles.mainSection}>
            <h1 className={styles.sakuraTitle}>Sakura Tarot</h1>
            <img className={styles.circleEffectStyle} src={circleEffect}/>
            <img className={styles.cardImage} src={sakuraUnicorn}/>

            <UserForm/>

            <Footer />
            
        </main>
        
        </>
    )
}

export default PageWelcome