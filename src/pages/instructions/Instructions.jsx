import React, { Component } from 'react';
import InstructionsBox from '../../components/instructionsBox/InstructionsBox';
import styles from './Instructions.module.css'
import ButtonBig from '../../components/buttons/bigButton2/bigButton';

function Instructions() {
    return (
        <>
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