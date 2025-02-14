import React, { useState } from "react";
import styles from "./ButtonGroup.module.css";

const ButtonGroup = ({ onClick, onClear, disabled }) => {
  const [favoriteMessage, setFavoriteMessage] = useState("");

  const handleAddToFavorites = () => {
    setFavoriteMessage("Tu lectura ha sido añadida a favoritos.");
    setTimeout(() => setFavoriteMessage(""), 3000);
  };

  return (
    <div className={styles.buttonsContainer}>
      <button
        onClick={onClick}
        className={styles.buttonStyle}
        disabled={disabled}
      >
        🎴 Lectura
      </button>
      <button onClick={handleAddToFavorites} className={styles.buttonStyle}>
        ⭐ Añadir a Favoritos
      </button>
      <button className={styles.buttonStyle} onClick={onClear}>
        ❌ Eliminar
      </button>
      {favoriteMessage && (
        <div className={styles.favoriteMessage}>{favoriteMessage}</div>
      )}
    </div>
  );
};

export default ButtonGroup;
