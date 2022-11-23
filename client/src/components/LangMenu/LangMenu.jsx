import React, {useState, useEffect } from 'react';
import { useOutside } from '../../hooks'
import {useTranslation} from "react-i18next"
import Icon from './Icon'
import styles from './LangMenu.module.scss'
const LangMenu = ({ parentStyles }) => {
    const { t, i18n } = useTranslation()
    const [langState, setLangState] = useState(i18n)
    const [activityState, setActivityState] = useOutside(['[data-filter="lang"]'])

    useEffect(() => setLangState(i18n.language), [i18n.language])
    
    return (
        <div data-filter="lang" className={`${styles.container} ${activityState ? styles.active : ''}`}>
            <button  onClick={() => setActivityState(!activityState)} className={styles.btn}>
                <Icon/>
            </button>
            <ul className={styles.menu}>
                <button disabled={langState === 'ru'} onClick={() => i18n.changeLanguage('ru')}className={`${styles.menu__btn} ${langState === 'ru' ? styles.active : ''}`}>ru</button>
                <button disabled={langState === 'en'} onClick={() => i18n.changeLanguage('en')}className={`${styles.menu__btn} ${langState === 'en' ? styles.active : ''}`}>en</button>
                <button disabled={langState === 'de'} onClick={() => i18n.changeLanguage('de')}className={`${styles.menu__btn} ${langState === 'de' ? styles.active : ''}`}>de</button>
            </ul>
        </div>
    );
}

export default LangMenu;
