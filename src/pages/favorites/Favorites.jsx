import React, { useState, useEffect } from 'react';
import ButtonBig from '../../components/buttons/mainButton/bigButton';
import styles from './Favorites.module.css';
import Card from '../../components/cards/Cards';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { deleteReading, getReadings } from '../../services/FavoritesApiServices';
import NameAndDate from '../../components/nameAndDate/nameAndDate';


const Favorites = () => {
  const [savedFavoritesList, setsavedFavoritesList] = useState([]);
  
  const getFavoriteList = async () => {
    const result = await getReadings()
    console.log(result)
    setsavedFavoritesList(result)
  }

  useEffect(() => {
    getFavoriteList()
  }, []);

  const onDeleteCard = async (id) => {
    const result = await deleteReading(id)
     await getFavoriteList()
  }

  const onDeleteCards = async () => {
    for await (const element of savedFavoritesList) {
      await onDeleteCard(element.id)
    }
    await getFavoriteList()
  }


  return (
    <>
      <Header />
      <main className={styles.readingsContainer}>
        <h1 className={styles.readingsTitle}>LECTURAS GUARDADAS</h1>

        <ButtonBig
          text="Borrar todo"
          onClick={onDeleteCards}
          disabled={savedFavoritesList.length === 0 }
        />
        {
          savedFavoritesList.map((item, ind) => {
            return (
              <>
               <NameAndDate key={`nameAndDate-${ind}`} savedDate={item.date} savedName={item.nameSaved}  />
           
                <section key={`section-${ind}`} className={styles.readingsList}>
                  <button className={styles.deleteButton} onClick={()=>{
                    onDeleteCard(item.id)
                  }}>❌</button>
                  {item.selectedCards &&
                    Object.entries(item.selectedCards).map(([position, card]) => (
                      <Card key={position} card={card} position={position} />
                    ))}
               
                </section>
              </>
            )
          })
        }

      </main>
      <Footer />
    </>
  );
};

export default Favorites;