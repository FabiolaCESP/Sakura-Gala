import React, { useEffect, useState } from 'react';
import styles from './NameAndDate.module.css'
import UserFormEdit from '../form/userFormEdit';


function NameAndDate({ savedDate, savedName }) {
    const [nameUser, setNameUser] = useState(() => {
        console.log(savedName)
        if (savedName === undefined) {
            const value = localStorage.getItem('username')
            if (value !== null && value !== "undefined") {
                return (JSON.parse(localStorage.getItem('username')))
            }
            return ''
        } else {
            return savedName;
        }

    });
    const [open, setopen] = useState(false);

    const [currentDate, setCurrentDate] = useState(() => {

        if (savedDate === undefined) {
            const today = new Date();
            return today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' });
        } else {
            return savedDate;
        }

    });



    const handleEditName = () => {
        setopen(!open)
    }

    return (
        <div className={styles.userDetail}>
            <div className={styles.leftSection}>
                {!open &&  <><span>Nombre:{nameUser}</span>{savedName === undefined && <button onClick={handleEditName}>✏️</button>} </>}
                {open && <UserFormEdit onFinish={setopen} updateUsername={setNameUser} />}

            </div>

            <div className={styles.rightSection}>
                <span>Fecha: {currentDate}</span>
            </div>
        </div>
    );
}

export default NameAndDate;