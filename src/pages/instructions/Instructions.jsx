import React, { Component } from 'react';
import InstructionsBox from '../../components/instructionsBox/InstructionsBox';
import styles from './Instructions.module.css'
import ButtonBig from '../../components/buttons/mainButton/bigButton';
//import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { useMediaQuery } from 'react-responsive';
import Footer from '../../components/footer/Footer';


function Instructions() {
        const isDesktop = useMediaQuery({ minWidth: 768 });
    return (
        <>
     {/*   <Header/>*/} 
        {isDesktop && <Navbar />} 
        <main className={styles.instructions}>
            <InstructionsBox />
            <ButtonBig 
            text="Ir a LECTURAS"
            link="/"
            />
        </main>
        <Footer  />
        </>
    )
}

export default Instructions;