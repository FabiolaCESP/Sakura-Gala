import React, { useState } from 'react';
import styles from './ButtonGroup.module.css';
import cardiconReading from '../../../assets/icons/ReadingIcon.svg';
import archiveIcon from '../../../assets/icons/FavoriteIcon.svg';
import restartIcon from '../../../assets/icons/DeleteIcon.svg';

const ButtonGroup = ({ onClick, onAdd, onClear }) => {
  const [hasRead, setHasRead] = useState(false);

  const handleAddToFavorites = () => {
    onAdd();

    const dialog = document.createElement('div');
    dialog.className = styles.favoriteMessage;
    dialog.textContent = 'Tu lectura ha sido añadida a favoritos.';
    const buttonsContainer = document.querySelector(`.${styles.buttonsContainer}`);
    buttonsContainer.parentNode.insertBefore(dialog, buttonsContainer.nextSibling);
    
    setTimeout(() => {
      dialog.remove();
    }, 3000);
  };

  const handleReadingClick = () => {
    onClick();
    setHasRead(true);
  };

  return (
    <div className={styles.buttonsContainer}>
      <button
        onClick={handleReadingClick}
        className={styles.buttonStyle}
      >
        <img src={cardiconReading} alt="Iniciar lectura tarot" className={styles.icon} />
        <span>Lectura</span>
      </button>

      <button
        onClick={handleAddToFavorites}
        className={styles.buttonStyle}
        disabled={!hasRead}
      >
        <img src={archiveIcon} alt="Añadir a Favoritos" className={styles.icon} />
        <span>Favoritos</span>
      </button>

      <button
        className={styles.buttonStyle}
        onClick={() => window.location.reload()}
      >
        <img src={restartIcon} alt="Reiniciar lectura" className={styles.icon} />
        <span>Reiniciar</span>
      </button>
    </div>
  );
};

export default ButtonGroup;