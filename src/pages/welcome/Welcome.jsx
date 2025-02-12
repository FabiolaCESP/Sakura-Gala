import styles from './Welcome.module.css'
import sakuraUnicorn from '../../assets/images/unicorn.webp'
import circleEffect from '../../assets/images/circle.webp'
import ButtonBig from '../../components/buttons/bigButton2/bigButton'

function PageWelcome () {

    return (
        <>
        <main className={styles.mainSection}>
            <h1 className={styles.sakuraTitle}>Sakura Tarot</h1>
            <img className={styles.circleEffectStyle} src={circleEffect}/>
            <img className={styles.cardImage} src={sakuraUnicorn}/>
            < ButtonBig
            text="Entrar"
            link="/Instructions"
            />
        </main>
        
        </>
    )
}

export default PageWelcome