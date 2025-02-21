import React, {useEffect, useState} from 'react'
import { useForm } from "react-hook-form";
import styles from './userForm.module.css';
import { useNavigate } from "react-router";

function UserForm() {

    const {
        register, handleSubmit, formState:{ errors },
    } = useForm({mode: 'onChange'});

    const navigate = useNavigate();

    const storedUsername = JSON.parse(localStorage.getItem('username'));

    const [username, setUsername] = useState(storedUsername);
    
    useEffect(() => {
        localStorage.setItem('username', JSON.stringify(username));
    }, [username])
        
        const onSubmit = (data) => {
            console.log(data); 
            setUsername(data.Username);
            navigate('/instructions');
        };

    return (
        <>
        <form className={styles.formCard}>
            <input className={styles.inputForm} htmlFor="name" type="text" 
                placeholder="Ingresa tu nombre" {...register("Username", {
                    required: {
                        value: true,
                        message: '❌Mínimo de 1 caracter!❌'
                    },
                    maxLength: {
                        value: 20,
                        message: '❌Máximo de 20 caracteres!❌'
                    },
                    pattern: {
                        value:/[A-Za-z]/,
                        message: '❌Solo se aceptan letras!❌',
                    }})} />
            {errors.Username && <span className={styles.spanError}>{errors.Username.message}</span>}
            <input className={styles.submitButton} type="submit" value={'Registrar'}
            alt="Botón para Registrar" onClick={handleSubmit((onSubmit))}/>
        </form>
        </>
    )
}

export default UserForm