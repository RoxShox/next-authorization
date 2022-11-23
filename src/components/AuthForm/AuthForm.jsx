import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'
import i18n from '../../helpers/i18next'
import Link from 'next/link';
import styles from './AuthForm.module.scss'

const AuthForm = ({ type }) => {
    const initState = { name: '', email: '', pass: '', confPass: '', checkConfPass: true, checkSubmit: false}
    const [state, setState] = useState(initState)
    const checkSubmitDepends = type === 'login' ? [state.pass, state.email] : [state.checkConfPass, state.email, state.name]
    const { t, i18n } = useTranslation()

    useEffect(() => {
        if(type === 'login') return
        if((state.email.length === 0 && state.pass.length === 0)) return
        checkConfPass()
    }, [state.pass, state.confPass])    

    useEffect(() => {
        checkSubmit()
    }, checkSubmitDepends)
   

    function checkConfPass() {
        const newState = { ...state }
        newState.checkConfPass = state.pass === state.confPass && state.pass.length >= 5
        if(!newState.checkConfPass) newState.checkSubmit = false
        setState(newState)
    }

    function checkSubmit() {
        const newState = { ...state }
        if (type === 'login') {
            newState.checkSubmit = false
            if (!state.email || !state.pass) return setState(newState)
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
        if (!state.checkSubmit && type !== 'login') return
        i18n.changeLanguage('en')
    }
    
    return (
        <div className={styles.formContainer}>
            <form id="auth" className={styles.form} onSubmit={formSubmit}>
                {type === 'login' ? (
                    <>
                        <h1 className={styles.form__title}>{t("form.login")}</h1>
                        <input required type="email" placeholder={t("form.inputs.email")} name='email' className={styles.form__input} onChange={handleChange} />
                        <div className={styles.passContainer}>
                            <input required type="password"  placeholder={t("form.inputs.pass")} name='pass' className={styles.form__input} onChange={handleChange}/>
                            <span className={styles.form__helps} onClick={() => alert('Aхахах, сожалеем :(')}>{t("form.inputs.forgotPass")}</span>
                        </div>
                        <div className={styles.btnContainer}>
                            <input type="submit" value={t("form.inputs.submit")} className={`${styles.form__input} ${styles.form__input_submit} ${state.checkSubmit ? styles.active : ''}`} />
                        </div>
                        <Link href='/register' className={`${styles.form__helps } ${styles.form__helps_link}`}>{t("form.inputs.dontHaveAccount")}</Link>          
                    </>
                ) : (
                        <>
                            <h1 className={styles.form__title}>{t("form.register")}</h1>
                            <input required type="text"  placeholder={t("form.inputs.name")} name='name' className={styles.form__input} onChange={handleChange}/>
                            <input required type="email"  placeholder={t("form.inputs.email")} name='email' className={styles.form__input} onChange={handleChange}/>
                            <div className={styles.passContainer}>
                                <input minLength='5' required type="password" placeholder={t("form.inputs.pass")} name='pass' className={styles.form__input} onChange={handleChange} />
                                <span className={`${styles.form__helps} ${styles.form__helps_pass} ${state.pass ? '' : styles.active}`}>{t("form.inputs.passHelper")}</span>    
                            </div>
                            <div className={`${styles.passContainer} ${!state.checkConfPass ? styles.danger : ''}`}>
                                <input required type="password" disabled={state.pass.length < 5 ? true : false} placeholder={t("form.inputs.confPass")} name='confPass' className={styles.form__input} onChange={handleChange} />
                                <span className={`${styles.form__helps} ${styles.form__helps_confPass}`}>{t("form.inputs.confPassHelper")}</span>    
                            </div>
                                
                            <div className={styles.btnContainer}>
                                <input type="submit" value={t("form.inputs.submit")} className={`${styles.form__input} ${styles.form__input_submit} ${state.checkSubmit ? styles.active : ''} `} />
                                <Link href='/login' className={styles.form__helps}>{t("form.inputs.haveAccount")}</Link>          
                            </div>
                        </>
                )}
            </form>
        </div>
    )
}

export default AuthForm;
