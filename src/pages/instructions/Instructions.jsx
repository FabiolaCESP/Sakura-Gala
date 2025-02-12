import React, { Component } from 'react';
import InstructionsBox from '../../components/instructionsBox/InstructionsBox';
import styles from './Instructions.module.css'
import ButtonBig from '../../components/buttons/bigButton2/bigButton';
import Header from '../../components/header/Header';


function Instructions() {
    return (
        <>
        <Header/>
        <div className={styles.induction}>
            <InstructionsBox />
            <ButtonBig 
            text="Ir a LECTURAS"
            link="/"
            />
        </div>
        </>
    )
}

export default Instructions;