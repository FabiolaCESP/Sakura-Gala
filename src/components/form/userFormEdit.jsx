import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import styles from './userForm.module.css';

function UserFormEdit({  onFinish,updateUsername }) {
    const storedUsername = JSON.parse(localStorage.getItem('username'));

    const [username, setUsername] = useState(storedUsername);

    const {
        register, handleSubmit, formState: { errors },
    } = useForm({ mode: 'onChange' ,
        defaultValues: { Username: storedUsername || '' } });

  

    useEffect(() => {
        localStorage.setItem('username', JSON.stringify(username));
    }, [username])

    const onSubmit = (data) => {
        console.log(data);
        setUsername(data.Username);
        localStorage.setItem('username', JSON.stringify(data.Username));
        updateUsername(data.Username);
        onFinish(false)
    };

    return (
        <>
            <form className={styles.formCard}>
                <input className={styles.inputForm} htmlFor="name" type="text"
                    placeholder="Entra tu nombre" {...register("Username", {
                        required: {
                            value: true,
                            message: '❌Mínimo de 1 caracter!❌'
                        },
                        maxLength: {
                            value: 20,
                            message: '❌Máximo de 20 caracteres!❌'
                        },
                        pattern: {
                            value: /[A-Za-z]/,
                            message: '❌Solo se aceptan letras!❌',
                        }
                    })} />
                {errors.Username && <span className={styles.spanError}>{errors.Username.message}</span>}
            </form>
                <button disabled={errors.Username} onClick={handleSubmit((onSubmit))}>💾</button>
        </>
    )
}

export default UserFormEdit