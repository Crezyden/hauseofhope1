
import { NavLink, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import './header.css';
const Header = () => {
    let lang = window.location.pathname.split('/')[1],
        languages = ['lv', 'en'];
    lang = languages.includes(lang) ? lang : 'lv';
    const [path, setPath] = useState(window.location.pathname.substr(3)),
        { t, i18n } = useTranslation(),
        history = useHistory();
    useEffect(() => {
        // eslint-disable-next-line
        i18n.changeLanguage(lang);
        return history.listen(({ pathname }) => {
            setPath(pathname.substr(3));
        })
    }, [history, i18n, lang]);
    return (
        <header>
            <div className="header-roof"></div>
            <div className="main-nav">
                <nav>
                    <NavLink to={`/${lang}`}>{t('header.nav.home')}</NavLink>
                    <NavLink to={`/${lang}/whoweare`}>{t('header.nav.whoweare')}</NavLink>
                    <NavLink to={`/${lang}/hope21`}>{t('header.nav.hope21')}</NavLink>
                    <NavLink to={`/${lang}/gallery`}>{t('header.nav.gallery')}</NavLink>
                    <NavLink to={`/${lang}/activity`}>{t('header.nav.activity')}</NavLink>
                    <NavLink to={`/${lang}/contacts`}>{t('header.nav.contacts')}</NavLink>
                </nav>
                <div className={'lang-choice ' + lang}>
                    <i className="flag" style={{ background: `url(/image/${lang === 'lv' ? 'latvia' : 'united-kingdom'}.svg) no-repeat` }}></i>
                    <div className="choice-popup">{(lang === 'lv') ? 'LV' : 'EN'}</div>
                    <div className="lang-choice-popup" hidden>
                        <NavLink to={'/lv' + path}><div onClick={() => i18n.changeLanguage('lv')}>LV</div></NavLink>
                        <NavLink to={'/en' + path}><div onClick={() => i18n.changeLanguage('en')}>EN</div></NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;