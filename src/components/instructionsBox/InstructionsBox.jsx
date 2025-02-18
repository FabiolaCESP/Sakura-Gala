import React, { Component } from 'react';
import styles from './InstructionsBox.module.css'


function InstructionsBox() {
    return (
        <div className={styles.instructionsBox}>
            <h2>INSTRUCCIONES</h2>
            <p>
                Haz click en LECTURA para que salga una tirada de tarot: la tirada te va a leer tu PASADO, PRESENTE y FUTURO.
            </p>
            <p>
                Cada tirada será de 3 cartas a la vez. Si no te gustan las tiradas, presiona REINICIAR para volver a hacer una lectura completa.
            </p>
            <p>
                Puedes hacer click en FAVORITO para guardar la tirada. En en panel de navegación, en FAVORITOS, podrás también remover alguna tirada guardada o todas, y actualizar tu nombre de usuario.
            </p>
            <p>
                En cualquier momento, puedes presionar SALIR para volver a la pantalla principal, donde podrás entrar un nuevo nombre y volver a hacer lecturas.
            </p>
        </div>
    );
}

export default InstructionsBox;