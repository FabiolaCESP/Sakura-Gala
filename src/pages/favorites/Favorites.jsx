import React, { useState, useEffect } from 'react';
import ButtonBig from '../../components/buttons/mainButton/bigButton';
import styles from './Favorites.module.css';
import Card from '../../components/cards/Cards';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { getReadings } from '../../services/FavoritesApiServices';
import UserFormEdit from '../../components/form/userFormEdit';

const Favorites = () => {
  const [savedFavoritesList, setsavedFavoritesList] = useState([]);
  const [nameUser, setNameUser] = useState('');
  const [open, setopen] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem('username')
    if (value !== null && value !== "undefined") {
      setNameUser(JSON.parse(localStorage.getItem('username')))
    }

    const getFavoriteList = async () => {
      const result = await getReadings()
      console.log(result)
      setsavedFavoritesList(result)
    }
    getFavoriteList()
  }, []);



  const handleEditName = () => {
    setopen(!open)
  }

  return (
    <>
      <Header />
      <main className={styles.readingsContainer}>
        <h1 className={styles.readingsTitle}>LECTURAS GUARDADAS</h1>

        <ButtonBig
          text="Borrar todo"
        />

        <div className={styles.userDetail}>
          <div className={styles.leftSection}>
            {!open && <><span>Nombre:{nameUser}</span> <button onClick={handleEditName}>✏️</button></>}
            {open && <UserFormEdit onFinish={setopen} updateUsername={setNameUser} />}

          </div>

          <div className={styles.rightSection}>
            <span>Fecha: 12/02/25</span>
          </div>
        </div>


        {
          savedFavoritesList.map((item, ind) => {
            return (
              <section key={`section-${ind}`} className={styles.readingsList}>
                <button className={styles.deleteButton}>❌</button>
                <Card card={item} position={"futuro"} />
              </section>
            )
          })
        }

      </main>
      <Footer />
    </>
  );
};

export default Favorites;