import React, { useState } from "react";
import styles from "./ButtonGroup.module.css";
import { addReading } from "../../../services/FavoritesApiServices";
import { v4 as uuidv4 } from 'uuid';

const ButtonGroup = ({ onClick, onClear, disabled, selectedCards }) => {
  const [favoriteMessage, setFavoriteMessage] = useState("");
  const [showButtonFavorites, setShowButtonFavorites] = useState(true);

  const handleAddToFavorites = async () => {
    const today = new Date();
    const currentDate = today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' });
    const value = localStorage.getItem('username')
    let userNameCurrent = ""
    if (value !== null && value !== "undefined") {
        userNameCurrent=(JSON.parse(localStorage.getItem('username')))
    }
    const dataCard = {
      "id": uuidv4(),
      "date": currentDate,
      "nameSaved":userNameCurrent,
      "selectedCards": selectedCards
    }
    const result = await addReading(dataCard);
    setShowButtonFavorites(true)
    setFavoriteMessage("Tu lectura ha sido añadida a favoritos.");

    setTimeout(() => setFavoriteMessage(""), 3000);
  };

  return (
    <div className={styles.buttonsContainer}>
      <button
        onClick={()=>{
          onClick();
          setShowButtonFavorites(false);
        }}
        className={styles.buttonStyle}
        disabled={disabled}
      >
        🎴 Lectura
      </button>
      <button onClick={handleAddToFavorites} className={styles.buttonStyle} disabled={selectedCards===null || showButtonFavorites}>
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
