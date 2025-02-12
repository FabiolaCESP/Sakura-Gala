import React, { Component } from 'react';
import InstructionsBox from '../../components/instructionsBox/InstructionsBox';
import TarotButton from '../../components/tarotButton/TarotButton';
import styles from './Instructions.module.css'

function Instructions() {
    return (
        <div className={styles.induction}>
            <InstructionsBox />
            <TarotButton />
        </div>
    );
}

export default Instructions;