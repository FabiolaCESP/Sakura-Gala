import React, { useState } from "react";
import styles from "./Reading.module.css";
import Card from "../../components/cards/Cards";
import ButtonGroup from "../../components/buttons/buttonGroup/ButtonGroup";
import FanOfCards from "../../components/fanOfCards/FanOfCards";
import { fetchAllCards } from "../../services/ApiService";
import { addReading } from '../../services/FavoritesApiServices';
import NameAndDate from "../../components/nameAndDate/nameAndDate";
import Header from "../../components/header/Header";
import { useMediaQuery } from 'react-responsive';
import Navbar from "../../components/navbar/Navbar";


const Reading = () => {
  const [selectedCards, setSelectedCards] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFanned, setIsFanned] = useState(false);
  const [savedName] = useState(() => {
    const value = localStorage.getItem('username');
    if (value !== null && value !== "undefined") {
      return JSON.parse(value);
    }
    return '';
  });

  const fetchThreeUniqueCards = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const allCards = await fetchAllCards();
      if (!allCards || allCards.length < 3) {
        throw new Error("No hay suficientes cartas.");
      }

      const shuffledCards = [...allCards].sort(() => Math.random() - 0.5);
      setSelectedCards({
        Pasado: shuffledCards[0],
        Presente: shuffledCards[1],
        Futuro: shuffledCards[2],
      });

      setIsFanned(true); 
    } catch (error) {
      setError(error.message || "Error al cargar las cartas.");
    } finally {
      setIsLoading(false);
    }
  };

  const addReadingToFavorites = async () => {
    addReading(savedName, selectedCards);
  }

  const clearReading = () => {
    setSelectedCards(null);
    setIsFanned(false); 
  };

  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    
    <div className={styles.container}>

    <Header/>
    {isDesktop && <Navbar />} 

    <NameAndDate/>
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.readingCard}>
          <div className={styles.cardsContainer}>
            {selectedCards &&
              Object.entries(selectedCards).map(([position, card]) => (
                <Card key={position} card={card} position={position} />
              ))}
          </div>

         <div>
          <ButtonGroup onClick={fetchThreeUniqueCards} onAdd={addReadingToFavorites} onClear={clearReading} disabled={isLoading}  selectedCards={selectedCards}/>
          </div>
      </div>

          <div className={styles.fanCardsCard}>
          <FanOfCards isFanned={isFanned} />
          </div>
          
    </div>
  );
};

export default Reading;
