import styles from './Welcome.module.css'
import sakuraUnicorn from '../../assets/images/unicorn.webp'

function PageWelcome () {

    return (
        <>
        <main className={styles.mainSection}>
            <h1 className={styles.sakuraTitle}>Sakura Tarot</h1>
            <img className={styles.cardImage} src={sakuraUnicorn}/>
        </main>
        
        </>
    )
}

export default PageWelcome