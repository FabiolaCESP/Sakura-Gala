import styles from './Welcome.module.css'
import sakuraUnicorn from '../../assets/images/unicorn_and_backgroundS.png'
import Footer from '../../components/footer/Footer'
import UserForm from '../../components/form/userForm'
import Header from '../../components/header/Header'

function PageWelcome () {

    return (
        <>
         <main className={styles.mainSection}>
            <Header/>
            <div className={styles.titleSection}>
                <h1 className={styles.sakuraTitle}>SAKURA TAROT</h1>
            </div>
            <section className={styles.imagesSection}>
                <img className={styles.unicornImage} src={sakuraUnicorn} alt="Imagen de un unicornio"/>
            </section>

            <UserForm/>

            <Footer />
            
        </main>
        
        </>
    )
}

export default PageWelcome