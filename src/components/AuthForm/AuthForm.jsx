import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './AuthForm.module.scss'

const AuthForm = ({ type }) => {
    const initState = { name: '', email: '', pass: '', confPass: '', checkConfPass: 'true', checkSubmit: false}
    const [state, setState] = useState(initState)

    useEffect(() => {
        if((state.email.length === 0 && state.pass.length === 0) || type === 'login') return
        checkConfPass()
    }, [state.pass, state.confPass])    

    useEffect(() => {
        checkSubmit()
    }, [state.checkConfPass, state.email, state.name, state.pass])

   

    function checkConfPass() {
        const newState = {...state}    
        newState.checkConfPass = state.pass === state.confPass && state.pass.length >= 5
        if(!newState.checkConfPass) newState.checkSubmit = false
        setState(newState)
    }
    function checkSubmit() {
        const newState = { ...state }
        if (type === 'login') {
            if (!state.email || !state.pass) return
            newState.checkSubmit = true
            return setState(newState)
        }
        if (!state.email || !(state.checkConfPass && state.pass) || !state.name) {
            newState.checkSubmit = false
            return setState(newState)
        }
        newState.checkSubmit = true
        setState(newState)
    }
    function handleChange(e) {
        const newState = { ...state }
        const target = e.target
        newState[target.name] = target.value
        return setState(newState)        
    }
    
    function formSubmit(e) {
        e.preventDefault()
        if(!state.checkSubmit && type !== 'login') return
        alert("в процессе")
    }
    
    return (
        <div className={styles.formContainer}>
            <form id="auth" className={styles.form} onSubmit={formSubmit}>
                {type === 'login' ? (
                    <>
                        <h1 className={styles.form__title}>Login</h1>
                        <input required type="email" placeholder='Введите email' name='email' className={styles.form__input} onChange={handleChange} />
                        <div className={styles.passContainer}>
                            <input required type="password"  placeholder='Введите пароль' name='pass' className={styles.form__input} onChange={handleChange}/>
                            <span className={styles.form__helps} onClick={() => alert('Aхахах, сожалеем :(')}>Забыли пароль?</span>
                        </div>
                        <div className={styles.btnContainer}>
                            <input type="submit" value='Отправить' className={`${styles.form__input} ${styles.form__input_submit} ${state.checkSubmit ? styles.active : ''}`} />
                        </div>
                        <Link href='/register' className={`${styles.form__helps } ${styles.form__helps_link}`}>Хотите создатть аккаунт?</Link>          
                    </>
                ) : (
                    <>
                        <h1 className={styles.form__title}>Register</h1>
                        <input required type="text"  placeholder='Введите полное имя' name='name' className={styles.form__input} onChange={handleChange}/>
                        <input required type="email"  placeholder='Введите email' name='email' className={styles.form__input} onChange={handleChange}/>
                        <div className={styles.passContainer}>
                            <input minLength='5' required type="password" placeholder='Введите пароль' name='pass' className={styles.form__input} onChange={handleChange} />
                            <span className={`${styles.form__helps} ${styles.form__helps_pass} ${state.pass ? '' : styles.active}`}>пароль не менее 5 символов</span>    
                        </div>
                        <div className={`${styles.passContainer} ${!state.checkConfPass ? styles.danger : ''}`}>
                            <input required type="password" disabled={state.pass.length < 5 ? true : false} placeholder='Подтвердите пароль' name='confPass' className={styles.form__input} onChange={handleChange} />
                            <span className={`${styles.form__helps} ${styles.form__helps_confPass}`}>Пароли не совпадают</span>    
                        </div>
                            
                        <div className={styles.btnContainer}>
                            <input type="submit" value='Отправить' className={`${styles.form__input} ${styles.form__input_submit} ${state.checkSubmit ? styles.active : ''} `} />
                            <Link href='/login' className={styles.form__helps}>Уже есть аккаунт?</Link>          
                        </div>
                    </>
                )}
            </form>
        </div>
    )
}

export default AuthForm;
