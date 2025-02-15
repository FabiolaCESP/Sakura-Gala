import React, { useState } from "react";
import styles from './Cards.module.css';

const Card = ({ card, position }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  if (!card) return <div className={styles.cardPlaceholder}>Cargando...</div>;

  const handleClick = () => {
    setIsRevealed(true);
    console.log("Carta revelada:", card.spanishName); 
  };
  

  return (
    <div className={styles.cardWrapper} onClick={handleClick}>
    <div className={`${styles.cardInner} ${isRevealed ? styles.revealed : ""}`}>

        <div className={styles.cardFront}>
          <img 
            src={card.sakuraCard || card.clowCard} 
            alt={card.spanishName} 
            className={styles.cardImage} 
          />
        </div>
        <div className={styles.cardBack}>
          <p className={styles.cardMeaning}>{card.meaning}</p>
        </div>
      </div>
      <div className={styles.positionLabel}>
        {position.charAt(0).toUpperCase() + position.slice(1)}
      </div>
    </div>
  );
};

export default Card;
