import React, { Component } from 'react';
import InstructionsBox from '../../components/instructionsBox/InstructionsBox';
import styles from './Instructions.module.css'
import ButtonBig from '../../components/buttons/mainButton/bigButton';
import Header from '../../components/header/Header';
import cardsthree from '../../assets/images/cards3.svg'


function Instructions() {
        const isDesktop = useMediaQuery({ minWidth: 768 });
    return (
        <>
     {/*   <Header/>*/} 
        {isDesktop && <Navbar />} 
        <main className={styles.instructions}>
            <InstructionsBox />
        <div className={styles.cardsButton}>
          <img src={cardsthree} alt="Tarot Cards" className={styles.tarotImage} />
          <ButtonBig 
            text="Ir a LECTURAS"
            link="/"
            />
        </div>
           
        </main>
        <Footer  />
        </>
    )
}

export default Instructions;