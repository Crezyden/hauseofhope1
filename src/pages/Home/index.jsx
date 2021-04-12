
import { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { useTranslation } from 'react-i18next';
import styles from './home.module.css';
const Home = () => {
    let lang = window.location.pathname.split('/')[1];
    lang = ['lv', 'en'].includes(lang) ? lang : 'lv';
    const { t, i18n } = useTranslation();
    useEffect(() => i18n.changeLanguage(lang), [i18n, lang]);
    return (
        <>
            <section className="flex block">
                <Carousel itemsToShow={1} showArrows={false} >
                    <div className={styles['carousel-img']} style={{background: 'url(https://houseoflv.herokuapp.com/static/img/slider/1.jpg) center/contain no-repeat'}}></div>
                    <div className={styles['carousel-img']} style={{background: 'url(https://houseoflv.herokuapp.com/static/img/slider/1.jpg) center/contain no-repeat'}}></div>
                    <div className={styles['carousel-img']} style={{background: 'url(https://houseoflv.herokuapp.com/static/img/slider/1.jpg) center/contain no-repeat'}}></div>
                    <div className={styles['carousel-img']} style={{background: 'url(https://houseoflv.herokuapp.com/static/img/slider/1.jpg) center/contain no-repeat'}}></div>
                </Carousel>
            </section>
            <div className={styles['home-content']}>
                <h1 className="center">House of hope</h1>
                <section className="flex block textcontent-left">
                    <p className={styles['section-p']}>{t('home.about.description')}</p>
                    <img src="https://houseoflv.herokuapp.com/static/img/fotopagehome1.jpg" alt="" />
                </section>
                <section className={styles.video}>
                    <iframe height="600" src="https://www.youtube.com/embed/kVJuDAJKzbs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </section>
                <h1 className="center">{t('home.our-needs.title')}</h1>
                <section className={`flex block ${styles.needs}`}>
                    <img src="https://houseoflv.herokuapp.com/static/img/houseofhopeneeds.png" alt="" />
                    <div className={styles.donate}>
                        <p>
                            REG.NR. 40008180946 <br />
                        ADDRESS: RĪGAS 67, LIEPĀJA,<br />
                        LV3401, LATVIA<br />
                            <br />
                        SEB BANK ACCOUNT:<br />
                        LV26UNLA0050017389379<br />
                        SWIFT CODE: UNLALV2X<br />
                        ADDRESS OF BANK:<br />
                        BAZNĪCAS STREET 4/6,<br />
                        LIEPĀJA, LV-3401, LATVIA<br />
                        </p>
                        <p>
                            <button className={styles['donate-btn']}>Donate</button>
                        </p>
                        <p><img src="https://houseoflv.herokuapp.com/static/img/pay.png" alt="" /></p>

                    </div>
                </section>
                <h1 className="center">{t('home.media.title')}</h1>
                <section className={`flex ${styles.media}`}>
                    <ul>
                        <li>
                            <h2>{t('home.media.cards.title')}</h2>
                            <img src="/image/media.png" alt="" />
                            <p>{t('home.media.cards.description')}</p>
                            <p>
                                <a className={styles['read-more']} href="no">{t('home.media.cards.href')}</a>
                            </p>
                        </li>
                        <li>
                            <h2>{t('home.media.cards.title')}</h2>
                            <img src="/image/media.png" alt="" />
                            <p>{t('home.media.cards.description')}</p>
                            <p>
                                <a className={styles['read-more']} href="no">{t('home.media.cards.href')}</a>
                            </p>
                        </li>
                        <li>
                            <h2>{t('home.media.cards.title')}</h2>
                            <img src="/image/media.png" alt="" />
                            <p>{t('home.media.cards.description')}</p>
                            <p>
                                <a className={styles['read-more']} href="no">{t('home.media.cards.href')}</a>
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}

export default Home;