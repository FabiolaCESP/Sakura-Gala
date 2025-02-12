import React, { Component } from 'react';
import InstructionsBox from '../../components/instructionsBox/InstructionsBox';
import styles from './Instructions.module.css'
import ButtonBig from '../../components/buttons/mainButton/bigButton';
import Header from '../../components/header/Header';


function Instructions() {
    return (
        <>
        <Header/>
        <main className={styles.instructions}>
            <InstructionsBox />
            <ButtonBig 
            text="Ir a LECTURAS"
            link="/"
            />
        </main>
        </>
    )
}

export default Instructions;