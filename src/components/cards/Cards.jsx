import React, { useState } from "react";
import styles from './Cards.module.css';

const Card = ({ card, position }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (!card) return <div className={styles.cardPlaceholder}>Cargando...</div>;

  const handleClick = () => {
    setIsRevealed(!isRevealed);
    console.log("Carta revelada:", card.spanishName);
  };

  return (
    <div 
      className={styles.cardWrapper} 
      onClick={handleClick} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`${styles.cardInner} ${isRevealed ? styles.revealed : ""} ${isHovered ? styles.hovered : ""}`}
      >
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
