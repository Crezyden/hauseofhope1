
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhoneAlt, faDonate } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
const Footer = () => {
    let lang = window.location.pathname.split('/')[1];
    lang = ['lv', 'en'].includes(lang) ? lang : 'lv';
    const { t, i18n } = useTranslation();
    useEffect(() => i18n.changeLanguage(lang), [i18n, lang]);
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-block logo" style={{ background: 'url(/image/logo.png) no-repeat center' }}></div>
                <div className="donation footer-block">
                    <h2>{t('footer.donation.title')}</h2>
                    <ul>
                        <li>HOUSE OF HOPE</li>
                        <li>Reg.no. 40008180946</li>
                        <li>SEB BANKA</li>
                        <li>Bank account:</li>
                        <li>LV26UNLA0050017389379,</li>
                        <li>SWIFT code: UNLALV2X</li>
                    </ul>
                </div>
                <div className="footer-block navigation">
                    <h2>{t('footer.navigation.title')}</h2>
                    <div className="nav-section">
                        <nav>
                            <p><NavLink to={`/${lang}/hope21`} exact={true}>{t('header.nav.hope21')}</NavLink></p>
                            <p><NavLink to={`/${lang}/whoweare`} exact={true}>{t('header.nav.whoweare')}</NavLink></p>
                            <p><NavLink to={`/${lang}/gallery`} exact={true}>{t('header.nav.gallery')}</NavLink></p>
                        </nav>
                        <nav>
                            <p><NavLink to={`/${lang}/activity`} exact={true}>{t('header.nav.activity')}</NavLink></p>
                            <p><NavLink to={`/${lang}/activity`} exact={true}>Social uzņēmums</NavLink></p>
                            <p><NavLink to={`/${lang}/contacts`} exact={true}>{t('header.nav.contacts')}</NavLink></p>
                        </nav>
                    </div>
                </div>
                <div className="footer-block contacts">
                    <h2>{t('footer.contact-us.title')}</h2>
                    <ul>
                        <li>
                            <p><a href="mailto:houseofhope.lv@gmail.com"><FontAwesomeIcon icon={faEnvelope} fixedWidth pull="left" size="2x" color="#FF45DA" />houseofhope.lv@gmail.com</a></p>

                        </li>
                        <li>
                            <p><a href="/no"><FontAwesomeIcon icon={faHome} fixedWidth pull="left" size="2x" color="#FF45DA" />Rīgas 67, Liepāja LV3401, LATVIA</a></p>
                        </li>
                        <li>
                            <p><a href="tel:+371 29897601"><FontAwesomeIcon icon={faPhoneAlt} fixedWidth pull="left" size="2x" color="#FF45DA" />+371 29897601</a></p>
                        </li>
                        <li className="social-medias">
                            <a className="inst" href="no"><FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth color="#FF45DA"/></a>
                            <a className="fb" href="no"><FontAwesomeIcon icon={faFacebookF} size="2x" fixedWidth color="#FF45DA"/></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <span>houseofhope @ 2021</span>
            </div>
        </footer>
    );
}

export default Footer;