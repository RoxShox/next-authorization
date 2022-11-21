import React, { useEffect, useState } from 'react';
import styles from './AuthForm.module.scss'

const AuthForm = () => {
    const [state, setState] = useState({
        mail: '',
        password: ''
    })
    function handleChange(e) {
        const target = e.target
        const newState = { ...state }
        newState[target.name] = target.value
        setState(newState)        
    }
    function formSubmit(e) {
        e.preventDefault()
        alert("в процессе")
    }

    return (
        <div className={styles.formContainer}>
            <form id="auth" className={styles.form} onSubmit={formSubmit}>
                <h1 className={styles.form__title}>authorization</h1>
                <input required type="mail"  placeholder='Введите email' name='mail' className={styles.form__input} onChange={handleChange}/>
                <input required type="password"  placeholder='Введите пароль' name='password' className={styles.form__input} onChange={handleChange}/>
                <input type="submit" value='Отправить' className={`${styles.form__input} ${styles.form__input_submit}`} />
            </form>
        </div>
    );
}

export default AuthForm;
