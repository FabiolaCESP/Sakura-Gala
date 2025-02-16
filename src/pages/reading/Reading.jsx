import React, { useState } from "react";
import styles from "./Reading.module.css";
import Card from "../../components/cards/Cards";
import ButtonGroup from "../../components/buttons/buttonGroup/ButtonGroup";
import FanOfCards from "../../components/fanOfCards/FanOfCards";
import { fetchAllCards } from "../../services/ApiService";
import NameAndDate from "../../components/nameAndDate/nameAndDate";



const Reading = () => {
  const [selectedCards, setSelectedCards] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFanned, setIsFanned] = useState(false); 

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

  const clearReading = () => {
    setSelectedCards(null);
    setIsFanned(false); 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lectura de Tarot Sakura</h1>

    <NameAndDate/>
      {error && <div className={styles.error}>{error}</div>}

      <ButtonGroup onClick={fetchThreeUniqueCards} onClear={clearReading} disabled={isLoading}  selectedCards={selectedCards}/>

      <div className={styles.cardsContainer}>
        {selectedCards &&
          Object.entries(selectedCards).map(([position, card]) => (
            <Card key={position} card={card} position={position} />
          ))}
      </div>

      <FanOfCards isFanned={isFanned} />
    </div>
  );
};

export default Reading;
