import styles from './Welcome.module.css'
import sakuraUnicorn from '../../assets/images/unicornioS.png'
import circleEffect from '../../assets/images/circle.webp'
import Footer from '../../components/footer/Footer'
import UserForm from '../../components/form/userForm'

function PageWelcome () {

    return (
        <>
         <main className={styles.mainSection}>
            <div className={styles.titleSection}>
                <h1 className={styles.sakuraTitle}>Sakura Tarot</h1>
            </div>
            <section className={styles.imagesSection}>
                <img className={styles.circleEffectStyle} src={circleEffect}/>
                <img className={styles.unicornImage} src={sakuraUnicorn}/>
            </section>

            <UserForm/>

            <Footer />
            
        </main>
        
        </>
    )
}

export default PageWelcome